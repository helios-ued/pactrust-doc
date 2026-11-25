/** Figma 8370:17856 permission matrix rows (col1/col2/col3). */
export type MatrixRow = {
  id: string;
  col1?: string;
  col1RowSpan?: number;
  col2?: string;
  col3?: string[];
};

export const PERMISSION_MATRIX_ROWS: MatrixRow[] = [
  { id: "r1", col1: "首页", col1RowSpan: 1, col2: "首页" },
  {
    id: "r2",
    col1: "商户资产",
    col1RowSpan: 3,
    col2: "商户资产",
    col3: ["冲正"],
  },
  { id: "r3", col2: "资产记录" },
  { id: "r4", col2: "交易流水" },
  {
    id: "r5",
    col1: "汇款管理",
    col1RowSpan: 5,
    col2: "汇款记录",
    col3: ["审核", "退款", "打款执行凭证"],
  },
  { id: "r6", col2: "每日账单" },
  { id: "r7", col2: "每月账单" },
  { id: "r8", col2: "商户设置", col3: ["费率设置"] },
  { id: "r9", col2: "基础设置", col3: ["通知设置"] },
  {
    id: "r10",
    col1: "商户管理",
    col1RowSpan: 2,
    col2: "商户管理",
    col3: ["添加商户", "启用/禁用", "编辑", "API信息", "删除"],
  },
  { id: "r11", col2: "认证审核", col3: ["审核", "重新认证"] },
];

export const DEFAULT_SYSTEM_GROUPS = ["超级管理员", "管理员", "普通管理员"] as const;

export const DEFAULT_CUSTOM_GROUPS = ["UI设计", "测试", "前端"] as const;
