# 三站点发布（pactrust-doc · desktop · prototype）

与 EverGreen 对齐的是**职责**，不是仓库名：`pactrust-doc` ≈ **eds-doc**（设计说明），`pactrust-desktop` ≈ **eds-desktop**（可交互 Showcase），原型单独交付。

| 仓库 | 构建 | 线上地址（示例） | 内容 |
|------|------|------------------|------|
| **pactrust-doc** | `npm run build:doc` | https://helios-ued.github.io/pactrust-doc/ | 设计说明、令牌、规范说明、组件索引（`/overview` 首页） |
| **pactrust-desktop** | `npm run build:desktop` | https://helios-ued.github.io/pactrust-desktop/ | 设计令牌、组件、Layout 交互预览 |
| **pactrust-prototype** | `npm run build:prototype` | https://helios-ued.github.io/pactrust-prototype/ | 登录流 + 可点击中台（`/examples/*`） |

本地一体预览：`npm run dev`（`VITE_SHOWCASE_PRODUCT=all`）。  
仅设计说明：`npm run dev:doc`。  
仅原型：`npm run dev:prototype`。

## 更新已有 `pactrust-doc` 仓库（文档站）

1. 向 **`pactrust-doc`** 推送本仓库 `main`。  
2. Actions：**Deploy pactrust-doc to GitHub Pages** 应通过。  
3. 打开 https://helios-ued.github.io/pactrust-doc/atoms/color-system → eds-doc 式布局（左侧图标轨 + 原子导航 + 元数据表 + On this page），**不应**再默认跳进登录原型。

原「整站只有原型」的版本已迁到 **`build:prototype`**，请用独立仓库发布（见下）。

## 新建 `pactrust-prototype`（承接原先 doc 站上的原型）

1. **New repository** → `pactrust-prototype` → Public  
2. 与本仓库同源推送：  
   `git remote add prototype https://github.com/helios-ued/pactrust-prototype.git`  
   `git push -u prototype main`  
3. Pages → GitHub Actions → **Deploy pactrust-prototype to GitHub Pages**

## Workflow 分流

| Workflow | 触发仓库 |
|----------|-----------|
| `github-pages-doc.yml` | `pactrust-doc` |
| `github-pages.yml` | `pactrust-desktop` / `pactrust-design.github.io` |
| `github-pages-prototype.yml` | `pactrust-prototype` |

规范正文真源在 monorepo 的 `docs/*.md`；**pactrust-doc** 站负责在线阅读入口，Showcase 桌面站负责交互验收。