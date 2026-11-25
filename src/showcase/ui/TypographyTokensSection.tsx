import { useState } from "react";
import {
  Text,
  type TextRole,
  type TextSize,
  type TextType,
  type TextWeight,
} from "@/components/Text/Text";
import { cn } from "@/lib/cn";
import {
  CustomizeField,
  CustomizeInput,
  CustomizeSelect,
  CustomizeToolbar,
} from "./CustomizeLayout";

const roles: TextRole[] = ["Title", "Body"];
const types: TextType[] = ["Default", "Primary", "Success", "Warning", "Error", "Info"];
const sizes: TextSize[] = ["Default", "Large", "Small"];
const weights: TextWeight[] = ["Regular", "Medium", "Bold"];

const fontTokens: { name: string; value: string; usage: string }[] = [
  { name: "--el-font-family", value: "Inter, system-ui", usage: "全局字体" },
  { name: "--el-font-size-large", value: "18px", usage: "Title · Default" },
  { name: "--el-font-line-height-large", value: "26px", usage: "Title · Default 行高" },
  { name: "--el-font-size-title-large", value: "20px", usage: "Title · Large" },
  { name: "--el-font-line-height-title-large", value: "28px", usage: "Title · Large 行高" },
  { name: "--el-font-size-title-small", value: "16px", usage: "Title · Small" },
  { name: "--el-font-line-height-title-small", value: "24px", usage: "Title · Small 行高" },
  { name: "--el-font-size-small", value: "13px", usage: "Body · Default" },
  { name: "--el-font-line-height-small", value: "22px", usage: "Body · Default 行高" },
  { name: "--el-font-size-base", value: "14px", usage: "Body · Large" },
  { name: "--el-font-line-height-base", value: "22px", usage: "Body · Large 行高" },
  { name: "--el-font-size-extra-small", value: "12px", usage: "Body · Small" },
  { name: "--el-font-line-height-extra-small", value: "20px", usage: "Body · Small 行高" },
  { name: "--el-font-weight-regular", value: "400", usage: "Regular" },
  { name: "--el-font-weight-primary", value: "500", usage: "Medium" },
  { name: "--el-font-weight-bold", value: "700", usage: "Bold" },
];

export type TypographyTokensSectionMode = "base-only" | "playground-only";

/** EDS Foundations · Typography（Figma 1-Text 2.3.0） */
export function TypographyTokensSection({
  embedded,
}: {
  embedded?: TypographyTokensSectionMode;
} = {}) {
  const [role, setRole] = useState<TextRole>("Title");
  const [textType, setTextType] = useState<TextType>("Default");
  const [size, setSize] = useState<TextSize>("Default");
  const [weight, setWeight] = useState<TextWeight>("Regular");
  const [label, setLabel] = useState("Element Plus Design");

  const showIntro = !embedded;
  const showPlayground = !embedded || embedded === "playground-only";
  const showBaseTable = !embedded || embedded === "base-only";
  const showTypeGrid = showPlayground;
  const showCode = showPlayground;

  const inner = (
    <>
      {showIntro ? (
        <>
          <h2 className="text-xl font-semibold">Typography</h2>
          <p className="mt-2 max-w-3xl text-sm text-[color:var(--ds-text-regular)]">
            与 EDS「设计令牌 / 字体」一致：Figma{" "}
            <code className="text-xs">1-Text 文本 (2.3.0)</code> 为 Title / Body 排版矩阵，不是独立交互组件。
            业务侧请直接使用 CSS 变量或 <code className="text-xs">Text</code> 辅助展示。
          </p>
        </>
      ) : null}

      {showPlayground ? (
      <div className={cn(!embedded && "mt-6", "overflow-hidden rounded-el-base border border-[color:var(--ds-stroke-divider)]")}>
        <div className="border-b border-[color:var(--ds-stroke-divider)] bg-[color:var(--ds-bg-muted)] px-4 py-2 text-xs font-medium text-[color:var(--ds-text-secondary)]">
          预览 · 对照 Figma 变体
        </div>
        <div className="flex min-h-[100px] items-center bg-[color:var(--ds-bg-canvas)] px-6 py-8">
          <Text role={role} textType={textType} size={size} weight={weight}>
            {label}
          </Text>
        </div>
        <div className="border-t border-dashed border-[color:var(--ds-customize-border)] bg-[color:var(--ds-bg-canvas)] px-4 py-4">
          <CustomizeToolbar>
            <CustomizeField label="Role">
              <CustomizeSelect value={role} onChange={(e) => setRole(e.target.value as TextRole)}>
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </CustomizeSelect>
            </CustomizeField>
            <CustomizeField label="Type">
              <CustomizeSelect value={textType} onChange={(e) => setTextType(e.target.value as TextType)}>
                {types.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </CustomizeSelect>
            </CustomizeField>
            <CustomizeField label="Size">
              <CustomizeSelect value={size} onChange={(e) => setSize(e.target.value as TextSize)}>
                {sizes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </CustomizeSelect>
            </CustomizeField>
            <CustomizeField label="Weight">
              <CustomizeSelect value={weight} onChange={(e) => setWeight(e.target.value as TextWeight)}>
                {weights.map((w) => (
                  <option key={w} value={w}>
                    {w}
                  </option>
                ))}
              </CustomizeSelect>
            </CustomizeField>
            <CustomizeField label="样例文案" wide>
              <CustomizeInput value={label} onChange={(e) => setLabel(e.target.value)} />
            </CustomizeField>
          </CustomizeToolbar>
        </div>
      </div>
      ) : null}

      {showBaseTable ? (
      <div className={cn(!embedded && "mt-8", "overflow-x-auto rounded-el-base border border-[color:var(--ds-stroke-divider)]")}>
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead className="bg-[color:var(--ds-bg-muted)] text-[color:var(--ds-text-secondary)]">
            <tr>
              <th className="px-4 py-2 font-medium">Token</th>
              <th className="px-4 py-2 font-medium">值</th>
              <th className="px-4 py-2 font-medium">用途（Figma Text）</th>
            </tr>
          </thead>
          <tbody>
            {fontTokens.map((row) => (
              <tr key={row.name} className="border-t border-[color:var(--ds-stroke-divider)]">
                <td className="px-4 py-2 font-mono text-xs text-[color:var(--el-color-primary)]">{row.name}</td>
                <td className="px-4 py-2 font-mono text-xs">{row.value}</td>
                <td className="px-4 py-2 text-[color:var(--ds-text-regular)]">{row.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      ) : null}

      {showTypeGrid ? (
      <div className={cn(!embedded && "mt-8")}>
        <h3 className="text-sm font-semibold text-[color:var(--ds-text-primary)]">语义色（Type）</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {types.map((t) => (
            <li
              key={t}
              className={cn(
                "flex items-center justify-between rounded-el-base border border-[color:var(--ds-stroke-divider)] px-4 py-3",
              )}
            >
              <Text role="Body" textType={t} size="Large" weight="Regular">
                {t}
              </Text>
              <code className="text-[10px] text-[color:var(--ds-text-secondary)]">Type:{t}</code>
            </li>
          ))}
        </ul>
      </div>
      ) : null}

      {showCode ? (
      <pre className={cn(!embedded && "mt-8", "overflow-x-auto rounded-el-base border border-[color:var(--ds-stroke-divider)] bg-el-fill-blank p-4 text-xs leading-relaxed")}>
        {`import { Text } from "@/components/Text/Text";

<Text role="Title" textType="Primary" size="Default" weight="Medium">
  Element Plus Design
</Text>

/* 或直接用 token */
<p style={{
  fontFamily: "var(--el-font-family)",
  fontSize: "var(--el-font-size-large)",
  lineHeight: "var(--el-font-line-height-large)",
  color: "var(--el-text-color-primary)",
}}>...</p>`}
      </pre>
      ) : null}
    </>
  );

  if (embedded) return inner;

  return (
    <section id="typography" className="scroll-mt-8">
      {inner}
    </section>
  );
}
