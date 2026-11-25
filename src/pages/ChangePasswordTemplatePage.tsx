import { AppShell } from "@/templates/layout/AppShell";
import { ChangePasswordPageBar } from "@/templates/change-password/ChangePasswordPageBar";
import { ChangePasswordPanel } from "@/templates/change-password/ChangePasswordPanel";
import "./template-viewport.css";

/** Figma moduleScreens A2-修改登录密码 8349:5537 */
export function ChangePasswordTemplatePage() {
  return (
    <div className="pt-template-viewport pt-template-viewport--module-screen pt-template-viewport--change-password">
      <AppShell
        pageSlot="page-layout"
        pageBarTitle={false}
        pageBar={<ChangePasswordPageBar />}
        contentPadding="0"
      >
        <ChangePasswordPanel />
      </AppShell>
    </div>
  );
}
