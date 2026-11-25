import { Avatar } from "@/components/Avatar/Avatar";
import { AVATAR_FIGMA_SAMPLE_SRC } from "@/components/Avatar/avatarAssets";
import { EdsIconById } from "@/components/Icon/EdsIconById";
import { Menu, MenuItem } from "./Menu";
import { useSidebarUnfolded } from "./Sidebar";

/** Figma `8862:26466` · Style 04 · Setting 槽 */
export function SidebarStyle04Setting() {
  return (
    <Menu menuType="Sidebar" menuSize="Default" embedded className="pt-sidebar__setting-menu">
      <MenuItem level={1} showIcon childIcon={false}>
        技术支持
      </MenuItem>
      <MenuItem level={1} showIcon childIcon={false}>
        设置
      </MenuItem>
    </Menu>
  );
}

/** Figma `8857:13370` · Style 04 · User 槽 */
export function SidebarStyle04User() {
  const unfolded = useSidebarUnfolded();

  if (!unfolded) {
    return (
      <div className="pt-sidebar__user pt-sidebar__user--collapsed">
        <Avatar
          size="Custom"
          customSize={32}
          avatarType="Image"
          shape="Circle"
          src={AVATAR_FIGMA_SAMPLE_SRC}
          alt="Lily-Rose"
        />
      </div>
    );
  }

  return (
    <div className="pt-sidebar__user pt-sidebar__user--unfolded">
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