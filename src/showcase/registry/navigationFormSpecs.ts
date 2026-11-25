import figmaSource from "../../../figma-source.json";
import { makeSpecDemo } from "../demos/formBasicDemos";
import {
  AnchorDemo,
  anchorDemoCode,
  BreadcrumbDemo,
  breadcrumbDemoCode,
  DropdownDemo,
  dropdownDemoCode,
  MenuDemo,
  menuDemoCode,
  PageHeaderDemo,
  pageHeaderDemoCode,
  StepsDemo,
  stepsDemoCode,
  TabsDemo,
  tabsDemoCode,
} from "../demos/navigationBasicDemos";
import { toSlug } from "../nav";
import type { ComponentDoc } from "./types";

type Page = (typeof figmaSource.componentPages)[number];

function base(meta: Page): Pick<ComponentDoc, "slug" | "title" | "figmaNodeId"> {
  return {
    slug: toSlug(meta.name),
    title: meta.name,
    figmaNodeId: meta.nodeId,
  };
}

const navPages = figmaSource.componentPages.filter((p) => p.category === "Navigation");

const interactiveSpecs: Record<string, Omit<ComponentDoc, "slug">> = {
  anchor: {
    ...base({ name: "Anchor", nodeId: "6244:11901", category: "Navigation" }),
    subtitle: "锚点 · Anchor / Horizontal Anchor（2.6.0）",
    elementMapping: "el-anchor · el-anchor-link",
    interactive: true,
    Demo: AnchorDemo,
    codeTemplate: anchorDemoCode,
    variants: [
      "Anchor: Level 1–4 × Selected on | off × Underline on | off",
      "Horizontal Anchor: Selected on | off（下划线 3px）",
      "Direction: Vertical | Horizontal",
    ],
    props: [
      { name: "direction", type: "Vertical | Horizontal", default: "Vertical", description: "Figma 纵/横" },
      { name: "markerType", type: "Default | Underline", default: "Default", description: "Figma Underline" },
      { name: "level", type: "1 | 2 | 3 | 4", default: "1", description: "纵向缩进 · 14px × level" },
      { name: "selected", type: "boolean", default: "true", description: "Figma Selected" },
      { name: "showList", type: "boolean", default: "false", description: "四级链路预览" },
    ],
  },
  breadcrumb: {
    ...base({ name: "Breadcrumb", nodeId: "105:25236", category: "Navigation" }),
    subtitle: "面包屑 · Breadcrumb / item",
    elementMapping: "el-breadcrumb · el-breadcrumb-item",
    interactive: true,
    Demo: BreadcrumbDemo,
    codeTemplate: breadcrumbDemoCode,
    variants: [
      "Breadcrumb: Custom false | true × Number 2 | 3 | 4",
      "Breadcrumb/item: State Default | Hover | Not current page",
      "Separator: Other/BreadcrumbSlash 12px",
    ],
    props: [
      { name: "custom", type: "boolean", default: "false", description: "Figma Custom（含 … 折叠）" },
      { name: "number", type: "2 | 3 | 4", default: "3", description: "Figma Number" },
      { name: "previewItem", type: "boolean", default: "false", description: "单条目状态预览" },
      { name: "itemState", type: "Default | Hover | Not current page", default: "Default", description: "Figma State" },
    ],
  },
  dropdown: {
    ...base({ name: "Dropdown", nodeId: "1338:48941", category: "Navigation" }),
    subtitle: "下拉菜单 · Trigger × Menu × Option",
    elementMapping: "el-dropdown · el-dropdown-menu · el-dropdown-item",
    interactive: true,
    Demo: DropdownDemo,
    codeTemplate: dropdownDemoCode,
    variants: [
      "Dropdown Trigger: Text | Button | Split button",
      "Dropdown Menu: Size Large × Pop-up Top | Bottom",
      "Dropdown Option: Type × State × Description",
    ],
    props: [
      { name: "triggerType", type: "Text | Button | Split button", default: "Text", description: "Figma Type" },
      { name: "placement", type: "Top | Bottom", default: "Top", description: "Figma Pop-up" },
      { name: "previewOption", type: "boolean", default: "false", description: "单选项状态预览" },
      { name: "optionType", type: "Default | Selected | Multiple Choice", default: "Default", description: "Figma Type" },
      { name: "optionState", type: "Default | Hover | Disable", default: "Default", description: "Figma State" },
    ],
  },
  tabs: {
    ...base({ name: "Tabs", nodeId: "1449:45652", category: "Navigation" }),
    subtitle: "标签页 · item × top / card / vertical",
    elementMapping: "el-tabs · el-tab-pane",
    interactive: true,
    Demo: TabsDemo,
    codeTemplate: tabsDemoCode,
    variants: [
      "Tabs/item: State Default | Hover | Selected × Layout Default | Left | Right",
      "Tabs/card-item: Layout Left | Center | Right",
      "Tabs-top: Align Left | Center | Right",
      "Tabs-card: Border off | on（Border-card）",
      "Tabs-vertical: Layout Left | Right",
      "Copy me: User · Config · Role · Task · active=Config",
    ],
    props: [
      { name: "previewItem", type: "boolean", default: "false", description: "单条目预览" },
      { name: "tabType", type: "Default | Card | Border-card", default: "Default", description: "Figma Tabs-top / card / Border" },
      { name: "position", type: "Top | Left | Right", default: "Top", description: "Figma Position · 仅 Default" },
      { name: "align", type: "Left | Center | Right", default: "Left", description: "Figma Align · 横版 Default" },
      { name: "active", type: "1 | 2 | 3 | 4", default: "2", description: "当前标签（1-based）" },
      { name: "itemState", type: "Default | Hover | Selected", default: "Default", description: "Preview item · State" },
      { name: "itemLayout", type: "Default | Left | Center | Right", default: "Default", description: "Preview item · Layout" },
    ],
  },
  steps: {
    ...base({ name: "Steps", nodeId: "1435:53366", category: "Navigation" }),
    subtitle: "步骤条 · Line × Item × Text",
    elementMapping: "el-steps · el-step",
    interactive: true,
    Demo: StepsDemo,
    codeTemplate: stepsDemoCode,
    variants: [
      "Line Horizontal/Vertical: Type Default | State × Status Wait | Process | Success | Error × Last Step",
      "Steps Item: Direction Horizontal | Vertical",
      "Text: Align Center false | true",
      "Copy me: active=2 · 4 步横排 / 5 步竖排",
    ],
    props: [
      { name: "previewLine", type: "boolean", default: "false", description: "单段 Line 预览" },
      { name: "direction", type: "Horizontal | Vertical", default: "Horizontal", description: "Figma Direction" },
      { name: "stepType", type: "Default | State", default: "Default", description: "Figma Type" },
      { name: "alignCenter", type: "boolean", default: "true", description: "横排文案居中（Figma Align Center）" },
      { name: "active", type: "1 | 2 | 3 | 4 | 5", default: "2", description: "当前步骤（1-based）" },
      { name: "errorStep", type: "boolean", default: "false", description: "第 1 步 Error（Default）" },
    ],
  },
  "page-header": {
    ...base({ name: "Page Header", nodeId: "1435:46146", category: "Navigation" }),
    subtitle: "页头 · PageHeader × Breadcrumb × Tag × 操作区",
    elementMapping: "el-page-header",
    interactive: true,
    Demo: PageHeaderDemo,
    codeTemplate: pageHeaderDemoCode,
    variants: [
      "PageHeader: Option-type Option | Radio",
      "Back button · Crumbs · Tag · Show option",
      "Option: Button ×2 + Primary + Icon more",
      "Radio: Radio-button-group 200px ×3",
    ],
    props: [
      { name: "optionType", type: "Option | Radio", default: "Option", description: "Figma Option-type" },
      { name: "backButton", type: "boolean", default: "true", description: "Figma Back button · ep-Back 16" },
      { name: "crumbs", type: "boolean", default: "true", description: "Figma Crumbs" },
      { name: "tag", type: "boolean", default: "true", description: "Figma Tag Small Light" },
      { name: "showOption", type: "boolean", default: "true", description: "Figma Show option" },
    ],
  },
  menu: {
    ...base({ name: "Menu", nodeId: "109:25583", category: "Navigation" }),
    subtitle: "菜单 · Sidebar / Top × Level × State",
    elementMapping: "el-menu · el-menu-item · el-sub-menu",
    interactive: true,
    Demo: MenuDemo,
    codeTemplate: menuDemoCode,
    variants: [
      "menu: Type Sidebar | Top | Global-header（顶栏独立）",
      "menu-vertical/1st–3rd: Size Large | Default | Small × State × Unfold × Only-icon",
      "menu-horizontal/1st: Selected 底边 2px primary",
      "Sidebar Style 01|02|03|04（3313:56233）· Unfold=on|off",
      "Global-header: Type Default | Large | Small × Logo · Fold · Crumbs · Menu",
    ],
    props: [
      { name: "demoType", type: "Sidebar | Top | Global-header", default: "Sidebar", description: "Showcase Type" },
      { name: "menuSize", type: "Large | Default | Small", default: "Default", description: "Figma Size" },
      { name: "previewItem", type: "boolean", default: "false", description: "单条目状态预览" },
      { name: "level", type: "1 | 2 | 3", default: "1", description: "纵向层级缩进" },
      { name: "itemState", type: "Default | Hover | Selected | Disable", default: "Default", description: "Figma State" },
      {
        name: "sidebarVariant",
        type: "01 | 02 | 03 | 04",
        default: "01",
        description: "Figma Sidebar Style 01–03 + 04 收起",
      },
      { name: "headerType", type: "Default | Large | Small", default: "Default", description: "Global-header Type" },
      { name: "headerFold", type: "boolean", default: "true", description: "顶栏 Fold · 联动侧栏" },
    ],
  },
};

function placeholderDoc(page: Page): ComponentDoc {
  return {
    ...base(page),
    subtitle: "见 docs/COMPONENTS.md · Figma 变体待同步",
    elementMapping: "—",
    props: [],
    interactive: true,
    Demo: makeSpecDemo(page.name, page.nodeId, ["变体矩阵见 Figma Page Component Set"]),
    codeTemplate: `// ${page.name} — 实现中`,
  };
}

export const navigationFormDocs: Record<string, ComponentDoc> = Object.fromEntries(
  navPages.map((page) => {
    const slug = toSlug(page.name);
    const spec = interactiveSpecs[slug];
    if (spec) return [slug, { slug, ...spec }];
    return [slug, placeholderDoc(page)];
  }),
);

export function isNavigationSlug(slug: string): boolean {
  return navPages.some((p) => toSlug(p.name) === slug);
}

export function listInteractiveNavigationSlugs(): string[] {
  return Object.values(navigationFormDocs)
    .filter((d) => d.interactive)
    .map((d) => d.slug);
}
