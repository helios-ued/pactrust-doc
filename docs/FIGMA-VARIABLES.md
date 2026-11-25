# Figma 变量规则（强制）

在 **Element —— PacsTrust Design** 中：**所有组件与界面以库内已发布的变量（Variables）为准**；颜色、间距、圆角、字号、描边、填充等 **优先绑定变量**，不靠实例上临时数值「凑效果」。

## 优先级

1. **已发布组件** → 用正确 **变体（Variant）** + 组件内 **既有变量绑定**
2. **帧 / 局部样式** → 绑 Figma **颜色 / 数字 / 字符串变量**（命名与 `docs/FOUNDATIONS.md`、库内 **🔵 设计基础** 一致）
3. **代码** → `docs/FOUNDATIONS.md`、`src/styles/tokens.css` 的 `--pt-*` / `--el-*` 为 **实现映射**，不是 Figma 里自造 token 的依据

## 变量示例（非穷举）

| 类型 | 变量名示例 |
| --- | --- |
| 品牌 | `Brand/color` 及深浅阶 |
| 文案 | `Text/Primary`、`Text/Secondary`、`Text/Write` |
| 图标 | `Icon/Regular` 等 |
| 状态 | `Success/color`、`Warning/color`、`Error/color` |
| 填充 / 底 | `Fill/Darker`、`Fill/Lighter`、`Bg/Base` |
| 边框 | `Border/Light`、`Border/Base` |
| 间距 / 圆角 / 字号 | 以库内数字变量为准（见 Figma 设计基础页） |

完整色板与 CSS 对照见 **`docs/FOUNDATIONS.md`**。

## 禁止

- **不要自己随便定义** 新 hex、新间距、新圆角、新语义色名（含「看起来差不多」的替代色）
- **不要** detach 变量后用纯色覆盖 brand / text / border / state
- **不要** 在脚本里批量 `setSolid` / 写死 `{r,g,b}` 替代变量（历史脚本若存在，新任务应改为绑变量或交回设计）
- 固定模版页若已定稿：**勿擅自批量改样式**

## 缺少变量时（Agent / 协作者）

若当前节点或组件 **没有** 可用的变量绑定，或文档与库中 **找不到** 对应 token：

1. **停下来提醒用户**（说明：组件名、属性、期望语义、已查过的文档/Figma 位置）
2. **不要** 自创变量名、不要先写一个「临时 hex」交付
3. 由用户在库中 **补变量 / 改组件** 或给出正式 token 名后再继续

## 关联

- Dropdown：`docs/DROPDOWN-LANGUAGE.md`
- 组件变体：`docs/COMPONENTS.md`
- 模块帧验收：`docs/MODULE-SCREENS.md`