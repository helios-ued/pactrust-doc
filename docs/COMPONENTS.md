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

| 锁定（Figma `11:877` / `12:1159`） | `rounded` **2px** · `px` **16** `py` **8** · gap **8** · 图标 **16**（单行）/ **32**（含描述） |
| Default 底 | Figma `Primary/color-9` `#ecf5ff` 等（`--pt-feedback-*` / `*-light-9`）· 非 `Brand/color-9` |
| Fill | 实底语义色 + **白字** |

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

## Descriptions

Figma Page：`3-Descriptions 描述列表`（`91:22349`）

### Descriptions

```ts
type DescriptionsProps = {
  layout?: "Horizontal" | "Vertical"
  icon?: boolean
  border?: boolean
  size?: "Default" | "Large" | "Small"
}
```

| 维度 | 值 |
| --- | --- |
| Layout | `Horizontal` · `Vertical` |
| Icon | `false` · `true`（标题区 User Info + Operation） |
| Border | `false` · `true` |

### Description Item

```ts
type DescriptionItemProps = {
  layout?: "Horizontal" | "Vertical"
  size?: "Default" | "Large" | "Small"
  border?: boolean
  icon?: boolean
  tag?: boolean // 内容区 Tag Group，Copy me Remarks 行
}
```

**映射**：`el-descriptions` · `column={3}` · `direction`（vertical 对应 Vertical）· `border` · `title` / `extra`；Item 标签图标为 Element Plus 图标（`ElementPlus`）。

**Horizontal**：Label ↔ Content 固定间距 **`--pt-desc-label-gap` = 16px**（Figma `space/large-16`）；Label 与 Content 共用 `--pt-desc-row-py`（Default **6px**），字段名与参数**首行同高**；Content 可 `word-break` 换行。宽屏 **`column={3}`** 行网格 **3×等分**；无 Border 列间距 **`--pt-desc-col-gap` = 16px**。**Border** 时 **`--pt-desc-col-gap` / `--pt-desc-row-gap` = 0**，列/行 **1px 叠线**成整表。Border 时 Label/Content 均为 **12px** padding、文案顶对齐。

**Border + Horizontal**：Label 列固定宽（Figma Copy me `6420:51662`）— Default/Large **144px**，Small **136px**（`--pt-desc-border-label-w-*`）。视口 **≤960px** 时行内为 **auto-fit 网格**（`minmax` 约 **272px / 200px**），无 Border：**列间距 16px**、换行 **`--pt-desc-row-gap` = 12px**；Border：**gap 0** + 叠线（窄屏换行时列不叠线、行仍叠线）。`span-2` 在容器够宽时跨 2 列，否则占满行。Label 宽 `clamp(108px, 28vw, 144px)`；**≤480px** 为 **112px / 104px**。

---

## Segmented

Figma Page：`3-Segmented 分段控制器(2.7.0)`（`6243:916`）

### Segmented

```ts
type SegmentedProps = {
  custom?: boolean
  number?: 2 | 3 | … | 12
  options?: { label: ReactNode; value: string; disabled?: boolean }[]
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
}
```

| 维度 | 值 |
| --- | --- |
| Custom | `false` · `true` |
| Number | `2` … `12`（Custom=false 固定宽 80px/项） |

### Segmented/Button

| State | 说明 |
| --- | --- |
| Default | 透明底 · `--el-text-color-regular` |
| Hover | 文案 `--el-text-color-primary` |
| Selected | 白底 + 轻阴影（同 Showcase「预览 / 代码」）· `--el-text-color-primary` |
| Disabled | 透明底 / 选中仍白底 · `--el-disabled-text-color` |

**映射**：`el-segmented` · `v-model` · `options`。**轨道**：`--el-border-color-lighter`（Light/Border/Lighter，可 `--pt-segmented-track-bg` 覆盖）· padding **3px** · **圆角 6px** · 项间距 **2px** · 项 **圆角 4px** · 项高 **32px** · 水平 padding **16px**。

---

## Tag

Figma Page：`3-Tag 标签`（`44:13712`）

### Tag

```ts
type TagProps = {
  tagStyle?: "Default" | "Success" | "Warning" | "Danger" | "Info"
  size?: "Default" | "Large" | "Small"
  topic?: "Plain" | "Light" | "Dark"
  closable?: boolean // Figma Close
}
```

| 维度 | 值 |
| --- | --- |
| Style | `Default` · `Success` · `Warning` · `Danger` · `Info` |
| Size | `Default`（22px）· `Large`（28px）· `Small`（20px） |
| Topic | `Plain` · `Light` · `Dark` |
| Close | `false` · `true` |

**映射**：`el-tag` · `type` · `effect`（plain / light / dark）· `size` · `closable`。**Close** 图标 `CircleClose`（14px Default/Large · 12px Small）。

### Tag Group

| 维度 | 值 |
| --- | --- |
| Custom | `false` · `true` |
| Number | `2` … `8`（Custom=false） |

**映射**：`el-space` wrap + 多个 `el-tag`；Custom=true 时为多 Style/Topic 组合（Copy me 色板）。

### New Tag

| 维度 | 值 |
| --- | --- |
| Size | `Default`（24px）· `Large`（28px）· `Small`（20px） |
| State | `Default` · `Hover` · `Focus` |

虚线边框 · `--el-border-color`；Hover/Focus 主色描边（Showcase 可强制 State）。

### Check Tag

| checked | 说明 |
| --- | --- |
| `false` | 白底 · 默认描边 · regular 文案 |
| `true` | primary light 底/边 · primary 文案 |

**映射**：`el-check-tag` · `v-model:checked`。

---

## Progress

Figma Page：`3-Progress 进度条`（`96:24398`）

### Progress

```ts
type ProgressProps = {
  percentage?: number
  visualType?: "Default" | "Internal" | "Circle" | "Dashboard"
  state?: "Primary" | "Success" | "Warning" | "Error"
  showLabel?: boolean
}
```

| 维度 | 说明 |
| --- | --- |
| Type | `Default`（6px 条 · **Primary**：轨外 `%` · **Success / Warning / Error**：轨**右缘**状态图标 `CircleCheck` / `WarningFilled` / `CircleClose`，色同 state）· `Internal`（24px · 条内白字 · **&lt;10%** 距填充**左**缘 `4px` · **≥10%** 距填充**右**缘 `4px`）· `Circle` · `Dashboard` |
| State | Primary / Success / Warning / Error → 对应色 token |
| Track | `--el-fill-color-dark`（与 Table Cell Progress 一致） |

**映射**：`el-progress` · `:percentage` · `:stroke-width`（Default **6** / Internal **24** + `text-inside`）· `type="circle" | "dashboard"` · `status`（exception 对应 Error）。

---

## Pagination

Figma Page：`3-Pagination分页`（`94:22961`）

### Pagination

```ts
type PaginationProps = {
  layoutType?: "lt5" | "gt5" | "omitted" | "inputGoTo"
  paginationStyle?: "Default" | "Background" | "Border"
  size?: "Default" | "Small"
  showTotal?: boolean
  showPageSize?: boolean
  showGoTo?: boolean
  totalPages?: number
  currentPage?: number
  onPageChange?: (page: number) => void
}
```

| 维度 | 值 |
| --- | --- |
| Type | `<5page` · `>5page` · `Both ends omitted` · `Input go to` |
| Style | `Default` · `Background` · `Border` |
| Size | `Default`（32px）· `Small`（24px） |

**Item**：选中 primary 加粗；Background 选中 primary 底 + 白字；Border 项带 `--el-border-color-lighter`。**More**：`100 /Page` 下拉 · `Go to` + 40px 输入。**映射**：`el-pagination` · `layout` · `background` · `border` · `size` · `jumper`。

---

## Timeline

Figma Page：`3-Timeline 时间线`（`93:24446`）

### Timeline-Cell

```ts
type TimelineProps = {
  cellType?: "Vertical" | "Horizontal" | "Card"
  size?: "Default" | "Large"
  hollow?: boolean
  activeIndex?: number
  activeType?: "Default" | "Primary" | "Success" | "Warning" | "Error" | "Info"
  items?: TimelineItemData[]
}
```

| Type | 说明 |
| --- | --- |
| Vertical | 标题 + 时间戳纵向（Copy me `6456:4249`） |
| Horizontal | 标题与时间戳同行两端对齐 |
| Card | 时间戳在上 · 卡片（border lighter + shadow lighter） |

**节点**：轨道宽 **14px** · 圆点 **12 / 14px** · 连线 `--el-border-color-lighter` · 文案间距 **16 / 8 / 20px**。

**映射**：`el-timeline` · `el-timeline-item` · `timestamp` · `type`（primary / success / …）；Card 用 `#default` + `el-card`。

---

## Anchor

Figma Page：`4-Anchor 锚点(2.6.0)`（`6244:11901`）

### Anchor

```ts
type AnchorProps = {
  direction?: "Vertical" | "Horizontal"
  markerType?: "Default" | "Underline" // Figma Underline on | off
}

type AnchorLinkProps = {
  level?: 1 | 2 | 3 | 4
  selected?: boolean
  href?: string
  title?: ReactNode
}
```

| 维度 | 说明 |
| --- | --- |
| Level | 未选中左内边距 **14px × level**；选中 Default 标记：**4×14px** 圆角条 + gap **14×level − 4** |
| Underline | 轨道 **2px** `--el-fill-color`；选中内嵌 **2×14px** primary 圆角条；文案 gap **12 + (level−1)×14** |
| 文案 | extra-small · 未选中 `--el-text-color-secondary` · 选中 `--el-color-primary`（横向选中仍为 secondary + 底栏） |
| Horizontal Anchor | 文案下 **3px** primary 全宽圆角条 · Selected 时 `gap`/`padding-top` **4px** |

**映射**：`el-anchor` · `type="default" \| "underline"` · `direction="horizontal"` · `el-anchor-link` · `href` · `title`；嵌套 `el-anchor-link` 对应 Level。

---

## Breadcrumb

Figma Page：`4-Breadcrumb 面包屑`（`105:25236`）

### Breadcrumb

```ts
type BreadcrumbProps = {
  custom?: boolean
  number?: 2 | 3 | 4
  items?: BreadcrumbItemData[]
}
```

| 维度 | 说明 |
| --- | --- |
| Custom | `false` · `true`（`homepage / promotion management / … / promotion list / promotion detail`） |
| Number | `2` · `3` · `4`（末级为 Current） |
| 间距 | 项间 **4px** · 分隔条与文案 **4px** |

### Breadcrumb/item

| State | 样式 |
| --- | --- |
| Default | `base` · `--el-text-color-primary` · 可点击 |
| Hover | `--el-color-primary` · `--el-font-weight-primary` |
| Not current page | `--el-text-color-secondary` · 当前页（无链接） |

**分隔符**：Figma `Other/BreadcrumbSlash` · **12×12** · `--el-text-color-placeholder`。

**映射**：`el-breadcrumb` · `el-breadcrumb-item` · `:to`（可点击段）· 末项无 `to`；Custom 折叠段用 `...` 文案或 `el-breadcrumb-item` 插槽。

---

## Dropdown

Figma Page：`4-Dropdown 下拉菜单`（`1338:48941`）

### Dropdown

```ts
type DropdownProps = {
  triggerType?: "Text" | "Button" | "Split button"
  placement?: "Top" | "Bottom" // Pop-up
}
```

| 子组件 | 说明 |
| --- | --- |
| Trigger Text | Primary 文案 + **14px** `ArrowDown` · `px` **16** · `py` **4** |
| Trigger Button | Primary **32px** + 白字 + 右箭头 |
| Split button | 主按钮 + **0.5px** 分隔 + Icon 段展开菜单 |
| Dropdown Menu | **`width: max-content`** · **`min-width: 100%`**（不小于触发器，随选项内容变宽）· `py` **4** |
| Dropdown Option | 高 **32** · `px` **16** · Hover `--el-fill-color-light` · Disable `--el-text-color-disabled` |

### Component/Dropdown Option

| 维度 | 值 |
| --- | --- |
| Type | `Default` · `Selected`（primary 字重）· `Multiple Choice`（+ **Check 16px**） |
| State | `Default` · `Hover` · `Disable` |
| Description | `false` · `true`（右侧 secondary 文案） |
| Icon | 左 **14px** `Message`（可选） |

**映射**：`el-dropdown` · `split-button` · `#dropdown` + `el-dropdown-menu` · `el-dropdown-item` · `placement`（`top` 对应 Figma Pop-up Bottom）。

---

## Menu

Figma Page：`4-Menu 菜单`（`109:25583`）

### menu

```ts
type MenuProps = {
  menuType?: "Sidebar" | "Top" // Figma menu · Type
  menuSize?: "Large" | "Default" | "Small"
}
```

Showcase **Type** 另含 **`Global-header`**（中后台独立顶栏，非 `el-menu` 变体）。

| 子组件 | 说明 |
| --- | --- |
| Sidebar | 宽 **200** · 右边框 **2px** `--el-border-color-light` · 纵向栈 |
| Top | 底边框 **1px** · 横向 `el-menu` horizontal |
| Size Large | `py` **16** · `px` **20**（一级）· 行高 **54px** |
| Size Default | `py` **12** · 一/二级行高 **42px**（Figma `110:26128` / `3004:58477`）· 二/三级左缩进 **46px / 60px** |
| Size Small | `py` **12** · 行高 **38px** |
| Only-icon | Small 一级 · `px` **12** `py` **8** · 仅 **18px** Menu 图标 |

### menu-vertical/1st · 2nd · 3rd

| 维度 | 值 |
| --- | --- |
| State | `Default` · `Hover`（`--el-color-primary-light-9`）· `Selected`（primary 文案/图标）· `Disable` |
| Unfold | `false` `ArrowDown` **12** · `true` `ArrowUp` **12** |
| Leading icon | 一级 **18px** `Menu`（可选） |
| Child icon | 一/二级展开箭头（三级无） |

### menu-horizontal/1st

| State | 样式 |
| --- | --- |
| Selected | 文案 primary · 底边 **2px** primary · 箭头 primary |
| Default | 文案 primary 色同级 · `gap` **8** 文案 + 箭头 |

**映射**：`el-menu` · `mode="horizontal"`（Top）· `el-sub-menu` · `el-menu-item` · `default-active`；Sidebar 示例对齐 Figma `3008:57062`。

### Sidebar

Figma：`Sidebar`（`3313:56233`）

```ts
type SidebarProps = {
  unfolded?: boolean // Figma Unfold=on | off
  sidebarStyle?: "01" | "02" | "03" | "04"
  logoTitle?: string
}
```

| Unfold | 说明 |
| --- | --- |
| on | 宽 **200** · Logo **64** 高（28 图标 + 标题）· 完整 `el-menu` |
| off | 宽 **58** · 轨格 **42**（Style 04 高 **38**）· 槽 **pt-8**；02–04 **`px-8`** · 项间 **gap 2** · 悬浮窗 **200**、`p-8` |
| Footer | 高 **40** · 展开时 **Expand 16** · 收起时 **Fold 16**（底栏切换） |

| Style | 说明 |
| --- | --- |
| **01** · `3313:56229` | **pt-8** 满宽 · 栈/二级 **gap 2** · Size Default 行高 **42** · L2 选中 **直角** + **primary-9**（无右侧竖条）· Unfold off **fixed 悬浮子菜单** |
| **02** · `8739:830` | **pt-8 px-8** · 栈/二级 **gap 2** · 行高 **42** · **8px** 圆角 · Unfold off 悬浮窗 **p-8**、项 **p-12** |
| **03** · `8837:507` | **pt-8 px-8** · 多级展开 · 行高 **42** · **胶囊** 圆角 · L2 选中 **primary-9** · 收起轨 **42×42** 正圆 · 悬浮窗 **p-8** |
| **04** · `8739:1936` | 展开 **220** · **pt-8 px-8** · 组间 **12**、组内 **2** · Label **`py-2 px-12`** · 仅 **1st** · 项高 **38** · 选中 **fill-dark** · 文案 **Medium** · 底 **Setting**（2×**42**）+ **User**（无 Fold 底栏）· Unfold off **Tooltip** |

侧栏壳：`1px` 右边线 · `--el-box-shadow-light` · Logo 文案 **18 bold**（与 Layout 帧无关，见 `sidebar-menu-styles.css`）。

**映射**：`el-menu` · `collapse` · `collapse-transition`；Showcase **Sidebar Style** 切换上表三样式。

### Global-header

Figma：`Global-header`（`3319:51837`）

```ts
type GlobalHeaderProps = {
  headerType?: "Default" | "Large" | "Small" // 高 56 | 64 | 48
  logo?: boolean
  foldButton?: boolean // Action/layout · 切换 Sidebar Unfold
  crumbs?: boolean
  flushedButton?: boolean
  headerMenu?: boolean
}
```

| 区域 | 说明 |
| --- | --- |
| 左 | Logo `ElementPlus` **16** · **Action/layout 20**（`eds-action-layout`）· 安全中心 / Breadcrumb / 内嵌 Top Menu |
| 右 | `Social/notifications` · `Action/lock` · `Other/headset` · Avatar **32** · `Action/globe`（eds-*） |
| Menu 项 | **Other/grid-alt 18** · **Arrow/chevron 12**（eds-arrow-chevron-*） |
| 组合 | 与 `Sidebar` 分开展示；落地用 `el-container` · `el-header` + `el-aside` |

**映射**：`el-header`（高度同 Type）· `foldButton` 联动业务侧 `el-menu` `collapse`。

### Page Header

Figma：`PageHeader`（`3128:92806`）

```ts
type PageHeaderProps = {
  optionType?: "Option" | "Radio" // Figma Option-type
  backButton?: boolean
  changeButton?: ReactNode
  crumbs?: boolean
  showOption?: boolean
  tag?: boolean
  title?: ReactNode
  subheading?: ReactNode
  extra?: ReactNode
}
```

| 区域 | 说明 |
| --- | --- |
| Crumbs | Home / Navigation / Page Header · `Breadcrumb` 预设 |
| 主行 | 高 **32** · 左区 `gap` **12** |
| Back | **Back 16**（`ep-back`）· `changeButton` 可替换 |
| Title | **20/28** bold primary |
| 分隔 | 竖线高 **12** · `--el-border-color` |
| Subheading | **14/22** secondary |
| Tag | **Small** · **Light** · Default |
| Option | `ButtonGroup` segmented：Default ×2 · Primary · **More 14** IconButton **32** |
| Radio | `RadioGroup` Button · 宽 **200** · 3 项 |

**映射**：`el-page-header` · `#breadcrumb` · `#content` · `#extra` · `@back`。

### Steps

Figma：`Steps`（`6538:5627` Copy me）· `Steps Item`（`6538:4173`）

```ts
type StepsProps = {
  direction?: "Horizontal" | "Vertical"
  stepType?: "Default" | "State" // Figma Type
  alignCenter?: boolean // 横排默认 true（文案居中）
  active?: 1 | 2 | 3 | 4 | 5
  stepCount?: 4 | 5
  errorStep?: number | null
}
```

| 维度 | 说明 |
| --- | --- |
| Line | 图标 **24** · 圆角 **`--el-border-radius-round`（20）** · 连接线 **1px** · gap **12**（横）/ **8**（竖） |
| Status Default | Wait info-9 · Success primary-9 · Process primary 实底 · Error danger |
| Status State | Success 勾 **`step-check.svg`** · Process/Wait Figma SVG |
| Text | 标题 14/22 secondary · 描述 12/20 placeholder · gap **4** |
| Align Center | 仅 **Horizontal** · `true` 文案锚点 **24px 图标** 居中 · `false` 全宽左对齐（`6538:3851` / `3852`） |
| Vertical | 5 步 · 轨道 **gap 8** · **pb 8** · 线 `flex 1 0 0` · 文案区 **gap 16** + Slot **46** |

**映射**：`el-steps` · `el-step` · `direction` · `:active` · `finish-status` · State → `simple`。

### Tabs

Figma Page：`4-Tabs 标签页`（`1449:45652`）

```ts
type TabsProps = {
  tabType?: "Default" | "Card" | "Border-card"
  position?: "Top" | "Left" | "Right"
  align?: "Left" | "Center" | "Right"
  active?: 1 | 2 | 3 | 4
}
```

| 维度 | 说明 |
| --- | --- |
| Tabs/item | State `Default` · `Hover`（primary 常规字重）· `Selected`（primary **bold**） |
| Default 横排 | 轨道底边 **2px** `--el-border-color-light` · 条目 `px 20` · `py 8` · 选中底边 **primary 2px** |
| Default 竖排 | 轨道侧栏 **2px** · 选中侧指示 **primary 2px**（Left=右边线 · Right=左边线） |
| Tabs-top Align | `Left` · `Center` · `Right` |
| Card | 顶栏底 **1px** 全宽 · 标签 **l+t+b** 叠边 · 末项 **+r** · `radius` **4** · Copy me 左对齐 |
| Border-card | 灰轨 **nav-tail** 向右延申 · 选中 **l+r+t** 白底无底 · 其余 **t+b** · 内容 **cap** |
| Vertical | 轨 **2px** 连续 · 选中段 **primary** 覆盖（非双线）· 宽 **100** |
| Copy me | User · **Config** · Role · Task |

**映射**：`el-tabs` · `el-tab-pane` · `type`（card / border-card）· `tab-position`（left / right）。

---

## Table

Figma Page：`3-Table 表格`（`75:21467`）

### Column

```ts
type TableProps = {
  custom?: boolean
  rows?: 1 | 2 | … | 12
  stripe?: boolean
  border?: boolean // Figma Boder
  size?: "Default" | "Large"
}
```

| 维度 | 值 |
| --- | --- |
| Custom | `false` · `true`（Copy me 多列） |
| Rows | `1` … `12`（Custom=false） |
| Stripe | `false` · `true` |
| Border | `false` · `true` |
| Size | `Default`（行 40px）· `Large`（行 64px） |

**描边**：外框 / 行分割 `--el-border-color-lighter`；Border 列竖线 `--el-border-color-light`。**表头**高 40px · `--el-text-color-secondary` · `--el-font-weight-primary`。**映射**：`el-table` · `stripe` · `border` · `size` · `#default` 插槽。

Custom=true 预览对齐 Copy me `6480:5919`：选择列 · 双行 Title · **字段列 ×3**（Type=Default 文案）· Tag · Switch · Progress · **Table-Action Text · Num=2**（Detail · Edit）。

---

## Result

Figma Page：`3-Result 结果`（`102:24416`）

### Result

```ts
type ResultProps = {
  state?: "Success" | "Warning" | "Error" | "Info" | "Other"
  title?: ReactNode
  subTitle?: ReactNode
  showSubTitle?: boolean
  showButton?: boolean
  buttonText?: ReactNode
  imageSrc?: string // State=Other · 100×100
}
```

| 维度 | 值 |
| --- | --- |
| State | `Success` · `Warning` · `Error` · `Info` · `Other` |
| Show prompt | `false` · `true` |
| Show button | `false` · `true` |

**映射**：`el-result` · `icon`（success / warning / error / info）· `title` · `sub-title` · `#extra`（Primary 按钮）；**Other** 用 `#icon` 自定义图（Copy me 100×100）。

**布局（Figma Item `102:25983`）**：图标 72px · 文案区 gap 16px · 标题 16/24 · 副文案 14/22 secondary · 与按钮间距 32px · 内边距 24×80。

---

## Card

Figma Page：`3-Card 卡片`（`1314:40376`）

### Card

```ts
type CardProps = {
  cardType?: "Default" | "Only Body" | "Header+Footer"
  headerType?: "Default" | "More" | "Icon" | "Back"
  bodyType?: "Text" | "Image"
  footerType?: "Default" | "More"
}
```

| 子组件 | 维度 | 值 |
| --- | --- | --- |
| Card | Type | `Default` · `Only Body` · `Header+Footer` |
| Component/Header | Type | `Default` · `More` · `Icon` · `Back` |
| Component/Body | Type | `Text` · `Image` |
| Component/Footer | Type | `Default` · `More` |

**映射**：`el-card` · `#header` / 默认槽 / `#footer`；Header `More` → 链式 `Link` Primary；Footer `Default` → Avatar + 操作图标；`More` → 三等分图标栏。

---

### Drawer

Figma Component Set：`1495:51511`（`1469:49082`）

| 维度 | 值 |
| --- | --- |
| Layout | `Left` · `Right` · `Top` · `Bottom` |
| 画布（Figma 稿） | **1440×900** · 遮罩 `rgba(9,9,9,0.5)`（`--pt-overlay-scrim`） |
| Showcase 视口 | **平铺**预览区 · `aspect-ratio: 1440/900` · `min-h 320` · `max-h 560`（与 Figma 同比例，非居中“小窗”） |
| 面板占比 | 左/右 **33.33%** 宽 · 上/下 **33.33%** 高 |
| Header | `pt` **20** `px` **20** · 标题 **18/26** bold · Close **16** · 无下边框 |
| Body | `p` **20** · 正文 **14/22** · `Text/Secondary` |
| Footer | `p` **20** · gap **8** · 顶部分割 `inset` 线 · 双 **Button** Default **32** 高（无图标） |

**映射**：`el-drawer` · `direction` · `#footer`。

### Popconfirm

Figma Component Set：`1477:51596`（`471:25883`）

| 维度 | 值 |
| --- | --- |
| Layout（Figma 12） | `Up-left` · `Up-center` · `Up-right` · `下左` · `下中` · `下右` · `Left-up` · `Left-center` · `Left-down` · `Right-up` · `Right-center` · `Right-down` |
| 符号尺寸 | 纵（Up/Down）**212×100** · 横（Left/Right）**220×92** |
| 阴影 | 根节点 `drop-shadow(0 0 6px rgba(0,0,0,0.12))`（Figma `Shadow/12` · blur **12**/2） |
| 面板 | **212** 宽 · `p` **16** · gap **16** · 圆角 **4** · 描边 light（无面板 `box-shadow`） |
| 文案行 | **Question-filled 16**（warning）+ 标题 **12/20** regular · gap **8** · `items-center` |
| 操作 | 内容区宽 **180** · 右对齐 · gap **20** · No `px` **12** `py` **8** · Yes **Primary** `px` **12** `py` **2** · 高 **24** |
| Yes 色 | Figma `Primary/color` → `--pt-feedback-primary` |
| 箭头（Showcase） | 四向 **原生 SVG**（`FeedbackArrowGraphic`）：纵 **14×8** · 横 **8×14** · 不旋转 · `px` **16** |
| 总高（Showcase 纵） | **100** = 面板 **92** + 箭头 **8** |

**映射**：`el-popconfirm` · `placement`（12 Layout 与 `POPCONFIRM_LAYOUT_CONFIG`）。

### Popover

Figma Component Set：`1477:51961`（`1470:49087`）

| 维度 | 值 |
| --- | --- |
| Layout（Figma 12） | `up-left` · `up-middle` · `up-right` · `下左` · `下中` · `下右` · `left-up` · `left-middle` · `left-bottom` · `right-up` · `right-middle` · `right-bottom` |
| 符号尺寸 | 纵 **212×98**（面板 **90** + 箭头 **8**）· 横与 Popconfirm 同策略（**220×90** 量级） |
| 阴影 | 根 `drop-shadow(0 0 6px rgba(0,0,0,0.12))` |
| 面板 | **212** 宽 · `py` **12** `px` **16** · 内容 gap **4** · 圆角 **4** · 描边 light |
| Title | **14/22** bold · `Text/Primary` |
| 正文 | **12/20** regular · `Text/Regular` · 默认文案三行 `this is content…` |
| Show-title | Figma 布尔 · Showcase `showTitle`（默认 `true`） |
| 箭头（Showcase） | 与 Popconfirm 共用原生四向 SVG · **14×8 / 8×14** |

**映射**：`el-popover` · `placement`（12 Layout 与 `POPOVER_LAYOUT_CONFIG`）· `title` · `:width="212"`。

### Tooltip

Figma Component Set：`69:18869`（`68:18412`）

| 维度 | 值 |
| --- | --- |
| Arrow（Figma 12） | `Top` · `Top Start` · `Top End` · `Bottom` · `Bottom Start` · `Bottom End` · `Left` · `Left Start` · `Left End` · `Right` · `Right Start` · `Right End` |
| Effect | `Light` · `Dark` |
| 符号尺寸 | 纵 **110×40** 量级（文案 **32** + 箭头 **8**）· 横 **116×32** 量级 |
| 阴影 | `drop-shadow(0 0 6px rgba(0,0,0,0.12))` |
| 内容 | `py` **6** `px` **12** · **12/20** regular · `nowrap` · 圆角 **4** |
| Light | 白底 · `border-light` |
| Dark | `--el-text-color-primary` 底 · 白字 · 无边框 |
| 箭头（Showcase） | 与 Popconfirm/Popover 共用 `FeedbackArrowGraphic` · 原生四向 |

**映射**：`el-tooltip` · `placement`（`TOOLTIP_LAYOUT_CONFIG`）· `effect="dark"`。

### MessageBox

Figma Component Set：`1514:47536`（`1470:49085`）

| 维度 | 值 |
| --- | --- |
| Type | `Message prompts` · `Confirm the message` · `Submit` |
| 宽 | **480** · 圆角 **4** · `box-shadow-light` |
| Title | `p` **16** · 区高 **58** · 标题 **18/26** bold · Close **16** |
| Content | `px` **16** · 文案 **14/22** regular |
| Confirm | 左 **Warning-filled 16** · 与文案 gap **8** · 图标 `margin-top: 3px` |
| Submit | 文案 + **Input 32** 高 · 纵向 gap **12** |
| Message prompts | 无状态图标 · 单主按钮 |
| Footer | `min-h` **64** · `p` **16** · gap **8** · 按钮 **32** 高 |

**映射**：`ElMessageBox.alert` · `confirm` · `prompt`。

### Dialog

Figma Page：`5-Dialog 对话框`（`1466:46463`）

| 维度 | 说明 |
| --- | --- |
| 宽 | **480** · 圆角 **4** · `--el-box-shadow-light` |
| Header | **p 24** · 标题 **18/26** bold · Info **16** · Close **16** |
| Body | **px 24** · **pb 24** · 文案 **14/22** |
| Footer | 右对齐 · gap **8** · Default + Primary **32** |
| Title-center | `off` \| `on` |

**映射**：`el-dialog` · `#footer` · `align-center`。

### Message（变更锁定）

依据 2025-10-28 文档说明：

- **无** Center 变体
- 宽度随文案自适应
- 新增 **Plain** 属性

| 锁定（Figma `1514:47072` / Plain `6596:40444`） | `min-height` **48** · `px` **20** `py` **12** · gap **12** · `radius` **4** |
| 默认态 | `*-9` 浅底 + `*-7` 边框（MCP：`Primary-7` `#c6e2ff` · `Success-7` `#b3e9bf` · `Warning-7` `#ffd8b3` · `Error-7` `#fcc5c5` · `Info-7` `#dedfe0`） |
| Plain | 白底 + `--el-box-shadow-light` · 无边框 · 文案仍用对应语义色 |

生成代码时不得恢复已移除的 Center 布局。

### Notification

Figma Component Set：`1517:46939`（实例 `6596:40586`）

| 锁定 | **480px** 宽 · `radius` **8** · 白底 · `border-light` · `box-shadow-light` |
| Header | `pl` **24** `pr` **16** `pb` **16** · 标题 **18/26** bold · 类型图标 **20**（非 Default）· Close **16** |
| Body | `px` **24** · 正文 **14/22** regular |
| Type | `Default` · `Primary` · `Success` · `Warning` · **`Error`** · `Info`（Error → Element `danger`） |

### Loading

Figma `1505:46934`

| 锁定 | 预览区 **400×100** · 底 `fill-color-lighter` · 旋转标 **40**（Default）· 文案 **loading**（小写）· gap **4** |

---

## 组件页结构约定

Showcase **「代码」** Tab：仅展示 **Element Plus（Vue 3）** `.vue` 片段（语法高亮、无额外说明）；与 `elementMapping` 一致，已实现的 Demo 与定制区同步。

每个组件 Page 通常包含：

1. **Design system header / footer**
2. **🔒 组件注释**（变体矩阵说明）
3. **Component Set**（源 symbol）
4. **Copy me - light / Dark / Dark Alpha**（主题实例）

带 **↳** 前缀的 Page 表示已完成变量适配（2023-11-21 说明）。

---

## 待补全变体表

以下组件已收录于 `figma-source.json`，变体表可在下次 Figma 同步时按 symbol 名批量追加：

### Divider

Figma Component Set：`3045:70832`（Page `1470:49088`）

| 维度 | 值 |
| --- | --- |
| Vertical | `false` · `true` |
| Style | `Solid` · `Dashed` · `Point`（Element `dotted`） |
| Layout | `No text` · `Left` · `Center` · `Right` |
| 横符号 | **200×24** · 线 `--el-border-color-light` **1px** · 轨内垂直居中 |
| 横 + 文案 | 文案 **12/20** · `px` **16** · Center 双侧线 `flex-1` |
| Left | 左线固定 **20px** + 文案 + 右线 `flex-1` |
| Right | 左线 `flex-1` + 文案 + 右线固定 **20px** |
| 竖符号 | 槽 **16px** 宽 · 竖线 **1px** 水平居中 · 展示可 `align-self: stretch` |

**映射**：`el-divider` · `direction` · `border-style` · `content-position`。

### Watermark

Figma Page：`6-Watermark 水印`（`6153:12319` · 2.4.0）

| 维度 | 值 |
| --- | --- |
| Type | `Text` · `Icon` |
| 文案 | 默认 **Element Plus** · **-30°** · **opacity 20%** |

**映射**：`el-watermark` · `font` / `content`。

---

Form 全量 · Data 全量 · Navigation 全量 · Feedback 全量 · Others 全量  

同步命令（Agent）：对 `figma-source.json` 中 `nodeId` 调用 Figma MCP `get_metadata`，解析 `<symbol name="...">` 中的 `key=value` 对。
