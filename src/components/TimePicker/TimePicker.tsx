import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import { pickerPopperTop } from "@/lib/pickerPopper";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { createPortal } from "react-dom";
import type { InputSize, InputState } from "../Input/Input";
import {
  TimePickerPanel,
  formatTimeParts,
  parseTimeString,
  type TimeParts,
} from "./TimePickerPanel";
import "../picker-popper.css";
import "./time-picker.css";

export type TimePickerProps = {
  value?: string;
  defaultValue?: string;
  onChange?: (time: string) => void;
  rangeValue?: [string, string];
  onRangeChange?: (value: [string, string]) => void;
  placeholder?: string;
  startPlaceholder?: string;
  endPlaceholder?: string;
  size?: InputSize;
  state?: InputState;
  disabled?: boolean;
  range?: boolean;
  /** Figma Input — 有值时主色文案 */
  input?: boolean;
  /** Figma Arrow ON/OFF */
  arrow?: boolean;
  showSeconds?: boolean;
  /** Showcase：Focus 时保持展开 */
  forceOpen?: boolean;
  className?: string;
};

const triggerSizeClasses: Record<InputSize, string> = {
  Default: "h-8 gap-pt-8 px-pt-12 py-pt-4 text-el-base leading-el-base",
  Large: "h-10 gap-pt-8 px-pt-12 py-pt-8 text-el-base leading-el-base",
  Small: "h-6 gap-pt-8 px-pt-8 py-pt-4 text-xs leading-el-base",
};

function triggerStateClasses(state: InputState, open: boolean): string {
  if (state === "Disabled") {
    return "cursor-not-allowed border-el-border-light bg-el-border-light/30 text-el-text-disabled";
  }
  if (state === "Error") return "border-el-danger";
  if (state === "Focus" || open) {
    return "border-el-primary shadow-[var(--el-box-shadow-lighter)]";
  }
  if (state === "Hover") return "border-el-text-placeholder";
  return "border-el-border hover:border-el-text-placeholder";
}

export function TimePicker({
  value: controlled,
  defaultValue = "",
  onChange,
  rangeValue: controlledRange,
  onRangeChange,
  placeholder = "Arbitrary time",
  startPlaceholder = "Start time",
  endPlaceholder = "End time",
  size = "Default",
  state = "Default",
  disabled = false,
  range = false,
  input: inputProp,
  arrow = false,
  showSeconds = true,
  forceOpen = false,
  className,
}: TimePickerProps) {
  const [open, setOpen] = useState(false);
  const [internal, setInternal] = useState(defaultValue);
  const [internalRange, setInternalRange] = useState<[string, string]>(["09:00:00", "18:00:00"]);
  const value = controlled ?? internal;
  const rangeValue = controlledRange ?? internalRange;

  const [draft, setDraft] = useState<TimeParts>(() => parseTimeString(value || "12:00:00"));
  const [draftEnd, setDraftEnd] = useState<TimeParts>(() =>
    parseTimeString(rangeValue[1] || "18:00:00"),
  );

  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelPos, setPanelPos] = useState({ top: 0, left: 0 });

  const isDisabled = disabled || state === "Disabled";
  const isOpen = open || forceOpen;
  const hasInput =
    inputProp ??
    (range
      ? Boolean(rangeValue[0] || rangeValue[1])
      : Boolean(value && value.length > 0));

  const updatePanelPos = useCallback(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    const panelWidth = panelRef.current?.offsetWidth ?? (range ? 404 : 180);
    const left = rect.left + rect.width / 2 - panelWidth / 2;
    setPanelPos({ top: pickerPopperTop(rect), left });
  }, [range]);

  useEffect(() => {
    if (isOpen) {
      setDraft(parseTimeString(range ? rangeValue[0] || "09:00:00" : value || "12:00:00"));
      setDraftEnd(parseTimeString(rangeValue[1] || "18:00:00"));
    }
  }, [isOpen, value, rangeValue, range]);

  useLayoutEffect(() => {
    if (!isOpen) return;
    updatePanelPos();
    const raf = requestAnimationFrame(() => updatePanelPos());
    window.addEventListener("resize", updatePanelPos);
    window.addEventListener("scroll", updatePanelPos, true);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", updatePanelPos);
      window.removeEventListener("scroll", updatePanelPos, true);
    };
  }, [isOpen, updatePanelPos, range, arrow]);

  useEffect(() => {
    if (!isOpen || forceOpen) return;
    const onDoc = (e: MouseEvent) => {
      const t = e.target as Node;
      if (rootRef.current?.contains(t)) return;
      if (panelRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [isOpen, forceOpen]);

  const commitSingle = (parts: TimeParts) => {
    const next = formatTimeParts(parts, showSeconds);
    if (controlled === undefined) setInternal(next);
    onChange?.(next);
  };

  const commitRange = (start: TimeParts, end: TimeParts) => {
    const pair: [string, string] = [
      formatTimeParts(start, showSeconds),
      formatTimeParts(end, showSeconds),
    ];
    if (controlledRange === undefined) setInternalRange(pair);
    onRangeChange?.(pair);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && !forceOpen) setOpen(false);
  };

  const iconSize = size === "Small" ? 14 : 14;

  const displaySingle = value ? formatTimeParts(parseTimeString(value), showSeconds) : "";

  const renderTriggerText = () => {
    if (range) {
      const start = rangeValue[0]
        ? formatTimeParts(parseTimeString(rangeValue[0]), showSeconds)
        : "";
      const end = rangeValue[1]
        ? formatTimeParts(parseTimeString(rangeValue[1]), showSeconds)
        : "";
      if (!hasInput) {
        return (
          <span className="flex min-w-0 flex-1 items-center gap-2 text-el-text-placeholder">
            <span className="truncate">{startPlaceholder}</span>
            <span className="shrink-0">-</span>
            <span className="truncate">{endPlaceholder}</span>
          </span>
        );
      }
      return (
        <span className="flex min-w-0 flex-1 items-center gap-2 text-el-text-primary">
          <span className="truncate">{start || startPlaceholder}</span>
          <span className="shrink-0 text-el-text-secondary">-</span>
          <span className="truncate">{end || endPlaceholder}</span>
        </span>
      );
    }
    return (
      <span
        className={cn(
          "min-w-0 flex-1 truncate text-left",
          hasInput && displaySingle ? "text-el-text-primary" : "text-el-text-placeholder",
        )}
      >
        {hasInput && displaySingle ? displaySingle : placeholder}
      </span>
    );
  };

  return (
    <div
      ref={rootRef}
      className={cn("relative w-full max-w-[280px]", className)}
      onKeyDown={onKeyDown}
    >
      <button
        ref={triggerRef}
        type="button"
        disabled={isDisabled}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className={cn(
          "flex w-full items-center rounded-el-base border bg-el-fill-blank text-left",
          triggerSizeClasses[size],
          triggerStateClasses(state, isOpen),
        )}
        onClick={() => !isDisabled && !forceOpen && setOpen((o) => !o)}
      >
        <EpIconByName name="Clock" size={iconSize} className="shrink-0 text-el-text-placeholder" />
        {renderTriggerText()}
      </button>

      {isOpen
        ? createPortal(
            <div
              ref={panelRef}
              className="pt-picker-dropdown"
              style={{ top: panelPos.top, left: panelPos.left }}
              role="dialog"
              aria-label="Time picker panel"
            >
              <TimePickerPanel
                value={draft}
                endValue={draftEnd}
                range={range}
                arrow={arrow}
                showSeconds={showSeconds}
                onChange={setDraft}
                onEndChange={setDraftEnd}
                onCancel={() => setOpen(false)}
                onOk={() => {
                  if (range) commitRange(draft, draftEnd);
                  else commitSingle(draft);
                  if (!forceOpen) setOpen(false);
                }}
              />
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
