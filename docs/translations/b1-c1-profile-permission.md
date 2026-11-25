# B1 · 个人资料 / C1 · 权限管理（中英文）

画布：**Figma 固定模版** · 页面 **`个人资料`**（`hVUwZpK4`）

| 中文帧 | 英文帧 | 相对位置 |
| --- | --- | --- |
| `B1-个人资料` | `B1-Personal profile` | 同列 **y + 1200** |
| `C1-权限管理` | `C1-Permission management` | 同列 **y + 1200** |

## 文本样式 1:1（组件库）

| 中文 | 英文 |
| --- | --- |
| `regular/*` · `medium/*` · `bold/*` · `Title/*` | `EN/` + 同路径 |
| `Admin/CN/*` | `Admin/EN/*` |

与 **`01-登录`**、**安全中心** 相同：侧栏为 Layout 演示菜单，业务区（Page 标题、表单行、权限矩阵、用户组列表）按上表挂样式。

## B1 · 业务文案

| 中文 | English |
| --- | --- |
| 个人资料 | Personal profile |
| 成员ID | Member ID |
| 成员名称 | Member name |
| 登录邮箱 | Login email |
| 薛定谔的喵 | Schrödinger's cat |

## C1 · 业务文案（节选）

| 中文 | English |
| --- | --- |
| 用户组 | User groups |
| 系统默认 | System default |
| 超级管理员 | Super admin |
| 管理员 | Administrator |
| 普通管理员 | Standard admin |
| 自定义分组 | Custom groups |
| 权限管理 | Permission management |
| 模块 | Module |
| 首页 | Home |
| 商户资产 | Merchant assets |
| … | 矩阵与其余标签见 `permissionMatrixData.ts` 对应英文帧 |

侧栏演示项（主控台、监控页…）英文帧与常见 Layout 英文菜单一致（Dashboard、Monitoring…）。

维护：改中文帧或库样式后，同步英文帧文案与本表；**Publish** 库后 **Update styles** 再按中文节点顺序重挂 `EN/*`。