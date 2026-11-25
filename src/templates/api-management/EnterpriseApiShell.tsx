import { Sidebar } from "@/components/Menu/Sidebar";
import { cn } from "@/lib/cn";
import { useCallback, useRef, useState, type ReactNode } from "react";
import { useLayoutSidebarNarrow } from "@/templates/layout/useLayoutSidebarNarrow";
import "@/templates/layout/dashboard-shell.css";
import { EnterpriseApiHeader } from "./EnterpriseApiHeader";
import { EnterpriseApiSidebarMenu } from "./EnterpriseApiSidebarMenu";
import { API_MANAGEMENT_FIGMA_NODES } from "./apiManagementFigmaNodes";
import "./enterprise-api-shell.css";

export type EnterpriseApiShellProps = {
  children: ReactNode;
  className?: string;
};

/** 企业后台 · Layout-04 结构 + 定制侧栏 / 顶栏 */
export function EnterpriseApiShell({ children, className }: EnterpriseApiShellProps) {
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
        "pt-dashboard-shell pt-dashboard-shell--page-bg pt-dashboard-shell--template pt-enterprise-api-shell",
        isNarrowShell && "pt-dashboard-shell--sidebar-compact",
        className,
      )}
      data-variant="layout-04"
      data-node-id={API_MANAGEMENT_FIGMA_NODES.root || undefined}
      data-figma-layout={API_MANAGEMENT_FIGMA_NODES.layout04}
      data-sidebar-compact={isNarrowShell ? "true" : "false"}
    >
      <Sidebar
        className="pt-sidebar--layout pt-dashboard-shell__sidebar"
        unfolded={sidebarUnfolded}
        onUnfoldedChange={onSidebarUnfoldedChange}
        sidebarStyle="01"
        showFooter={false}
        logoTitle="PacsTrust 企业系统"
      >
        <EnterpriseApiSidebarMenu />
      </Sidebar>
      <div className="pt-dashboard-shell__main pt-dashboard-shell__main--page-stack">
        <EnterpriseApiHeader />
        <div className="pt-dashboard-shell__page pt-dashboard-shell__page--direct pt-enterprise-api-shell__page">
          {children}
        </div>
      </div>
    </div>
  );
}
