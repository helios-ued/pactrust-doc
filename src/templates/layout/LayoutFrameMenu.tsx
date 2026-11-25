import {
  Menu,
  MenuItem,
  MenuSidebarSection,
  MenuSidebarStyle04Sample,
} from "@/components/Menu/Menu";
import type { FigmaLayoutVariant } from "./layoutFrameSpecs";

const LAYOUT_MENU_L1: { label: string; iconId: string }[] = [
  { label: "系统管理", iconId: "eds-action-atom" },
  { label: "列表页", iconId: "eds-action-box" },
  { label: "异常页面", iconId: "eds-action-book-open" },
  { label: "表单页面", iconId: "eds-other-file" },
  { label: "设置页面", iconId: "eds-other-inbox" },
  { label: "功能页面", iconId: "eds-other-coffee" },
  { label: "组件示例", iconId: "eds-other-folder" },
  { label: "常用模板", iconId: "eds-action-award" },
  { label: "外部页面", iconId: "eds-action-calendar" },
];

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
        iconId="eds-other-add-block"
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
