/** Figma `8655:41369` · ✨ Layout 页四帧锁定 */
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
    contentPadding: string;
    /** 侧栏 240 · 菜单槽对应 Sidebar Style 01–04 */
    sidebarMenuStyle: LayoutSidebarMenuStyle;
    sidebarWidthPx: 240;
    /** Layout-01 / 04 footer hidden */
    showSidebarFooter: boolean;
    /** 侧栏底色：与画布一致 | Fill/Blank 白 */
    sidebarSurface: "canvas" | "blank";
    /** Global-header 底部分割线（Layout-03 无） */
    globalHeaderDivider: boolean;
    /** 01–03：Header 在 Layout 卡内；04：Global-header 在 Main 顶栏 */
    frameKind: LayoutFrameKind;
    /** Global-header 左侧页标题（04 无） */
    globalHeaderPageTitle?: string;
    /** Layout-04 · Page 区内边距 */
    pagePadding?: string;
    /** 根节点背景：画布灰 | 页面灰 */
    shellBackground: "fill" | "page";
    /** Layout-04 卡片内标题区文案 */
    pageBarTitle?: string;
  }
> = {
  "layout-01": {
    rootNodeId: "8655:41370",
    layoutNodeId: "8655:41476",
    mainPaddingPx: 16,
    layoutRounded: true,
    contentPadding: "24px",
    sidebarMenuStyle: "02",
    sidebarWidthPx: 240,
    showSidebarFooter: false,
    sidebarSurface: "canvas",
    globalHeaderDivider: true,
    frameKind: "unified-layout",
    globalHeaderPageTitle: "个人中心",
    shellBackground: "fill",
  },
  "layout-02": {
    rootNodeId: "8661:44593",
    layoutNodeId: "8661:44611",
    mainPaddingPx: 0,
    layoutRounded: false,
    contentPadding: "24px",
    sidebarMenuStyle: "01",
    sidebarWidthPx: 240,
    showSidebarFooter: true,
    sidebarSurface: "blank",
    globalHeaderDivider: true,
    frameKind: "unified-layout",
    globalHeaderPageTitle: "个人中心",
    shellBackground: "fill",
  },
  "layout-03": {
    rootNodeId: "8661:44736",
    layoutNodeId: "8661:44739",
    mainPaddingPx: 0,
    layoutRounded: false,
    contentPadding: "8px 24px 24px",
    sidebarMenuStyle: "04",
    sidebarWidthPx: 240,
    showSidebarFooter: true,
    sidebarSurface: "blank",
    globalHeaderDivider: false,
    frameKind: "unified-layout",
    globalHeaderPageTitle: "个人中心",
    shellBackground: "fill",
  },
  "layout-04": {
    rootNodeId: "8745:2586",
    layoutNodeId: "8745:2606",
    mainPaddingPx: 0,
    layoutRounded: false,
    contentPadding: "24px",
    sidebarMenuStyle: "01",
    sidebarWidthPx: 240,
    showSidebarFooter: false,
    sidebarSurface: "blank",
    globalHeaderDivider: true,
    frameKind: "global-plus-page",
    globalHeaderPageTitle: undefined,
    pagePadding: "16px",
    shellBackground: "page",
    pageBarTitle: "标题区域",
  },
};
