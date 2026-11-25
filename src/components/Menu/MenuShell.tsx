import { cn } from "@/lib/cn";
import type { GlobalHeaderProps } from "./GlobalHeader";
import { GlobalHeader } from "./GlobalHeader";
import type { MenuSize } from "./Menu";
import { MenuSidebarSample } from "./Menu";
import { Sidebar } from "./Sidebar";
import "./menu-shell.css";

export type MenuShellProps = {
  menuSize?: MenuSize;
  sidebarUnfolded?: boolean;
  onSidebarUnfoldedChange?: (unfolded: boolean) => void;
  globalHeader?: GlobalHeaderProps;
  className?: string;
};

/** Figma Sidebar + Global-header 布局预览 */
export function MenuShell({
  menuSize = "Default",
  sidebarUnfolded = true,
  onSidebarUnfoldedChange,
  globalHeader,
  className,
}: MenuShellProps) {
  const toggleSidebar = () => onSidebarUnfoldedChange?.(!sidebarUnfolded);

  return (
    <div className={cn("pt-menu-shell", className)}>
      <Sidebar
        unfolded={sidebarUnfolded}
        onUnfoldedChange={onSidebarUnfoldedChange}
        className="!min-h-0 !h-auto flex-shrink-0"
      >
        <MenuSidebarSample menuSize={menuSize} embedded />
      </Sidebar>
      <div className="pt-menu-shell__main">
        <GlobalHeader
          sidebarUnfolded={sidebarUnfolded}
          onSidebarToggle={toggleSidebar}
          {...globalHeader}
        />
        <div className="pt-menu-shell__body" aria-hidden />
      </div>
    </div>
  );
}
