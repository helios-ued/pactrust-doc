import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { figmaDevUrl } from "../lib/figmaLinks";
import { getModuleHandoff, type HandoffDeliverMode } from "../lib/moduleHandoff";
import { templateFullscreenPath, templateSidebarNav } from "../nav";
import { getTemplateDoc } from "../registry/templateFormSpecs";
import { CopyAiPromptButton } from "../ui/CopyAiPromptButton";
import { HandoffDeliverSegmented } from "../ui/HandoffDeliverSegmented";
import { PreviewCodeSegmented } from "../ui/PreviewCodeSegmented";
import { ShowcaseCodeBlock } from "../ui/ShowcaseCodeBlock";
import { DemoStage, PreviewShell, ShowcasePlaygroundFrame } from "../ui/CustomizeLayout";
import { PropsTable } from "../ui/PropsTable";
import "../ui/showcase-frame-preview.css";
import type { ShowcaseDemoProps } from "../demos/types";

type DemoComponent = ((props: ShowcaseDemoProps) => ReactNode) | undefined;

export function TemplateShowcasePage() {
  const { slug = "" } = useParams();
  const meta = templateSidebarNav.find((c) => c.slug === slug);
  const doc = getTemplateDoc(slug);
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [deliverMode, setDeliverMode] = useState<HandoffDeliverMode>("fullscreen");

  useEffect(() => {
    setTab("preview");
    setDeliverMode("fullscreen");
  }, [slug]);

  const Demo = useMemo((): DemoComponent => doc?.Demo as DemoComponent, [doc]);
  const handoff = useMemo(
    () => (doc ? getModuleHandoff(slug, doc.title, doc.elementMapping) : undefined),
    [doc, slug],
  );
  const displayCode =
    handoff?.buildElementPlusCode(deliverMode) ?? doc?.codeTemplate ?? "";

  if (!meta || !doc) {
    return (
      <div>
        <h1 className="text-2xl font-bold">未找到模板</h1>
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
          {meta.nodeId ? `Figma node ${meta.nodeId} · ` : ""}页面模板
        </p>
        <h1 className="mt-1 text-3xl font-bold">{doc.title}</h1>
        <p className="mt-2 max-w-3xl text-[color:var(--ds-text-regular)]">{doc.subtitle}</p>
        {doc.elementMapping ? (
          <p className="mt-1 text-sm text-[color:var(--ds-text-secondary)]">
            Element Plus 映射：{doc.elementMapping}
          </p>
        ) : null}
      </header>

      <ShowcasePlaygroundFrame
        preview={
          <PreviewShell>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <PreviewCodeSegmented value={tab} onChange={setTab} />
              <div className="flex flex-wrap items-center gap-2">
                {tab === "preview" && Demo ? (
                  <Link
                    to={templateFullscreenPath(slug)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[color:var(--el-color-primary)] hover:opacity-80"
                  >
                    全屏预览
                  </Link>
                ) : null}
                {tab === "code" && displayCode ? (
                  <CopyAiPromptButton label="复制代码" getText={() => displayCode} />
                ) : null}
              </div>
            </div>
            {tab === "code" && handoff?.vueReady ? (
              <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-[color:var(--ds-text-secondary)]">
                  {deliverMode === "fullscreen" && handoff.supportsFullscreen
                    ? "默认「全屏交付」：复制 → 存一个 .vue → 配路由 → 效果对齐全屏预览；一般只改 settings[].route"
                    : "「仅内容区」：塞进你们已有侧栏的 router-view；只改 settings[].route"}
                </p>
                {handoff.supportsFullscreen ? (
                  <HandoffDeliverSegmented value={deliverMode} onChange={setDeliverMode} />
                ) : null}
              </div>
            ) : null}
            {tab === "code" && handoff && !handoff.vueReady ? (
              <p className="mb-3 text-sm text-[color:var(--ds-text-secondary)]">
                交付说明 + 占位 SFC · 完整示例将陆续补齐，请先对照全屏预览
              </p>
            ) : null}
            {tab === "preview" && Demo ? (
              <DemoStage className="pt-demo-stage--fill">
                <Demo />
              </DemoStage>
            ) : null}
            {tab === "code" ? (
              <ShowcaseCodeBlock className="w-full text-left" code={displayCode} />
            ) : null}
          </PreviewShell>
        }
      />

      {handoff ? (
        <section className="mt-10 rounded-el-base border border-[color:var(--ds-stroke-divider)] p-5">
          <h2 className="text-lg font-semibold">前端交付清单</h2>
          <p className="mt-1 text-sm text-[color:var(--ds-text-secondary)]">
            流程见{" "}
            <code className="text-[color:var(--el-color-primary)]">docs/FRONTEND-HANDOFF.md</code>
          </p>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="font-medium text-[color:var(--ds-text-primary)]">全屏对照</dt>
              <dd className="mt-0.5">
                <Link
                  to={templateFullscreenPath(slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:var(--el-color-primary)] hover:opacity-80"
                >
                  {templateFullscreenPath(slug)}
                </Link>
              </dd>
            </div>
            {meta.nodeId ? (
              <div>
                <dt className="font-medium text-[color:var(--ds-text-primary)]">Figma Dev Mode</dt>
                <dd className="mt-0.5">
                  <a
                    href={figmaDevUrl(meta.nodeId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all text-[color:var(--el-color-primary)] hover:opacity-80"
                  >
                    {meta.nodeId}
                  </a>
                </dd>
              </div>
            ) : null}
            <div>
              <dt className="font-medium text-[color:var(--ds-text-primary)]">锁定说明</dt>
              <dd className="mt-0.5 font-mono text-[color:var(--ds-text-regular)]">{handoff.lockDoc}</dd>
            </div>
            <div>
              <dt className="font-medium text-[color:var(--ds-text-primary)]">本仓库参考</dt>
              <dd className="mt-0.5">
                <ul className="list-inside list-disc space-y-0.5 font-mono text-[color:var(--ds-text-regular)]">
                  {handoff.sourcePaths.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </section>
      ) : null}

      {doc.variants?.length ? (
        <section className="mt-10">
          <h2 className="text-lg font-semibold">说明</h2>
          <ul className="mt-2 list-inside list-disc text-sm text-[color:var(--ds-text-regular)]">
            {doc.variants.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {doc.props.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-lg font-semibold">参数</h2>
          <PropsTable rows={doc.props} />
        </section>
      ) : null}
    </div>
  );
}
