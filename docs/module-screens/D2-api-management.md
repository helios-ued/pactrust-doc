# D2-API管理 · Figma 模块界面锁定

| 项 | 值 |
| --- | --- |
| 画布 | `8349:5392` · 🎨 模块界面 |
| 帧名 | **D2-API管理**（勿占用 **D1-邮箱样式** `8381:26786`） |
| 建议位置 | `x=3920` · `y=1620` · `1920×1080` |
| 代码 | `src/pages/ApiManagementTemplatePage.tsx` · `EnterpriseApiShell` + `ApiManagementPanel` |
| 路由 | `/examples/api-management` |
| 根 nodeId | `8770:65333` |

## 布局（企业后台）

| 区域 | 规范 |
| --- | --- |
| 根背景 | `--el-bg-color-page` |
| 侧栏 | 宽 **240** · 底 `--el-fill-color`（无 Footer）· Logo 文案 **PacsTrust 企业系统** |
| 顶栏 | 高 **56** · Global-header · 无 Logo |
| 主区 | `padding` **16** · 可纵向滚动（Showcase 窄屏） |

## 侧栏菜单（Slot）

一级 + 二级（与代码 `EnterpriseApiSidebarMenu` 一致）：

- 资产管理 → 我的资产、交易流水  
- 全球汇款 → 汇款记录、收款方、付款方  
- **API管理**（Selected）  
- 团队设置 → 企业信息、成员管理、权限管理  

组件：`menu-vertical/1st` · `menu-vertical/2nd` · Menu Style **01** embedded。

## Global-header

| 左 | 右 |
| --- | --- |
| 标题 **API管理** `16/24` medium · gap **8** · Link **查看接入指南** `body1-Regular 14/22` Primary **下划线** · baseline 底对齐 | 语言 **简体中文** + 下拉 · 用户头像 |

无「查看接入指南」主按钮，仅为 **Link**。

## 内容区 · 两段白卡

间距：主区内卡片 **gap 16** · 卡片内边距 **24** · 圆角 **4** · 阴影 `--el-box-shadow-lighter`。

### Block 1 · API信息

**标题行**（高与 section title 一致）：

- 左：**API信息** `16/24`  
- 右：按钮组 gap **8** · **重置API** `Button` Danger **Small** · **设置** `Button` Primary **Small**（文案 **14/22**）

**描述列表**（标签列 `max-content` + 取值列，与商户 ID / Signkey 左对齐）：

| 标签 | 内容 |
| --- | --- |
| 商户ID | 数字 + Copy 图标 |
| Signkey | 掩码 + View/Hide + Copy |
| 回调地址 | 仅文案 **您还未设置回调地址**（Secondary）· **无**「设置」按钮（已移至标题行） |

行间距 **20** · 标签/取值列 gap **12**。

### Block 2 · 白名单列表

**标题行**：

- 左：标题 + 说明（最多 20 条…）`13/22` 或 small secondary  
- 右：**添加白名单** Primary Small  

**Table** · `border` · 列：**白名单IP** · **操作**（Link Primary **删除**）  
**Pagination** · `lt5` · 居中 · 当前页示例 **2**

## 组件映射

| UI | Figma / 代码 |
| --- | --- |
| Button Small | `Button` · Size `Small` · 文案 14/22 |
| Link | `Link` · Primary · `underline` |
| Table | `Table` · size Default · frame border |
| Pagination | `Pagination` · Default |
| 图标 | `CopyDocument` · `View` / `Hide` · Menu eds-* |

## 图层树（建帧参考）

```
D2-API管理 [FRAME 1920×1080]
├── Sidebar [240] — logo + menu-item*10
└── Main
    ├── Global-header [56]
    └── Page [padding 16]
        ├── Card — API信息
        │   ├── Header — title + Actions(重置API, 设置)
        │   └── Descriptions — 3 rows
        └── Card — 白名单
            ├── Header — title/desc + 添加白名单
            ├── Table
            └── Pagination
```

建帧后请用 Dev Mode 核对 nodeId，更新 `src/templates/api-management/apiManagementFigmaNodes.ts` 与 Showcase `nav` 中的 `nodeId`。
