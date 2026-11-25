import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { DashboardShell, type DashboardShellProps } from "./DashboardShell";

export type AppShellProps = {
  children: ReactNode;
  className?: string;
  /** C1：direct；A1/B1 等：page-layout 白卡 */
  pageSlot?: DashboardShellProps["pageSlot"];
  pageBarTitle?: DashboardShellProps["pageBarTitle"];
  contentPadding?: DashboardShellProps["contentPadding"];
  pageBar?: DashboardShellProps["pageBar"];
};

/** 模块界面模板：Layout-04 壳（Figma 🎨 模块界面） */
export function AppShell({
  children,
  className,
  pageSlot = "direct",
  pageBarTitle = false,
  contentPadding,
  pageBar,
}: AppShellProps) {
  return (
    <DashboardShell
      variant="layout-04"
      showPlaceholder={false}
      pageSlot={pageSlot}
      pageBarTitle={pageBarTitle}
      contentPadding={contentPadding}
      pageBar={pageBar}
      className={cn("pt-dashboard-shell--template", className)}
    >
      {children}
    </DashboardShell>
  );
}
