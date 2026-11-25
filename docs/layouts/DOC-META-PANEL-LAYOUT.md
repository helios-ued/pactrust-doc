# 文档元数据面板布局（Doc Meta Panel）

**命名**：【文档元数据面板布局】  
**用途**：中后台 **详情页**、设置页只读信息区 — 多行 Key-Value，浅底信息块。  
**首发落地**：固定模版 **`B1-个人资料`**（`hVUwZpK4` · 页 `个人资料` · `193:6790`）· 代码 `DocMetaPanel` / `PersonalProfilePanel`  
**参考实现**：Showcase `B2-个人信息`（同布局，不同页标题示例）

## 结构（HTML）

```
Page Layout 白卡
└── .pt-doc-meta-panel-outer          ← 白卡内容区内边距
    └── section.pt-doc-meta-panel       ← aria-label 描述本面板（如「个人信息」）
        ├── .pt-doc-meta-panel__label
        ├── .pt-doc-meta-panel__value
        └── …（按行交错，Grid 自动排布）
```

## 布局参数（CSS Grid）

| 属性 | 值 | Token / 说明 |
| --- | --- | --- |
| 外层 padding | `16px 20px` | `--pt-space-16` · `--pt-space-20` |
| Panel padding | **`20px`（四边）** | `--pt-space-20` · 与当前 Figma Page Body 一致 |
| Grid 列 | `120px` · `minmax(0, 1fr)` | 左列固定 **120px**，右列占满 |
| row-gap | `12px` | `--pt-space-12` |
| column-gap | `16px` | `--pt-space-16` |
| Panel 背景 | `Fill` 浅色 | `--el-fill-color-light` |
| 圆角 | base | `--el-border-radius-base` |
| 字号 / 行高 | 正文 | `--el-font-size-base` · `--el-font-line-height-base` |
| 字色 | Key / Value 同 primary | `--el-text-color-primary`，regular |

## 代码

- 组件：`src/templates/layout/doc-meta-panel/DocMetaPanel.tsx`
- 样式：`src/templates/layout/doc-meta-panel/doc-meta-panel.css`
- 类名前缀：**`pt-doc-meta-panel`**（勿再复制一套 BEM）

```tsx
import { DocMetaPanel } from "@/templates/layout/doc-meta-panel/DocMetaPanel";

<DocMetaPanel
  ariaLabel="个人信息"
  items={[
    { id: "name", label: "名称", value: "…" },
  ]}
/>
```

## Figma 对照

| 区域 | 建议 |
| --- | --- |
| Content 槽 | padding `16,20,16,20`（outer） |
| Page Body / Panel 帧 | padding **`20` 四边** · fill `Fill/Light` · radius **6**（画布）→ 代码 `--el-border-radius-base` |
| 行 | 垂直间距 **12**；行内 label **120** 宽 · value 拉满 |
| 文案样式 | Key / Value 均为 **Text/Primary**（与参考 DocMeta 一致，不用 secondary 作标签色） |

## 何时使用 / 何时不用

- **用**：详情只读字段、审计元数据、配置摘要、4–12 行 KV。
- **不用**：可编辑表单（用 Form + `el-form`）；密集表格（用 Table）；B1 式无底色 flex 行（见 `pt-personal-profile`）。

## 维护

新增详情页时 **优先复用 `DocMetaPanel`**；仅当列宽或间距经设计变更并写入本表后，再通过 props / CSS 变量扩展，勿在业务 CSS 里再写一套 grid。