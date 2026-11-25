import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import { pickerPopperTop } from "@/lib/pickerPopper";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { createPortal } from "react-dom";
import type { InputSize, InputState } from "../Input/Input";
import "../picker-popper.css";
import "./time-select.css";

export type TimeSelectProps = {
  value?: string;
  defaultValue?: string;
  onChange?: (time: string) => void;
  placeholder?: string;
  start?: string;
  end?: string;
  stepMinutes?: number;
  size?: InputSize;
  state?: InputState;
  disabled?: boolean;
  /** Figma Input — 有值时展示主色文案 */
  input?: boolean;
  forceOpen?: boolean;
  className?: string;
};

function buildOptions(start: string, end: string, step: number) {
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  const startMin = sh * 60 + sm;
  const endMin = eh * 60 + em;
  const out: string[] = [];
  for (let t = startMin; t <= endMin; t += step) {
    const h = Math.floor(t / 60);
    const m = t % 60;
    out.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
  }
  return out;
}

const iconSize: Record<InputSize, number> = {
  Default: 14,
  Large: 14,
  Small: 14,
};

function triggerStateClass(state: InputState, open: boolean, isDisabled: boolean): string {
  if (isDisabled || state === "Disabled") return "pt-time-select__trigger--disabled";
  if (state === "Error") return "pt-time-select__trigger--error";
  if (state === "Focus" || open) return "pt-time-select__trigger--focus pt-time-select__trigger--open";
  if (state === "Hover") return "pt-time-select__trigger--hover";
  return "";
}

export function TimeSelect({
  value: controlled,
  defaultValue = "",
  onChange,
  placeholder = "Select time",
  start = "08:30",
  end = "10:15",
  stepMinutes = 15,
  size = "Default",
  state = "Default",
  disabled = false,
  input: inputProp,
  forceOpen = false,
  className,
}: TimeSelectProps) {
  const [open, setOpen] = useState(false);
  const [internal, setInternal] = useState(defaultValue);
  const value = controlled !== undefined ? controlled : internal;
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelPos, setPanelPos] = useState({ top: 0, left: 0, width: 280 });

  const options = useMemo(() => buildOptions(start, end, stepMinutes), [start, end, stepMinutes]);
  const isDisabled = disabled || state === "Disabled";
  const panelOpen = open || forceOpen;
  const hasInput = inputProp ?? Boolean(value);

  const updatePanelPos = useCallback(() => {
    const el = triggerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPanelPos({
      top: pickerPopperTop(rect),
      left: rect.left,
      width: rect.width,
    });
  }, []);

  useLayoutEffect(() => {
    if (!panelOpen) return;
    updatePanelPos();
    const raf = requestAnimationFrame(() => updatePanelPos());
    window.addEventListener("resize", updatePanelPos);
    window.addEventListener("scroll", updatePanelPos, true);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", updatePanelPos);
      window.removeEventListener("scroll", updatePanelPos, true);
    };
  }, [panelOpen, updatePanelPos]);

  useEffect(() => {
    if (!panelOpen || forceOpen) return;
    const onDoc = (e: MouseEvent) => {
      const t = e.target as Node;
      if (rootRef.current?.contains(t)) return;
      if (panelRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [panelOpen, forceOpen]);

  const commit = (next: string) => {
    if (controlled === undefined) setInternal(next);
    onChange?.(next);
    if (!forceOpen) setOpen(false);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && !forceOpen) setOpen(false);
  };

  const sizeClass =
    size === "Large"
      ? "pt-time-select__trigger--large"
      : size === "Small"
        ? "pt-time-select__trigger--small"
        : "pt-time-select__trigger--default";

  const display = hasInput && value ? value : placeholder;

  return (
    <div ref={rootRef} className={cn("pt-time-select", className)} onKeyDown={onKeyDown}>
      <button
        ref={triggerRef}
        type="button"
        disabled={isDisabled}
        aria-expanded={panelOpen}
        aria-haspopup="listbox"
        className={cn(
          "pt-time-select__trigger",
          sizeClass,
          triggerStateClass(state, panelOpen, isDisabled),
        )}
        onClick={() => !isDisabled && !forceOpen && setOpen((o) => !o)}
      >
        <EpIconByName
          name="Clock"
          size={iconSize[size]}
          className="shrink-0 text-el-text-placeholder"
        />
        <span
          className={cn(
            "pt-time-select__trigger-label",
            hasInput && value ? "is-value" : "is-placeholder",
          )}
        >
          {display}
        </span>
        <EpIconByName
          name={panelOpen ? "ArrowUp" : "ArrowDown"}
          size={iconSize[size]}
          className="pt-time-select__trigger-chevron"
        />
      </button>

      {panelOpen
        ? createPortal(
            <div
              ref={panelRef}
              className="pt-picker-dropdown"
              style={{ top: panelPos.top, left: panelPos.left, width: panelPos.width }}
              role="listbox"
              aria-label="Time options"
            >
              <div className="pt-time-select__panel">
                {options.map((t) => {
                  const selected = value === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      role="option"
                      aria-selected={selected}
                      className={cn("pt-time-select__option", selected && "is-selected")}
                      onClick={() => commit(t)}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
