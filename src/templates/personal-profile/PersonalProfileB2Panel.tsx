import { ProfileHero } from "@/templates/personal-profile/ProfileHero";
import { ProfileInfoCard } from "@/templates/personal-profile/ProfileInfoCard";
import {
  PROFILE_B2_COPY,
  type ProfileB2Locale,
} from "@/templates/personal-profile/profileB2Copy";
import "./profile-b2.css";

export type PersonalProfileB2PanelProps = {
  locale?: ProfileB2Locale;
};

/** B2 · Profile 页布局（模板专用） */
export function PersonalProfileB2Panel({ locale = "zh" }: PersonalProfileB2PanelProps) {
  const copy = PROFILE_B2_COPY[locale];

  return (
    <div className="pt-profile-page">
      <ProfileHero copy={copy} />
      <ProfileInfoCard copy={copy} />
    </div>
  );
}