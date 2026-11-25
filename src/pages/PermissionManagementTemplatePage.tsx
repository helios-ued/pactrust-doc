import { AppShell } from "@/templates/layout/AppShell";
import { PermissionManagementPanel } from "@/templates/permission-management/PermissionManagementPanel";
import "./template-viewport.css";

/** Figma moduleScreens C1-权限管理 8370:13257 */
export function PermissionManagementTemplatePage() {
  return (
    <div className="pt-template-viewport pt-template-viewport--permission">
      <AppShell pageSlot="direct">
        <PermissionManagementPanel />
      </AppShell>
    </div>
  );
}
