import { AppShell } from "@/templates/layout/AppShell";
import { PersonalProfileB2Panel } from "@/templates/personal-profile/PersonalProfileB2Panel";
import "./template-viewport.css";

/** Figma 固定模版 B2-个人信息（Profile · 中文） */
export function PersonalProfileB2TemplatePage() {
  return (
    <div className="pt-template-viewport pt-template-viewport--personal-profile pt-template-viewport--profile-b2">
      <AppShell pageSlot="page-layout" pageBarTitle={false} contentPadding="0">
        <PersonalProfileB2Panel locale="zh" />
      </AppShell>
    </div>
  );
}