import {
  SemanticTokenTable,
  TokenPairTable,
  TokensEdsSection,
} from "../../eds/TokensEdsUi";
import { colorBaseRows, colorSemanticGroups } from "../../eds/tokensEdsCatalog";
import { DocPageChrome } from "../DocChrome";

const toc = [
  { id: "positioning", label: "定位", level: 2 as const },
  { id: "system-def", label: "系统定义", level: 3 as const },
  { id: "goals", label: "设计目标", level: 3 as const },
  { id: "tokens-base", label: "Base Tokens", level: 2 as const },
  { id: "tokens-semantic", label: "Semantic Tokens", level: 2 as const },
];

const meta = [
  { label: "名称", value: "Color System" },
  { label: "ID", value: <code className="text-sm">pt-vars-color-system</code> },
  { label: "类型", value: "全局变量" },
  { label: "层级", value: "原子" },
  { label: "状态", value: "已启用" },
  { label: "版本", value: "v1.0" },
  { label: "维护", value: "PacsTrust DS" },
  { label: "最后更新", value: "2026-11-27" },
];

export function ColorSystemDocPage() {
  return (
    <DocPageChrome title="Color System" meta={meta} toc={toc}>
      <section id="positioning">
        <h2>定位</h2>
        <h3 id="system-def">系统定义</h3>
        <p>
          色彩系统是 PacsTrust Design 的视觉基础之一，通过 Token 定义颜色表达规则，保证设计与开发一致。
          真源为 Figma Variables 与仓库 <code>docs/FOUNDATIONS.md</code>。
        </p>
        <h3 id="goals">设计目标</h3>
        <ul>
          <li>跨组件视觉一致（Element Plus <code>--el-*</code> 映射）</li>
          <li>支持 Light 默认与 Dark / Dark Alpha 主题扩展</li>
          <li>禁止在组件实现中硬编码与 token 冲突的 hex</li>
        </ul>
      </section>

      <section id="tokens-base">
        <TokensEdsSection
          id="color-base"
          title="Base Tokens"
          description="品牌与语义基色；Brand 映射 --pt-brand-color / --el-color-primary。"
        >
          <TokenPairTable rows={colorBaseRows} />
        </TokensEdsSection>
      </section>

      <section id="tokens-semantic">
        <TokensEdsSection id="color-semantic" title="Semantic Tokens" level={2}>
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
        </TokensEdsSection>
      </section>
    </DocPageChrome>
  );
}