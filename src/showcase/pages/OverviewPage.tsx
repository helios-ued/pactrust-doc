export function OverviewPage() {
  return (
    <div className="mx-auto max-w-3xl prose prose-sm dark:prose-invert">
      <h1 className="text-3xl font-bold">Element —— PacsTrust Design</h1>
      <p className="text-[color:var(--ds-text-regular)]">
        本页属于{" "}
        <strong>设计文档</strong>（对齐{" "}
        <a
          href="https://eds-ued.github.io/eds-doc/explore"
          className="text-[color:var(--el-color-primary)]"
          target="_blank"
          rel="noreferrer"
        >
          EDS Doc
        </a>
        ）；组件预览、模板与 Layout 界面在侧栏切换到{" "}
        <strong>Desktop 展示</strong>（对齐{" "}
        <a
          href="https://eds-ued.github.io/eds-desktop/components/button-text"
          className="text-[color:var(--el-color-primary)]"
          target="_blank"
          rel="noreferrer"
        >
          EDS Desktop
        </a>
        ）。
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-5 text-[color:var(--ds-text-regular)]">
        <li>绿点：已在仓库内实现 React 预览组件</li>
        <li>无绿点：规范已收录，按 Figma nodeId 对照 Dev Mode</li>
        <li>详细锁定规则见仓库 <code>docs/SPEC-LOCK.md</code></li>
      </ul>
    </div>
  );
}
