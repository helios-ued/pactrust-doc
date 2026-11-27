import type { BasePanelPadding } from "@/components/Layout/BasePanel";

/** Figma `8655:41369` · ✨ Layout 页四帧 · 组件 `9096:7416` */
export type FigmaLayoutVariant = "layout-01" | "layout-02" | "layout-03" | "layout-04";

export type LayoutSidebarMenuStyle = "01" | "02" | "03" | "04";

export type LayoutFrameKind = "unified-layout" | "global-plus-page";

export const LAYOUT_FRAME_SPECS: Record<
  FigmaLayoutVariant,
  {
    rootNodeId: string;
    layoutNodeId: string;
    mainPaddingPx: number;
    layoutRounded: boolean;
    /** @deprecated 使用 BasePanel slotPadding */
    contentPadding: string;
    basePanelPadding: BasePanelPadding;
    basePanelSlotPadding: string;
    sidebarMenuStyle: LayoutSidebarMenuStyle;
    sidebarWidthPx: 220;
    showSidebarFooter: boolean;
    /** 底栏 User + 技术支持区（Style 04 由菜单自带） */
    showSidebarProfileExtras: boolean;
    sidebarSurface: "canvas" | "blank";
    globalHeaderDivider: boolean;
    frameKind: LayoutFrameKind;
    /** Global-header · PageTitle 文案 */
    globalHeaderTitleText?: string;
    /** Figma `pageTitle` · 展示 PageTitle 区 */
    globalHeaderPageTitle?: boolean;
    pagePadding?: string;
    shellBackground: "fill" | "page";
    pageBarTitle?: string;
  }
> = {
  "layout-01": {
    rootNodeId: "9096:7415",
    layoutNodeId: "8655:41476",
    mainPaddingPx: 16,
    layoutRounded: true,
    contentPadding: "24px",
    basePanelPadding: "Default",
    basePanelSlotPadding: "var(--pt-space-16, 16px)",
    sidebarMenuStyle: "02",
    sidebarWidthPx: 220,
    showSidebarFooter: false,
    showSidebarProfileExtras: true,
    sidebarSurface: "canvas",
    globalHeaderDivider: true,
    frameKind: "unified-layout",
    globalHeaderTitleText: "个人中心",
    shellBackground: "fill",
  },
  "layout-02": {
    rootNodeId: "9096:7414",
    layoutNodeId: "8661:44611",
    mainPaddingPx: 0,
    layoutRounded: false,
    contentPadding: "24px",
    basePanelPadding: "None",
    basePanelSlotPadding: "var(--pt-space-16, 16px)",
    sidebarMenuStyle: "01",
    sidebarWidthPx: 220,
    showSidebarFooter: false,
    showSidebarProfileExtras: true,
    sidebarSurface: "blank",
    globalHeaderDivider: true,
    frameKind: "unified-layout",
    globalHeaderTitleText: "个人中心",
    shellBackground: "fill",
  },
  "layout-03": {
    rootNodeId: "9096:7413",
    layoutNodeId: "8661:44739",
    mainPaddingPx: 0,
    layoutRounded: false,
    contentPadding: "8px 24px 24px",
    basePanelPadding: "None",
    basePanelSlotPadding: "0 var(--pt-space-16, 16px) var(--pt-space-16, 16px) var(--pt-space-16, 16px)",
    sidebarMenuStyle: "04",
    sidebarWidthPx: 220,
    showSidebarFooter: false,
    showSidebarProfileExtras: false,
    sidebarSurface: "blank",
    globalHeaderDivider: false,
    frameKind: "unified-layout",
    globalHeaderTitleText: "个人中心",
    shellBackground: "fill",
  },
  "layout-04": {
    rootNodeId: "9096:7412",
    layoutNodeId: "8745:2603",
    mainPaddingPx: 0,
    layoutRounded: false,
    contentPadding: "24px",
    basePanelPadding: "None",
    basePanelSlotPadding: "var(--pt-space-16, 16px)",
    sidebarMenuStyle: "01",
    sidebarWidthPx: 220,
    showSidebarFooter: false,
    showSidebarProfileExtras: true,
    sidebarSurface: "blank",
    globalHeaderDivider: true,
    frameKind: "global-plus-page",
    globalHeaderPageTitle: false,
    pagePadding: "0",
    shellBackground: "page",
    pageBarTitle: "标题区域",
  },
};