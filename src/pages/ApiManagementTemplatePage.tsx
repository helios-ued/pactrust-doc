import { ApiManagementPanel } from "@/templates/api-management/ApiManagementPanel";
import { EnterpriseApiShell } from "@/templates/api-management/EnterpriseApiShell";
import "./template-viewport.css";

/** Figma moduleScreens D2-API管理（待建帧）· docs/module-screens/D2-api-management.md */
export function ApiManagementTemplatePage() {
  return (
    <div
      className="pt-template-viewport pt-template-viewport--api-management"
      data-figma-canvas="8349:5392"
    >
      <EnterpriseApiShell>
        <ApiManagementPanel />
      </EnterpriseApiShell>
    </div>
  );
}
