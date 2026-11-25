import { cn } from "@/lib/cn";
import "./preview-code-segmented.css";

export type PreviewCodeTab = "preview" | "code";

const labels: Record<PreviewCodeTab, string> = {
  preview: "预览",
  code: "代码",
};

export function PreviewCodeSegmented({
  value,
  onChange,
  className,
}: {
  value: PreviewCodeTab;
  onChange: (tab: PreviewCodeTab) => void;
  className?: string;
}) {
  return (
    <div className={cn("preview-code-segmented", className)} role="tablist" aria-label="预览与代码">
      {(["preview", "code"] as const).map((t) => (
        <button
          key={t}
          type="button"
          role="tab"
          aria-selected={value === t}
          className={cn("preview-code-segmented__item", value === t && "is-active")}
          onClick={() => onChange(t)}
        >
          {labels[t]}
        </button>
      ))}
    </div>
  );
}
