import { GlobalHeader } from "@/components/Menu/GlobalHeader";
import { Sidebar } from "@/components/Menu/Sidebar";
import { cn } from "@/lib/cn";
import { useCallback, useRef, useState, type ReactNode } from "react";
import { LayoutFrameMenu } from "./LayoutFrameMenu";
import {
  LAYOUT_FRAME_SPECS,
  type FigmaLayoutVariant,
} from "./layoutFrameSpecs";
import { PageLayoutCard } from "./PageLayoutCard";
import { useLayoutSidebarNarrow } from "./useLayoutSidebarNarrow";
import "./dashboard-shell.css";

export type DashboardLayoutVariant = FigmaLayoutVariant;

export type DashboardShellProps = {
  variant?: DashboardLayoutVariant;
  children?: ReactNode;
  /** 无 children 时展示 Figma「内容区域」 */
  showPlaceholder?: boolean;
  className?: string;
  pageBarTitle?: string | false;
  /** Layout-04 · C1：子内容直接铺满 Page（8370:13261），无 Page Layout 白卡 */
  pageSlot?: "page-layout" | "direct";
  /** Figma Page Body inset（模块页可覆盖 24px 默认） */
  contentPadding?: string;
  pageBar?: ReactNode;
};

export function DashboardShell({
  variant = "layout-01",
  children,
  showPlaceholder = true,
  className,
  pageBarTitle,
  pageSlot = "page-layout",
  contentPadding,
  pageBar,
}: DashboardShellProps) {
  const spec = LAYOUT_FRAME_SPECS[variant];
  const showPh = showPlaceholder && !children;
  const shellRef = useRef<HTMLDivElement>(null);
  const isNarrowShell = useLayoutSidebarNarrow(shellRef);
  const [userSidebarUnfolded, setUserSidebarUnfolded] = useState(true);
  const sidebarUnfolded = isNarrowShell ? false : userSidebarUnfolded;

  const onSidebarUnfoldedChange = useCallback(
    (next: boolean) => {
      if (!isNarrowShell) setUserSidebarUnfolded(next);
    },
    [isNarrowShell],
  );

  const globalHeader = (
    <GlobalHeader
      logo={false}
      foldButton
      layoutFrame
      headerDivider={spec.globalHeaderDivider}
      pageTitle={spec.globalHeaderPageTitle ?? ""}
      avatarSrc="/login-hero-mascot.jpg"
    />
  );

  const pageCard = (
    <PageLayoutCard
      variant={variant}
      placeholder={showPh}
      pageBarTitle={pageBarTitle}
      contentPadding={contentPadding}
      pageBar={pageBar}
    >
      {children}
    </PageLayoutCard>
  );

  return (
    <div
      ref={shellRef}
      className={cn(
        "pt-dashboard-shell",
        spec.shellBackground === "page" && "pt-dashboard-shell--page-bg",
        isNarrowShell && "pt-dashboard-shell--sidebar-compact",
        className,
      )}
      data-variant={variant}
      data-node-id={spec.rootNodeId}
      data-sidebar-compact={isNarrowShell ? "true" : "false"}
    >
      <Sidebar
        className="pt-sidebar--layout pt-dashboard-shell__sidebar"
        unfolded={sidebarUnfolded}
        onUnfoldedChange={onSidebarUnfoldedChange}
        sidebarStyle={spec.sidebarMenuStyle}
        showFooter={spec.showSidebarFooter}
        logoTitle="PacsTrust"
      >
        <LayoutFrameMenu variant={variant} />
      </Sidebar>
      {spec.frameKind === "global-plus-page" ? (
        <div className="pt-dashboard-shell__main pt-dashboard-shell__main--page-stack">
          {globalHeader}
          <div
            className={cn(
              "pt-dashboard-shell__page",
              pageSlot === "direct" && "pt-dashboard-shell__page--direct",
            )}
            style={spec.pagePadding ? { padding: spec.pagePadding } : undefined}
          >
            {pageSlot === "direct" && children ? children : pageCard}
            {pageSlot === "direct" && !children && showPh ? pageCard : null}
          </div>
        </div>
      ) : (
        <div
          className="pt-dashboard-shell__main"
          style={{ padding: spec.mainPaddingPx }}
        >
          <PageLayoutCard variant={variant} placeholder={showPh} header={globalHeader}>
            {children}
          </PageLayoutCard>
        </div>
      )}
    </div>
  );
}
