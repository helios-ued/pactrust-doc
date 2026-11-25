import { AppShell } from "@/templates/layout/AppShell";
import { PersonalProfilePanel } from "@/templates/personal-profile/PersonalProfilePanel";
import "./template-viewport.css";

/** Figma moduleScreens B1-个人资料 8370:13091 */
export function PersonalProfileTemplatePage() {
  return (
    <div className="pt-template-viewport pt-template-viewport--personal-profile">
      <AppShell
        pageSlot="page-layout"
        pageBarTitle="个人资料"
        contentPadding="0"
      >
        <PersonalProfilePanel />
      </AppShell>
    </div>
  );
}
