import { AppShell } from "@/templates/layout/AppShell";
import { SecurityCenterPanel } from "@/templates/security-center/SecurityCenterPanel";
import "./template-viewport.css";

/** Figma moduleScreens A1-安全中心 8349:5393 */
export function SecurityCenterTemplatePage() {
  return (
    <div className="pt-template-viewport pt-template-viewport--security-center">
      <AppShell
        pageSlot="page-layout"
        pageBarTitle="安全中心"
        contentPadding="0 16px 18px"
      >
        <SecurityCenterPanel />
      </AppShell>
    </div>
  );
}
