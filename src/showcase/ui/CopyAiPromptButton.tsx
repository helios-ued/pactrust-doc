import { useState } from "react";

export function CopyAiPromptButton({
  getText,
  label = "复制 AI 提示词",
}: {
  getText: () => string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      className="rounded-el-base border border-[color:var(--ds-stroke-divider)] bg-[color:var(--ds-bg-muted)] px-3 py-1.5 text-sm hover:border-[color:var(--el-color-primary)]"
      onClick={async () => {
        await navigator.clipboard.writeText(getText());
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      }}
    >
      {copied ? "已复制" : label}
    </button>
  );
}
