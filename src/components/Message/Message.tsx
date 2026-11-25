import {
  messageTone,
  type FeedbackSemanticType,
} from "@/components/feedback/semanticTone";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import "../feedback/feedback-message.css";

const ICON: Record<FeedbackSemanticType, "InfoFilled" | "SuccessFilled" | "WarningFilled" | "CircleCloseFilled" | "InfoFilled"> = {
  Primary: "InfoFilled",
  Success: "SuccessFilled",
  Warning: "WarningFilled",
  Danger: "CircleCloseFilled",
  Info: "InfoFilled",
};

export type MessageProps = {
  messageType?: FeedbackSemanticType;
  plain?: boolean;
  closable?: boolean;
  children?: ReactNode;
  className?: string;
};

export function Message({
  messageType = "Primary",
  plain = false,
  closable = true,
  children = "this is a message.",
  className,
}: MessageProps) {
  const tone = messageTone(messageType, plain);
  const icon = ICON[messageType];
  return (
    <div
      role="status"
      className={cn(tone.className, className)}
      style={tone.style}
    >
      <div className="pt-feedback-msg__main">
        <EpIconByName name={icon} size={16} className="shrink-0" />
        <span className="pt-feedback-msg__text">{children}</span>
      </div>
      {closable ? (
        <button type="button" className="pt-feedback-msg__close" aria-label="关闭">
          <EpIconByName name="Close" size={16} />
        </button>
      ) : null}
    </div>
  );
}
