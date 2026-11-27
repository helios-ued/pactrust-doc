import figmaSource from "../../../figma-source.json";
import type { FigmaLayoutVariant } from "@/templates/layout/layoutFrameSpecs";
import { LAYOUT_FRAME_SPECS } from "@/templates/layout/layoutFrameSpecs";
import { createElement } from "react";
import {
  LayoutModuleDemo,
  layoutModuleDemoCode,
  type LayoutModuleDemoProps,
} from "../demos/layout/LayoutModuleDemo";
import type { ShowcaseDemoProps } from "../demos/types";
import type { ComponentDoc, ShowcaseDemoFn } from "./types";

type LayoutPage = (typeof figmaSource.layoutPages)[number];

function variantFromPage(page: LayoutPage): FigmaLayoutVariant {
  const v = "variant" in page ? (page as { variant?: string }).variant : undefined;
  if (
    v === "layout-02" ||
    v === "layout-03" ||
    v === "layout-04"
  ) {
    return v;
  }
  return "layout-01";
}

function makeModuleDemo(initialVariant: FigmaLayoutVariant): ShowcaseDemoFn {
  return function LayoutModuleDemoEntry(props: ShowcaseDemoProps = {}) {
    const demoProps: LayoutModuleDemoProps = { ...props, initialVariant };
    return createElement(LayoutModuleDemo, demoProps);
  };
}

export const layoutModuleDoc: ComponentDoc = {
  slug: "layout",
  title: "Layout",
  subtitle: "组件集 `9096:7416` · Style Layout-01–04 · Sidebar 220 + Global-header + BasePanel",
  figmaNodeId: "9096:7416",
  elementMapping: "DashboardShell · layoutFrameSpecs",
  interactive: true,
  Demo: makeModuleDemo("layout-01"),
  codeTemplate: layoutModuleDemoCode,
  variants: [
    "Layout-01 · Main 16 · 圆角 20 · BasePanel Default",
    "Layout-02 · Main 0 · BasePanel slot 16",
    "Layout-03 · Style 04 侧栏 · Header 无分割",
    "Layout-04 · 顶栏 + BasePanel 内标题区",
  ],
  props: [
    {
      name: "variant",
      type: "layout-01 | layout-02 | layout-03 | layout-04",
      default: "layout-01",
      description: "Figma Style",
    },
  ],
};

const layoutSpecs: Record<string, Omit<ComponentDoc, "slug">> = {
  "layout-01": {
    title: "Layout-01",
    subtitle: "侧栏 Style 02 · Main 16 · 圆角 20 · BasePanel Default",
    figmaNodeId: "9096:7415",
    elementMapping: "8655:41476 · Sidebar 220 + BasePanel",
    interactive: true,
    Demo: makeModuleDemo("layout-01"),
    codeTemplate: layoutModuleDemoCode,
    variants: Object.entries(LAYOUT_FRAME_SPECS["layout-01"]).map(([k, v]) => `${k}: ${v}`),
    props: [
      { name: "variant", type: "layout-01", default: "layout-01", description: "Figma 帧" },
      { name: "pageTitle", type: "string", default: "个人中心", description: "Global-header 文案（锁定）" },
    ],
  },
  "layout-02": {
    title: "Layout-02",
    subtitle: "侧栏 Style 01 · User 底栏 · Main 满铺 · BasePanel None",
    figmaNodeId: "9096:7414",
    elementMapping: "Layout 8661:44611",
    interactive: true,
    Demo: makeModuleDemo("layout-02"),
    codeTemplate: layoutModuleDemoCode,
    variants: Object.entries(LAYOUT_FRAME_SPECS["layout-02"]).map(([k, v]) => `${k}: ${v}`),
    props: [{ name: "variant", type: "layout-02", default: "layout-02", description: "Figma 帧" }],
  },
  "layout-03": {
    title: "Layout-03",
    subtitle: "Style 04 分组侧栏 · Global-header 无分割线 · BasePanel 顶 0",
    figmaNodeId: "9096:7413",
    elementMapping: "Layout 8661:44739",
    interactive: true,
    Demo: makeModuleDemo("layout-03"),
    codeTemplate: layoutModuleDemoCode,
    variants: Object.entries(LAYOUT_FRAME_SPECS["layout-03"]).map(([k, v]) => `${k}: ${v}`),
    props: [{ name: "variant", type: "layout-03", default: "layout-03", description: "Figma 帧" }],
  },
  "layout-04": {
    title: "Layout-04",
    subtitle: "页面灰底 · 顶栏 Global-header · BasePanel 内标题区 56",
    figmaNodeId: "9096:7412",
    elementMapping: "8745:2603 · BasePanel + Header in slot",
    interactive: true,
    Demo: makeModuleDemo("layout-04"),
    codeTemplate: layoutModuleDemoCode,
    variants: Object.entries(LAYOUT_FRAME_SPECS["layout-04"]).map(([k, v]) => `${k}: ${v}`),
    props: [{ name: "variant", type: "layout-04", default: "layout-04", description: "Figma 帧" }],
  },
};

export const layoutScreenDocs: Record<string, ComponentDoc> = Object.fromEntries(
  (figmaSource.layoutPages ?? []).map((page) => {
    const spec = layoutSpecs[page.slug];
    const variant = variantFromPage(page);
    if (spec) {
      return [
        page.slug,
        {
          slug: page.slug,
          ...spec,
          Demo: makeModuleDemo(variant),
          subtitle: page.description ?? spec.subtitle,
          figmaNodeId: page.nodeId,
        },
      ];
    }
    return [
      page.slug,
      {
        slug: page.slug,
        title: page.name,
        subtitle: page.description ?? "",
        figmaNodeId: page.nodeId,
        elementMapping: "—",
        props: [],
        interactive: false,
        codeTemplate: `// ${page.name}`,
      },
    ];
  }),
);

export function getLayoutDoc(slug: string): ComponentDoc | undefined {
  if (slug === "layout") return layoutModuleDoc;
  return layoutScreenDocs[slug];
}

export function listInteractiveLayoutSlugs(): string[] {
  return [
    "layout",
    ...Object.values(layoutScreenDocs)
      .filter((d) => d.interactive)
      .map((d) => d.slug),
  ];
}
