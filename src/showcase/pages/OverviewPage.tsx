export function OverviewPage() {
  return (
    <div className="mx-auto max-w-3xl prose prose-sm dark:prose-invert">
      <h1 className="text-3xl font-bold">Element —— PacsTrust Design</h1>
      <p className="text-[color:var(--ds-text-regular)]">
        本仓库线上站 <strong>pactrust-doc</strong> 按 EverGreen <strong>eds-doc</strong> 同类职责运营：设计说明、令牌与组件规范索引；交互预览与中台原型在{" "}
        <strong>Desktop 预览</strong> 与 <code>pactrust-prototype</code>。
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-5 text-[color:var(--ds-text-regular)]">
        <li>绿点：已在仓库内实现 React 预览组件</li>
        <li>无绿点：规范已收录，按 Figma nodeId 对照 Dev Mode</li>
        <li>详细锁定规则见仓库 <code>docs/SPEC-LOCK.md</code></li>
      </ul>
    </div>
  );
}
