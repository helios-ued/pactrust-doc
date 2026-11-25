# 登录/注册 · 固定模版文本样式 1:1

**源-of-truth**：组件库帧 **`01-登录`**（`wEUoBP` · `8372:22873`）。仅使用库内已发布 Text Style（`regular` / `medium` / `bold` / `Title` / `Admin/CN` / `Admin/EN` 及对称 **`EN/*`**），**禁止** `Font/Body/*`、裸变量代替样式、或自创样式名。

## 库内 `01-登录` 角色 → 样式（英文模块帧实测）

| 角色 | 路径 / 节点特征 | 英文固定模版 | 中文 `-中文` 帧 |
| --- | --- | --- | --- |
| Logo 语言 | `Layout/Logo/.../Text-button` | `EN/regular/body1-Regular` | `regular/body1-Regular` |
| 主标题 | `header` 第 1 行 | `EN/Title/Title3-Medium` | `Title/Title3-Medium` |
| 副标题 | `header` 第 2 行 | `Admin/EN/body/14` | `Admin/CN/body/14` |
| 字段 Label | `.../label/Content` · `text`（邮箱/密码） | `EN/regular/body1-Regular` | `regular/body1-Regular` |
| 占位符 | `.../Input/input` · `Label` | `Admin/EN/body/14` | `Admin/CN/body/14` |
| 主按钮 | `Submit Block/Button` | `Admin/EN/label/14` | `Admin/CN/label/14` |
| 底栏链接 | `Submit Block/Text` | `Admin/EN/body/14` | `Admin/CN/body/14` |

其它流程（02–06）在**同角色**上沿用上表；OTP 格 → `medium/Headline2-Medium` ↔ `EN/medium/Headline2-Medium`；图形验证码标题 → `bold/Headline2-Bold` ↔ `EN/bold/Headline2-Bold`；「切换至…」→ `Admin/*/body/14`。

## 帧命名

| 英文（默认） | 中文 |
| --- | --- |
| `01-登录` … `06-后台验证` 及变体（无 `-中文`） | 同基名 + `-中文` / `-报错-中文` |

## 验收

1. 英文帧：**不得**出现无前缀的 `medium/*` / `Admin/CN/*`；**不得**出现 `Font/Body/*`（主操作按钮应为 `Admin/EN/label/14`）。
2. 中文帧：**不得**出现 `EN/*` / `Admin/EN/*`；副标题 / 占位 / 底栏须有 **`Admin/CN/body/14`** 芯片（勿仅绑 `Primitives/family/cn` 变量）。
3. 成对帧：按上表角色 **1:1**，非「全部 Label 都挂 Admin」。

## 维护

- 库 **Publish** → 固定模版 **Update styles**。
- `Admin/CN/*` 占位 **PingFang SC**：插件无法批量挂载时，在客户端对 `-中文` 帧按上表逐角色应用。