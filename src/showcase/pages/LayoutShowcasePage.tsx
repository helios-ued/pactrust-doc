import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { layoutFullscreenPath } from "../nav";
import figmaSource from "../../../figma-source.json";
import { layoutSidebarNav } from "../nav";
import { getLayoutDoc } from "../registry/layoutFormSpecs";
import { PreviewCodeSegmented } from "../ui/PreviewCodeSegmented";
import { ShowcaseCodeBlock } from "../ui/ShowcaseCodeBlock";
import { DemoStage, PreviewShell, ShowcasePlaygroundFrame } from "../ui/CustomizeLayout";
import { PropsTable } from "../ui/PropsTable";
import "../ui/showcase-frame-preview.css";
import type { ShowcaseDemoProps } from "../demos/types";

type DemoComponent = ((props: ShowcaseDemoProps) => ReactNode) | undefined;

export function LayoutShowcasePage() {
  const { slug = "" } = useParams();
  const meta = layoutSidebarNav.find((c) => c.slug === slug);
  const doc = getLayoutDoc(slug);
  const [tab, setTab] = useState<"preview" | "code">("preview");

  useEffect(() => {
    setTab("preview");
  }, [slug]);

  const Demo = useMemo((): DemoComponent => doc?.Demo as DemoComponent, [doc]);

  const layoutPage = figmaSource.layoutPages?.find((p) => p.slug === slug);
  const examplePath =
    layoutPage && "examplePath" in layoutPage
      ? (layoutPage as { examplePath?: string }).examplePath
      : undefined;

  if (!meta || !doc) {
    return (
      <div>
        <h1 className="text-2xl font-bold">未找到布局</h1>
        <Link to="/doc/overview" className="text-[color:var(--el-color-primary)]">
          返回概览
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl">
      <header>
        <p className="text-xs uppercase tracking-wide text-[color:var(--ds-text-secondary)]">
          Figma node {meta.nodeId} · 页面布局
        </p>
        <h1 className="mt-1 text-3xl font-bold">{doc.title}</h1>
        <p className="mt-2 max-w-3xl text-[color:var(--ds-text-regular)]">{doc.subtitle}</p>
        {examplePath ? (
          <p className="mt-2 text-sm">
            完整示例：{" "}
            <a href={examplePath} className="text-[color:var(--el-color-primary)]">
              {examplePath}
            </a>
          </p>
        ) : null}
      </header>

      <ShowcasePlaygroundFrame
        preview={
          <PreviewShell>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <PreviewCodeSegmented value={tab} onChange={setTab} />
              {tab === "preview" && Demo ? (
                <Link
                  to={layoutFullscreenPath(slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[color:var(--el-color-primary)] hover:opacity-80"
                >
                  全屏预览
                </Link>
              ) : null}
            </div>
            {tab === "preview" && Demo ? (
              <DemoStage className="pt-demo-stage--fill">
                <Demo />
              </DemoStage>
            ) : null}
            {tab === "code" ? (
              <ShowcaseCodeBlock className="w-full text-left" code={doc.codeTemplate ?? ""} />
            ) : null}
          </PreviewShell>
        }
      />

      {!Demo ? (
        <p className="mt-8 text-sm text-[color:var(--ds-text-secondary)]">该布局示意待补充。</p>
      ) : null}

      {doc.variants?.length ? (
        <section className="mt-10">
          <h2 className="text-lg font-semibold">结构要点</h2>
          <ul className="mt-2 list-inside list-disc text-sm text-[color:var(--ds-text-regular)]">
            {doc.variants.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {doc.props.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-lg font-semibold">尺寸锁定</h2>
          <PropsTable rows={doc.props} />
        </section>
      ) : null}

      <section className="mt-10 rounded-lg border border-[color:var(--el-border-color-lighter)] bg-[color:var(--el-fill-color-lighter)] px-4 py-3 text-sm text-[color:var(--ds-text-regular)]">
        模块界面为组合示例，不作为新组件变体来源（见 <code>docs/FOUNDATIONS.md</code>）。
      </section>
    </div>
  );
}
