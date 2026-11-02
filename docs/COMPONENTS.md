# Element —— PacsTrust Design · 组件规范

来源：Figma 文件 **Element —— PacsTrust Design** 各组件 Page 内 **Component Set（symbol 名）**。

本文锁定：**组件名、变体维度、枚举值、子组件**。Figma 图层笔误在备注中给出规范名。

---

## 目录

### Basic 基础

| 组件 | Figma Page | nodeId |
| --- | --- | --- |
| [Button 族](#button-族) | 1-Button 按钮 | `12:2479` |
| Button Group | 1-Button Group 按钮组 | `5837:16310` |
| Icon | 1-Icon 图标 | `6:1102` |
| Link | 1-Link 链接 | `1220:26096` |
| Text | 1-Text 文本 | `5803:2777` |
| Scrollbar | 1-Scrollbar 滚动条 | `5808:55352` |
| Space | 1-Space 间距 | `5817:5478` |
| Splitter | 1-Splitter 分隔面板 | `6589:19102` |

### Form 表单

Cascader · Checkbox · ColorPicker · ColorPickerPanel · DatePicker · DateTimePicker · Form · Input · InputNumber · InputTag · InputOTP · Radio · Rate · Select · Slider · Switch · TimePicker · TimeSelect · Transfer · Upload  

（nodeId 见 `figma-source.json`）

### Data 数据展示

Avatar · Badge · Calendar · Card · Carousel · Collapse · Descriptions · Empty · Image（Figma：`Imgae`）· Pagination · Progress · Result · Statistic · Segmented · Skeleton · Table · Tag · Timeline · Tour · Tree · TreeSelect  

### Navigation 导航

Anchor · Backtop · Breadcrumb · Dropdown · Menu · Page Header · Steps · Tabs  

### Feedback 反馈

Alert · Dialog · Drawer · Loading · Message · MessageBox · Notification · Popconfirm · Popover · Tooltip  

### Others

Divider · Watermark  

---

## 变体提取说明

- 下列 **已展开** 组件自 Figma metadata symbol 名解析。
- 未展开组件：实现时打开对应 Page，读取 Component Set 的 variant properties，**不得假设**与 Element Plus 文档示例完全一致。
- 每个组件页均含 **Copy me - light / Dark / Dark Alpha** 实例区，用于主题对照。

---

## Button 族

Figma Page：`1-Button 按钮`（`12:2479`）

### Button

```ts
type ButtonProps = {
  type?: "Default" | "Primary" | "Success" | "Warning" | "Danger" | "Info"
  state?: "Default" | "Hover" | "Focus" | "Press" | "Disable"
  plain?: boolean // Figma: Plain False | True
  size?: "Default" | "Large" | "Small"
}
```

| 维度 | 值 |
| --- | --- |
| type | `Default` · `Primary` · `Success` · `Warning` · `Danger` · `Info` |
| state | `Default` · `Hover` · `Focus` · `Press` · `Disable` |
| plain | `false` · `true` |
| size | `Default` · `Large` · `Small` |

**Element Plus 映射**：`type`（danger 对应 Danger）· `plain` · `size`（default/large/small）· `disabled`（Disable）· 交互态由 CSS 处理，勿在业务代码写死 Hover/Focus/Press 样式。

### Text-button

变体维度与 **Button** 相同（`Type` · `State` · `Plain` · `Size`），共 180 variants。

**映射**：`el-button` `text` 或 `link` 属性按设计稿实例为准。

### Icon-button

```ts
type IconButtonProps = {
  type?: "Default" | "Primary" | "Success" | "Warning" | "Danger" | "Info"
  state?: "Default" | "Hover" | "Focus" | "Press" | "Disable"
  plain?: boolean
  round?: boolean // Figma: Round False | True
}
```

共 120 variants。

**映射**：`el-button` + `circle` / `round` + icon slot。

---

## Input 族

Figma Page：`2-Input 输入框`（`34:2902`）

### Input

```ts
type InputProps = {
  state?: "Default" | "Hover" | "Focus" | "Error" | "Disabled" // Figma 亦见 Disable
  size?: "Default" | "Large" | "Small"
  input?: boolean // Figma: Input False | True（是否有输入内容）
}
```

| 维度 | 值 |
| --- | --- |
| state | `Default` · `Hover` · `Focus` · `Error` · `Disabled` |
| size | `Default` · `Large` · `Small` |
| input | `false` · `true` |

**映射**：`el-input` · `size` · 校验失败 → `Error` 态样式 · `disabled`。

### Password

```ts
type PasswordProps = {
  state?: "Default" | "Hover" | "Focus" | "Error" | "Disable"
  size?: "Default" | "Large" | "Small"
  display?: boolean // 显示明文切换，Figma: Display True | False
  input?: boolean
}
```

### Textarea

```ts
type TextareaProps = {
  state?: "Default" | "Hover" | "Focus" | "Error" | "Disable"
  input?: boolean // Figma: Input off | on
}
```

### Mixed-input

组合输入框（前后缀/复合型），见 Figma symbol `Mixed-input`；使用 **Slot** 放置前后缀内容。

---

## Alert

Figma Page：`5-Alert 警告`（`10:5`）

### Alert

```ts
type AlertProps = {
  style?: "Default" | "Fill"
  state?: "Primary" | "Success" | "Warning" | "Danger" | "Info"
  align?: "Left" | "Center"
  closeType?: "Icon" | "Text" | "Default" // Figma: Close-type
}
```

| 维度 | 值 |
| --- | --- |
| style | `Default` · `Fill` |
| state | `Primary` · `Success` · `Warning` · `Danger` · `Info` |
| align | `Left` · `Center` |
| closeType | `Icon` · `Text` · `Default`（无关闭） |

**映射**：`el-alert` · `type` · `effect`（light/dark 对应 Default/Fill 视觉）· `center` · `closable` / 自定义 close。

### Alert-带有辅助文字

```ts
type AlertWithDescriptionProps = {
  type?: "Primary" | "Success" | "Warning" | "Danger" | "Info"
}
```

**映射**：`el-alert` + `description` slot / prop。

---

## Badge

Figma 描述：**徽章**（node `88:22025` 实例说明）。

与 Data 页 **3-Badge 徽章** 组件集一致；数字徽章、点状徽章变体以该页 symbol 名为准。

---

## Message（变更锁定）

依据 2025-10-28 文档说明：

- **无** Center 变体
- 宽度随文案自适应
- 新增 **Plain** 属性

生成代码时不得恢复已移除的 Center 布局。

---

## 组件页结构约定

每个组件 Page 通常包含：

1. **Design system header / footer**
2. **🔒 组件注释**（变体矩阵说明）
3. **Component Set**（源 symbol）
4. **Copy me - light / Dark / Dark Alpha**（主题实例）

带 **↳** 前缀的 Page 表示已完成变量适配（2023-11-21 说明）。

---

## 待补全变体表

以下组件已收录于 `figma-source.json`，变体表可在下次 Figma 同步时按 symbol 名批量追加：

Form 全量 · Data 全量 · Navigation 全量 · Feedback 其余 · Others  

同步命令（Agent）：对 `figma-source.json` 中 `nodeId` 调用 Figma MCP `get_metadata`，解析 `<symbol name="...">` 中的 `key=value` 对。
