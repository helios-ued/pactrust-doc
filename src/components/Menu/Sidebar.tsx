import { PacsTrustLogoIcon } from "@/components/brand/PacsTrustLogoIcon";
import { EdsIconById } from "@/components/Icon/EdsIconById";
import { cn } from "@/lib/cn";
import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { MENU_EDS_ICONS } from "./menuFigmaIcons";
import type { FigmaSidebarMenuStyle } from "./sidebarMenuStyles";
import "./sidebar.css";
import "./sidebar-menu-styles.css";

/** Figma Sidebar · Unfold=on | off */
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
  /** Figma Unfold=on（展开 200px） */
  unfolded?: boolean;
  defaultUnfolded?: boolean;
  onUnfoldedChange?: (unfolded: boolean) => void;
  logoTitle?: string;
  /** Figma Layout 帧 footer 为 hidden */
  showFooter?: boolean;
  /** Figma Sidebar Style 01–04（Menu 文档；Layout 不传） */
  sidebarStyle?: FigmaSidebarMenuStyle;
  /** Figma Style 04 · Setting / User 槽（替代底栏 Fold） */
  settingSlot?: ReactNode;
  userSlot?: ReactNode;
  className?: string;
  children?: ReactNode;
};

export function Sidebar({
  unfolded: controlledUnfolded,
  defaultUnfolded = true,
  onUnfoldedChange,
  logoTitle = "UI Design",
  showFooter = true,
  sidebarStyle,
  settingSlot,
  userSlot,
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
      >
        <div className="pt-sidebar__logo">
          <PacsTrustLogoIcon />
          {unfolded ? <span className="pt-sidebar__logo-text">{logoTitle}</span> : null}
        </div>
        <div className="pt-sidebar__body">{children}</div>
        {settingSlot ? <div className="pt-sidebar__slot pt-sidebar__slot--setting">{settingSlot}</div> : null}
        {userSlot ? <div className="pt-sidebar__slot pt-sidebar__slot--user">{userSlot}</div> : null}
        {showFooter ? (
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
