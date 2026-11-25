# Logo 语言 Dropdown（PacsTrust 固定模版 / 模块界面）

后续改 Figma 或跑脚本时 **必须** 按本规则处理语言切换，勿用手搓菜单或遗留 `Dropdown Trigger`。

## 组件结构

| 层级 | 要求 |
| --- | --- |
| 位置 | 仅在各帧 **`Logo`** 内；**禁止** 页面根上出现孤立 `Dropdown` 实例 |
| 外壳 | 库 **`Dropdown` · `Type=Text`**（非单独 `Dropdown Trigger`） |
| 触发器 | 子层 **`dropdown-trigger/Default/Text/Default`**（由旧 `Dropdown Trigger` **swap** 得到） |
| 触发器内 | **`Text-button`** + 同级独立 **`arrow-down`**（非 Text-button 的 Right-icon 槽） |
| 菜单 | 嵌套在 Dropdown 内 **`Dropdown Menu`** · `Size=Large, Pop-up=None`；勿把菜单挂在帧根 |

## 图标与箭头

- **Left-icon**：库 **Language** 图标 · **14px**（`LIB_ICON_LANGUAGE`）
- **Right-icon** 布尔：**关**（`Right-icon#2936:98` = false）
- **arrow-down**：始终可见；填充色 **与 Left-icon 一致**（收起灰 / 展开品牌蓝）

## 状态机（Text-button 用 `Type=`，勿混用孤立的 `Style=Primary`）

| 状态 | `Show-select#4242:0` | Text-button `Type` | 文案色 / 图标色 |
| --- | --- | --- | --- |
| **收起**（默认、报错、有内容、中文、聚焦等） | **off** | **Default** | Text/Primary + Icon/Regular **灰** |
| **展开**（仅 `*-点击-语言`） | **on** | **Primary** | 颜色变量 **`Brand/color`**（非手写 hex） |

- 规范化：`normalizeTextButtonToTypeSet` 对齐 **Dropdown Trigger** 套装里的  
  `Type=Default, State=Default, Plain=False, Size=Default` / `Type=Primary, …`
- 文案属性：Type 套装用 **`Text#5837:0`**；旧 Style 套装用 **`Text#2938:485`**
- EN 触发器文案 **`English`** · `-中文` 帧 **`简体中文`**
- 展开态菜单：**English** → `Type=Multiple Choice` + 勾选 · **简体中文** → `State=Hover`

## 品牌色（变量）

- 展开态 Primary：**绑定 Figma 颜色变量 `Brand/color`**（见 `FIGMA-VARIABLES.md`）
- 触发器文字、Language、**arrow-down**、English 勾选等应与组件/变量体系一致，**禁止**实例级随意填色号
- 收起态用 **Text/Primary**、**Icon/Regular** 等对应变量；**不得** 误留 Primary 展开色

## 脚本与库 Key（`figma-use-interaction-matrix.js`）

| 符号 | Component key |
| --- | --- |
| `LIB_DROPDOWN_SET` | `a89d6c665ecce46d2cae6843f64b33e90363f20c` |
| `LIB_DROPDOWN_TRIGGER_SET` | `df21be62f6671f661d0dc2bc5ffd88b70e01df64` |
| `LIB_DROPDOWN_MENU_SET` | `b17c4cb65e981fbc1e92039679796b7387995826` |
| `LIB_ICON_LANGUAGE` | `0bfe635aecabca4f4d896987a841aa53228fdbb2` |

主要函数：`ensureLogoDropdown` · `ensureDropdownTriggerNew` · `patchDropdownClosed` · `patchDropdownOpen` · `patchClickLang` · `patchDropdownChevron` · `patchLangMenuInside` · `removeOrphanPageDropdowns`

## 验收

- [ ] Logo 内只有一个 `Dropdown`，页根无 `Dropdown`
- [ ] 非 `-点击-语言`：`Show-select` off · Type Default · 灰字灰图标
- [ ] `-点击-语言`：Primary 色来自 **`Brand/color` 变量**（非 detach / 非手写 hex）
- [ ] Right-icon 关 · arrow 与 Language 同色 · 菜单在 Dropdown 内右对齐

参见交互矩阵：`docs/MODULE-SCREENS.md` §6。