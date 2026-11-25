# 已实现页面 → 前端（最简单版）

**你的目标**：本站 **全屏预览** 长什么样，前端 **改尽量少** 就能一样。

**你怎么做（固定 3 步）**

1. Showcase → **模板** → 打开对应页（如 **A1 安全中心**）
2. 点 **全屏预览**，确认要对齐的效果
3. 切 **代码** → 默认 **全屏交付** → **复制代码** → 让前端：
   - 粘成 `XxxView.vue`
   - 挂一条路由当整页打开
   - 通常 **只改** 代码里的跳转路径（如 `settings[].route`）

**前端工程前提（一次性）**：Vue 3 + Element Plus + vue-router，并已引入 EP 样式。

---

## 两个复制选项（仅部分页面有）

| 选项 | 何时用 |
| --- | --- |
| **全屏交付**（默认） | 要对齐 `/examples/xxx` **整页**（含演示侧栏 + 白卡 + 内容） |
| **仅内容区** | 他们 **已有** 正式侧栏，只换中间一块 |

**不要**单独发 `security-center.css`：样式已打在复制的 `.vue` 里。

---

## 和本仓库 React 的关系

| 你这边 | 给前端的 |
| --- | --- |
| Showcase 预览（React） | **代码 Tab 里的 Vue 单文件** |
| `src/templates/**/*.css` | 已并入 `vueReady` 页的 `<style scoped>` |
| Figma | Showcase 页底 **Dev Mode 链接**（核对用） |

---

## 维护者：新页接入交付

1. 实现 `/examples/<slug>` 全屏
2. `moduleHandoff.ts` 登记
3. `moduleScreens.ts` 增加 **全屏交付** +（可选）**仅内容区** 生成器

模块索引：[MODULE-SCREENS.md](./MODULE-SCREENS.md)
