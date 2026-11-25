# Blue Fluted Glass Background（蓝色棱纹流动背景）

独立实时 WebGL 背景组件，适用于登录营销区、落地页 Hero、空状态画布等**纯装饰**场景。画面为缓慢形变的蓝白流体 + 固定竖向磨砂棱纹折射 + 可选居中品牌矢量；**不**包含标题、导航、表单或配置面板。

本仓库实现路径：`src/components/blue-fluted-glass/`。

---

## 能力摘要

| 项 | 说明 |
| --- | --- |
| 渲染 | WebGL 1 全屏片元着色器；28s 相位连续循环 |
| 棱纹 | 71 条竖纹在**采样阶段**折射流体（非透明条纹叠层） |
| 交互 | 点击 / 触控 / Enter / Space 暂停与继续；无鼠标视差 |
| 可访问性 | `role="button"`、`aria-pressed`、`aria-label`、`aria-live` |
| 降级 | WebGL 不可用时径向渐变静态画布 + 同款 Logo |
| 隔离 | Shadow DOM + 内嵌样式；不修改 `document.body` |
| 多实例 | 同页可挂载多个实例，暂停与时间互不干扰 |

---

## 文件结构

| 文件 | 职责 |
| --- | --- |
| `BlueFlutedGlass.tsx` | React 封装 |
| `BlueFlutedGlassEngine.js` | 着色器、Canvas、事件、观察器、生命周期 |
| `BlueFlutedGlassEngine.d.ts` | TypeScript 类型 |
| `motion-runtime.ts` | `mountBlueFlutedGlass` / `unmountBlueFlutedGlass` |
| `pacstrustMarketingLogoSvg.ts` | PacsTrust 营销区白色矢量（Figma `8339:56150`） |
| `frameworks/vanilla.ts` | 原生挂载 |
| `frameworks/vue.ts` | Vue 3 `useBlueFlutedGlass` |
| `frameworks/preact.ts` / `solid.ts` / `svelte.ts` | 集成说明（导出与 vanilla 相同 API） |

---

## 依赖

- **React 用法**：已包含在 showcase 的 `react` / `react-dom` 中，无额外 npm 包。
- **Vue composable**：项目 dev 依赖含 `vue`（仅在使用 Vue 封装时需要）。

不使用 Three.js、不加载远程图片/字体/视频。

---

## React 使用

```tsx
import { BlueFlutedGlass } from "@/components/blue-fluted-glass";

export function Hero() {
  return (
  <div style={{ height: "min(100vh, 960px)" }}>
      <BlueFlutedGlass />
    </div>
  );
}
```

### Props（`BlueFlutedGlassOptions`）

| 属性 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| `height` | `number \| string` | — | 嵌入高度；未设置时填满父级 `height: 100%` |
| `reducedMotion` | `boolean` | 跟随系统 | 为 `true` 时冻结帧，仍保留暂停/焦点态 |
| `brandLogo` | `"leibox" \| "pacstrust" \| "none"` | `"leibox"` | 居中矢量标识 |

**PacsTrust 产品线**（登录模板）：

```tsx
<BlueFlutedGlass brandLogo="pacstrust" />
```

### 非 React 挂载

```ts
import {
  mountBlueFlutedGlass,
  unmountBlueFlutedGlass,
} from "@/components/blue-fluted-glass";

const host = document.getElementById("bfg-root")!;
const handle = mountBlueFlutedGlass(host, { brandLogo: "pacstrust" });

// 卸载
unmountBlueFlutedGlass(handle);
```

Vue：`frameworks/vue.ts` 中的 `useBlueFlutedGlass(hostRef, options)`。

---

## 视觉与布局规格

- 设计画布参考：**960 × 1080**；嵌入时由容器 `height` / flex 撑满。
- 场景底色：`#f4f4f4`（与流体浅色端一致）。
- Canvas：`filter: blur(1.25px)`；`transform: scale(1.008)` 防止棱纹裁切露底。
- 实际像素：`布局宽高 × min(devicePixelRatio, 1.5)`。
- Logo：水平垂直居中；LeiBox 宽约场景 **22%**；PacsTrust 横锁标 `min(40%, 18rem)`；白色 + `drop-shadow(0 1px 3px #00132e20)`，**不**随流体或指针移动。
- 色板由着色器连续混合（禁止改为彩虹 / 镜面金属 / 黑条）：  
  `#f4f4f4`、浅蓝灰、品牌蓝阶、深蓝、近黑蓝。

完整 **fragment shader** 与顶点数据见 `BlueFlutedGlassEngine.js`（`FRAG_SRC` / `VERT_SRC`），修改前请通读该文件。

---

## 时间与性能

- 时间单位：秒；`RAF` 每帧 `dt` 上限 **0.05s**。
- 标签页隐藏、`document.hidden`、**IntersectionObserver** 离屏时**不**累加时间。
- `prefers-reduced-motion: reduce` 或 `options.reducedMotion === true`：不持续 RAF，显示当前完整帧。
- 卸载：取消 RAF、断开 Resize/Intersection、移除监听、`WEBGL_lose_context`。

---

## 可访问性

- 全场景透明按钮层：暂停 / 继续。
- `aria-label`：`Pause background animation` ↔ `Resume background animation`。
- `aria-pressed`：仅表示**用户**暂停，不含系统减少动效。
- 隐藏 `aria-live`：`Animation playing` / `Animation paused`。
- 焦点：`outline` 3px 白色、内缩 7px；`box-shadow` inset 9px `#0b3c69`。
- 空格键需 `preventDefault`，避免页面滚动。

---

## 在本仓库中的集成点

| 位置 | 说明 |
| --- | --- |
| `src/components/login/LoginMarketingHero.tsx` | 登录页右栏，`brandLogo="pacstrust"` |
| `src/components/login/login-marketing-hero.css` | 半屏 flex；**≤719px** 隐藏营销区 |
| `src/pages/login-page.css` | 与登录小屏规则一致 |
| Showcase | 模板「登录页」预览 + 路由 `/examples/login` |

历史静态营销图（`public/login-marketing-ribbon*.jpg`）**已不再**用于登录右栏，可保留作备选素材或删除前与业务确认。

---

## 复制到其他业务项目

1. 拷贝整个目录 `src/components/blue-fluted-glass/`。
2. 配置路径别名（如 `@/components/...`）或改为相对导入。
3. 父容器需有明确高度（或 `flex: 1` + `min-height: 0`），否则 Canvas 高度为 0。
4. 全宽页面注意 **max-width: 100%**，避免 375 / 768 / 1440 横向溢出。
5. 品牌 Logo：
   - 继续用 `brandLogo="pacstrust"`，或
   - 在 `pacstrustMarketingLogoSvg.ts` 替换 SVG，或
   - 新增 `brandLogo` 枚举 + 在 `motion-runtime.ts` 注入 `logoSvg`。
6. 独立 LeiBox 演示保持默认 `brandLogo` 省略即可。

**不要**用 `<video>`、静态图交叉淡入或 CSS 假棱纹替代 WebGL 折射逻辑后再称作同一组件——若仅需静态图，使用营销图资源即可。

---

## 验收清单（复用时建议自测）

- [ ] `t=0`、约 6s、约 12s 流体连续迁移，棱纹折射可见，Logo 固定
- [ ] 暂停前后像素一致，恢复后动画连续（非跳回 `t=0`）
- [ ] 点击、空格、回车、快速连点仅一条 RAF
- [ ] `resize` 后相位保留；离屏 / 隐藏标签不累加时间
- [ ] 同页两实例暂停互不影响
- [ ] 卸载后无 RAF、无泄漏
- [ ] 375 / 768 / 1440 无横向滚动条
- [ ] WebGL 失败时显示降级渐变 + Logo

---

## 维护说明

- 动效或着色器变更：**只改** `BlueFlutedGlassEngine.js`，并同步本文件「视觉与布局」与「验收」小节。
- 品牌矢量变更：更新 `pacstrustMarketingLogoSvg.ts`（与 Figma `8339:56150` 对齐），勿用系统字体拼写品牌名。
- 与 Element / PacsTrust 表单组件无关，**不**写入 `docs/COMPONENTS.md` 变体表；本文档为该效果的唯一规范说明。
