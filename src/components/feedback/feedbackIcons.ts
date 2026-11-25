import type { FeedbackSemanticType } from "./semanticTone";

export type AlertState = FeedbackSemanticType;

export const STATE_ICON: Record<
  AlertState,
  "InfoFilled" | "SuccessFilled" | "WarningFilled" | "CircleCloseFilled"
> = {
  Primary: "InfoFilled",
  Success: "SuccessFilled",
  Warning: "WarningFilled",
  Danger: "CircleCloseFilled",
  Info: "InfoFilled",
};
