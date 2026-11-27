import { Avatar } from "@/components/Avatar/Avatar";
import { AVATAR_FIGMA_SAMPLE_SRC } from "@/components/Avatar/avatarAssets";
import { EdsIconById } from "@/components/Icon/EdsIconById";
import { MENU_EDS_ICONS } from "./menuFigmaIcons";
import { Menu, MenuItem } from "./Menu";
import { useSidebarUnfolded } from "./Sidebar";
import "./sidebar-user-dropdown-showcase.css";

/** Figma `8862:26466` · Style 04 · Setting 槽 */
export function SidebarStyle04Setting() {
  return (
    <Menu menuType="Sidebar" menuSize="Default" embedded className="pt-sidebar__setting-menu">
      <MenuItem level={1} showIcon iconId={MENU_EDS_ICONS.headset} childIcon={false}>
        技术支持
      </MenuItem>
      <MenuItem level={1} showIcon iconId={MENU_EDS_ICONS.setting} childIcon={false}>
        设置
      </MenuItem>
    </Menu>
  );
}

type SidebarStyle04UserProps = {
  /** Showcase · user 开启时悬停展示 dropdownMenu */
  active?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

/** Figma `8857:13370` · Style 04 · User 槽 */
export function SidebarStyle04User({
  active,
  onMouseEnter,
  onMouseLeave,
}: SidebarStyle04UserProps) {
  const unfolded = useSidebarUnfolded();

  if (!unfolded) {
    return (
      <button
        type="button"
        className="pt-sidebar-profile-rail pt-sidebar__user pt-sidebar__user--collapsed"
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
          src={AVATAR_FIGMA_SAMPLE_SRC}
          alt="Lily-Rose"
        />
      </button>
    );
  }

  return (
    <div
      className="pt-sidebar__user pt-sidebar__user--unfolded pt-sidebar-profile-trigger"
      data-active={active ? "true" : "false"}
      role="button"
      tabIndex={0}
      aria-label="用户菜单"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Avatar
        size="Custom"
        customSize={36}
        avatarType="Image"
        shape="Circle"
        src={AVATAR_FIGMA_SAMPLE_SRC}
        alt="Lily-Rose"
      />
      <div className="pt-sidebar__user-info">
        <span className="pt-sidebar__user-name">Lily-Rose</span>
        <span className="pt-sidebar__user-email">hello@lilyrose.com</span>
      </div>
      <EdsIconById id="eds-arrow-swap-alt" size={14} className="pt-sidebar__user-chevron" aria-hidden />
    </div>
  );
}