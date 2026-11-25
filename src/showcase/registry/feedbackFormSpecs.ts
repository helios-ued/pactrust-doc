import figmaSource from "../../../figma-source.json";
import { makeSpecDemo } from "../demos/formBasicDemos";
import {
  AlertDemo,
  alertDemoCode,
  DialogDemo,
  dialogDemoCode,
  DrawerDemo,
  drawerDemoCode,
  LoadingDemo,
  loadingDemoCode,
  MessageDemo,
  messageDemoCode,
  MessageBoxDemo,
  messageBoxDemoCode,
  NotificationDemo,
  notificationDemoCode,
  PopconfirmDemo,
  popconfirmDemoCode,
  PopoverDemo,
  popoverDemoCode,
  TooltipDemo,
  tooltipDemoCode,
} from "../demos/feedbackBasicDemos";
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

const feedbackPages = figmaSource.componentPages.filter((p) => p.category === "Feedback");

const interactiveSpecs: Record<string, Omit<ComponentDoc, "slug">> = {
  alert: {
    ...base({ name: "Alert", nodeId: "10:5", category: "Feedback" }),
    subtitle: "警告提示 · Default | Fill",
    elementMapping: "el-alert",
    interactive: true,
    Demo: AlertDemo,
    codeTemplate: alertDemoCode,
    variants: [
      "Style: Default | Fill",
      "State: Primary | Success | Warning | Danger | Info",
      "Close-type: Icon | Text | Default",
      "Align: Left | Center",
    ],
    props: [
      { name: "state", type: "AlertState", default: "Primary", description: "语义" },
      { name: "style", type: "Default | Fill", default: "Default", description: "样式" },
      { name: "closeType", type: "Icon | Text | Default", default: "Icon", description: "Figma Close-type" },
      { name: "withDescription", type: "boolean", default: "true", description: "带辅助文字" },
    ],
  },
  dialog: {
    ...base({ name: "Dialog", nodeId: "1466:46463", category: "Feedback" }),
    subtitle: "对话框 · header · body · footer",
    elementMapping: "el-dialog",
    interactive: true,
    Demo: DialogDemo,
    codeTemplate: dialogDemoCode,
    variants: ["Title-center off | on", "Title icon · Close 16"],
    props: [
      { name: "titleCenter", type: "boolean", default: "false", description: "Figma Title-center" },
      { name: "titleIcon", type: "boolean", default: "true", description: "Info-filled 16" },
    ],
  },
  drawer: {
    ...base({ name: "Drawer", nodeId: "1469:49082", category: "Feedback" }),
    subtitle: "抽屉 · Layout Left | Right | Top | Bottom",
    elementMapping: "el-drawer",
    interactive: true,
    Demo: DrawerDemo,
    codeTemplate: drawerDemoCode,
    variants: ["Layout: Left | Right | Top | Bottom", "Showcase 缩放预览"],
    props: [{ name: "layout", type: "Left | Right | Top | Bottom", default: "Right", description: "Figma Layout" }],
  },
  loading: {
    ...base({ name: "Loading", nodeId: "1470:49083", category: "Feedback" }),
    subtitle: "加载 · Round | Icon × Size",
    elementMapping: "v-loading · ElLoading",
    interactive: true,
    Demo: LoadingDemo,
    codeTemplate: loadingDemoCode,
    variants: ["Type: Round | Icon", "Size: Small | Default | Large"],
    props: [
      { name: "iconType", type: "Round | Icon", default: "Round", description: "Figma Type" },
      { name: "size", type: "Small | Default | Large", default: "Default", description: "Figma Size" },
    ],
  },
  message: {
    ...base({ name: "Message", nodeId: "1470:49084", category: "Feedback" }),
    subtitle: "消息 · Type × Plain · 无 Center",
    elementMapping: "ElMessage",
    interactive: true,
    Demo: MessageDemo,
    codeTemplate: messageDemoCode,
    variants: [
      "Type: Primary | Success | Warning | Danger | Info",
      "Plain false | true",
      "内容宽度自适应 · 无 Center 变体",
    ],
    props: [
      { name: "messageType", type: "Primary | …", default: "Primary", description: "Figma Type" },
      { name: "plain", type: "boolean", default: "false", description: "Figma Plain" },
      { name: "closable", type: "boolean", default: "true", description: "Close 16" },
    ],
  },
  messagebox: {
    ...base({ name: "MessageBox", nodeId: "1470:49085", category: "Feedback" }),
    subtitle: "弹框 · prompts | confirm | submit",
    elementMapping: "ElMessageBox",
    interactive: true,
    Demo: MessageBoxDemo,
    codeTemplate: messageBoxDemoCode,
    variants: ["Type: Message prompts | Confirm the message | Submit"],
    props: [
      { name: "boxType", type: "Message prompts | Confirm the message | Submit", default: "Confirm the message", description: "Figma Type" },
    ],
  },
  notification: {
    ...base({ name: "Notification", nodeId: "1470:49086", category: "Feedback" }),
    subtitle: "通知 · title + message",
    elementMapping: "el-notification",
    interactive: true,
    Demo: NotificationDemo,
    codeTemplate: notificationDemoCode,
    variants: ["Type: Default | Primary | Success | Warning | Error | Info"],
    props: [
      { name: "notificationType", type: "Default | Primary | … | Error", default: "Primary", description: "Figma Type（Error → danger）" },
    ],
  },
  popconfirm: {
    ...base({ name: "Popconfirm", nodeId: "471:25883", category: "Feedback" }),
    subtitle: "气泡确认 · Layout · Yes / No",
    elementMapping: "el-popconfirm",
    interactive: true,
    Demo: PopconfirmDemo,
    codeTemplate: popconfirmDemoCode,
    variants: [
      "Layout: Up-left | Up-center | Up-right | 下左 | 下中 | 下右 | Left-up | Left-center | Left-down | Right-up | Right-center | Right-down",
    ],
    props: [
      {
        name: "layout",
        type: "Up-left | … | Right-down（Figma `1477:51596` 共 12）",
        default: "Up-center",
        description: "Figma Layout",
      },
    ],
  },
  popover: {
    ...base({ name: "Popover", nodeId: "1470:49087", category: "Feedback" }),
    subtitle: "气泡卡片 · Layout · Title + 正文",
    elementMapping: "el-popover",
    interactive: true,
    Demo: PopoverDemo,
    codeTemplate: popoverDemoCode,
    variants: [
      "Layout: up-left | up-middle | up-right | 下左 | 下中 | 下右 | left-up | left-middle | left-bottom | right-up | right-middle | right-bottom",
    ],
    props: [
      {
        name: "layout",
        type: "up-left | … | right-bottom（Figma `1477:51961` 共 12）",
        default: "up-middle",
        description: "Figma Layout",
      },
      { name: "showTitle", type: "boolean", default: "true", description: "Figma Show-title" },
    ],
  },
  tooltip: {
    ...base({ name: "Tooltip", nodeId: "68:18412", category: "Feedback" }),
    subtitle: "文字提示 · Effect × Arrow（12 向）",
    elementMapping: "el-tooltip",
    interactive: true,
    Demo: TooltipDemo,
    codeTemplate: tooltipDemoCode,
    variants: [
      "Effect: Light | Dark",
      "Arrow: Top | Top Start | Top End | Bottom | Bottom Start | Bottom End | Left | Left Start | Left End | Right | Right Start | Right End",
    ],
    props: [
      { name: "effect", type: "Light | Dark", default: "Light", description: "Figma Effect" },
      {
        name: "layout",
        type: "Top | … | Right End（Figma `69:18869` 共 12）",
        default: "Top",
        description: "Figma Arrow",
      },
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

export const feedbackFormDocs: Record<string, ComponentDoc> = Object.fromEntries(
  feedbackPages.map((page) => {
    const slug = toSlug(page.name);
    const spec = interactiveSpecs[slug];
    if (spec) return [slug, { slug, ...spec }];
    return [slug, placeholderDoc(page)];
  }),
);

export function listInteractiveFeedbackSlugs(): string[] {
  return Object.values(feedbackFormDocs)
    .filter((d) => d.interactive)
    .map((d) => d.slug);
}
