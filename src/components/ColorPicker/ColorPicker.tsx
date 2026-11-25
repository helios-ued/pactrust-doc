import { cn } from "@/lib/cn";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import {
  ColorPickerPanel,
  type ColorPickerPanelType,
} from "./ColorPickerPanel";
import "./color-picker.css";

export type ColorPickerSize = "Default" | "Large" | "Small";

/** Figma Colorpicker — Type=Default | Alpha | Custom */
export type ColorPickerType = "default" | "alpha" | "custom";

export type ColorPickerProps = {
  size?: ColorPickerSize;
  type?: ColorPickerType;
  value?: string | null;
  defaultValue?: string | null;
  onChange?: (color: string | null) => void;
  disabled?: boolean;
  showFooter?: boolean;
  className?: string;
};

function panelTypeFromPicker(type: ColorPickerType): ColorPickerPanelType {
  if (type === "alpha") return "alpha";
  if (type === "custom") return "predefined";
  return "default";
}

function TriggerIcon({ kind }: { kind: "arrow" | "close" }) {
  if (kind === "arrow") {
    return <EpIconByName name="ArrowDown" size={12} className="text-current" />;
  }
  return <EpIconByName name="Close" size={12} className="text-current" />;
}

export function ColorPicker({
  size = "Default",
  type = "default",
  value: controlled,
  defaultValue = "#1677ff",
  onChange,
  disabled = false,
  showFooter = true,
  className,
}: ColorPickerProps) {
  const [open, setOpen] = useState(false);
  const [internal, setInternal] = useState<string | null>(defaultValue);
  const committed = controlled !== undefined ? controlled : internal;
  const [draft, setDraft] = useState(committed ?? "#1677ff");
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });

  const hasColor = committed !== null && committed !== "";

  const updateDropdownPos = useCallback(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    setDropdownPos({ top: rect.bottom + 4, left: rect.left });
  }, []);

  useEffect(() => {
    if (open) setDraft(committed ?? "#1677ff");
  }, [open, committed]);

  useLayoutEffect(() => {
    if (!open) return;
    updateDropdownPos();
    window.addEventListener("resize", updateDropdownPos);
    window.addEventListener("scroll", updateDropdownPos, true);
    return () => {
      window.removeEventListener("resize", updateDropdownPos);
      window.removeEventListener("scroll", updateDropdownPos, true);
    };
  }, [open, updateDropdownPos, type]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      const target = e.target as Node;
      if (rootRef.current?.contains(target)) return;
      if (dropdownRef.current?.contains(target)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const commit = (next: string | null) => {
    if (controlled === undefined) setInternal(next);
    onChange?.(next);
  };

  const triggerState = hasColor ? "choose" : "default";

  return (
    <div ref={rootRef} className={cn("pt-color-picker", className)}>
      <button
        ref={triggerRef}
        type="button"
        disabled={disabled}
        aria-expanded={open}
        aria-haspopup="dialog"
        data-size={size}
        className="pt-color-picker-trigger"
        onClick={() => !disabled && setOpen((o) => !o)}
      >
        <span
          className={cn(
            "pt-color-picker-trigger__inner",
            triggerState === "default" && "is-empty",
          )}
          style={
            hasColor && triggerState === "choose"
              ? { backgroundColor: committed ?? undefined }
              : undefined
          }
        >
          <span className="pt-color-picker-trigger__icon">
            <TriggerIcon kind={triggerState === "choose" ? "arrow" : "close"} />
          </span>
        </span>
      </button>

      {open
        ? createPortal(
            <div
              ref={dropdownRef}
              className="pt-color-picker-dropdown"
              role="dialog"
              aria-label="颜色选择"
              style={{ top: dropdownPos.top, left: dropdownPos.left }}
            >
              <div className="pt-color-picker-dropdown__body">
                <ColorPickerPanel
                  type={panelTypeFromPicker(type)}
                  border
                  value={draft}
                  onChange={setDraft}
                  disabled={disabled}
                  className={showFooter ? "has-picker-footer" : undefined}
                />
                {showFooter ? (
                  <div className="pt-color-picker-dropdown__actions">
                    <button
                      type="button"
                      className="pt-color-picker-clear"
                      onClick={() => {
                        commit(null);
                        setOpen(false);
                      }}
                    >
                      Clear
                    </button>
                    <button
                      type="button"
                      className="pt-color-picker-ok"
                      onClick={() => {
                        commit(draft);
                        setOpen(false);
                      }}
                    >
                      OK
                    </button>
                  </div>
                ) : null}
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
