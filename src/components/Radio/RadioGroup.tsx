import { cn } from "@/lib/cn";
import { useState } from "react";
import { Radio, type RadioSize } from "./Radio";
import "./radio.css";

export type RadioGroupType = "Default" | "Border" | "Button";

export type RadioGroupOption = {
  label: string;
  value: string;
};

export type RadioGroupProps = {
  name?: string;
  type?: RadioGroupType;
  size?: RadioSize;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  options: RadioGroupOption[];
  disabled?: boolean;
  className?: string;
};

export function RadioGroup({
  name = "radio-group",
  type = "Default",
  size = "Default",
  value: controlled,
  defaultValue,
  onChange,
  options,
  disabled = false,
  className,
}: RadioGroupProps) {
  const isControlled = controlled !== undefined;
  const [internal, setInternal] = useState(
    () => defaultValue ?? options[0]?.value ?? "",
  );
  const current = isControlled ? controlled : internal;

  const select = (next: string) => {
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };

  if (type === "Button") {
    return (
      <div
        className={cn("pt-radio-group pt-radio-group--button", className)}
        role="radiogroup"
      >
        {options.map((opt) => {
          const checked = current === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={checked}
              disabled={disabled}
              className={cn(
                "pt-radio-button",
                size === "Large" && "pt-radio-button--large",
                size === "Small" && "pt-radio-button--small",
                checked && "pt-radio-button--checked",
              )}
              onClick={() => select(opt.value)}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    );
  }

  const groupClass =
    type === "Border" ? "pt-radio-group--border" : "pt-radio-group--default";

  return (
    <div className={cn("pt-radio-group", groupClass, className)} role="radiogroup">
      {options.map((opt) => (
        <Radio
          key={opt.value}
          name={name}
          size={size}
          border={type === "Border"}
          label={opt.label}
          value={opt.value}
          disabled={disabled}
          checked={current === opt.value}
          onChange={() => select(opt.value)}
        />
      ))}
    </div>
  );
}
