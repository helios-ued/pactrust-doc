import { Avatar } from "@/components/Avatar/Avatar";
import { IconButton } from "@/components/Button/IconButton";
import { EdsIconById } from "@/components/Icon/EdsIconById";
import {
  PROFILE_B2_COVER_SRC,
  type ProfileB2Copy,
} from "@/templates/personal-profile/profileB2Copy";

export type ProfileHeroProps = {
  copy: ProfileB2Copy;
};

export function ProfileHero({ copy }: ProfileHeroProps) {
  return (
    <header className="pt-profile-hero">
      <div className="pt-profile-hero__cover-wrap">
        <img
          className="pt-profile-hero__cover"
          src={PROFILE_B2_COVER_SRC}
          alt=""
          decoding="async"
        />
        <IconButton
          type="button"
          buttonType="Default"
          round
          className="pt-profile-hero__more"
          aria-label={copy.moreLabel}
          icon={<EdsIconById id="eds-other-more-vertical" size={16} aria-hidden />}
        />
      </div>
      <div className="pt-profile-hero__identity">
        <div className="pt-profile-hero__avatar-wrap">
          <Avatar
            size="Custom"
            customSize={100}
            shape="Circle"
            avatarType="Image"
            alt=""
          />
          <IconButton
            type="button"
            buttonType="Default"
            round
            className="pt-profile-hero__avatar-edit"
            aria-label={copy.avatarEditLabel}
            icon={<EdsIconById id="eds-action-edit-01" size={14} aria-hidden />}
          />
        </div>
        <h1 className="pt-profile-hero__title">{copy.pageTitle}</h1>
      </div>
    </header>
  );
}