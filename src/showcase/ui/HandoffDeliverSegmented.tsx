import { cn } from "@/lib/cn";
import type { HandoffDeliverMode } from "../lib/moduleHandoff";

const labels: Record<HandoffDeliverMode, string> = {
  fullscreen: "全屏交付",
  content: "仅内容区",
};

export function HandoffDeliverSegmented({
  value,
  onChange,
  className,
}: {
  value: HandoffDeliverMode;
  onChange: (mode: HandoffDeliverMode) => void;
  className?: string;
}) {
  return (
    <div className={cn("preview-code-segmented", className)} role="tablist" aria-label="交付范围">
      {(["fullscreen", "content"] as const).map((m) => (
        <button
          key={m}
          type="button"
          role="tab"
          aria-selected={value === m}
          className={cn("preview-code-segmented__item", value === m && "is-active")}
          onClick={() => onChange(m)}
        >
          {labels[m]}
        </button>
      ))}
    </div>
  );
}
