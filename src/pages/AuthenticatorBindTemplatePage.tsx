import { AppShell } from "@/templates/layout/AppShell";
import { AuthenticatorBindPanel } from "@/templates/authenticator-bind/AuthenticatorBindPanel";
import { AuthenticatorBindPageBar } from "@/templates/authenticator-bind/AuthenticatorBindPageBar";
import "./template-viewport.css";

/** Figma moduleScreens A3-绑定身份验证器 8370:5786 */
export function AuthenticatorBindTemplatePage() {
  return (
    <div className="pt-template-viewport pt-template-viewport--module-screen pt-template-viewport--authenticator-bind">
      <AppShell
        pageSlot="page-layout"
        pageBarTitle={false}
        pageBar={<AuthenticatorBindPageBar />}
        contentPadding="0"
      >
        <AuthenticatorBindPanel />
      </AppShell>
    </div>
  );
}
