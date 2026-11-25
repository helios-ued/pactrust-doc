/** EDS 式 Text Style 行：左侧样例、右侧「字号 / 行高」 */
export type TextStyleRow = {
  label: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
  /** 绑定 token 时在右侧第二行展示 */
  tokenRef?: string;
};

/**
 * PacsTrust · Figma 设计基础 + Text 2.3.0（`5803:2777`）
 * 命名与层级参考 EDS Text Style 列表，数值以仓库 token 为准。
 */
export const textStyleRows: TextStyleRow[] = [
  {
    label: "Display",
    fontSize: "var(--pt-font-size-5xl-large)",
    lineHeight: "var(--pt-line-height-5xl-large)",
    fontWeight: 600,
    tokenRef: "Figma 5XL-large",
  },
  {
    label: "Headline",
    fontSize: "var(--pt-font-size-extra-large)",
    lineHeight: "var(--pt-line-height-extra-large)",
    fontWeight: 700,
    tokenRef: "bold/Headline1-Bold · 20/28",
  },
  {
    label: "Title",
    fontSize: "var(--pt-font-size-large)",
    lineHeight: "var(--pt-line-height-large)",
    fontWeight: 700,
    tokenRef: "bold/Headline2-Bold · 18/26",
  },
  {
    label: "Body Large",
    fontSize: "var(--el-font-size-base)",
    lineHeight: "var(--el-font-line-height-base)",
    fontWeight: 400,
    tokenRef: "14px / 22px",
  },
  {
    label: "Body Large Strong",
    fontSize: "var(--el-font-size-base)",
    lineHeight: "var(--el-font-line-height-base)",
    fontWeight: 700,
    tokenRef: "14px / 22px · Bold",
  },
  {
    label: "Body Medium",
    fontSize: "var(--el-font-size-small)",
    lineHeight: "var(--el-font-line-height-small)",
    fontWeight: 400,
    tokenRef: "13px / 22px · Body Default",
  },
  {
    label: "Body Medium Strong",
    fontSize: "var(--el-font-size-small)",
    lineHeight: "var(--el-font-line-height-small)",
    fontWeight: 500,
    tokenRef: "13px / 22px · Medium",
  },
  {
    label: "Body Small",
    fontSize: "var(--el-font-size-extra-small)",
    lineHeight: "var(--el-font-line-height-extra-small)",
    fontWeight: 400,
    tokenRef: "12px / 20px",
  },
  {
    label: "Body Small Strong",
    fontSize: "var(--el-font-size-extra-small)",
    lineHeight: "var(--el-font-line-height-extra-small)",
    fontWeight: 700,
    tokenRef: "12px / 20px · Bold",
  },
  {
    label: "Footnote",
    fontSize: "var(--pt-font-size-extra-small)",
    lineHeight: "var(--pt-line-height-footnote)",
    fontWeight: 400,
    tokenRef: "12px 字号 · 16px 行高",
  },
  {
    label: "Footnote Strong",
    fontSize: "var(--pt-font-size-extra-small)",
    lineHeight: "var(--pt-line-height-footnote)",
    fontWeight: 700,
    tokenRef: "12px / 16px · Bold",
  },
];

const metricsByLabel: Record<string, string> = {
  Display: "40px / 48px",
  Headline: "20px / 28px",
  Title: "18px / 26px",
  "Body Large": "14px / 22px",
  "Body Large Strong": "14px / 22px",
  "Body Medium": "13px / 22px",
  "Body Medium Strong": "13px / 22px",
  "Body Small": "12px / 20px",
  "Body Small Strong": "12px / 20px",
  Footnote: "12px / 16px",
  "Footnote Strong": "12px / 16px",
};

/** 右侧展示的 px 摘要（与 EDS 截图一致为「字号 / 行高」） */
export function textStyleMetrics(row: TextStyleRow): string {
  return metricsByLabel[row.label] ?? `${row.fontSize} / ${row.lineHeight}`;
}
