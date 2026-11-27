import { MENU_EDS_ICONS } from "./menuFigmaIcons";

/**
 * Figma Layout 帧 · Sidebar `menu-item*10` 一级图标（与 `LayoutFrameMenu` 同源）
 * Sidebar 组件集变体（`3313:56229`）为占位 `Other/grid-alt`；业务 Layout 用下列映射。
 */
export const SIDEBAR_DASHBOARD_ICON = "eds-other-add-block";

export const SIDEBAR_MENU_L1_ICONS: Record<string, string> = {
  Dashboard: SIDEBAR_DASHBOARD_ICON,
  系统管理: "eds-action-atom",
  列表页: "eds-action-box",
  异常页面: "eds-action-book-open",
  表单页面: "eds-other-file",
  设置页面: "eds-other-inbox",
  功能页面: "eds-other-coffee",
  组件示例: "eds-other-folder",
  常用模板: "eds-action-award",
  常用模版: "eds-action-award",
  外部页面: "eds-action-calendar",
};

export function sidebarMenuIconId(label: string): string {
  return SIDEBAR_MENU_L1_ICONS[label] ?? MENU_EDS_ICONS.menuGrid;
}