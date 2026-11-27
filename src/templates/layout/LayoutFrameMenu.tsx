import {
  Menu,
  MenuItem,
  MenuSidebarSection,
  MenuSidebarStyle04Sample,
} from "@/components/Menu/Menu";
import {
  SIDEBAR_DASHBOARD_ICON,
  SIDEBAR_MENU_L1_ICONS,
} from "@/components/Menu/sidebarMenuItemIcons";
import type { FigmaLayoutVariant } from "./layoutFrameSpecs";

const LAYOUT_MENU_L1: { label: string; iconId: string }[] = Object.entries(SIDEBAR_MENU_L1_ICONS)
  .filter(([label]) => label !== "Dashboard" && label !== "常用模版")
  .map(([label, iconId]) => ({ label, iconId }));

/** Figma Layout 帧 · Sidebar `menu-item*10`（各帧绑定 Style 01/02/03） */
export function LayoutFrameMenu({ variant }: { variant: FigmaLayoutVariant }) {
  if (variant === "layout-03") {
    return <MenuSidebarStyle04Sample embedded />;
  }

  return (
    <Menu menuType="Sidebar" menuSize="Default" embedded>
      <MenuSidebarSection
        label="Dashboard"
        flyoutTitle="平台数据"
        selected
        iconId={SIDEBAR_DASHBOARD_ICON}
      >
        <MenuItem level={2} selected>
          主控台
        </MenuItem>
        <MenuItem level={2}>监控页</MenuItem>
        <MenuItem level={2}>工作台</MenuItem>
      </MenuSidebarSection>
      {LAYOUT_MENU_L1.map((item) => (
        <MenuSidebarSection
          key={item.label}
          label={item.label}
          flyoutTitle={item.label}
          iconId={item.iconId}
        >
          <MenuItem level={2}>{item.label}</MenuItem>
        </MenuSidebarSection>
      ))}
    </Menu>
  );
}
