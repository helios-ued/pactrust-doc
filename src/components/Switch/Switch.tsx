import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import { useId, useState, type ButtonHTMLAttributes } from "react";
import "./switch.css";

export type SwitchSize = "Default" | "Large" | "Small";

export type SwitchType =
  | "Default"
  | "Text Inline"
  | "Text"
  | "Icon"
  | "Icon Inline"
  | "Action Icon";

export type SwitchVisualState = "Default" | "Focus" | "Disable";

export type SwitchProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "role" | "onChange" | "type"
> & {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: SwitchSize;
  /** Figma Type */
  switchType?: SwitchType;
  /** Figma Custom ON — 开启色为 success */
  custom?: boolean;
  /** Figma State（Showcase 可强制 Focus） */
  visualState?: SwitchVisualState;
  activeText?: string;
  inactiveText?: string;
  leftText?: string;
  rightText?: string;
};

const sizeClass: Record<SwitchSize, string> = {
  Large: "pt-switch--size-large",
  Default: "pt-switch--size-default",
  Small: "pt-switch--size-small",
};

const inlineIconSize: Record<SwitchSize, number> = {
  Large: 12,
  Default: 10,
  Small: 8,
};

const sideIconSize: Record<SwitchSize, number> = {
  Large: 16,
  Default: 14,
  Small: 12,
};

export function Switch({
  checked: controlled,
  defaultChecked = false,
  onChange,
  size = "Default",
  switchType = "Default",
  custom = false,
  visualState = "Default",
  activeText = "Y",
  inactiveText = "N",
  leftText = "Close",
  rightText = "Open",
  disabled,
  className,
  onClick,
  ...rest
}: SwitchProps) {
  const id = useId();
  const [internal, setInternal] = useState(defaultChecked);
  const checked = controlled ?? internal;
  const isDisabled = disabled || visualState === "Disable";
  const showFocus = visualState === "Focus" && !isDisabled;

  const toggle = () => {
    if (isDisabled) return;
    const next = !checked;
    if (controlled === undefined) setInternal(next);
    onChange?.(next);
  };

  const handleClick: ButtonHTMLAttributes<HTMLButtonElement>["onClick"] = (e) => {
    toggle();
    onClick?.(e);
  };

  const core = (
    <span className="pt-switch__core-wrap">
      {showFocus ? <span className="pt-switch__focus-ring" aria-hidden /> : null}
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={isDisabled}
        className={cn("pt-switch__core", checked && "pt-switch__core--checked")}
        onClick={handleClick}
        {...rest}
      >
        {checked &&
        (switchType === "Text Inline" || switchType === "Icon Inline") ? (
          <span className="pt-switch__inline" aria-hidden>
            {switchType === "Text Inline" ? (
              activeText
            ) : (
              <EpIconByName name="Check" size={inlineIconSize[size]} />
            )}
          </span>
        ) : null}
        <span className="pt-switch__action">
          {switchType === "Action Icon" && checked ? (
            <EpIconByName
              name="View"
              size={inlineIconSize[size]}
              className="pt-switch__action-icon"
            />
          ) : null}
        </span>
        {!checked &&
        (switchType === "Text Inline" || switchType === "Icon Inline") ? (
          <span className="pt-switch__inline" aria-hidden>
            {switchType === "Text Inline" ? (
              inactiveText
            ) : (
              <EpIconByName
                name="Close"
                size={inlineIconSize[size]}
                className="pt-switch__action-icon"
              />
            )}
          </span>
        ) : null}
      </button>
    </span>
  );

  if (switchType === "Text") {
    return (
      <span
        className={cn(
          "pt-switch",
          sizeClass[size],
          custom && "pt-switch--custom",
          isDisabled && "pt-switch--disabled",
          showFocus && "pt-switch--focus",
          className,
        )}
      >
        <span
          className={cn(
            "pt-switch__side",
            !checked && "pt-switch__side--active",
          )}
        >
          {leftText}
        </span>
        {core}
        <span
          className={cn(
            "pt-switch__side",
            checked && "pt-switch__side--active",
          )}
        >
          {rightText}
        </span>
      </span>
    );
  }

  if (switchType === "Icon") {
    const icon = sideIconSize[size];
    return (
      <span
        className={cn(
          "pt-switch",
          sizeClass[size],
          custom && "pt-switch--custom",
          isDisabled && "pt-switch--disabled",
          showFocus && "pt-switch--focus",
          className,
        )}
      >
        <EpIconByName
          name="Close"
          size={icon}
          className={cn(
            "pt-switch__side-icon",
            !checked && "pt-switch__side-icon--active",
          )}
        />
        {core}
        <EpIconByName
          name="Check"
          size={icon}
          className={cn(
            "pt-switch__side-icon",
            checked && "pt-switch__side-icon--active",
          )}
        />
      </span>
    );
  }

  return (
    <span
      className={cn(
        "pt-switch",
        sizeClass[size],
        custom && "pt-switch--custom",
        isDisabled && "pt-switch--disabled",
        showFocus && "pt-switch--focus",
        className,
      )}
    >
      {core}
    </span>
  );
}
