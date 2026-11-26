# 双站点发布（设计规范 vs 中台原型）

两个 **独立 GitHub 仓库**、两个 **独立 Pages 地址**，互不包含对方内容。

| 仓库 | 构建 | 线上地址（示例） | 内容 |
|------|------|------------------|------|
| **pactrust-desktop** | `npm run build:desktop` | https://helios-ued.github.io/pactrust-desktop/ | 设计令牌、规范、组件、Layout |
| **pactrust-doc** | `npm run build:doc` | https://helios-ued.github.io/pactrust-doc/ | 仅登录流 + 可点击中台（`/examples/*`） |

本地一体预览：`npm run dev`（`VITE_SHOWCASE_PRODUCT=all`）。  
仅原型：`npm run dev:doc`。

## 首次创建 `pactrust-doc` 仓库

1. GitHub → **New repository** → 名称 **`pactrust-doc`** → Public → 不要 README  
2. 在本机执行：

```bash
cd /path/to/Element-PacsTrust-Design
git remote add doc https://github.com/helios-ued/pactrust-doc.git
git push -u doc main
```

3. 仓库 **Settings → Pages → Source → GitHub Actions**  
4. Actions 里 **Deploy pactrust-doc to GitHub Pages** 应自动绿勾  
5. 打开 https://helios-ued.github.io/pactrust-doc/ → 应进入 **登录页**，无「设计令牌」侧栏  

## `pactrust-desktop` 仓库（推荐从现仓库改名或新建）

1. 新建 **`pactrust-desktop`** 或把现有展示仓改名为 `pactrust-desktop`  
2. `git push` 后跑 **Deploy pactrust-desktop to GitHub Pages**  
3. https://helios-ued.github.io/pactrust-desktop/tokens  

过渡：仓库仍叫 `pactrust-design.github.io` 时，只会跑 **desktop** 构建（不再有合体 `all`），地址仍是  
`https://helios-ued.github.io/pactrust-design.github.io/tokens` — 直到迁到 `pactrust-desktop`。

## Workflow 分流

- `github-pages.yml`：仅在 `pactrust-desktop` 或 `pactrust-design.github.io` 上执行  
- `github-pages-doc.yml`：仅在 `pactrust-doc` 上执行  

同一仓库不会同时跑两种产物。