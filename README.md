# Element —— PacsTrust Design

PacsTrust 产品线的 **Element Plus 设计系统** 规范仓库。设计稿唯一来源为 Figma 文件 [Element —— PacsTrust Design](https://www.figma.com/design/wEUoBPgPgqLRZ2qBlO7W1C/Element-%E2%80%94%E2%80%94-PacsTrust-Design?node-id=137-25883&m=dev)。

本仓库 **不包含** 业务应用代码，仅存放：

- 锁定后的组件变体与 token 文档
- Figma 页面索引（`figma-source.json`）
- Cursor 规则（防止 AI / 开发偏离组件库）

## 快速阅读

| 文档 | 说明 |
| --- | --- |
| [docs/SPEC-LOCK.md](./docs/SPEC-LOCK.md) | **必读** — 什么能改、什么不能改 |
| [docs/FOUNDATIONS.md](./docs/FOUNDATIONS.md) | 颜色、字体、圆角、间距、阴影 |
| [docs/COMPONENTS.md](./docs/COMPONENTS.md) | 组件目录与已解析变体 |
| [docs/CHANGELOG.md](./docs/CHANGELOG.md) | Figma 库变更摘要 |
| [figma-source.json](./figma-source.json) | 各组件 Figma nodeId |

## 给开发者

1. 做 UI 前先查 `docs/COMPONENTS.md` 是否有该组件及变体。
2. 样式只用 `docs/FOUNDATIONS.md` 中的 token（CSS 变量 `--el-*`）。
3. 实现层优先 **Element Plus** 同名组件，prop 与 Figma 变体对齐。
4. 不确定时以 Figma Dev Mode 当前组件实例为准，勿自行发明变体。

## 给 Cursor Agent

项目规则见 `.cursor/rules/element-pacstrust-design-system.mdc`（`alwaysApply: true`）。

## 维护

Figma 更新 → 拉取 metadata → 更新 `COMPONENTS.md` / `FOUNDATIONS.md` / `CHANGELOG.md` → 提交本仓库。
