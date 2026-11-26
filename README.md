# Element —— PacsTrust Design

PacsTrust 产品线的 **Element Plus 设计系统** 规范仓库。设计稿唯一来源为 Figma 文件 [Element —— PacsTrust Design](https://www.figma.com/design/wEUoBPgPgqLRZ2qBlO7W1C/Element-%E2%80%94%E2%80%94-PacsTrust-Design?node-id=137-25883&m=dev)。

本仓库包含：

- 锁定后的组件变体与 token 文档（`docs/`）
- Figma 页面索引（`figma-source.json`）
- **EDS Desktop 风格的在线 Showcase**（`src/showcase/`，Vite + React）
- Cursor 规则（防止 AI / 开发偏离组件库）

### 本地预览设计系统站点

```bash
npm install
npm run dev
```

浏览器打开后默认进入 **设计令牌**；侧栏可浏览全部 Figma 组件目录。已实现交互预览的组件带绿点（Button、Input、Checkbox、Link、Alert、Popover/浮层）。

### GitHub 远程与 Pages（域名以后再说 · 不影响本地）

本地仍用 `npm run dev`（`base: /`）。发布只在 **GitHub Actions 云端** 构建，不改你 Cursor 里的文件。

**远程仓库（当前）：**

`https://github.com/helios-ued/pactrust-design.github.io`

```bash
git remote add origin https://github.com/helios-ued/pactrust-design.github.io.git
git push -u origin main
```

**Pages · 双站点（强制分开）：**

| 仓库 | 地址 |
|------|------|
| `pactrust-desktop` | 设计令牌 + 组件 → `https://helios-ued.github.io/pactrust-desktop/` |
| `pactrust-doc` | 中台模板原型（无设计规范）→ `https://helios-ued.github.io/pactrust-doc/` |

见 [docs/DEPLOY-TWO-SITES.md](./docs/DEPLOY-TWO-SITES.md)。本地合体：`npm run dev`；本地原型：`npm run dev:doc`。

## 快速阅读

| 文档 | 说明 |
| --- | --- |
| [docs/SPEC-LOCK.md](./docs/SPEC-LOCK.md) | **必读** — 什么能改、什么不能改 |
| [docs/FOUNDATIONS.md](./docs/FOUNDATIONS.md) | 颜色、字体、圆角、间距、阴影 |
| [docs/COMPONENTS.md](./docs/COMPONENTS.md) | 组件目录与已解析变体 |
| [docs/CHANGELOG.md](./docs/CHANGELOG.md) | Figma 库变更摘要 |
| [docs/BLUE-FLUTED-GLASS.md](./docs/BLUE-FLUTED-GLASS.md) | 蓝色棱纹流动背景（Blue Fluted Glass）独立动效 |
| [figma-source.json](./figma-source.json) | 各组件 Figma nodeId |

## 给开发者

1. 做 UI 前先查 `docs/COMPONENTS.md` 是否有该组件及变体。
2. 样式只用 `docs/FOUNDATIONS.md` 中的 token（CSS 变量 `--el-*`）。
3. 实现层优先 **Element Plus** 同名组件，prop 与 Figma 变体对齐。
4. 不确定时以 Figma Dev Mode 当前组件实例为准，勿自行发明变体。
5. **模块界面**（权限管理、API 管理等）：见 [docs/FRONTEND-HANDOFF.md](./docs/FRONTEND-HANDOFF.md)，在 Showcase **模板** 页复制 Vue 代码并对照 `/examples/*` 全屏预览。

## 给 Cursor Agent

项目规则见 `.cursor/rules/element-pacstrust-design-system.mdc`（`alwaysApply: true`）。

## 维护

Figma 更新 → 拉取 metadata → 更新 `COMPONENTS.md` / `FOUNDATIONS.md` / `CHANGELOG.md` → 提交本仓库。
