/** Figma Message `1514:47021` · Alert 与 Message 共用的语义色阶（MCP 抽样） */
export type FeedbackSemanticType = "Primary" | "Success" | "Warning" | "Danger" | "Info";

export type FeedbackSemanticTone = {
  text: string;
  bg: string;
  border: string;
};

export const FEEDBACK_SEMANTIC_TONES: Record<FeedbackSemanticType, FeedbackSemanticTone> = {
  Primary: {
    text: "var(--pt-feedback-primary)",
    bg: "var(--pt-feedback-primary-9)",
    border: "var(--pt-feedback-primary-7)",
  },
  Success: {
    text: "var(--el-color-success)",
    bg: "var(--el-color-success-light-9)",
    border: "var(--el-color-success-light-7)",
  },
  Warning: {
    text: "var(--el-color-warning)",
    bg: "var(--el-color-warning-light-9)",
    border: "var(--el-color-warning-light-7)",
  },
  Danger: {
    text: "var(--el-color-danger)",
    bg: "var(--el-color-danger-light-9)",
    border: "var(--el-color-danger-light-7)",
  },
  Info: {
    text: "var(--el-color-info)",
    bg: "var(--el-color-info-light-9)",
    border: "var(--el-color-info-light-7)",
  },
};
