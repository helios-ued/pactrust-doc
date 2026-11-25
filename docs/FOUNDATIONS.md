# 设计基础（Design Foundations）

来源 Figma 页面：**🔵 设计基础**（node `5845:15928`）及封面/文档变量抽样。

---

## 色彩（Light 默认）

| Token / 变量 | 值 | 用途 |
| --- | --- | --- |
| `Brand/color` | `#1677ff` | 品牌主色（CSS：`--pt-brand-color` / `--el-color-primary`） |
| `Brand/color -dark-2` | `#125fcc` | 品牌深色阶 |
| `Brand/color -9` … `-3` | `#e8f1ff` … `#5ca0ff` | 品牌浅阶（映射 `--el-color-primary-light-*` · 按钮/导航等） |
| `Primary/color` | `#409eff` | **Feedback** 组件 Alert/Message 主色（`--pt-feedback-primary`） |
| `Primary/color-7` | `#c6e2ff` | Message 边框等（`--pt-feedback-primary-7`） |
| `Primary/color-9` | `#ecf5ff` | Alert Default 浅底（`--pt-feedback-primary-9`） |
| `Success/color` | `#00b42a` | 成功（`--el-color-success`） |
| `Success/color-9` | `#e6f8ea` | 成功浅底（`--el-color-success-light-9`） |
| `Success/color-7` | `#b3e9bf` | Message 边框（`--el-color-success-light-7`） |
| `Warning/color` | `#ff7d00` | 警告（`--el-color-warning`） |
| `Warning/color-9` | `#fff2e6` | 警告浅底（`--el-color-warning-light-9`） |
| `Warning/color-7` | `#ffd8b3` | Message 边框（`--el-color-warning-light-7`） |
| `Error/color` | `#f53f3f` | 危险 / 错误（`--el-color-danger` · Figma Danger） |
| `Error/color-9` | `#feecec` | 危险浅底（`--el-color-danger-light-9`） |
| `Error/color-7` | `#fcc5c5` | Message 边框（`--el-color-danger-light-7`） |
| `Info/color-9` | `#f4f4f5` | 信息浅底（`--el-color-info-light-9`） |
| `Info/color-7` | `#dedfe0` | Message 边框（`--el-color-info-light-7`） |
| `Fill/Lighter` | `#fafafa` | Loading 预览底（`--el-fill-color-lighter`） |
| `Text/Primary` | `#303133` | 主文案 |
| `Text/Write` | `#ffffff` | 反白文案 |
| `Bg/Base` / `Fill/Blank` / `White` | `#ffffff` | 页面与容器底 |
| `Border/Light` | `#e4e7ed` | 浅边框 |
| `Border/Base` | `#dcdfe6` | 默认边框 |

Dark / Dark Alpha 色板见 Figma 帧 **Colors Dark**、**Dark Alpha**（node 同页下子帧）；实现时使用 Element Plus 暗色变量模式，不单独定义第三套 hex。

---

## 字体

| 项 | 值 |
| --- | --- |
| 字体族 | **Inter**（`Font Family/Name` → `--el-font-family`） |
| Font Size 刻度 | Figma 变量 11 档：`extra-small` 12 … `6XL-large` 48（见 `--pt-font-size-*`） |
| Line Height | 与 Font Size 同组 11 档（`--pt-line-height-*`） |
| Element 别名 | `--el-font-size-extra-large` = Figma **4XL-large**（32px），非 `extra-large`（20px） |
| Text 2.3.0 | Title/Body × Default/Large/Small → 上表 `large` / `extra-large` / `medium` 等 |
| 同步命令 | `npm run fonts:sync`（读 `scripts/data/figma-font-variables.json` → `tokens.css`） |

历史：2023-11-14 由苹方改为 Inter；14 号字行高与 Element 官方 token 对齐。

---

## 圆角（Radius）

| Token | px |
| --- | --- |
| `Radius/None` | 0 |
| `Radius/Small` | 2 |
| `Radius/Base` | 4 |
| `Radius/Round` | 20 |
| `Radius/Circle` | 9999 |
| `radius-xl` | 12 |

---

## 间距（Spacing）

| Token | px |
| --- | --- |
| `spacing-lg` | 12 |
| `spacing-xl` | 16 |
| `spacing-3xl` | 24 |
| `spacing-4xl` | 32 |
| `spacing-7xl` | 64 |
| `spacing-8xl` | 80 |

布局组件 **Space**、**Splitter** 的间距规则以 Figma 组件页为准。

---

## 阴影

| CSS 变量 | 说明 |
| --- | --- |
| `--el-box-shadow` | 双层 drop shadow（8 + 12 blur） |
| `--el-box-shadow-light` | 单层 12 blur |
| `--el-box-shadow-lighter` | 单层 6 blur |
| `--el-box-shadow-dark` | 三层强调阴影 |
| `Shadows/shadow-lg` | 设计稿补充大阴影（卡片/浮层参考） |

Shadow 色值：`#0000000a` / `#00000014` / `#0000001f` / `#00000029` 等阶梯透明度。

---

## 布局与容器

Figma 帧 **Container**（node `5845:16955`）定义 Element 栅格与 `Element base` 模块尺寸。

## Showcase 小屏（模板 · Layout）

模板 iframe（`TemplateFrameDemo`）与 Layout iframe（`LayoutFrameDemo`）预览区约 **720–900px** 宽：须可滚动或断点堆叠，与全屏 `/examples/*` 共用组件 CSS（`login-page.css`、`permission-management.css` 等）。

Figma **✨ Layout** 页（`8655:41369`）四帧：**01** 侧栏 240 画布色 · Sidebar **Style 02** · Main **16** · Layout **圆角 20** · Footer 隐藏 · **02** 侧栏白+阴影 · **Style 01** · Footer **40** · Main 满铺 · **03** 同 02 壳 · **Style 04** 分组菜单 · Global-header **无**底部分割线 · Content **`8px 24px 24px`** · **04** 根 **page** 灰 · **Style 01** · Footer 隐藏 · **Global-header** 在 Main 顶（无页标题）· **Page 16** · **Page Layout 圆角 4** · 内 **标题区** + Content **24**。见 `layoutFrameSpecs.ts`。

**模板 C1 · Layout-01–04**：`DashboardShell` 壳层宽度 **&lt; 1000px** 时侧栏自动 **Unfold off**（**58px** 图标轨，Figma `3313:56233`）；≥ 1000px 恢复 **240px** 展开（用户可用手动收起，窄屏下强制收起）。以壳层 `ResizeObserver` 为准（Showcase 预览区 &lt; 1000px 同样生效）。

**C1 权限管理内容区**：侧栏收起不改变 **用户组 240px + 权限表** 横向分栏与样式，仅 **权限区可用宽度**增加；表格过窄时在 `.pt-perm-matrix__table-wrap` 内横向滚动，禁止改为上下堆叠。

模块界面页（**🎨 模块界面**）为组合示例，**不作为新组件变体定义来源**。
