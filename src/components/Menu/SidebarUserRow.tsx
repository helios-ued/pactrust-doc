import { EdsIconById } from "@/components/Icon/EdsIconById";
import { cn } from "@/lib/cn";
import { MENU_EDS_ICONS } from "./menuFigmaIcons";
import "./sidebar-user-row.css";

/** Figma `User` · `9039:3808` · Sidebar / Global-header 用户条 */
export type SidebarUserRowProps = {
  name?: string;
  email?: string;
  avatarSrc?: string;
  className?: string;
};

export function SidebarUserRow({
  name = "Lily-Rose",
  email = "hello@liiyrose.com",
  avatarSrc,
  className,
}: SidebarUserRowProps) {
  return (
    <div className={cn("pt-sidebar-user-row", className)} data-figma-node="9039:3808">
      <div className="pt-sidebar-user-row__avatar" aria-hidden>
        {avatarSrc ? <img src={avatarSrc} alt="" /> : null}
      </div>
      <div className="pt-sidebar-user-row__info">
        <span className="pt-sidebar-user-row__name">{name}</span>
        <span className="pt-sidebar-user-row__email">{email}</span>
      </div>
      <EdsIconById id={MENU_EDS_ICONS.chevronDown} size={14} className="pt-sidebar-user-row__caret" />
    </div>
  );
}