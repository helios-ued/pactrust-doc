import { cn } from "@/lib/cn";
import { useState } from "react";
import { Checkbox, type CheckboxSize } from "./Checkbox";
import "../Radio/radio.css";
import "./checkbox.css";

export type CheckboxGroupType = "Default" | "Border" | "Button";

export type CheckboxGroupOption = {
  label: string;
  value: string;
};

export type CheckboxGroupProps = {
  name?: string;
  type?: CheckboxGroupType;
  size?: CheckboxSize;
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
  options: CheckboxGroupOption[];
  disabled?: boolean;
  className?: string;
};

export function CheckboxGroup({
  name = "checkbox-group",
  type = "Default",
  size = "Default",
  value: controlled,
  defaultValue,
  onChange,
  options,
  disabled = false,
  className,
}: CheckboxGroupProps) {
  const isControlled = controlled !== undefined;
  const [internal, setInternal] = useState<string[]>(() => defaultValue ?? []);

  const current = isControlled ? controlled : internal;

  const toggle = (optionValue: string, nextChecked: boolean) => {
    const set = new Set(current);
    if (nextChecked) set.add(optionValue);
    else set.delete(optionValue);
    const next = [...set];
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };

  if (type === "Button") {
    return (
      <div
        className={cn("pt-radio-group pt-radio-group--button", className)}
        role="group"
      >
        {options.map((opt) => {
          const checked = current.includes(opt.value);
          return (
            <button
              key={opt.value}
              type="button"
              aria-pressed={checked}
              disabled={disabled}
              className={cn(
                "pt-radio-button",
                size === "Large" && "pt-radio-button--large",
                size === "Small" && "pt-radio-button--small",
                checked && "pt-radio-button--checked",
              )}
              onClick={() => toggle(opt.value, !checked)}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    );
  }

  const groupClass =
    type === "Border" ? "pt-checkbox-group--border" : "pt-checkbox-group--default";

  return (
    <div className={cn("pt-checkbox-group", groupClass, className)} role="group">
      {options.map((opt) => (
        <Checkbox
          key={opt.value}
          name={name}
          size={size}
          border={type === "Border"}
          label={opt.label}
          value={opt.value}
          disabled={disabled}
          checked={current.includes(opt.value)}
          onChange={(e) => toggle(opt.value, e.target.checked)}
        />
      ))}
    </div>
  );
}
