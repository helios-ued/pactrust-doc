import type { CSSProperties } from "react";
import {
  FEEDBACK_SEMANTIC_TONES,
  type FeedbackSemanticType,
} from "./feedbackSemanticTokens";

export type { FeedbackSemanticType };

export function messageTone(
  type: FeedbackSemanticType,
  plain: boolean,
): { className: string; style?: CSSProperties } {
  const t = FEEDBACK_SEMANTIC_TONES[type];
  if (plain) {
    return {
      className: "pt-feedback-msg pt-feedback-msg--plain",
      style: {
        color: t.text,
        background: "var(--el-bg-color, #fff)",
        boxShadow: "var(--el-box-shadow-light)",
      },
    };
  }
  return {
    className: "pt-feedback-msg",
    style: {
      color: t.text,
      backgroundColor: t.bg,
      borderColor: t.border,
    },
  };
}
