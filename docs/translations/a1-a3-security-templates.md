# A1–A4 · 安全中心模板（中英文）

画布：**Figma 固定模版** · 页面 `安全中心`（`104:1809`）  
帧：`A1-安全中心` · `A2-修改登录密码` · `A3_01`–`A3_03-绑定身份验证器` · `A4-交易密码`（中文）+ 同页英文帧（见下）。

> 侧栏 Demo 菜单（Dashboard / 主控台…）为 Layout 展示用，**不在此表**；仅 **Page Header + Page Body** 业务文案需双语。

## A1 · 安全中心

| 中文 | English |
| --- | --- |
| 安全中心 | Security Center |
| 登录密码 | Login password |
| 建议设置安全性比较高的密码，用于账号登录 | Use a strong password for account sign-in |
| 修改 | Edit |
| 交易密码 | Transaction password |
| 建议设置安全性比较高的密码，用于保护您的资金安全 | Use a strong password to protect your funds |
| 设置 | Set |
| 身份验证器 | Authenticator app |
| 关联身份验证 App，用以接收一次性验证码 | Link an authenticator app to receive one-time codes |
| 绑定 | Link |

## A2 · 修改登录密码

| 中文 | English |
| --- | --- |
| 修改登录密码 | Change login password |
| 原密码 | Current password |
| 新密码 | New password |
| 确认密码 | Confirm password |
| 大小写+数字，8-20个字符 | Upper & lower case and numbers, 8–20 characters |
| 保存 | Save |

## A4 · 交易密码

| 中文 | English |
| --- | --- |
| 设置交易密码 | Set transaction password |
| 新交易密码 | New transaction password |
| 确认新交易密码 | Confirm new transaction password |
| 大小写+数字，8-20个字符 | Upper & lower case and numbers, 8–20 characters |
| 保存 | Save |

英文帧：**`A4-Set transaction password`**（相对中文帧 **y + 1200**）。

## A3 · 绑定身份验证器（三步共用）

| 中文 | English |
| --- | --- |
| 绑定身份验证器 | Bind authenticator |
| 请务必妥善保管身份验证 App 密钥，以免更换或丢失邮箱导致无法换绑。 | Keep your authenticator secret safe. If your email changes or is lost, you may not be able to re-link. |
| 下载身份验证 App | Download authenticator app |
| 例如 Google Authentication | e.g. Google Authenticator |
| 下一步 | Next |
| 扫描二维码 | Scan QR code |
| 打开身份验证 App 并扫描二维码或输入密钥 | Open the app and scan the QR code or enter the secret key |
| 安全验证 | Security verification |
| 添加成功后，您将得到一个有一定时效的6位数验证码，请在过期前填入下方 | After linking, enter the 6-digit code before it expires. |
| 身份验证APP | Authenticator code |
| 请输入身份验证APP 生成的6位代码 | Enter the 6-digit code from your authenticator app |
| 邮箱验证码 | Email verification code |
| 请输入验证码 | Enter verification code |
| 发送验证码 | Send code |
| 确定 | Confirm |

英文帧命名：`A1-Security Center` · `A2-Change login password` · `A3_01-Bind authenticator` · `A3_02-…` · `A3_03-…` · `A4-Set transaction password`（位于中文帧下方 **y + 1200**）。

**英文字体 · 文本样式 1:1**（库 **Element —— PacsTrust Design** 已发布）：

| 中文样式 | 英文样式 |
| --- | --- |
| `regular/*` · `medium/*` · `bold/*` · `Title/*` | 同路径加前缀 `EN/`（例 `medium/body1-Medium` → `EN/medium/body1-Medium`） |
| `Admin/CN/*` | `Admin/EN/*`（远程库样式，如 `body/14` · `label/14`） |

固定模版 **安全中心**：英文帧与中文 **同名 + 同父级路径** 的文本节点按上表挂样式；侧栏 **Sidebar** 不处理。无中文 Text Style 的节点（如部分 A3 页标题仅绑变量）保持双端一致、不强行挂样式。禁止 detach、手写 hex。

**库内 `EN/medium/*` · `EN/bold/*` 占位字体**：须与中文同款 `fontName`（Medium→500、Bold→700），变量绑定已与中文一致；创建 EN 样式时勿用 **Inter Regular** 作占位，否则画布渲染会比中文细一档。库改后须 **Publish** 并更新固定模版库订阅。

**A3 Message 提示（英）**：文案在 **Message 560px** 内换行；正文区 `left` **FILL**，文本 **固定宽 + 高度 Hug**（`textAutoResize: HEIGHT`），不得超过实例宽度。横向 Auto Layout **`counterAxisAlignItems: MIN`**（信息图标与**首行**顶对齐，勿纵向居中整段）。

维护：文案变更时同步本表、中文帧与英文帧；**颜色仅用 Figma 变量**，禁止手写 hex。