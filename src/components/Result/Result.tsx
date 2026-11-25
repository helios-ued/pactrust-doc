import { Button } from "@/components/Button/Button";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";
import "./result.css";

/** Figma Result · `102:25966` */
export type ResultState = "Success" | "Warning" | "Error" | "Info" | "Other";

const stateIcon: Record<Exclude<ResultState, "Other">, { name: string; className: string }> = {
  Success: { name: "CircleCheckFilled", className: "pt-result__icon--success" },
  Warning: { name: "WarningFilled", className: "pt-result__icon--warning" },
  Error: { name: "CircleCloseFilled", className: "pt-result__icon--error" },
  Info: { name: "InfoFilled", className: "pt-result__icon--info" },
};

export type ResultProps = HTMLAttributes<HTMLDivElement> & {
  state?: ResultState;
  title?: ReactNode;
  /** Figma prompt / Element Plus sub-title */
  subTitle?: ReactNode;
  showSubTitle?: boolean;
  showButton?: boolean;
  buttonText?: ReactNode;
  /** State=Other · Figma Image 100×100 */
  imageSrc?: string;
  imageAlt?: string;
  extra?: ReactNode;
};

export function Result({
  state = "Success",
  title = "Result Tip",
  subTitle = "Please follow the instructions",
  showSubTitle = true,
  showButton = true,
  buttonText = "Button",
  imageSrc = "/avatar-figma-sample.png",
  imageAlt = "",
  extra,
  className,
  ...rest
}: ResultProps) {
  const icon = state !== "Other" ? stateIcon[state] : null;

  return (
    <div className={cn("pt-result", className)} {...rest}>
      <div className="pt-result__main">
        {state === "Other" ? (
          <img className="pt-result__image" src={imageSrc} alt={imageAlt} width={100} height={100} />
        ) : icon ? (
          <span className={cn("pt-result__icon", icon.className)} aria-hidden>
            <EpIconByName name={icon.name} size={72} />
          </span>
        ) : null}
        <div className="pt-result__text">
          <h3 className="pt-result__title">{title}</h3>
          {showSubTitle && subTitle ? <p className="pt-result__subtitle">{subTitle}</p> : null}
        </div>
      </div>
      {extra ??
        (showButton ? (
          <div className="pt-result__actions">
            <Button buttonType="Primary" size="Small" className="pt-result__button">
              {buttonText}
            </Button>
          </div>
        ) : null)}
    </div>
  );
}
