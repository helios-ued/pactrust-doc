/** pactrust-doc · 中台原型侧栏（挂到 `/examples/*` 全屏页） */
export type PrototypeRoute = {
  slug: string;
  label: string;
  /** React Router 路径（不含 base） */
  path: string;
};

export type PrototypeMenuGroup = {
  label: string;
  iconId: string;
  flyoutTitle?: string;
  routes: PrototypeRoute[];
};

export const PROTOTYPE_ENTRY_LOGIN = "/examples/login";

export const PROTOTYPE_MENU_GROUPS: PrototypeMenuGroup[] = [
  {
    label: "Dashboard",
    iconId: "eds-other-add-block",
    flyoutTitle: "平台数据",
    routes: [
      { slug: "security-center", label: "主控台", path: "/examples/security-center" },
    ],
  },
  {
    label: "设置页面",
    iconId: "eds-other-inbox",
    routes: [
      { slug: "security-center", label: "A1 安全中心", path: "/examples/security-center" },
      { slug: "change-password", label: "A2 修改登录密码", path: "/examples/change-password" },
      {
        slug: "authenticator-bind",
        label: "A3 绑定身份验证器",
        path: "/examples/authenticator-bind",
      },
      { slug: "personal-profile", label: "B1 个人资料", path: "/examples/personal-profile" },
      {
        slug: "personal-profile-b2",
        label: "B2 个人信息",
        path: "/examples/personal-profile-b2",
      },
      {
        slug: "personal-profile-b2-en",
        label: "B2 Personal profile",
        path: "/examples/personal-profile-b2-en",
      },
    ],
  },
  {
    label: "系统管理",
    iconId: "eds-action-atom",
    routes: [
      {
        slug: "permission-management",
        label: "C1 权限管理",
        path: "/examples/permission-management",
      },
    ],
  },
  {
    label: "功能页面",
    iconId: "eds-other-coffee",
    routes: [
      { slug: "api-management", label: "D2 API 管理", path: "/examples/api-management" },
      {
        slug: "remittance-regular",
        label: "全球汇款（标准）",
        path: "/examples/remittance-regular",
      },
      {
        slug: "remittance-pobo",
        label: "全球汇款（POBO）",
        path: "/examples/remittance-pobo",
      },
    ],
  },
];

export function isPrototypeModulePath(pathname: string): boolean {
  return PROTOTYPE_MENU_GROUPS.some((g) =>
    g.routes.some((r) => pathname === r.path || pathname.startsWith(`${r.path}/`)),
  );
}