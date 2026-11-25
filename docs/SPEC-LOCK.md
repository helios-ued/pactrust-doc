# Element —— PacsTrust Design · 规范锁定

> **唯一设计源（Source of Truth）**  
> Figma：[Element —— PacsTrust Design](https://www.figma.com/design/wEUoBPgPgqLRZ2qBlO7W1C/Element-%E2%80%94%E2%80%94-PacsTrust-Design?node-id=137-25883&m=dev)  
> 本仓库文档由 Figma 组件库导出，用于锁定 PacsTrust 产品与代码实现边界。

---

## 1. 适用范围

| 允许 | 禁止 |
| --- | --- |
| 使用本库已收录组件及其变体 | 引入 Ant Design / shadcn / 其它 UI 库替代同名组件 |
| 使用 Figma Variables 对应 token（`--el-*`） | 硬编码与 token 冲突的颜色、字号、圆角、阴影 |
| 在组件 **Slot** 内放置业务内容 | 改动组件结构、间距、状态色以「更好看」为由 |
| 按 Element Plus API 映射 Figma 变体 | 自造 Figma 未定义的变体名或状态 |

---

## 2. 命名与变体约定（2026-05-07 起）

1. **布尔变体**：Figma 使用 `False` / `True`（历史文档中的 `OFF` / `ON` 仅作对照，生成代码时统一为 boolean）。
2. **变体维度名**：保持 Figma 英文枚举（如 `Type`、`State`、`Size`、`Plain`），映射到 Element Plus 时使用官方 prop 名。
3. **语义色**：Figma `Danger` ↔ Element Plus `danger`；Figma `Disable` / `Disabled` ↔ `disabled`。
4. **Slot**：标注了 Slot 的组件，业务文案/图标/操作区必须走 Slot，不得写死在封装层。
5. **主题模式**：默认 **Light（Default）**；Dark / Dark Alpha 仅通过变量集合切换，不得单独写死一套组件样式。

---

## 3. 组件 ↔ 代码映射原则

| Figma 组件集 | 推荐代码 |
| --- | --- |
| `Button` / `Text-button` / `Icon-button` | `el-button`（`type` / `plain` / `size` / `disabled` / `round` / `link` / `text`） |
| `Input` / `Password` / `Textarea` / `Mixed-input` | `el-input` / `el-input` type=password / `el-input` textarea / 组合 slot |
| `Alert` / `Alert-带有辅助文字` | `el-alert` |
| 其余组件 | Element Plus 同名组件（见 [COMPONENTS.md](./COMPONENTS.md) 目录） |

实现或 AI 生成 UI 时：**先查本仓库组件变体表，再查 Element Plus 文档**；两者冲突时以 **Figma 本文件变体集合** 为准。

---

## 4. Token 使用（摘要）

完整 token 见 [FOUNDATIONS.md](./FOUNDATIONS.md)。强制规则：

- 文本：`--el-text-color-primary` / `--el-text-color-regular` / `--el-text-color-write`
- 品牌与状态：`--pt-brand-color` / `--el-color-primary`（`#1677ff`）、Success `#00b42a`、Warning `#ff7d00`、Danger `#f53f3f`（Figma `Error/color`）
- 边框：`--el-border-color` 系列（Light `#e4e7ed`，Base `#dcdfe6`）
- 圆角：`Radius/None` 0 · `Small` 2 · `Base` 4 · `Circle` 9999 · `radius-xl` 12
- 字体：**Inter**（与 Figma 一致）
- 阴影：使用 `--el-box-shadow` / `--el-box-shadow-light` / `--el-box-shadow-lighter` / `--el-box-shadow-dark`

---

## 5. 文档维护

| 文件 | 内容 |
| --- | --- |
| `figma-source.json` | Figma 文件 key、页面 nodeId、`moduleScreenFrames` |
| `docs/FOUNDATIONS.md` | 设计基础 token |
| `docs/COMPONENTS.md` | 组件目录与变体锁定 |
| `docs/MODULE-SCREENS.md` | 🎨 模块界面帧索引与 D2 等锁定说明 |
| `docs/CHANGELOG.md` | Figma「文档说明」变更摘要 |
| `.cursor/rules/*.mdc` | Cursor Agent 强制规范 |

Figma 库更新后：重新拉取对应页面 metadata → 更新 `COMPONENTS.md` 变体表 → 追加 `CHANGELOG.md`。

---

## 6. AI / 开发自检清单

- [ ] 使用的组件名在本库 `COMPONENTS.md` 目录中
- [ ] 变体枚举与 Figma symbol 名一致（未增删状态）
- [ ] 颜色/字号/圆角来自 token，非随意 hex
- [ ] 未引入库外 UI 组件替代
- [ ] 需要插槽处使用 Slot，而非固定写死
