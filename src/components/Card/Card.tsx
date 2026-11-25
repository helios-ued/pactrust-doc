import { Avatar } from "@/components/Avatar/Avatar";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { Link } from "@/components/Link/Link";
import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";
import {
  CARD_BODY_TEXT,
  CARD_COVER_SRC,
  CARD_DEFAULT_TITLE,
  CARD_FOOTER_USERNAME,
  CARD_IMAGE_DESC,
  CARD_IMAGE_TITLE,
} from "./cardContent";
import "./card.css";

/** Figma Card · `6412:37651` */
export type CardType = "Default" | "Only Body" | "Header+Footer";
export type CardHeaderType = "Default" | "More" | "Icon" | "Back";
export type CardBodyType = "Text" | "Image";
export type CardFooterType = "Default" | "More";

export type CardHeaderProps = HTMLAttributes<HTMLElement> & {
  headerType?: CardHeaderType;
  title?: ReactNode;
};

export function CardHeader({
  headerType = "Default",
  title = CARD_DEFAULT_TITLE,
  className,
  ...rest
}: CardHeaderProps) {
  return (
    <header
      className={cn(
        "pt-card__header",
        headerType === "Back" && "pt-card__header--back",
        className,
      )}
      {...rest}
    >
      {headerType === "Back" ? (
        <button type="button" className="pt-card__header-back" aria-label="Back">
          <EpIconByName name="Back" size={16} />
        </button>
      ) : null}
      <h3 className="pt-card__title">{title}</h3>
      {headerType === "More" ? (
        <Link href="#" className="pt-card__header-more" linkType="Primary" onClick={(e) => e.preventDefault()}>
          More
        </Link>
      ) : null}
      {headerType === "Icon" ? (
        <span className="pt-card__header-icon" aria-hidden>
          <EpIconByName name="ArrowRight" size={16} />
        </span>
      ) : null}
    </header>
  );
}

export type CardBodyProps = HTMLAttributes<HTMLDivElement> & {
  bodyType?: CardBodyType;
  coverSrc?: string;
  children?: ReactNode;
};

export function CardBody({
  bodyType = "Text",
  coverSrc = CARD_COVER_SRC,
  className,
  children,
  ...rest
}: CardBodyProps) {
  if (children) {
    return (
      <div className={cn("pt-card__body", className)} {...rest}>
        {children}
      </div>
    );
  }

  if (bodyType === "Image") {
    return (
      <div className={cn("pt-card__body", "pt-card__body--image", className)} {...rest}>
        <img className="pt-card__cover" src={coverSrc} alt="" />
        <div className="pt-card__image-caption">
          <h4 className="pt-card__image-title">{CARD_IMAGE_TITLE}</h4>
          <p className="pt-card__image-desc">{CARD_IMAGE_DESC}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("pt-card__body", "pt-card__body--text", className)} {...rest}>
      {CARD_BODY_TEXT}
    </div>
  );
}

export type CardFooterProps = HTMLAttributes<HTMLElement> & {
  footerType?: CardFooterType;
  username?: ReactNode;
};

export function CardFooter({
  footerType = "Default",
  username = CARD_FOOTER_USERNAME,
  className,
  ...rest
}: CardFooterProps) {
  if (footerType === "More") {
    return (
      <footer className={cn("pt-card__footer", "pt-card__footer--more", className)} {...rest}>
        <div className="pt-card__footer-actions">
          {(["Edit", "Setting", "More"] as const).map((icon) => (
            <button key={icon} type="button" className="pt-card__footer-action" aria-label={icon}>
              <EpIconByName name={icon} size={20} />
            </button>
          ))}
        </div>
      </footer>
    );
  }

  return (
    <footer className={cn("pt-card__footer", className)} {...rest}>
      <div className="pt-card__footer-user">
        <Avatar size="24" avatarType="Text" shape="Circle" text="U" />
        <span className="pt-card__footer-username">{username}</span>
      </div>
      <div className="pt-card__footer-tools">
        {(["ChatDotRound", "Paperclip", "Promotion"] as const).map((icon) => (
          <button key={icon} type="button" className="pt-card__footer-tool" aria-label={icon}>
            <EpIconByName name={icon} size={20} />
          </button>
        ))}
      </div>
    </footer>
  );
}

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  cardType?: CardType;
  headerType?: CardHeaderType;
  bodyType?: CardBodyType;
  footerType?: CardFooterType;
  title?: ReactNode;
  coverSrc?: string;
  /** 覆盖默认 body 内容 */
  body?: ReactNode;
};

/** Figma Card 组合 · 映射 `el-card` header / default / footer 槽位 */
export function Card({
  cardType = "Default",
  headerType = "Default",
  bodyType = "Text",
  footerType = "Default",
  title,
  coverSrc,
  body,
  className,
  ...rest
}: CardProps) {
  const showHeader = cardType !== "Only Body";
  const showFooter = cardType === "Header+Footer";

  return (
    <div className={cn("pt-card", className)} {...rest}>
      {showHeader ? <CardHeader headerType={headerType} title={title} /> : null}
      <CardBody bodyType={bodyType} coverSrc={coverSrc}>
        {body}
      </CardBody>
      {showFooter ? <CardFooter footerType={footerType} /> : null}
    </div>
  );
}
