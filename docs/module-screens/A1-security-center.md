# A1-安全中心 · 模块界面锁定

| 项 | 值 |
| --- | --- |
| 画布 | `8349:5392` · 🎨 模块界面 |
| 帧名 | **A1-安全中心** |
| 代码 | `SecurityCenterTemplatePage` · `AppShell` + `SecurityCenterPanel` |
| 路由 | `/examples/security-center` |
| 根 nodeId | `8349:5393` |
| Page Body | `8349:5400` |

## 壳层（Layout-04 · Page Layout）

| 项 | 规范 |
| --- | --- |
| 布局 | `AppShell` · `pageSlot="page-layout"` |
| 顶栏标题 | **安全中心** |
| 内容区内边距 | `0 16px 18px` |

## 内容区 · 设置行（2 行）

每行结构（高 **104px** + 底部分割线槽 **2px**）：

| 区 | 规范 |
| --- | --- |
| 图标 | 圆形容器 **56×56** · `--el-bg-color-page` · 内 **unlock** 矢量 **28×28**（`8349:5404`） |
| 文案 | 标题 `16/24` bold · 描述 `14/22` secondary · 间距 **4px** |
| 操作 | `Button` **Default** **Small** · 文案 **修改** / **绑定** · 底 `--el-fill-color-dark` · 最小宽约 **73px** |
| 分割 | `Divider` Solid · 无文案 · 线色 `--el-border-color-light` |

### 行数据

| 标题 | 描述 | 按钮 | 跳转（示例） |
| --- | --- | --- | --- |
| 登录密码 | 建议设置安全性比较高的密码，用于账号登录 | 修改 | 修改登录密码页 |
| 身份验证器 | 关联身份验证 App，用以接收一次性验证码 | 绑定 | 绑定身份验证器页 |

## 组件映射

| UI | Figma / Element Plus |
| --- | --- |
| 行内按钮 | `el-button` `size="small"` + token 背景（对齐 Fill dark） |
| 分割线 | `el-divider` |

## 图层树（参考）

```
A1-安全中心 [FRAME]
└── AppShell / Page Layout
    └── Page Body 8349:5400
        ├── Setting Row — 登录密码 + Divider
        └── Setting Row — 身份验证器 + Divider
```
