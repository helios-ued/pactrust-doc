import { Link } from "react-router-dom";
import { EdsTextStyleSection } from "../eds/EdsTextStyleSection";
import "../eds/eds-shell.css";
import {
  SemanticTokenTable,
  TokenPairTable,
  TokensEdsSection,
  TokensEdsSideNav,
} from "../eds/TokensEdsUi";
import {
  colorBaseRows,
  colorSemanticGroups,
  iconScalePx,
  scaleBaseRows,
  tokensEdsNav,
} from "../eds/tokensEdsCatalog";
import { FigmaTextMatrixTable, FigmaTypographyBaseTables } from "../eds/FigmaTypographyTables";

export function TokensPage() {
  return (
    <div className="eds-tokens-inset mx-auto flex max-w-6xl gap-10">
      <div className="min-w-0 flex-1 pb-16">
        <header className="mb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-[color:var(--eds-panel-muted)]">
            Foundations
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-[color:var(--eds-panel-fg)]">
            Tokens
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[color:var(--eds-panel-muted)]">
            布局与章节结构参考 EDS Desktop Showcase；数值来自 Figma「设计基础」与{" "}
            <code className="text-xs">docs/FOUNDATIONS.md</code>。
          </p>
        </header>

        <TokensEdsSection
          id="color-base"
          title="Color Base"
          description="品牌 Brand 与语义色；Brand 映射 Element `--el-color-primary`（Light 默认）。"
        >
          <TokenPairTable rows={colorBaseRows} />
        </TokensEdsSection>

        <TokensEdsSection
          id="color-semantic"
          title="Color Semantic"
          description="语义层引用 Base token，用于页面、文本、状态与描边。"
        >
          <p className="mb-2 text-xs text-[color:var(--eds-panel-muted)]">按 EDS 分组展示。</p>
        </TokensEdsSection>

        <TokensEdsSection id="semantic-box" title="Box" level={3}>
          <SemanticTokenTable rows={colorSemanticGroups.box} />
        </TokensEdsSection>
        <TokensEdsSection id="semantic-text" title="Text" level={3}>
          <SemanticTokenTable rows={colorSemanticGroups.text} />
        </TokensEdsSection>
        <TokensEdsSection id="semantic-status" title="Status" level={3}>
          <SemanticTokenTable rows={colorSemanticGroups.status} />
        </TokensEdsSection>
        <TokensEdsSection id="semantic-stroke" title="Stroke" level={3}>
          <SemanticTokenTable rows={colorSemanticGroups.stroke} />
        </TokensEdsSection>

        <TokensEdsSection id="scale-base" title="Scale Base" description="间距与圆角原始刻度。">
          <TokenPairTable rows={scaleBaseRows} />
        </TokensEdsSection>

        <TokensEdsSection id="scale-semantic" title="Scale Semantic" description="业务语义尺度（Spacing / Radius / Icon / Depth）。" />

        <TokensEdsSection id="semantic-spacing" title="Spacing" level={3}>
          <div className="flex flex-wrap gap-3">
            {scaleBaseRows
              .filter((r) => r.name.startsWith("space") || r.name.startsWith("spacing"))
              .map((r) => (
                <div
                  key={r.name}
                  className="flex flex-col items-center gap-1 rounded border border-[color:var(--eds-panel-border)] px-3 py-2 text-center text-[10px]"
                >
                  <div
                    className="rounded-sm bg-[color:var(--el-color-primary-light-9)]"
                    style={{
                      width: r.light,
                      height: r.light,
                      minWidth: 4,
                      minHeight: 4,
                    }}
                  />
                  <span className="font-mono text-[color:var(--eds-panel-fg)]">{r.name}</span>
                  <span className="font-mono text-[color:var(--eds-panel-muted)]">{r.cssVar}</span>
                </div>
              ))}
          </div>
        </TokensEdsSection>

        <TokensEdsSection id="semantic-radius" title="Radius" level={3}>
          <div className="flex flex-wrap gap-4">
            {scaleBaseRows
              .filter((r) => r.name.startsWith("radius"))
              .map((r) => (
                <div
                  key={r.name}
                  className="flex h-16 w-24 flex-col items-center justify-center border border-[color:var(--eds-panel-border)] bg-[color:var(--ds-bg-muted)] text-[10px]"
                  style={{ borderRadius: r.light }}
                >
                  <span className="font-mono">{r.light}</span>
                </div>
              ))}
          </div>
        </TokensEdsSection>

        <TokensEdsSection
          id="semantic-icon"
          title="Icon"
          level={3}
          description="图标尺寸在令牌中定义；完整图库见组件 Icon。"
        >
          <div className="flex flex-wrap items-end gap-4">
            {iconScalePx.map((px) => (
              <div key={px} className="flex flex-col items-center gap-1 text-[10px] text-[color:var(--eds-panel-muted)]">
                <div
                  className="flex items-center justify-center rounded border border-[color:var(--eds-panel-border)] text-[color:var(--el-color-primary)]"
                  style={{ width: px, height: px, fontSize: Math.max(8, px * 0.55) }}
                >
                  ◇
                </div>
                <span className="font-mono">{px}px</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs">
            <Link to="/desktop/components/icon" className="text-[color:var(--eds-toc-active)] hover:underline">
              打开 Icon 组件图库 →
            </Link>
          </p>
        </TokensEdsSection>

        <TokensEdsSection id="semantic-depth" title="Depth" level={3} description="阴影层级（Element shadow）。">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { name: "shadow-sm", var: "--el-box-shadow-light" },
              { name: "shadow-base", var: "--el-box-shadow" },
              { name: "shadow-lg", var: "--el-box-shadow-dark" },
            ].map((s) => (
              <div
                key={s.name}
                className="rounded-lg border border-[color:var(--eds-panel-border)] bg-[color:var(--eds-panel-bg)] p-6 text-center text-xs"
                style={{ boxShadow: `var(${s.var})` }}
              >
                <code>{s.var}</code>
              </div>
            ))}
          </div>
        </TokensEdsSection>

        <TokensEdsSection
          id="typography-base"
          title="Typography Base"
          description="Figma 本地变量 · Font Size（11）/ Line Height / Font Weight。"
        >
          <FigmaTypographyBaseTables />
        </TokensEdsSection>

        <TokensEdsSection
          id="typography-semantic"
          title="Typography Semantic"
          description="Text 2.3.0 · Title/Body 矩阵 ↔ Font Size 变量名。"
        >
          <FigmaTextMatrixTable />
        </TokensEdsSection>

        <TokensEdsSection
          id="text-style"
          title="Text Style"
          description="预置字阶列表；左侧为样式名样例，右侧为字号 / 行高（对齐 EDS 展示）。"
        >
          <EdsTextStyleSection />
        </TokensEdsSection>

        <TokensEdsSection id="motion-base" title="Motion Base" description="过渡时长与缓动（占位，待与 Figma Motion 页对齐）。">
          <ul className="rounded-lg border border-[color:var(--eds-panel-border)] px-4 py-3 text-xs text-[color:var(--eds-panel-muted)]">
            <li>
              <code className="text-[color:var(--eds-toc-active)]">--el-transition-duration</code>
            </li>
            <li className="mt-1">
              <code className="text-[color:var(--eds-toc-active)]">--el-transition-function-ease-in-out-bezier</code>
            </li>
          </ul>
        </TokensEdsSection>

        <TokensEdsSection id="effect-base" title="Effect Base" description="毛玻璃 / 遮罩等（占位）。">
          <p className="text-xs text-[color:var(--eds-panel-muted)]">后续从 Figma Effect 变量补全。</p>
        </TokensEdsSection>
      </div>

      <TokensEdsSideNav items={tokensEdsNav} />
    </div>
  );
}
