# Profile 页布局（B2 模板专用）

**命名**：Profile 页（与 **【文档元数据面板布局】** 并存，用于个人中心式详情）  
**范围**：暂仅 **B2 模板**；`ProfileFieldStack` 未入组件库。

## 决策摘要

| 项 | 定稿 |
| --- | --- |
| 封面 | 固定占位 `/login-marketing-hero.jpg` |
| 右上角 | 仅 `IconButton` + `eds-other-more-vertical` |
| 信息卡 | **描边** `Border/Light`，无投影 |
| Value 字号 | **14 / medium**（`body1-Medium`） |
| 语言 | **中文 + 英文** 画板与 `PROFILE_B2_COPY` |

## 结构

```
.pt-profile-page
├── ProfileHero（封面 180 · 头像 100 · 页标题）
└── ProfileInfoCard（描边白卡 · 双列字段网格）
    └── ProfileFieldStack × N（Bio span 2）
```

## 间距与样式

| 区域 | 值 | Token |
| --- | --- | --- |
| 页面外 padding | 16 / 20 / 24 | `--pt-space-*` |
| 封面高 | 180px | — |
| 头像 | 100px，`margin-top: -50px` | `Avatar` Custom |
| 卡 padding | 24px | `--pt-space-24` |
| 卡圆角 | 12px | `--el-border-radius-large`（`radius-xl`） |
| 网格 | `1fr 1fr` | column-gap 24 · row-gap 20 |
| Label | 12 / regular / secondary | `--el-font-size-extra-small` |
| Value | **14 / medium / primary** | `--el-font-weight-primary` |
| Label–Value | gap 4px | `--pt-space-4` |
| 响应式 | `@container` ≤768px | 单列 |

## 代码

- `PersonalProfileB2Panel` · `locale: 'zh' \| 'en'`
- 路由：`/examples/personal-profile-b2`（中）· `/examples/personal-profile-b2-en`（英）

## Figma

- **B2-个人信息（Profile）** · `209:1848` · `x=3920` `y=0`
- **B2-Personal profile** · `209:2061` · `x=3920` `y=1200`