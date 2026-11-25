import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { buildAiPrompt } from "../lib/aiPrompt";
import { componentNav } from "../nav";
import { getComponentDoc } from "../registry";
import { CopyAiPromptButton } from "../ui/CopyAiPromptButton";
import { PreviewCodeSegmented } from "../ui/PreviewCodeSegmented";
import { ShowcaseCodeBlock } from "../ui/ShowcaseCodeBlock";
import { DemoStage, PreviewShell, ShowcasePlaygroundFrame } from "../ui/CustomizeLayout";
import { PropsTable } from "../ui/PropsTable";
import { SpecPlaceholder } from "../ui/SpecPlaceholder";
import { cn } from "@/lib/cn";
import type { ShowcaseDemoProps } from "../demos/types";

type DemoComponent = ((props: ShowcaseDemoProps) => ReactNode) | undefined;

export function ComponentShowcasePage() {
  const { slug = "" } = useParams();
  if (slug === "text") {
    return <Navigate to="/tokens#text-style" replace />;
  }
  const meta = componentNav.find((c) => c.slug === slug);
  const doc = getComponentDoc(slug);
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [refreshKey, setRefreshKey] = useState(0);
  const subVariants = doc?.subVariants ?? [];
  const [subId, setSubId] = useState(subVariants[0]?.id ?? "default");

  useEffect(() => {
    setSubId(subVariants[0]?.id ?? "default");
    setTab("preview");
  }, [slug, subVariants[0]?.id]);

  const activeSub = subVariants.find((s) => s.id === subId) ?? subVariants[0];

  const Demo = useMemo((): DemoComponent => {
    const C = activeSub?.Demo ?? doc?.Demo;
    return C as DemoComponent;
  }, [activeSub, doc]);

  const staticCode = activeSub?.codeTemplate ?? doc?.codeTemplate;
  const [elementPlusCode, setElementPlusCode] = useState<string | null>(null);
  const code = elementPlusCode ?? staticCode;

  const playgroundKey = `${slug}-${subId}-${refreshKey}`;

  useEffect(() => {
    setElementPlusCode(null);
  }, [playgroundKey]);

  if (!meta) {
    return (
      <div>
        <h1 className="text-2xl font-bold">未找到组件</h1>
        <Link to="/overview" className="text-[color:var(--el-color-primary)]">
          返回概览
        </Link>
      </div>
    );
  }

  if (slug === "icon" && Demo) {
    return (
      <div className="w-full" key={refreshKey}>
        <Demo />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl" key={refreshKey}>
      <div>
        <p className="text-xs uppercase tracking-wide text-[color:var(--ds-text-secondary)]">
          Figma node {meta.nodeId}
          {meta.version ? ` · v${meta.version}` : ""}
        </p>
        <h1 className="mt-1 text-3xl font-bold">{doc?.title ?? meta.name}</h1>
        <p className="mt-2 max-w-3xl text-[color:var(--ds-text-regular)]">
          {activeSub?.description ?? doc?.subtitle ?? "见 docs/COMPONENTS.md"}
        </p>
        {doc?.elementMapping ? (
          <p className="mt-1 text-sm text-[color:var(--ds-text-secondary)]">
            Element Plus：{doc.elementMapping}
          </p>
        ) : null}
      </div>

      {subVariants.length > 0 ? (
        <nav className="mt-6 flex flex-wrap gap-2 border-b border-[color:var(--ds-stroke-divider)] pb-2">
          {subVariants.map((s) => (
            <button
              key={s.id}
              type="button"
              className={cn(
                "rounded-el-small px-3 py-1.5 text-sm",
                subId === s.id
                  ? "bg-[color:var(--el-color-primary-light-9)] font-medium text-[color:var(--el-color-primary)]"
                  : "text-[color:var(--ds-text-secondary)] hover:bg-[color:var(--ds-bg-muted)]",
              )}
              onClick={() => setSubId(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>
      ) : null}

      {Demo ? (
        <Demo
          key={playgroundKey}
          part="all"
          reportElementPlusCode={setElementPlusCode}
          splitRender={({ customize, preview }) => (
            <ShowcasePlaygroundFrame
              preview={
                <PreviewShell>
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <PreviewCodeSegmented value={tab} onChange={setTab} />
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        className="text-sm text-[color:var(--el-color-primary)] hover:opacity-80"
                        onClick={() => setRefreshKey((k) => k + 1)}
                      >
                        刷新
                      </button>
                      <CopyAiPromptButton
                        label="复制 AI 提示词"
                        getText={() => buildAiPrompt(meta, doc, activeSub)}
                      />
                    </div>
                  </div>
                  {tab === "preview" ? (
                    preview
                  ) : (
                    <ShowcaseCodeBlock
                      className="w-full text-left"
                      code={code ?? `// ${meta.name} — docs/COMPONENTS.md`}
                    />
                  )}
                </PreviewShell>
              }
              customize={customize}
            />
          )}
        />
      ) : (
        <ShowcasePlaygroundFrame
          preview={
            <PreviewShell>
              <DemoStage className="items-stretch">
                <SpecPlaceholder
                  name={meta.name}
                  nodeId={meta.nodeId}
                  variants={activeSub?.variants ?? doc?.variants}
                />
              </DemoStage>
            </PreviewShell>
          }
        />
      )}

      {(activeSub?.variants ?? doc?.variants)?.length ? (
        <section className="mt-10">
          <h2 className="text-lg font-semibold">变体（Figma）</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[color:var(--ds-text-regular)]">
            {(activeSub?.variants ?? doc?.variants)!.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {(activeSub?.props ?? doc?.props)?.length ? (
        <section className="mt-10">
          <h2 className="text-lg font-semibold">Props</h2>
          <div className="mt-3">
            <PropsTable rows={activeSub?.props ?? doc!.props} />
          </div>
        </section>
      ) : null}

      {doc?.slots?.length ? (
        <section className="mt-10">
          <h3 className="text-lg font-semibold">插槽</h3>
          <ul className="mt-2 space-y-2 text-sm">
            {doc.slots.map((s) => (
              <li key={s.name}>
                <code className="text-[color:var(--el-color-primary)]">{s.name}</code>
                — {s.description}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
