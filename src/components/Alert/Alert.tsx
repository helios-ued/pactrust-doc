import { STATE_ICON, type AlertState } from "@/components/feedback/feedbackIcons";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import "./alert.css";

export type { AlertState };
export type AlertStyle = "Default" | "Fill";
export type AlertAlign = "Left" | "Center";
export type AlertCloseType = "Icon" | "Text" | "Default";

export type AlertProps = {
  title: ReactNode;
  description?: ReactNode;
  state?: AlertState;
  style?: AlertStyle;
  align?: AlertAlign;
  closeType?: AlertCloseType;
  /** Figma `showIcon`：无辅助文字时默认 false */
  showIcon?: boolean;
  onClose?: () => void;
  className?: string;
};

function stateMod(state: AlertState): string {
  return `pt-alert--${state.toLowerCase()}`;
}

export function Alert({
  title,
  description,
  state = "Primary",
  style = "Default",
  align = "Left",
  closeType = "Icon",
  showIcon = false,
  onClose,
  className,
}: AlertProps) {
  const withDescription = Boolean(description);
  const iconName = STATE_ICON[state];
  const leadingIcon = withDescription || showIcon;
  const closable = closeType !== "Default";

  const closeControl = closable ? (
    <button
      type="button"
      className={cn("pt-alert__close", closeType === "Text" && "pt-alert__close-text")}
      onClick={onClose}
      aria-label="关闭"
    >
      {closeType === "Text" ? "关闭" : <EpIconByName name="Close" size={16} />}
    </button>
  ) : null;

  return (
    <div
      role="alert"
      className={cn(
        "pt-alert",
        style === "Fill" ? "pt-alert--fill" : "pt-alert--default",
        stateMod(state),
        align === "Center" && "pt-alert--center",
        withDescription && "pt-alert--with-description",
        className,
      )}
    >
      {leadingIcon ? (
        <EpIconByName
          name={iconName}
          size={withDescription ? 32 : 16}
          className={cn("pt-alert__icon", withDescription ? "pt-alert__icon--lg" : "pt-alert__icon--sm")}
        />
      ) : null}
      {withDescription ? (
        <div className="pt-alert__content">
          <div className="pt-alert__title-row">
            <span className="pt-alert__title">{title}</span>
            {closeControl ? (
              <span className="inline-flex shrink-0 items-center justify-end gap-2.5">{closeControl}</span>
            ) : null}
          </div>
          <div className="pt-alert__desc-row">
            <p className="pt-alert__description">{description}</p>
            {closeControl ? <span className="pt-alert__desc-spacer" aria-hidden /> : null}
          </div>
        </div>
      ) : (
        <>
          <div className="pt-alert__main">
            <span className="pt-alert__title">{title}</span>
          </div>
          {closeControl}
        </>
      )}
    </div>
  );
}
