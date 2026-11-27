import { DocPageChrome } from "../DocChrome";

export function DocStubPage({ title }: { title: string }) {
  return (
    <DocPageChrome
      title={title}
      meta={[
        { label: "名称", value: title },
        { label: "状态", value: "筹备中" },
      ]}
      toc={[{ id: "stub", label: "说明", level: 2 }]}
    >
      <section id="stub">
        <h2>说明</h2>
        <p>
          本页对标 EDS Doc 结构，正文将陆续从 <code>docs/</code> 迁入。当前请阅读仓库{" "}
          <code>docs/SPEC-LOCK.md</code> 与 <code>docs/COMPONENTS.md</code>。
        </p>
      </section>
    </DocPageChrome>
  );
}