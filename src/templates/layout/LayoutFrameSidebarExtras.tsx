import { Menu, MenuItem } from "@/components/Menu/Menu";
import { MENU_EDS_ICONS } from "@/components/Menu/menuFigmaIcons";
import { SidebarUserRow } from "@/components/Menu/SidebarUserRow";

const DEMO_AVATAR = `${import.meta.env.BASE_URL}login-hero-mascot.jpg`;

/** Figma Layout 帧 · `8853:9926` 技术支持 / 设置 */
export function LayoutFrameSidebarUtility() {
  return (
    <Menu menuType="Sidebar" menuSize="Default" embedded>
      <MenuItem level={1} showIcon iconId={MENU_EDS_ICONS.headset}>
        技术支持
      </MenuItem>
      <MenuItem level={1} showIcon iconId={MENU_EDS_ICONS.setting}>
        设置
      </MenuItem>
    </Menu>
  );
}

/** Figma Layout 帧 · `8862:25750` User 条 */
export function LayoutFrameSidebarProfile() {
  return <SidebarUserRow avatarSrc={DEMO_AVATAR} />;
}