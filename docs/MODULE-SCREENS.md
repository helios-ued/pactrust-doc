# 🎨 模块界面（Figma `8349:5392`）

页面：[Element —— PacsTrust Design · 模块界面](https://www.figma.com/design/wEUoBPgPgqLRZ2qBlO7W1C/Element-%E2%80%94%E2%80%94-PacsTrust-Design?node-id=8349-5392)

实现路由：`/examples/<slug>` · Showcase **模板** 分类。  
前端交付：[FRONTEND-HANDOFF.md](./FRONTEND-HANDOFF.md) · Showcase 模板页 **代码** Tab + **交付清单**。

**固定模版页**（独立 Figma 文件 · [`hVUwZpK4E52BzbhYTQIi4j`](https://www.figma.com/design/hVUwZpK4E52BzbhYTQIi4j) · 页面 `0:1`）：登录流 **01–06** 交付画布，组件来自已订阅库 **Element —— PacsTrust Design**。规范对照与 Dev Mode 仍以本库 **模块界面** 下表 `nodeId` 为准。

### 固定模版页：双轨工作流（定稿 + 重复生成）

**设计权威源**始终是组件库 **模块界面** 六个帧（`figma-source.json` → `fixedTemplatesLoginFlow`）。  
**独立文件**是交付副本：可 **粘贴一次定稿**，也可 **脚本重复生成**；两条路并存，不互斥。

| 轨道 | 何时用 | 怎么做 | 1:1 程度 |
| --- | --- | --- | --- |
| **A · 定稿（推荐首发）** | 第一次交付、验收、或模块帧大改后 | **Figma 客户端**：[**模块界面**](https://www.figma.com/design/wEUoBPgPgqLRZ2qBlO7W1C?node-id=8349-5392) 画布上框选 **`01-登录`…`06-后台验证` 六帧** → 复制 → [固定模版页](https://www.figma.com/design/hVUwZpK4E52BzbhYTQIi4j) 页面 **固定模版** → 删除旧内容 → 粘贴 → 按网格摆位（§0） | **完全一致**（含 Dialog 槽、嵌套实例） |
| **B · 重复生成** | 独立文件被清空、误改、或要跟模块 **坐标/变体** 对齐且可接受脚本能力边界 | 在 Cursor 对固定模版文件执行 `use_figma`，`code` = `scripts/.figma-use-payload.js`（源：`scripts/figma-use-build-fixed-templates.js`）。脚本按模块帧 **绝对坐标** 重建，禁止 Auto Layout 猜间距 | **高度一致**；若与 A 有差异，**以 A 粘贴结果为准**，并回填脚本 |
| **C · 自动化整页实例（可选）** | 需要 CI/插件 **跨文件** 拉整页、且可发布库 | 库页 `【固定模版交付组件】` 的 `TPL/*` → **Publish library** → 独立文件 `importComponentByKeyAsync` | 与 A 同级；**非必须** |

**推荐节奏**

1. **定稿**：走 **A**，与客户/设计验收通过。  
2. **日常维护**：模块帧小改 → 可先 **B** 重生，目视对比模块界面；若 **03 Dialog** 等细节不对 → 再 **A** 覆盖一次定稿。  
3. **模块帧坐标变了**：同步改 `figma-use-build-fixed-templates.js`（对照库内 `get_metadata`），再跑 **B**；大改仍用 **A**。

**不必**为了「一模一样」而先做固定模版组件；**A  alone 即可定稿**。`TPL/*` 只是 **C** 的可选加速，不是前置条件。

**独立文件定稿由设计在 Figma 客户端从「模块界面」复制粘贴完成，非 Agent 自动写入。**

### 组件库里多出来的三个页面（可全部删除）

模块界面 **本来就有** 01–06，**不需要**再维护下面三页；它们是 Agent 调试/误建产物，与正式信息架构无关。

| 页面名 | 为何出现 | 你要不要做 |
| --- | --- | --- |
| `【误建可删】固定模版页` | 曾误以为固定模版要建在库内 | **删掉** |
| `【固定模版交付组件】` | 尝试 `TPL/*` 自动化导入（轨道 C） | **删掉**（除非你以后要发库做 CI） |
| `【复制到固定模版页】` | Agent 克隆六帧方便复制（与模块界面 **重复**） | **删掉**；复制源永远用 **模块界面** |

**为什么还要单独一个「固定模版页」文件？** 只为了给对外交付 / Dev Mode / 权限隔离一份**副本**，权威设计仍在库内 **模块界面**；不是缺稿，是多一个交付入口。

### 轨道 A · 粘贴后验收清单（Figma 客户端）

对照库内 **模块界面** 同帧（`fixedTemplatesLoginFlow` 的 `moduleNodeId`），在 **固定模版页** 勾选通过。**任一项不通过 → 勿标定稿**，改回模块源帧重新复制或局部替换。

#### 0. 画布与摆放

- [ ] 文件：[固定模版页](https://www.figma.com/design/hVUwZpK4E52BzbhYTQIi4j) · 页面名 **`固定模版`**（`0:1`）
- [ ] 仅 **6** 个根级帧，命名严格：`01-登录` `02-验证码` `03-图形验证码` `04-后台登录` `05-后台注册` `06-后台验证`
- [ ] 每帧 **1920×1080**；2×3 网格（`fixedTemplatesWorkflow.canvasGrid`）：

| 帧 | 建议 `x` | 建议 `y` | 库内对照链接 |
| --- | ---: | ---: | --- |
| 01-登录 | 0 | 0 | [8372:22873](https://www.figma.com/design/wEUoBPgPgqLRZ2qBlO7W1C?node-id=8372-22873) |
| 02-验证码 | 1984 | 0 | [8372:23055](https://www.figma.com/design/wEUoBPgPgqLRZ2qBlO7W1C?node-id=8372-23055) |
| 03-图形验证码 | 3968 | 0 | [8374:23542](https://www.figma.com/design/wEUoBPgPgqLRZ2qBlO7W1C?node-id=8374-23542) |
| 04-后台登录 | 0 | 1200 | [8375:24178](https://www.figma.com/design/wEUoBPgPgqLRZ2qBlO7W1C?node-id=8375-24178) |
| 05-后台注册 | 1984 | 1200 | [8375:24188](https://www.figma.com/design/wEUoBPgPgqLRZ2qBlO7W1C?node-id=8375-24188) |
| 06-后台验证 | 3968 | 1200 | [8375:24203](https://www.figma.com/design/wEUoBPgPgqLRZ2qBlO7W1C?node-id=8375-24203) |

- [ ] 实例均来自库 **Element —— PacsTrust Design**（非解绑/非本地重画占位）

#### 1. 全局（六个帧共有）

- [ ] 顶栏 Logo：**PacsTrust** + 语言 **English**（Dropdown，非裸 Text）— 规则详见 **[DROPDOWN-LANGUAGE.md](./DROPDOWN-LANGUAGE.md)**
- [ ] 无库默认占位文案：**Label** / **Placeholder** / **This is the prompt**（表单下灰色说明）
- [ ] 主操作按钮为 **Primary · Icon=None**（无多余 `qi` / 图标占满按钮）

#### 2. `01-登录` / `04-后台登录`（优先抽检）

与库内同帧 **Dev Mode 左右对照** 或叠图查看：

| 项 | 应为 | 不应出现 |
| --- | --- | --- |
| 标题 | `Welcome to PacsTrust.` + `One Platform, Boundless Finance` | — |
| 字段 1 | Label **Email** · 占位 **`m@example.com`**（末尾空格以库为准） | `Label` / 随机邮箱 |
| 字段 2 | Label **Password** · 占位 **`Please enter`** · 后缀 **眼睛** | 无后缀的普通 Input |
| Remember | **不展示**（库内 Checkbox 为 hidden） | 可见「Remember password」 |
| 主按钮 | **Login** | 错变体 Text / 带无关图标 |
| 底链 | `Don't have an account?` + **Sign up** · **水平居中**（相对 Submit Block / 主按钮同宽区） | `Already have an account?`（仅 05 用此句） |
| 01 布局 | 左白右营销灰 **Background** · `Card Body` 约 **x240 y200** | 整卡用 Auto Layout 强行居中导致间距漂移 |
| 04 布局 | 整页灰底 · 白卡圆角 **20** · 卡约 **x720 y264** | 错按钮 `Size=Large, Type=Default…` |

#### 3. `05-后台注册`

- [ ] 标题 `Create an account.` + 副标题 `Enter your information below to create your account`
- [ ] 三字段：**Email** / **Password** / **Confirm Password**（占位同 01/04）
- [ ] 主按钮 **Create Account**
- [ ] 底链 **`Already have an account?` + `Login`** · **居中** · 白卡 **y200** 高度约 **568**

#### 4. `02-验证码` / `06-后台验证`

- [ ] 标题 `Enter verification code.` · **Resend Code** + **56s**
- [ ] **InputOTP** Outlined · `Switch to` + 文本按钮 **Authenticator Verification**
- [ ] 06：白卡内 Field · OTP **y=24**、底链 **y=112**（与库 8375:24203 一致）

#### 5. `03-图形验证码`

- [ ] 底层同验证码营销分栏 · 右侧层名可为 **Img**
- [ ] 全屏 **Overlay** 半透明黑
- [ ] **Dialog** 标题 **`Please enter image captcha`** · 位约 **x766 y427** · Body 槽含验证码输入与刷新（与库 8374:23542 一致，不单做「Lorem ipsum」占位）

#### 6. 交互矩阵（固定模版页 · 按命名排布）

**布局**：**6 列 = 编号 01→06**；每列自上而下为后缀顺序（与图层名字排序一致）：

`默认`（图2）→ `-有内容`（图3，仅 01/04/05）→ `-中文` → `-报错` → `-报错-中文`（仅 01/04/05）→ `-点击-语言` → `-点击-输入聚焦`（空表单 + Focus；03 为弹窗主按钮按下）

| 后缀 | 说明 |
| --- | --- |
| （无） | **图2** · `Input=False` 占位（Email `m@example.com` / Password `Please enter`）· 主按钮底 **`Fill/Darker`** + 白字 |
| `-有内容` | **图3** · `Input=True`（邮箱 `m@example.com`、密码掩码）· 主按钮 **`Event=Default`** 品牌蓝 |
| `-中文` | 简体中文文案（含表单占位 **请输入**、03 Dialog **验证码/刷新/保存**）· 同图2 空占位 · 主按钮 **Fill/Darker** |
| `-报错` / `-报错-中文` | 首字段 `Input` **`State=Error`** + `Form Item` 提示文案 **Error 红**（与输入框报错描边同色）· 主按钮 **Fill/Darker** |
| `-点击-语言` | 与 **图2** 同空表单 + 灰 **Login** · Logo **`Dropdown`** · **`Show-select` on** · **Text-button 仅此时 Primary**（**`Brand/color` 颜色变量**）· 菜单 English（Multiple Choice）/ 简体中文（Hover） |
| 其它变体（含图3） | **`Show-select` off** · **Text-button Default** · **Left-icon = Icon · Language 14px** · **Right-icon 关** · **arrow-down** 色同 Left-icon · EN=`English` / `-中文`=`简体中文` |
| `-点击-输入聚焦` | 图2 占位 + 首字段 **`State=Focus`** · 主按钮仍 **Fill/Darker**；或 OTP / Dialog 按下 |

**Figma 变量**：**所有组件以变量为准**；缺变量则**提醒补库**，禁止自造 — 见 **[FIGMA-VARIABLES.md](./FIGMA-VARIABLES.md)**。固定模版页以设计定稿为准，勿擅自批量改样式。

**重生整表**（若需）：`scripts/figma-use-interaction-matrix.js` → `use_figma` @ `hVUwZpK4E52BzbhYTQIi4j`；Dropdown 规则见 **[DROPDOWN-LANGUAGE.md](./DROPDOWN-LANGUAGE.md)**。

#### 7. 定稿确认

- [ ] 01 + 04 + 05 三帧与库 **像素级目视无差**（允许字体渲染细微差异）
- [ ] 在团队约定处记录定稿日期（如 PR / 飞书）；若模块帧 nodeId 变更，更新 `figma-source.json` → `fixedTemplatesLoginFlow` 后 **重新走本清单**

**轨道 B 重生后**：至少复跑 **§2 + §5**；与上次 **A 定稿**不一致时，以 **A** 覆盖或修脚本后再验收。

### 固定模版 ↔ 模块界面：一致性（强制）

仅 `importComponentSetByKey` / `createInstance` **不会**带上模块帧里改过的文案；未写嵌套 **`componentProperties`** 时，Form Item 会露出库默认 **Label / Placeholder**，与模块界面 **Email / Password / Login** 等不一致。

| 要求 | 说明 |
| --- | --- |
| 权威副本 | 模块界面帧 `8372:22873` … `8375:24203`（见 `figma-source.json` → `fixedTemplatesLoginFlow`） |
| 字段与文案 | 与权威副本相同：`Label#5858:23`、`Default-text#2941:64`、`Suffix-icon#2941:32`；Button `Text#5832:1` 或主按钮文案；Checkbox `Text#5846:0`；Dropdown 内 Text-button `Text#5837:0`；Dialog `Text#3144:3` |
| 定稿 | 轨道 **A**：模块界面 → 固定模版页，客户端复制粘贴 |
| 重复生成 | 轨道 **B**：`scripts/figma-use-build-fixed-templates.js` / `.figma-use-payload.js` → `use_figma` @ `hVUwZpK4E52BzbhYTQIi4j`；禁止只搭实例不 patch |
| 验收 | 01 / 04 / 05 与模块界面同 `nodeId` 帧一致；不以「占位默认文案」交付；A 与 B 冲突时 **以 A 为准** |

| 帧名 | nodeId | 代码 | 说明 |
| --- | --- | --- | --- |
| A1-安全中心 | `8349:5393` | `SecurityCenterTemplatePage` | Layout-04 · [锁定](./module-screens/A1-security-center.md) |
| A2-修改登录密码 | `8349:5537` | `ChangePasswordTemplatePage` | 返回栏 + 居中表单 |
| A3-身份验证-01…03 | `8370:5786` … | `AuthenticatorBindTemplatePage` | Steps |
| **A1–A4 固定模版双语** | 页 `安全中心` `104:1809` | — | 中文帧 + 英文帧（`docs/translations/a1-a3-security-templates.md`）· 含 **`A4-交易密码` / `A4-Set transaction password`** |
| **01–06 登录/注册双语** | 页 `登录/注册` | — | 英文默认帧 + `-中文` / `-报错-中文`（`docs/translations/login-register-text-styles.md`） |
| B1-个人资料 | `8370:13091` · 固定模版 `193:6790` | `PersonalProfileTemplatePage` | Layout-04 · **[文档元数据面板布局](./layouts/DOC-META-PANEL-LAYOUT.md)** |
| **B2-个人信息（Profile）** | `209:1848` / EN `209:2061` | `PersonalProfileB2TemplatePage` · EN 页 | Layout-04 · **[Profile 页布局](./layouts/PROFILE-PAGE-LAYOUT.md)** |
| C1-权限管理 | `8370:13257` | `PermissionManagementTemplatePage` | Layout-04 · direct |
| **B1/C1 固定模版双语** | 页 `个人资料` | — | 中文帧 + `B1-Personal profile` / `C1-Permission management`（`y+1200` · [`b1-c1-profile-permission.md`](./translations/b1-c1-profile-permission.md)） |
| D1-邮箱样式 | `8381:26786` | — | 邮件模板（非 Web 壳） |
| **D2-API管理** | `8770:65333` | `ApiManagementTemplatePage` | 企业后台 · [锁定](./module-screens/D2-api-management.md) · [Figma 改稿清单](./module-screens/D2-api-management-figma-checklist.md) |
| **01-登录** | `8372:22873` | `LoginPage` | 营销区 + 表单卡 · 独立全屏 |
| 02–07 登录流 | `8372:23055` … | `*Page.tsx` | 见 `figma-source.json` |

**D2-API管理**：代码已落地；请在 Figma 画布 **C1 右侧**（建议 `x=3920` `y=1620`，与 D1 邮箱帧同排）补 **1920×1080** 帧，命名 **`D2-API管理`**，结构对齐代码与 [锁定说明](./module-screens/D2-api-management.md)。帧发布后把根 `nodeId` 写入 `figma-source.json` → `apiManagementD2`。

维护：新增模块帧时同步 `figma-source.json`（`pages` + `moduleScreenFrames`）、本表、对应 `docs/module-screens/*.md`。
