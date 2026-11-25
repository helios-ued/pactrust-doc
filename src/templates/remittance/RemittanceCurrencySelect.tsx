import { EpIconByName } from "@/components/Icon/EpIconByName";
import "@/components/Select/select.css";
import { cn } from "@/lib/cn";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";

export type RemittanceCurrencyDot = "usd" | "usdt" | "default";

export type RemittanceCurrencyOption = {
  value: string;
  label: string;
  dot: RemittanceCurrencyDot;
};

export type RemittanceCurrencySelectProps = {
  options: RemittanceCurrencyOption[];
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  ariaLabel?: string;
};

function CurrencyDot({ dot }: { dot: RemittanceCurrencyDot }) {
  return (
    <span
      className={cn(
        "pt-remittance__currency-dot",
        dot === "usdt" && "pt-remittance__currency-dot--usdt",
        dot === "default" && "pt-remittance__currency-dot--muted",
      )}
      aria-hidden
    />
  );
}

export function RemittanceCurrencySelect({
  options,
  defaultValue,
  value: controlled,
  onChange,
  ariaLabel = "选择币种",
}: RemittanceCurrencySelectProps) {
  const listboxId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [internal, setInternal] = useState(
    () => defaultValue ?? options[0]?.value ?? "",
  );

  const isControlled = controlled !== undefined;
  const selectedValue = isControlled ? controlled : internal;
  const selected =
    options.find((o) => o.value === selectedValue) ?? options[0];

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const commit = (next: string) => {
    if (!isControlled) setInternal(next);
    onChange?.(next);
    setOpen(false);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  };

  if (!selected) return null;

  return (
    <div
      ref={rootRef}
      className="pt-remittance__currency-select"
      onKeyDown={onKeyDown}
    >
      <button
        type="button"
        className={cn(
          "pt-remittance__currency-select__trigger",
          open && "is-open",
        )}
        aria-label={ariaLabel}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        onClick={() => setOpen((o) => !o)}
      >
        <CurrencyDot dot={selected.dot} />
        <span className="pt-remittance__currency-select__label">{selected.label}</span>
        <EpIconByName
          name="ArrowDown"
          size={12}
          className="pt-remittance__currency-select__chevron"
          aria-hidden
        />
      </button>
      {open ? (
        <div
          id={listboxId}
          role="listbox"
          className="pt-select__panel pt-remittance__currency-select__panel"
        >
          {options.map((opt) => {
            const isSelected = opt.value === selectedValue;
            return (
              <div
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                className={cn(
                  "pt-select__option pt-remittance__currency-select__option",
                  isSelected && "pt-select__option--selected",
                )}
                onClick={() => commit(opt.value)}
              >
                <CurrencyDot dot={opt.dot} />
                <span className="pt-select__option-label">{opt.label}</span>
                {isSelected ? (
                  <EpIconByName
                    name="Check"
                    size={16}
                    className="pt-remittance__currency-select__check"
                    aria-hidden
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
