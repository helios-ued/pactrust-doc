import figmaSource from "../../figma-source.json";
import { isInteractiveDoc } from "./registry";
import { listInteractiveLayoutSlugs } from "./registry/layoutFormSpecs";

export type NavItem = {
  slug: string;
  name: string;
  category: string;
  nodeId: string;
  version?: string;
  implemented?: boolean;
};

export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[()]/g, "");
}

export const componentNav: NavItem[] = figmaSource.componentPages.map((p) => {
  const slug = toSlug(p.name);
  return {
    slug,
    name: p.name,
    category: p.category,
    nodeId: p.nodeId,
    version: "version" in p ? (p as { version?: string }).version : undefined,
    implemented: isInteractiveDoc(slug),
  };
});

/** 侧栏组件列表：Text 已并入「设计令牌 → Text Style」，不重复展示 */
export const componentSidebarNav: NavItem[] = componentNav.filter((i) => i.slug !== "text");

/** 模板页：挂在「组件 → 模板」二级分类下 */
export const templateSidebarNav: NavItem[] = [
  {
    slug: "login",
    name: "01 登录",
    category: "Templates",
    nodeId: "8372:22873",
    implemented: true,
  },
  {
    slug: "verification-code",
    name: "02 验证码",
    category: "Templates",
    nodeId: "8372:23055",
    implemented: true,
  },
  {
    slug: "image-captcha",
    name: "03 图形验证码",
    category: "Templates",
    nodeId: "8374:23542",
    implemented: true,
  },
  {
    slug: "admin-login",
    name: "04 后台登录",
    category: "Templates",
    nodeId: "8375:24178",
    implemented: true,
  },
  {
    slug: "admin-register",
    name: "05 后台注册",
    category: "Templates",
    nodeId: "8375:24188",
    implemented: true,
  },
  {
    slug: "admin-verification",
    name: "06 后台验证",
    category: "Templates",
    nodeId: "8375:24203",
    implemented: true,
  },
  {
    slug: "global-verification",
    name: "07 全局验证",
    category: "Templates",
    nodeId: "8375:24316",
    implemented: true,
  },
  {
    slug: "security-center",
    name: "A1 安全中心",
    category: "Templates",
    nodeId: "8349:5393",
    implemented: true,
  },
  {
    slug: "change-password",
    name: "A2 修改登录密码",
    category: "Templates",
    nodeId: "8349:5537",
    implemented: true,
  },
  {
    slug: "authenticator-bind",
    name: "A3 绑定身份验证器",
    category: "Templates",
    nodeId: "8370:5786",
    implemented: true,
  },
  {
    slug: "personal-profile",
    name: "B1 个人资料",
    category: "Templates",
    nodeId: "8370:13091",
    implemented: true,
  },
  {
    slug: "personal-profile-b2",
    name: "B2 个人信息",
    category: "Templates",
    nodeId: "209:1848",
    implemented: true,
  },
  {
    slug: "personal-profile-b2-en",
    name: "B2 Personal profile",
    category: "Templates",
    nodeId: "209:2061",
    implemented: true,
  },
  {
    slug: "permission-management",
    name: "C1 权限管理",
    category: "Templates",
    nodeId: "8370:13257",
    implemented: true,
  },
  {
    slug: "api-management",
    name: "D2 API 管理",
    category: "Templates",
    nodeId: "8770:65333",
    implemented: true,
  },
];

/** 页面布局：Figma 设计基础 Container + 🎨 模块界面 Layout 帧 */
export const layoutSidebarNav: NavItem[] = (figmaSource.layoutPages ?? []).map((p) => ({
  slug: p.slug,
  name: p.name,
  category: "Layout",
  nodeId: p.nodeId,
  implemented: listInteractiveLayoutSlugs().includes(p.slug),
}));

export const sidebarComponentNav: NavItem[] = [
  ...componentSidebarNav,
  ...templateSidebarNav,
  ...layoutSidebarNav,
];

export const categoryLabels: Record<string, string> = {
  Basic: "基础",
  Form: "表单",
  Data: "数据",
  Navigation: "导航",
  Feedback: "反馈",
  Others: "其他",
  Templates: "模板",
  Layout: "Layout",
};

export const categoryOrder = [
  "Basic",
  "Form",
  "Data",
  "Navigation",
  "Feedback",
  "Others",
  "Templates",
  "Layout",
] as const;

export function componentShowcasePath(slug: string): string {
  return `/components/${slug}`;
}

export function templateShowcasePath(slug: string): string {
  return `/templates/${slug}`;
}

/** 模板全屏示例（与 Layout `/examples/layout/*` 同级） */
export function templateFullscreenPath(slug: string): string {
  return `/examples/${slug}`;
}

export function layoutShowcasePath(slug: string): string {
  return `/layout/${slug}`;
}

export function layoutFullscreenPath(slug: string): string {
  return `/examples/layout/${slug}`;
}

export function navItemPath(item: NavItem): string {
  if (item.category === "Templates") return templateShowcasePath(item.slug);
  if (item.category === "Layout") return layoutShowcasePath(item.slug);
  return componentShowcasePath(item.slug);
}

export function isNavItemActive(item: NavItem, pathname: string): boolean {
  const path = navItemPath(item);
  if (item.category === "Templates") {
    return pathname === path || pathname === templateFullscreenPath(item.slug);
  }
  if (item.category === "Layout") {
    return (
      pathname === path ||
      pathname.endsWith(`/layout/${item.slug}`) ||
      pathname === layoutFullscreenPath(item.slug)
    );
  }
  return pathname.endsWith(`/components/${item.slug}`);
}

export function isComponentsAreaPath(pathname: string): boolean {
  return (
    pathname.startsWith("/components/") ||
    pathname.startsWith("/examples/") ||
    pathname.startsWith("/layout/") ||
    pathname.startsWith("/templates/")
  );
}

export function groupByCategory(items: NavItem[]) {
  return categoryOrder.map((cat) => ({
    category: cat,
    label: categoryLabels[cat],
    items: items.filter((i) => i.category === cat),
  }));
}
