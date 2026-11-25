import figmaSource from "../../../figma-source.json";
import type { FigmaLayoutVariant } from "@/templates/layout/layoutFrameSpecs";
import { LAYOUT_FRAME_SPECS } from "@/templates/layout/layoutFrameSpecs";
import { createElement } from "react";
import { LayoutFrameDemo, layoutFrameDemoCode } from "../demos/layout/LayoutFrameDemo";
import type { ComponentDoc } from "./types";

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

function makeDemo(variant: FigmaLayoutVariant) {
  return function LayoutVariantDemo() {
    return createElement(LayoutFrameDemo, { variant });
  };
}

const layoutSpecs: Record<string, Omit<ComponentDoc, "slug">> = {
  "layout-01": {
    title: "Layout-01",
    subtitle: "侧栏 Style 02 · Main 16 · Layout 圆角 20 · 无 Footer",
    figmaNodeId: "8655:41370",
    elementMapping: "Sidebar 240 + Main + Layout 8655:41476",
    interactive: true,
    Demo: makeDemo("layout-01"),
    codeTemplate: layoutFrameDemoCode,
    variants: Object.entries(LAYOUT_FRAME_SPECS["layout-01"]).map(([k, v]) => `${k}: ${v}`),
    props: [
      { name: "variant", type: "layout-01", default: "layout-01", description: "Figma 帧" },
      { name: "pageTitle", type: "string", default: "个人中心", description: "Global-header 文案（锁定）" },
    ],
  },
  "layout-02": {
    title: "Layout-02",
    subtitle: "侧栏 Style 01 满宽菜单 · Footer 40 · Main 满铺",
    figmaNodeId: "8661:44593",
    elementMapping: "Layout 8661:44611",
    interactive: true,
    Demo: makeDemo("layout-02"),
    codeTemplate: layoutFrameDemoCode,
    variants: Object.entries(LAYOUT_FRAME_SPECS["layout-02"]).map(([k, v]) => `${k}: ${v}`),
    props: [{ name: "variant", type: "layout-02", default: "layout-02", description: "Figma 帧" }],
  },
  "layout-03": {
    title: "Layout-03",
    subtitle: "同 Layout-02 · Content 上内边距 8px",
    figmaNodeId: "8661:44736",
    elementMapping: "Layout 8661:44739",
    interactive: true,
    Demo: makeDemo("layout-03"),
    codeTemplate: layoutFrameDemoCode,
    variants: Object.entries(LAYOUT_FRAME_SPECS["layout-03"]).map(([k, v]) => `${k}: ${v}`),
    props: [{ name: "variant", type: "layout-03", default: "layout-03", description: "Figma 帧" }],
  },
  "layout-04": {
    title: "Layout-04",
    subtitle: "Global-header 顶栏 · Page 16 · Page Layout 4px · 标题区",
    figmaNodeId: "8745:2586",
    elementMapping: "Page Layout 8745:2606",
    interactive: true,
    Demo: makeDemo("layout-04"),
    codeTemplate: layoutFrameDemoCode,
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
          Demo: makeDemo(variant),
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
  return layoutScreenDocs[slug];
}

export function listInteractiveLayoutSlugs(): string[] {
  return Object.values(layoutScreenDocs)
    .filter((d) => d.interactive)
    .map((d) => d.slug);
}
