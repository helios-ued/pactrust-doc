import type { ReactNode } from "react";
import { Input } from "@/components/Input/Input";
import { cn } from "@/lib/cn";
import {
  RemittanceCurrencySelect,
  type RemittanceCurrencyOption,
} from "./RemittanceCurrencySelect";

export type RemittanceAmountCardProps = {
  label: string;
  hint?: ReactNode;
  currencyOptions: RemittanceCurrencyOption[];
  defaultCurrency?: string;
  amount?: string;
  defaultAmount?: string;
  onAmountChange?: (value: string) => void;
  className?: string;
};

export function RemittanceAmountCard({
  label,
  hint,
  currencyOptions,
  defaultCurrency,
  amount,
  defaultAmount = "0.00",
  onAmountChange,
  className,
}: RemittanceAmountCardProps) {
  return (
    <div className={cn("pt-remittance__amount-card", className)}>
      <div className="pt-remittance__amount-card__head">
        <span className="pt-remittance__amount-card__label">{label}</span>
        {hint ? <span className="pt-remittance__amount-card__meta">{hint}</span> : null}
      </div>
      <div className="pt-remittance__amount-card__body">
        <Input
          size="Large"
          placeholder="0.00"
          value={amount}
          defaultValue={amount === undefined ? defaultAmount : undefined}
          onChange={(e) => onAmountChange?.(e.target.value)}
          className="pt-remittance__amount-card__input"
          aria-label={label}
        />
        <RemittanceCurrencySelect
          options={currencyOptions}
          defaultValue={defaultCurrency ?? currencyOptions[0]?.value}
          ariaLabel={`${label}币种`}
        />
      </div>
    </div>
  );
}
