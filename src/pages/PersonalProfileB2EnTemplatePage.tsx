import { AppShell } from "@/templates/layout/AppShell";
import { PersonalProfileB2Panel } from "@/templates/personal-profile/PersonalProfileB2Panel";
import "./template-viewport.css";

/** Figma B2-Personal profile（Profile · EN） */
export function PersonalProfileB2EnTemplatePage() {
  return (
    <div className="pt-template-viewport pt-template-viewport--personal-profile pt-template-viewport--profile-b2">
      <AppShell pageSlot="page-layout" pageBarTitle={false} contentPadding="0">
        <PersonalProfileB2Panel locale="en" />
      </AppShell>
    </div>
  );
}