import figmaSource from "../../../figma-source.json";
import { makeSpecDemo } from "../demos/formBasicDemos";
import {
  AvatarDemo,
  avatarDemoCode,
  BadgeDemo,
  badgeDemoCode,
  CardDemo,
  cardDemoCode,
  DescriptionsDemo,
  descriptionsDemoCode,
  ResultDemo,
  resultDemoCode,
  SegmentedDemo,
  segmentedDemoCode,
  TableDemo,
  tableDemoCode,
  TagDemo,
  tagDemoCode,
  TimelineDemo,
  timelineDemoCode,
  PaginationDemo,
  paginationDemoCode,
  ProgressDemo,
  progressDemoCode,
} from "../demos/dataBasicDemos";
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

const dataPages = figmaSource.componentPages.filter((p) => p.category === "Data");

const interactiveSpecs: Record<string, Omit<ComponentDoc, "slug">> = {
  tag: {
    ...base({ name: "Tag", nodeId: "44:13712", category: "Data" }),
    subtitle: "标签 · Tag / New Tag / Tag Group / Check Tag",
    elementMapping: "el-tag",
    interactive: true,
    Demo: TagDemo,
    codeTemplate: tagDemoCode,
    variants: [
      "Close: false | true",
      "Style: Default | Success | Warning | Danger | Info",
      "Size: Default | Large | Small",
      "Topic: Plain | Light | Dark",
      "New Tag: State Default | Hover | Focus × Size",
      "Tag Group: Custom false | true",
      "Check Tag: checked false | true",
    ],
    props: [
      { name: "tagStyle", type: "TagStyle", default: "Default", description: "Figma Style" },
      { name: "size", type: "TagSize", default: "Default", description: "Figma Size" },
      { name: "topic", type: "TagTopic", default: "Plain", description: "Figma Topic" },
      { name: "closable", type: "boolean", default: "false", description: "Figma Close" },
    ],
  },
  avatar: {
    ...base({ name: "Avatar", nodeId: "1300:45524", category: "Data" }),
    subtitle: "头像 · Icon / Image / Text",
    elementMapping: "el-avatar · el-avatar-group",
    interactive: true,
    Demo: AvatarDemo,
    codeTemplate: avatarDemoCode,
    variants: [
      "Size: Custom | 24 | 32 | 40 | 48 | 56",
      "Type: Icon | Image | Text",
      "Shape: Square | Circle",
      "Avatar Group: overlap | gap",
      "Overlap 描边：--pt-avatar-overlap-border 与容器背景一致",
    ],
    props: [
      { name: "size", type: "AvatarSize", default: "40", description: "Figma Size" },
      { name: "avatarType", type: "Icon | Image | Text", default: "Icon", description: "Figma Type" },
      { name: "shape", type: "Square | Circle", default: "Circle", description: "Figma Shape" },
      { name: "src", type: "string", description: "Image · 默认 /avatar-figma-sample.png（Figma 占位）" },
      { name: "text", type: "string", description: "Text · 首字母大写（取首字符）" },
    ],
  },
  segmented: {
    ...base({ name: "Segmented", nodeId: "6243:916", category: "Data" }),
    subtitle: "分段控制器 · Segmented / Button",
    elementMapping: "el-segmented",
    interactive: true,
    Demo: SegmentedDemo,
    codeTemplate: segmentedDemoCode,
    variants: [
      "Custom: false | true",
      "Number: 2 … 12（Custom=false）",
      "Segmented/Button: Default | Hover | Selected | Disabled",
    ],
    props: [
      { name: "custom", type: "boolean", default: "false", description: "Figma Custom" },
      { name: "number", type: "SegmentedNumber", default: "3", description: "Figma Number" },
      { name: "disabled", type: "boolean", default: "false", description: "整组禁用" },
    ],
  },
  result: {
    ...base({ name: "Result", nodeId: "102:24416", category: "Data" }),
    subtitle: "结果 · State × 提示文案 × 操作按钮",
    elementMapping: "el-result",
    interactive: true,
    Demo: ResultDemo,
    codeTemplate: resultDemoCode,
    variants: [
      "State: Success | Warning | Error | Info | Other",
      "Show prompt: false | true",
      "Show button: false | true",
    ],
    props: [
      { name: "state", type: "ResultState", default: "Success", description: "Figma State" },
      { name: "showSubTitle", type: "boolean", default: "true", description: "Figma Show prompt" },
      { name: "showButton", type: "boolean", default: "true", description: "Figma Show button" },
    ],
  },
  descriptions: {
    ...base({ name: "Descriptions", nodeId: "91:22349", category: "Data" }),
    subtitle: "描述列表 · Description Item",
    elementMapping: "el-descriptions · el-descriptions-item",
    interactive: true,
    Demo: DescriptionsDemo,
    codeTemplate: descriptionsDemoCode,
    variants: [
      "Descriptions: Layout Horizontal | Vertical × Icon false | true × Border false | true",
      "Description Item: Size Default | Large | Small × Tag（Remarks 行）",
    ],
    props: [
      { name: "layout", type: "DescriptionsLayout", default: "Horizontal", description: "Figma Layout" },
      { name: "size", type: "DescriptionsSize", default: "Default", description: "Figma Size" },
      { name: "border", type: "boolean", default: "false", description: "Figma Border" },
      { name: "icon", type: "boolean", default: "false", description: "Figma Icon（true 时 User Info + Operation）" },
    ],
  },
  card: {
    ...base({ name: "Card", nodeId: "1314:40376", category: "Data" }),
    subtitle: "卡片 · Header / Body / Footer",
    elementMapping: "el-card",
    interactive: true,
    Demo: CardDemo,
    codeTemplate: cardDemoCode,
    variants: [
      "Card Type: Default | Only Body | Header+Footer",
      "Header Type: Default | More | Icon | Back",
      "Body Type: Text | Image",
      "Footer Type: Default | More",
    ],
    props: [
      { name: "cardType", type: "CardType", default: "Default", description: "Figma Card Type" },
      { name: "headerType", type: "CardHeaderType", default: "Default", description: "Component/Header" },
      { name: "bodyType", type: "CardBodyType", default: "Text", description: "Component/Body" },
      { name: "footerType", type: "CardFooterType", default: "Default", description: "Component/Footer" },
    ],
  },
  table: {
    ...base({ name: "Table", nodeId: "75:21467", category: "Data" }),
    subtitle: "表格 · Column × Table Cell × Table-Action",
    elementMapping: "el-table · el-table-column",
    interactive: true,
    Demo: TableDemo,
    codeTemplate: tableDemoCode,
    variants: [
      "Column: Custom false | true × Rows × Stripe × Border",
      "Table Cell: Type Default | Left Icon | … × Size Default | Large",
      "Table-Action: Type Text | Icon × Num 1 | 2 | 3 | More",
    ],
    props: [
      { name: "custom", type: "boolean", default: "true", description: "Figma Custom（Copy me 多列单元格）" },
      { name: "rows", type: "1 … 12", default: "3", description: "Custom=false 行数" },
      { name: "stripe", type: "boolean", default: "false", description: "Figma Stripe" },
      { name: "border", type: "boolean", default: "false", description: "Figma Boder（列竖线）" },
      { name: "size", type: "Default | Large", default: "Large", description: "Table Cell 行高 40 | 64" },
    ],
  },
  progress: {
    ...base({ name: "Progress", nodeId: "96:24398", category: "Data" }),
    subtitle: "进度条 · Bar · Circular · Progress",
    elementMapping: "el-progress",
    interactive: true,
    Demo: ProgressDemo,
    codeTemplate: progressDemoCode,
    variants: [
      "Type: Default | Internal | Circle | Dashboard",
      "State: Primary | Success | Warning | Error",
      "Component/Bar: Default | Internal × %=0…100",
    ],
    props: [
      { name: "visualType", type: "Default | Internal | Circle | Dashboard", default: "Default", description: "Figma Type" },
      { name: "state", type: "Primary | Success | Warning | Error", default: "Primary", description: "Figma State" },
      { name: "percentage", type: "number", default: "50", description: "0–100" },
      { name: "showLabel", type: "boolean", default: "true", description: "线形默认右侧 %；Internal 条内" },
    ],
  },
  pagination: {
    ...base({ name: "Pagination", nodeId: "94:22961", category: "Data" }),
    subtitle: "分页 · Type × Style × Size × More",
    elementMapping: "el-pagination",
    interactive: true,
    Demo: PaginationDemo,
    codeTemplate: paginationDemoCode,
    variants: [
      "Type: <5page | >5page | Both ends omitted | Input go to",
      "Style: Default | Background | Border",
      "Size: Default | Small",
      "More: Total | Page size | Go to",
    ],
    props: [
      { name: "layoutType", type: "PaginationLayoutType", default: ">5page", description: "Figma Type" },
      { name: "paginationStyle", type: "Default | Background | Border", default: "Default", description: "Figma Style" },
      { name: "size", type: "Default | Small", default: "Default", description: "Items 32 | 24px" },
      { name: "showTotal", type: "boolean", default: "false", description: "Total 1000" },
      { name: "showPageSize", type: "boolean", default: "false", description: "Component/More Select" },
      { name: "showGoTo", type: "boolean", default: "false", description: "Component/More Go to" },
    ],
  },
  timeline: {
    ...base({ name: "Timeline", nodeId: "93:24446", category: "Data" }),
    subtitle: "时间线 · Timeline-Cell × Item Slots",
    elementMapping: "el-timeline · el-timeline-item",
    interactive: true,
    Demo: TimelineDemo,
    codeTemplate: timelineDemoCode,
    variants: [
      "Timeline-Cell: Vertical | Horizontal | Card",
      "Item Slots: Type × Size × Hollow × Center",
    ],
    props: [
      { name: "cellType", type: "TimelineCellType", default: "Vertical", description: "Figma Timeline-Cell Type" },
      { name: "activeType", type: "TimelineItemType", default: "Primary", description: "首节点 Type（Copy me）" },
      { name: "size", type: "Default | Large", default: "Default", description: "节点圆点 12 | 14px" },
      { name: "hollow", type: "boolean", default: "false", description: "Figma Hollow" },
    ],
  },
  badge: {
    ...base({ name: "Badge", nodeId: "88:22006", category: "Data" }),
    subtitle: "徽章 · 数字 / 点状",
    elementMapping: "el-badge",
    interactive: true,
    Demo: BadgeDemo,
    codeTemplate: badgeDemoCode,
    variants: [
      "Style: Primary | Success | Warning | Danger（Figma Error）",
      "Dot: false | true",
      "挂载：Avatar · Button",
    ],
    props: [
      { name: "badgeStyle", type: "BadgeStyle", default: "Danger", description: "Figma Style（Copy me 通知为 Error 红）" },
      { name: "dot", type: "boolean", default: "false", description: "Figma Dot" },
      { name: "value", type: "ReactNode", description: "数字或短文案" },
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

export const dataFormDocs: Record<string, ComponentDoc> = Object.fromEntries(
  dataPages.map((page) => {
    const slug = toSlug(page.name);
    const spec = interactiveSpecs[slug];
    if (spec) return [slug, { slug, ...spec }];
    return [slug, placeholderDoc(page)];
  }),
);

export function isDataSlug(slug: string): boolean {
  return dataPages.some((p) => toSlug(p.name) === slug);
}

export function listInteractiveDataSlugs(): string[] {
  return Object.values(dataFormDocs)
    .filter((d) => d.interactive)
    .map((d) => d.slug);
}
