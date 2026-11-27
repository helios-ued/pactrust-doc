import figmaSource from "../../../figma-source.json";
import { BasePanelDemo, basePanelDemoCode } from "../demos/BasePanelDemo";
import { DividerDemo, dividerDemoCode, WatermarkDemo, watermarkDemoCode } from "../demos/othersBasicDemos";
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

const otherPages = figmaSource.componentPages.filter((p) => p.category === "Others");

const interactiveSpecs: Record<string, Omit<ComponentDoc, "slug">> = {
  divider: {
    ...base({ name: "Divider", nodeId: "1470:49088", category: "Others" }),
    subtitle: "分割线 · Vertical × Style × Layout",
    elementMapping: "el-divider",
    interactive: true,
    Demo: DividerDemo,
    codeTemplate: dividerDemoCode,
    variants: [
      "Vertical off | on",
      "Style: Solid | Dashed | Point",
      "Layout: No text | Left | Center | Right",
      "Figma 横 200×24 · Left/Right 短边 20px · 竖槽 16px",
    ],
    props: [
      { name: "vertical", type: "boolean", default: "false", description: "Figma Vertical" },
      { name: "lineStyle", type: "Solid | Dashed | Point", default: "Solid", description: "Figma Style" },
      { name: "contentLayout", type: "No text | Left | Center | Right", default: "Center", description: "Figma Layout" },
    ],
  },
  basepanel: {
    ...base({ name: "BasePanel", nodeId: "9146:3168", category: "Others" }),
    subtitle: "内容面板 · Layout × Padding",
    elementMapping: "Content-Slot",
    interactive: true,
    Demo: BasePanelDemo,
    codeTemplate: basePanelDemoCode,
    variants: [
      "Layout: Single · Content-Slot p-16 | Vertical · 3 槽 gap 24 | Horizontal · 3 槽 gap 24",
      "Padding Default: 外 20 page 灰 + 白槽 | Padding None: 无外间距",
    ],
    props: [
      { name: "layout", type: "Single | Vertical | Horizontal", default: "Single", description: "Figma Layout" },
      { name: "padding", type: "Default | None", default: "Default", description: "Figma Padding" },
      { name: "contentSlot / actionsSlot / footerSlot", type: "Slot", description: "Vertical · Horizontal" },
    ],
  },
  watermark: {
    ...base({ name: "Watermark", nodeId: "6153:12319", category: "Others" }),
    subtitle: "水印 · Text | Icon（2.4.0）",
    elementMapping: "el-watermark",
    interactive: true,
    Demo: WatermarkDemo,
    codeTemplate: watermarkDemoCode,
    variants: ["Type: Text | Icon", "文案 -30° · opacity 20%"],
    props: [
      { name: "watermarkType", type: "Text | Icon", default: "Text", description: "Figma Type" },
      { name: "content", type: "string", default: "Element Plus", description: "Text 水印文案" },
    ],
  },
};

export const othersFormDocs: Record<string, ComponentDoc> = Object.fromEntries(
  otherPages.map((page) => {
    const slug = toSlug(page.name);
    const spec = interactiveSpecs[slug];
    if (spec) return [slug, { slug, ...spec }];
    return [
      slug,
      {
        ...base(page),
        subtitle: "—",
        elementMapping: "—",
        props: [],
        interactive: false,
        codeTemplate: `// ${page.name}`,
      },
    ];
  }),
);

export function listInteractiveOthersSlugs(): string[] {
  return Object.values(othersFormDocs)
    .filter((d) => d.interactive)
    .map((d) => d.slug);
}
