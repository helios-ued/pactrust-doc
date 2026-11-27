import { Avatar } from "@/components/Avatar/Avatar";
import { MENU_EDS_ICONS } from "./menuFigmaIcons";
import { Menu, MenuItem } from "./Menu";
import "./sidebar-user-dropdown-showcase.css";
import { SidebarUserRow } from "./SidebarUserRow";
import { useSidebarUnfolded } from "./Sidebar";

/** Figma Style 01–03 · Setting 槽（展开 / 收起轨） */
export function SidebarShowcaseSetting({ menuSize = "Default" }: { menuSize?: "Large" | "Default" | "Small" }) {
  return (
    <Menu menuType="Sidebar" menuSize={menuSize} embedded className="pt-sidebar__setting-menu">
      <MenuItem level={1} showIcon iconId={MENU_EDS_ICONS.headset} childIcon={false}>
        技术支持
      </MenuItem>
      <MenuItem level={1} showIcon iconId={MENU_EDS_ICONS.setting} childIcon={false}>
        设置
      </MenuItem>
    </Menu>
  );
}

type SidebarShowcaseUserProps = {
  avatarSrc?: string;
  /** Showcase · dropdownMenu 悬停时高亮 */
  active?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

/** Figma Style 01–03 · User 底栏 · Expanded `9039:3808` / Collapsed 42×54 头像轨 */
export function SidebarShowcaseUser({
  avatarSrc,
  active,
  onMouseEnter,
  onMouseLeave,
}: SidebarShowcaseUserProps) {
  const unfolded = useSidebarUnfolded();

  if (!unfolded) {
    return (
      <button
        type="button"
        className="pt-sidebar-profile-rail"
        data-active={active ? "true" : "false"}
        aria-label="用户菜单"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Avatar
          size="Custom"
          customSize={32}
          avatarType="Image"
          shape="Circle"
          src={avatarSrc}
          alt="Lily-Rose"
        />
      </button>
    );
  }

  return (
    <div
      className="pt-sidebar-profile-trigger"
      data-active={active ? "true" : "false"}
      role="button"
      tabIndex={0}
      aria-label="用户菜单"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <SidebarUserRow avatarSrc={avatarSrc} />
    </div>
  );
}