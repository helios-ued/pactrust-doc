# D2-API管理 · Figma 1:1 对照清单（`8770:65333`）

对照实现：`/examples/api-management` · 帧须与下列一致。当前帧仍套用 **Layout 演示侧栏 + B1 成员字段**，需整段替换。

> MCP **无法**自动改 Figma，请在本文件打勾自检。

---

## A. 根与壳

| # | 项 | 当前 Figma | 目标（代码） |
|---|----|------------|--------------|
| A1 | 根帧 | `8770:65333` · 1920×1080 | 保持 · 背景 **Fill/Page** `#f2f3f5` |
| A2 | 侧栏底色 | Sidebar 白 + 阴影 | **Fill 与画布灰一致**（`--el-fill-color`），**无**右侧粗阴影（企业壳） |
| A3 | Logo 文案 | `PacsTrust` 20px | **`PacsTrust 企业系统`**（14/22 或 medium，与 B1 侧栏 logo 槽一致即可） |
| A4 | 侧栏 Footer | hidden ✓ | 保持 **隐藏** |
| A5 | 主区 | Page → 单卡 Page Layout | **Layout-04 直铺**：`Page` padding **16**，内 **两张独立白卡**（非一整张 Page Layout 包全部） |

---

## B. 侧栏菜单（替换 `menu-item*10` 整槽）

删除 Dashboard / 系统管理 / 列表页 … 演示项，按顺序实例化：

| 一级 | 二级（展开） | 状态 |
|------|----------------|------|
| 资产管理 | 我的资产、交易流水 | Default |
| 全球汇款 | 汇款记录、收款方、付款方 | Default |
| **API管理** | — | **Selected**（主色 + 选中底） |
| 团队设置 | 企业信息、成员管理、权限管理 | Default |

图标：`box` · `globe` · `file` · `inbox`（与代码 `eds-action-box` 等一致即可）。

---

## C. Global-header（`8771:65725`）

| # | 左区 | 右区 |
|---|------|------|
| C1 | **删除** 折叠 `Action/layout` | **删除** 通知 / 锁 / 耳机 |
| C2 | 文案 **API管理** · 16/24 · medium | **仅** 语言 **简体中文**（globe + chevron）+ **头像**（无 Designer 用户名） |
| C3 | 其后 **8px** · **Link**「查看接入指南」· 14/22 Regular · Primary · **下划线** · 与标题 **baseline** 对齐 | — |

不要用 Primary Button 做「查看接入指南」。

---

## D. 卡 1 · API信息

**布局**：白卡 · padding **24** · 圆角 **4** · `--el-box-shadow-lighter` · 与下方卡 **gap 16**。

### D1 标题行（非 Page Layout Header 组件）

| 左 | 右 |
|----|-----|
| **API信息** 16/24 | 按钮组 gap **8**：**重置API** `Button` **Danger · Small** → **设置** `Button` **Primary · Small** |

按钮文案 **14/22**（Small）。

### D2 描述行（替换 成员ID/名称/邮箱）

| 标签列 | 取值列 |
|--------|--------|
| 商户ID | `82989220839292` + **CopyDocument** 16 |
| Signkey | 掩码 `••••` + **View** + **Copy** |
| 回调地址 | 仅 **您还未设置回调地址**（Secondary 14/22）· **无**设置按钮 |

标签/取值 **同一左对齐列**（标签 `max-content`，取值列起始 x 对齐）。行距 **20**，列 gap **12**。

**删除** 节点 `8771:65730`–`8771:65738` 成员字段文案。

---

## E. 卡 2 · 白名单列表

新建第二白卡（同 D 样式）。

| 区域 | 内容 |
|------|------|
| 标题行左 | **白名单列表** 16/24 + 说明「白名单列表最多支持20条…」13/22 secondary |
| 标题行右 | **添加白名单** Primary Small |
| 表格 | `Table` · 列：**白名单IP** · **操作**；行 IP 示例 + Link「删除」 |
| 底 | `Pagination` · 1–5 · 当前 **2** · 居中 |

---

## F. 推荐操作顺序（Figma 内）

1. 复制 **C1-权限管理** 或 **A1** 的 `Main`+`Page` 结构作参考，但内容区改为 **双卡**。  
2. 替换侧栏 Slot 文案与选中态。  
3. 改 Global-header 左标题+Link、右语言+头像。  
4. 清空 `8771:65727` 内错误内容，拆成 **API信息卡** + **白名单卡**。  
5. 对照浏览器全屏截图逐像素检查。

## G. 完成后

- 在 Figma Dev Mode 确认根仍为 `8770:65333`  
- 仓库已登记；可选 Code Connect → `ApiManagementTemplatePage`
