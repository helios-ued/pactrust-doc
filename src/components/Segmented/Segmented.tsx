import { cn } from "@/lib/cn";
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import "./segmented.css";

/** Figma Segmented · `6243:3939` */
export type SegmentedNumber = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type SegmentedOption = {
  label: ReactNode;
  value: string;
  disabled?: boolean;
};

type SegmentedContextValue = {
  value: string;
  select: (value: string) => void;
  groupDisabled: boolean;
};

const SegmentedContext = createContext<SegmentedContextValue | null>(null);

function useSegmentedContext() {
  const ctx = useContext(SegmentedContext);
  if (!ctx) throw new Error("SegmentedItem must be used within Segmented");
  return ctx;
}

export type SegmentedItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
  children?: ReactNode;
};

export function SegmentedItem({
  value,
  children = "Button",
  className,
  disabled,
  ...rest
}: SegmentedItemProps) {
  const { value: current, select, groupDisabled } = useSegmentedContext();
  const selected = current === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      disabled={groupDisabled || disabled}
      className={cn(
        "pt-segmented__item",
        selected && "pt-segmented__item--selected",
        className,
      )}
      onClick={() => select(value)}
      {...rest}
    >
      {children}
    </button>
  );
}

export type SegmentedProps = Omit<HTMLAttributes<HTMLDivElement>, "onChange"> & {
  /** Figma Custom=False 时项数 2–12 */
  number?: SegmentedNumber;
  /** Figma Custom=True · 使用 children / options 自定义 */
  custom?: boolean;
  options?: SegmentedOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  children?: ReactNode;
};

function defaultOptions(count: SegmentedNumber): SegmentedOption[] {
  return Array.from({ length: count }, (_, i) => ({
    label: "Button",
    value: String(i + 1),
  }));
}

export function Segmented({
  number = 3,
  custom = false,
  options: optionsProp,
  value: controlled,
  defaultValue,
  onChange,
  disabled = false,
  children,
  className,
  ...rest
}: SegmentedProps) {
  const options = useMemo(() => {
    if (custom) return optionsProp ?? [];
    return optionsProp ?? defaultOptions(number);
  }, [custom, number, optionsProp]);

  const isControlled = controlled !== undefined;
  const [internal, setInternal] = useState(
    () => defaultValue ?? options[0]?.value ?? "1",
  );
  const current = isControlled ? controlled : internal;

  const select = (next: string) => {
    if (disabled) return;
    const opt = options.find((o) => o.value === next);
    if (opt?.disabled) return;
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };

  const ctx: SegmentedContextValue = useMemo(
    () => ({ value: current, select, groupDisabled: disabled }),
    [current, disabled],
  );

  const body =
    custom && children ? (
      children
    ) : (
      options.map((opt) => (
        <SegmentedItem key={opt.value} value={opt.value} disabled={opt.disabled}>
          {opt.label}
        </SegmentedItem>
      ))
    );

  return (
    <SegmentedContext.Provider value={ctx}>
      <div
        className={cn(
          "pt-segmented",
          custom && "pt-segmented--custom",
          disabled && "pt-segmented--disabled",
          className,
        )}
        role="tablist"
        {...rest}
      >
        <div className="pt-segmented__inner">{body}</div>
      </div>
    </SegmentedContext.Provider>
  );
}
