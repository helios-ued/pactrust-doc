import { GlobalHeader } from "@/components/Menu/GlobalHeader";
import { Sidebar } from "@/components/Menu/Sidebar";
import { SidebarStyle04Setting, SidebarStyle04User } from "@/components/Menu/SidebarStyle04Slots";
import { cn } from "@/lib/cn";
import { useCallback, useRef, useState, type ReactNode } from "react";
import { PageLayoutCard } from "@/templates/layout/PageLayoutCard";
import { LAYOUT_FRAME_SPECS } from "@/templates/layout/layoutFrameSpecs";
import { useLayoutSidebarNarrow } from "@/templates/layout/useLayoutSidebarNarrow";
import "@/templates/layout/dashboard-shell.css";
import { RemittanceSidebarMenu } from "./RemittanceSidebarMenu";
import "./remittance-shell.css";

const LAYOUT_04 = LAYOUT_FRAME_SPECS["layout-04"];

export type RemittanceShellProps = {
  children: ReactNode;
  pageBar: ReactNode;
  className?: string;
};

/**
 * 汇款原型 · Layout-04 + Sidebar Style 04
 * 内容区对齐 Layout-04：Global-header + BasePanel（槽内 `pageBar` + body）
 */
export function RemittanceShell({ children, pageBar, className }: RemittanceShellProps) {
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

  return (
    <div
      ref={shellRef}
      className={cn(
        "pt-dashboard-shell pt-dashboard-shell--page-bg pt-dashboard-shell--template pt-remittance-shell",
        isNarrowShell && "pt-dashboard-shell--sidebar-compact",
        className,
      )}
      data-variant="layout-04"
      data-node-id={LAYOUT_04.rootNodeId}
      data-sidebar-compact={isNarrowShell ? "true" : "false"}
    >
      <Sidebar
        className="pt-sidebar--layout pt-dashboard-shell__sidebar"
        unfolded={sidebarUnfolded}
        onUnfoldedChange={onSidebarUnfoldedChange}
        sidebarStyle="04"
        showFooter={false}
        settingSlot={<SidebarStyle04Setting />}
        userSlot={<SidebarStyle04User />}
        logoTitle="PacsTrust"
      >
        <RemittanceSidebarMenu />
      </Sidebar>
      <div className="pt-dashboard-shell__main pt-dashboard-shell__main--page-stack">
        <GlobalHeader
          logo={false}
          collapseButton
          layoutFrame
          headerDivider={LAYOUT_04.globalHeaderDivider}
          pageTitleText="全球汇款"
          avatarSrc="/login-hero-mascot.jpg"
        />
        <PageLayoutCard
          variant="layout-04"
          pageBarTitle={false}
          pageBar={pageBar}
          contentPadding="0"
        >
          {children}
        </PageLayoutCard>
      </div>
    </div>
  );
}
