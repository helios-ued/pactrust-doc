import { DocMetaPanel } from "@/templates/layout/doc-meta-panel/DocMetaPanel";

/** 固定模版 B1-个人资料 · Page Body（文档元数据面板布局） */
const PROFILE_ROWS = [
  { id: "company", label: "企业名称", value: "字节互连" },
  { id: "id", label: "ID", value: "12" },
  { id: "member-name", label: "成员名称", value: "薛定谔的喵" },
  {
    id: "login-email",
    label: "登录邮箱",
    value: "schrodinger.design@outlook.com",
  },
] as const;

export function PersonalProfilePanel() {
  return <DocMetaPanel ariaLabel="个人资料" items={PROFILE_ROWS} />;
}