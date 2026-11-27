import { GlobalHeader } from "@/components/Menu/GlobalHeader";
import { Sidebar } from "@/components/Menu/Sidebar";
import { cn } from "@/lib/cn";
import { useCallback, useRef, useState, type ReactNode } from "react";
import { isPrototypeDelivery } from "@/prototype/isPrototypeDelivery";
import { PrototypeSidebarMenu } from "@/prototype/PrototypeSidebarMenu";
import { LayoutFrameMenu } from "./LayoutFrameMenu";
import {
  LayoutFrameSidebarProfile,
  LayoutFrameSidebarUtility,
} from "./LayoutFrameSidebarExtras";
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
      collapseButton
      layoutFrame
      headerDivider={spec.globalHeaderDivider}
      pageTitle={spec.globalHeaderPageTitle ?? true}
      pageTitleText={spec.globalHeaderTitleText ?? ""}
      avatarSrc={`${import.meta.env.BASE_URL}login-hero-mascot.jpg`}
      userName="Lily-Rose"
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

  const mainPad =
    spec.mainPaddingPx > 0 ? { padding: `${spec.mainPaddingPx}px` } : undefined;

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
        settingSlot={spec.showSidebarProfileExtras ? <LayoutFrameSidebarUtility /> : undefined}
        profileFooter={spec.showSidebarProfileExtras ? <LayoutFrameSidebarProfile /> : undefined}
        logoTitle="PacsTrust"
      >
        {isPrototypeDelivery() ? (
          <PrototypeSidebarMenu />
        ) : (
          <LayoutFrameMenu variant={variant} />
        )}
      </Sidebar>
      {spec.frameKind === "global-plus-page" ? (
        <div className="pt-dashboard-shell__main pt-dashboard-shell__main--page-stack">
          {globalHeader}
          {pageSlot === "direct" && children ? (
            <div className="pt-dashboard-shell__page pt-dashboard-shell__page--direct">{children}</div>
          ) : (
            pageCard
          )}
        </div>
      ) : (
        <div className="pt-dashboard-shell__main" style={mainPad}>
          <PageLayoutCard variant={variant} placeholder={showPh} header={globalHeader}>
            {children}
          </PageLayoutCard>
        </div>
      )}
    </div>
  );
}
