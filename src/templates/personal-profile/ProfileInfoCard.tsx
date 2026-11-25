import { Button } from "@/components/Button/Button";
import { EdsIconById } from "@/components/Icon/EdsIconById";
import type { ProfileB2Copy } from "@/templates/personal-profile/profileB2Copy";
import { ProfileFieldStack } from "@/templates/personal-profile/ProfileFieldStack";

export type ProfileInfoCardProps = {
  copy: ProfileB2Copy;
};

export function ProfileInfoCard({ copy }: ProfileInfoCardProps) {
  return (
    <section
      className="pt-profile-info-card"
      aria-labelledby="pt-profile-info-card-title"
    >
      <div className="pt-profile-info-card__header">
        <h2 id="pt-profile-info-card-title" className="pt-profile-info-card__title">
          {copy.sectionTitle}
        </h2>
        <Button
          type="button"
          buttonType="Default"
          size="Default"
          className="pt-profile-info-card__edit"
          leftIcon={<EdsIconById id="eds-action-edit-02" size={16} aria-hidden />}
        >
          {copy.edit}
        </Button>
      </div>
      <div className="pt-profile-info-card__grid">
        {copy.fields.map((field) => (
          <ProfileFieldStack
            key={field.id}
            label={field.label}
            value={field.value}
            span={field.span}
          />
        ))}
      </div>
    </section>
  );
}