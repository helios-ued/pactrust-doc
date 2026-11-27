import { PacsTrustLogoIcon } from "@/components/brand/PacsTrustLogoIcon";
import { EdsIconById } from "@/components/Icon/EdsIconById";
import { cn } from "@/lib/cn";
import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { MENU_EDS_ICONS } from "./menuFigmaIcons";
import type { FigmaSidebarMenuStyle } from "./sidebarMenuStyles";
import "./sidebar.css";
import "./sidebar-menu-styles.css";

/** Figma Sidebar · State=Expanded | Collapsed */
export type SidebarUnfold = boolean;

type SidebarContextValue = {
  unfolded: boolean;
  menuStyle?: FigmaSidebarMenuStyle;
};

export const SidebarLayoutContext = createContext<SidebarContextValue>({ unfolded: true });

export function useSidebarUnfolded(): boolean {
  return useContext(SidebarLayoutContext).unfolded;
}

export function useSidebarMenuStyle(): FigmaSidebarMenuStyle | undefined {
  return useContext(SidebarLayoutContext).menuStyle;
}

export type SidebarProps = {
  /** Figma State=Expanded（220px）| Collapsed（58px） */
  unfolded?: boolean;
  defaultUnfolded?: boolean;
  onUnfoldedChange?: (unfolded: boolean) => void;
  /** Figma showLogo */
  showLogo?: boolean;
  logoTitle?: string;
  /** 旧 Showcase 折叠底栏（Figma 组件集无 Footer 变体） */
  showFooter?: boolean;
  /** Figma Style 01–04 */
  sidebarStyle?: FigmaSidebarMenuStyle;
  /** Figma Style 04 · Setting / User 槽；Layout Style 01–03 · 技术支持区 */
  settingSlot?: ReactNode;
  userSlot?: ReactNode;
  /** Figma `8862:25750` · 底栏 User 条（70px） */
  profileFooter?: ReactNode;
  className?: string;
  children?: ReactNode;
};

export function Sidebar({
  unfolded: controlledUnfolded,
  defaultUnfolded = true,
  onUnfoldedChange,
  showLogo = true,
  logoTitle = "UI Design",
  showFooter = true,
  sidebarStyle,
  settingSlot,
  userSlot,
  profileFooter,
  className,
  children,
}: SidebarProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultUnfolded);
  const unfolded = controlledUnfolded ?? uncontrolled;

  const setUnfolded = useCallback(
    (next: boolean) => {
      setUncontrolled(next);
      onUnfoldedChange?.(next);
    },
    [onUnfoldedChange],
  );

  const toggle = () => setUnfolded(!unfolded);

  return (
    <SidebarLayoutContext.Provider value={{ unfolded, menuStyle: sidebarStyle }}>
      <aside
        className={cn(
          "pt-sidebar",
          unfolded ? "pt-sidebar--unfolded" : "pt-sidebar--collapsed",
          className,
        )}
        aria-label="Sidebar"
        {...(sidebarStyle ? { "data-sidebar-style": sidebarStyle } : {})}
        data-sidebar-state={unfolded ? "Expanded" : "Collapsed"}
        data-node-id="3313:56233"
      >
        {showLogo ? (
          <div className="pt-sidebar__logo">
            <PacsTrustLogoIcon />
            {unfolded ? <span className="pt-sidebar__logo-text">{logoTitle}</span> : null}
          </div>
        ) : null}
        <div className="pt-sidebar__body">{children}</div>
        {settingSlot ? <div className="pt-sidebar__utility">{settingSlot}</div> : null}
        {userSlot ? <div className="pt-sidebar__utility">{userSlot}</div> : null}
        {profileFooter ? <div className="pt-sidebar__profile-footer">{profileFooter}</div> : null}
        {showFooter && !profileFooter ? (
          <div className="pt-sidebar__footer">
            <button
              type="button"
              className="pt-sidebar__toggle"
              aria-label={unfolded ? "收起侧边栏" : "展开侧边栏"}
              aria-expanded={unfolded}
              onClick={toggle}
            >
              <EdsIconById
                id={unfolded ? MENU_EDS_ICONS.sidebarCollapse : MENU_EDS_ICONS.sidebarExpandRail}
                size={16}
              />
            </button>
          </div>
        ) : null}
      </aside>
    </SidebarLayoutContext.Provider>
  );
}
