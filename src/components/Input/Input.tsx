import { EpIconByName } from "@/components/Icon/EpIconByName";
import {
  forwardRef,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import "./input.css";
import {
  inputNativeClass,
  inputWrapperClass,
} from "./inputFieldStyles";

/** Figma Input — docs/COMPONENTS.md */
export type InputState =
  | "Default"
  | "Hover"
  | "Focus"
  | "Error"
  | "Disabled";

export type InputSize = "Default" | "Large" | "Small";

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "disabled" | "prefix"
> & {
  state?: InputState;
  size?: InputSize;
  /** Figma Input False | True — 有内容态（展示用，可与 value 联用） */
  input?: boolean;
  range?: boolean;
  prefixIcon?: boolean;
  suffixIcon?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  rangeValue?: [string, string];
  onRangeChange?: (value: [string, string]) => void;
};

const iconSize: Record<InputSize, number> = {
  Default: 14,
  Large: 14,
  Small: 14,
};

type InputFieldProps = Omit<InputProps, "range" | "rangeValue" | "onRangeChange"> & {
  fieldRef?: React.Ref<HTMLInputElement>;
  value?: string;
  onClear?: () => void;
};

function InputField({
  state = "Default",
  size = "Default",
  className,
  onFocus,
  onBlur,
  readOnly,
  input: inputProp,
  prefixIcon,
  suffixIcon,
  prefix,
  suffix,
  value,
  defaultValue,
  onChange,
  onClear,
  fieldRef,
  ...rest
}: InputFieldProps) {
  const [focused, setFocused] = useState(false);
  const isDisabled = state === "Disabled";
  let visualState = state;
  if (focused && (state === "Default" || state === "Hover")) {
    visualState = "Focus";
  }

  const stringValue =
    value !== undefined && value !== null
      ? String(value)
      : defaultValue !== undefined && defaultValue !== null
        ? String(defaultValue)
        : "";
  const hasContent = inputProp ?? stringValue.length > 0;

  const showPrefix = prefix ?? (prefixIcon ? (
    <EpIconByName name="User" size={iconSize[size]} aria-hidden />
  ) : null);

  const showSuffix =
    suffix ??
    (suffixIcon && hasContent && !isDisabled ? (
      <button
        type="button"
        className="pt-input-field__affix-btn"
        aria-label="Clear"
        onClick={onClear}
      >
        <EpIconByName name="CircleClose" size={iconSize[size]} />
      </button>
    ) : suffixIcon && !hasContent ? (
      <EpIconByName name="CircleClose" size={iconSize[size]} className="opacity-40" aria-hidden />
    ) : null);

  return (
    <div className={inputWrapperClass(size, visualState, className)}>
      {showPrefix ? (
        <span className="pt-input-field__affix">{showPrefix}</span>
      ) : null}
      <input
        ref={fieldRef}
        readOnly={readOnly ?? isDisabled}
        disabled={isDisabled}
        value={value}
        defaultValue={value === undefined ? defaultValue : undefined}
        className={inputNativeClass(isDisabled, hasContent)}
        onChange={onChange}
        onFocus={(e) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          onBlur?.(e);
        }}
        {...rest}
      />
      {showSuffix ? (
        <span className="pt-input-field__affix">{showSuffix}</span>
      ) : null}
    </div>
  );
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      range,
      rangeValue,
      onRangeChange,
      value,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const [internalRange, setInternalRange] = useState<[string, string]>(["", ""]);
    const rangePair = rangeValue ?? internalRange;

    if (range) {
      const setAt = (idx: 0 | 1, next: string) => {
        const pair: [string, string] =
          idx === 0 ? [next, rangePair[1]] : [rangePair[0], next];
        if (rangeValue === undefined) setInternalRange(pair);
        onRangeChange?.(pair);
      };

      return (
        <div className="pt-input-range">
          <InputField
            {...rest}
            value={rangePair[0]}
            onChange={(e) => setAt(0, e.target.value)}
            onClear={() => setAt(0, "")}
          />
          <span className="pt-input-range__sep" aria-hidden>
            -
          </span>
          <InputField
            {...rest}
            value={rangePair[1]}
            onChange={(e) => setAt(1, e.target.value)}
            onClear={() => setAt(1, "")}
          />
        </div>
      );
    }

    const controlled = value !== undefined ? String(value) : undefined;

    return (
      <InputField
        {...rest}
        fieldRef={ref}
        value={controlled}
        onChange={onChange}
        onClear={() => {
          onChange?.({ target: { value: "" } } as ChangeEvent<HTMLInputElement>);
        }}
      />
    );
  },
);

Input.displayName = "Input";
