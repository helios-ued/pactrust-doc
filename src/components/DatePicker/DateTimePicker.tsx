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
import { DateTimePickerPanel } from "./DateTimePickerPanel";
import "./date-picker.css";

export type DateTimePickerProps = {
  value?: Date | null;
  defaultValue?: Date | null;
  onChange?: (value: Date | null) => void;
  placeholder?: string;
  size?: InputSize;
  state?: InputState;
  disabled?: boolean;
  range?: boolean;
  input?: boolean;
  sidebar?: boolean;
  showFooter?: boolean;
  className?: string;
};

const triggerSizeClasses: Record<InputSize, string> = {
  Default: "h-8 gap-pt-8 px-pt-8 py-pt-4 text-el-base leading-el-base",
  Large: "h-10 gap-pt-8 px-pt-12 py-pt-8 text-el-base leading-el-base",
  Small: "h-6 gap-pt-8 px-pt-8 py-pt-4 text-xs leading-el-base",
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function formatDateTime(d: Date | null | undefined) {
  if (!d) return "";
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

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

export function DateTimePicker({
  value: controlled,
  defaultValue = null,
  onChange,
  placeholder = "Pick a date",
  size = "Default",
  state = "Default",
  disabled = false,
  range = false,
  input: inputProp,
  sidebar = false,
  showFooter = true,
  className,
}: DateTimePickerProps) {
  const [open, setOpen] = useState(false);
  const [internal, setInternal] = useState<Date | null>(defaultValue);
  const value = controlled !== undefined ? controlled : internal;
  const [view, setView] = useState(() => value ?? new Date());
  const [draft, setDraft] = useState<Date | null>(value);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelPos, setPanelPos] = useState({ top: 0, left: 0 });

  const isDisabled = disabled || state === "Disabled";
  const hasInput = inputProp ?? Boolean(value);

  const updatePanelPos = useCallback(() => {
    const el = triggerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPanelPos({ top: pickerPopperTop(rect), left: rect.left });
  }, []);

  useEffect(() => {
    if (open) {
      setDraft(value);
      setView(value ?? new Date());
    }
  }, [open, value]);

  useLayoutEffect(() => {
    if (!open) return;
    updatePanelPos();
    window.addEventListener("resize", updatePanelPos);
    window.addEventListener("scroll", updatePanelPos, true);
    return () => {
      window.removeEventListener("resize", updatePanelPos);
      window.removeEventListener("scroll", updatePanelPos, true);
    };
  }, [open, updatePanelPos, sidebar]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      const t = e.target as Node;
      if (rootRef.current?.contains(t)) return;
      if (panelRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const commit = (next: Date | null) => {
    if (controlled === undefined) setInternal(next);
    onChange?.(next);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  };

  const iconSize = size === "Small" ? 14 : 16;

  return (
    <div
      ref={rootRef}
      className={cn("relative w-full max-w-[400px]", className)}
      onKeyDown={onKeyDown}
    >
      <button
        ref={triggerRef}
        type="button"
        disabled={isDisabled}
        aria-expanded={open}
        aria-haspopup="dialog"
        className={cn(
          "flex w-full items-center rounded-el-base border bg-el-fill-blank text-left",
          triggerSizeClasses[size],
          triggerStateClasses(state, open),
        )}
        onClick={() => !isDisabled && setOpen((o) => !o)}
      >
        <EpIconByName name="Calendar" size={iconSize} className="shrink-0 text-el-text-placeholder" />
        <span
          className={cn(
            "min-w-0 flex-1 truncate",
            hasInput && value ? "text-el-text-primary" : "text-el-text-placeholder",
          )}
        >
          {range
            ? placeholder
            : hasInput && value
              ? formatDateTime(value)
              : placeholder}
        </span>
      </button>

      {open
        ? createPortal(
            <div
              ref={panelRef}
              className="pt-picker-dropdown"
              style={{ top: panelPos.top, left: panelPos.left }}
              role="dialog"
              aria-label="Date time picker panel"
            >
              <DateTimePickerPanel
                view={view}
                onViewChange={setView}
                value={draft}
                onChange={(next) => setDraft(next)}
                sidebar={sidebar}
                showFooter={showFooter}
                onNow={() => {
                  const now = new Date();
                  setDraft(now);
                  setView(now);
                  commit(now);
                  setOpen(false);
                }}
                onOk={() => {
                  commit(draft);
                  setOpen(false);
                }}
              />
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
