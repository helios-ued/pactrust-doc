import { DocPageChrome } from "../DocChrome";

export function DocStartedOverviewPage() {
  return (
    <DocPageChrome
      title="了解入门"
      meta={[
        { label: "名称", value: "Getting Started" },
        { label: "层级", value: "入门" },
        { label: "状态", value: "已启用" },
      ]}
      toc={[
        { id: "spec", label: "规范真源", level: 2 },
        { id: "sites", label: "三个站点", level: 2 },
      ]}
    >
      <section id="spec">
        <h2>规范真源</h2>
        <p>
          Figma <strong>Element —— PacsTrust Design</strong> 与仓库{" "}
          <code>docs/SPEC-LOCK.md</code>、<code>docs/COMPONENTS.md</code> 为唯一设计源。
        </p>
      </section>
      <section id="sites">
        <h2>三个站点</h2>
        <ul>
          <li>
            <strong>pactrust-doc</strong>（本站）：设计说明，对标 eds-doc
          </li>
          <li>
            <strong>pactrust-desktop</strong>：组件 / Layout 交互预览
          </li>
          <li>
            <strong>pactrust-prototype</strong>：中台可点击原型
          </li>
        </ul>
      </section>
    </DocPageChrome>
  );
}