import { templateProductEntry } from "../../lib/siteUrls";
import { DocPageChrome } from "../DocChrome";

const meta = [
  { label: "名称", value: "Scale System" },
  { label: "ID", value: <code className="text-sm">pt-vars-scale-system</code> },
  { label: "类型", value: "全局变量" },
  { label: "层级", value: "原子" },
  { label: "状态", value: "已启用" },
];

const toc = [
  { id: "scale-content", label: "Spacing / Radius", level: 2 as const },
];

export function ScaleSystemDocPage() {
  const desktopTokens = templateProductEntry();
  return (
    <DocPageChrome title="Scale System" meta={meta} toc={toc}>
      <section id="scale-content">
        <h2>Spacing / Radius / Typography</h2>
        <p>
          刻度定义见 <code>docs/FOUNDATIONS.md</code>。交互表格在{" "}
          <a href={desktopTokens} className="text-[color:var(--el-color-primary)]">
            pactrust-desktop /tokens
          </a>
          （Showcase 验收）。
        </p>
      </section>
    </DocPageChrome>
  );
}