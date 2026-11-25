import { cn } from "@/lib/cn";

export type RemittanceVariant = "regular" | "pobo";

const OPTIONS: { id: RemittanceVariant; label: string }[] = [
  { id: "regular", label: "普通汇款" },
  { id: "pobo", label: "POBO汇款" },
];

export function RemittanceTypeSegmented({
  value,
  onChange,
  className,
}: {
  value: RemittanceVariant;
  onChange: (next: RemittanceVariant) => void;
  className?: string;
}) {
  return (
    <div
      className={cn("pt-remittance-type-segmented", className)}
      role="tablist"
      aria-label="汇款类型"
    >
      {OPTIONS.map((opt) => (
        <button
          key={opt.id}
          type="button"
          role="tab"
          aria-selected={value === opt.id}
          className={cn(
            "pt-remittance-type-segmented__item",
            value === opt.id && "is-active",
          )}
          onClick={() => onChange(opt.id)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
