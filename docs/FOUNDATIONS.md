# 设计基础（Design Foundations）

来源 Figma 页面：**🔵 设计基础**（node `5845:15928`）及封面/文档变量抽样。

---

## 色彩（Light 默认）

| Token / 变量 | 值 | 用途 |
| --- | --- | --- |
| `Primary/color` | `#409eff` | 品牌主色 |
| `Primary/Border/color` | `#409eff` | 主色边框 |
| `Primary/Background/color-9` | `#ecf5ff` | 主色浅底 |
| `Primary/Background/color-8` | `#d9ecff` | 主色浅底 |
| `Primary/Background/color-7` | `#c6e2ff` | 主色浅底 |
| `Primary/Background/color-5` | `#a0cfff` | 主色中间阶（2025-10-27 由 `#9FCEFF` 调整） |
| `Success/color` | `#00b42a` | 成功 |
| `Success/Border/color` | `#00b42a` | 成功边框 |
| `Success/Background/color` | `#00b42a` | 成功背景（组件内引用） |
| `Warning/Border/color` | `#ff7d00` | 警告 |
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
| Display sm / Semibold | 30px / 600 / line 38 |
| Headline1 Bold | 20px / 700 / line 28 |
| Headline2 | 18px · Regular 400 / Medium 500 / Bold 700 · line 26 |
| Body（Element 体系） | 以 `--el-font-size-*` 与 `--el-font-line-height-*` 为准 |

历史：2023-11-14 由苹方改为 Inter；14 号字行高与 Element 官方 token 对齐。

---

## 圆角（Radius）

| Token | px |
| --- | --- |
| `Radius/None` | 0 |
| `Radius/Small` | 2 |
| `Radius/Base` | 4 |
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

Figma 帧 **Container**（node `5845:16955`）定义 Element 栅格与 `Element base` 模块尺寸，模块界面页（**🎨 模块界面**）为组合示例，**不作为新组件定义来源**。
