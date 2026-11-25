import { STATE_ICON, type AlertState } from "@/components/feedback/feedbackIcons";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import "./notification.css";

/** Figma `1517:46939` · Error 对应 Danger */
export type NotificationType = "Default" | AlertState | "Error";

export type NotificationProps = {
  notificationType?: NotificationType;
  title?: ReactNode;
  message?: ReactNode;
  className?: string;
};

const COPY_MESSAGE = "This is a message that does not automatically close";

export function Notification({
  notificationType = "Primary",
  title = "Notification",
  message = COPY_MESSAGE,
  className,
}: NotificationProps) {
  const showTypeIcon = notificationType !== "Default";
  const semantic =
    notificationType === "Error"
      ? "Danger"
      : notificationType === "Default"
        ? null
        : notificationType;
  const iconName = semantic ? STATE_ICON[semantic] : null;

  const typeMod =
    semantic != null ? `pt-notification--${semantic.toLowerCase()}` : "pt-notification--default";

  return (
    <div className={cn("pt-notification", typeMod, className)} role="status">
      <header className="pt-notification__header">
        <div className="pt-notification__header-left">
          {showTypeIcon && iconName ? (
            <EpIconByName name={iconName} size={20} className="pt-notification__type-icon" />
          ) : null}
          <h2 className="pt-notification__title">{title}</h2>
        </div>
        <button type="button" className="pt-notification__close" aria-label="关闭">
          <EpIconByName name="Close" size={16} />
        </button>
      </header>
      <p className="pt-notification__message">{message}</p>
    </div>
  );
}
