import { createElement } from "react";
import {
  TemplateFrameDemo,
  type TemplateFrameSlug,
} from "../demos/templates/TemplateFrameDemo";
import type { ComponentDoc } from "./types";

const loginCode = `import { LoginPage } from "@/pages/LoginPage";

export function App() {
  return <LoginPage />;
}`;

const verificationCodeTemplate = `import { VerificationCodePage } from "@/pages/VerificationCodePage";

export function App() {
  return <VerificationCodePage />;
}`;

const imageCaptchaTemplate = `import { ImageCaptchaPage } from "@/pages/ImageCaptchaPage";

export function App() {
  return <ImageCaptchaPage />;
}`;

const adminLoginTemplate = `import { AdminLoginPage } from "@/pages/AdminLoginPage";

export function App() {
  return <AdminLoginPage />;
}`;

const adminRegisterTemplate = `import { AdminRegisterPage } from "@/pages/AdminRegisterPage";

export function App() {
  return <AdminRegisterPage />;
}`;

const adminVerificationTemplate = `import { AdminVerificationPage } from "@/pages/AdminVerificationPage";

export function App() {
  return <AdminVerificationPage />;
}`;

const globalVerificationTemplate = `import { GlobalVerificationPage } from "@/pages/GlobalVerificationPage";

export function App() {
  return <GlobalVerificationPage />;
}`;

const permissionCode = `import { PermissionManagementTemplatePage } from "@/pages/PermissionManagementTemplatePage";

export function App() {
  return <PermissionManagementTemplatePage />;
}`;

const securityCenterCode = `import { SecurityCenterTemplatePage } from "@/pages/SecurityCenterTemplatePage";

export function App() {
  return <SecurityCenterTemplatePage />;
}`;

const changePasswordCode = `import { ChangePasswordTemplatePage } from "@/pages/ChangePasswordTemplatePage";

export function App() {
  return <ChangePasswordTemplatePage />;
}`;

const authenticatorBindCode = `import { AuthenticatorBindTemplatePage } from "@/pages/AuthenticatorBindTemplatePage";

export function App() {
  return <AuthenticatorBindTemplatePage />;
}`;

const personalProfileCode = `import { PersonalProfileTemplatePage } from "@/pages/PersonalProfileTemplatePage";

export function App() {
  return <PersonalProfileTemplatePage />;
}`;

const personalProfileB2Code = `import { PersonalProfileB2TemplatePage } from "@/pages/PersonalProfileB2TemplatePage";

export function App() {
  return <PersonalProfileB2TemplatePage />;
}`;

const personalProfileB2EnCode = `import { PersonalProfileB2EnTemplatePage } from "@/pages/PersonalProfileB2EnTemplatePage";

export function App() {
  return <PersonalProfileB2EnTemplatePage />;
}`;

const apiManagementCode = `import { ApiManagementTemplatePage } from "@/pages/ApiManagementTemplatePage";

export function App() {
  return <ApiManagementTemplatePage />;
}`;

function makeDemo(slug: TemplateFrameSlug) {
  return function TemplateVariantDemo() {
    return createElement(TemplateFrameDemo, { slug });
  };
}

export const templateScreenDocs: Record<string, ComponentDoc> = {
  login: {
    slug: "login",
    title: "01 登录",
    subtitle: "Figma 模板案例 · 独立全屏路由",
    figmaNodeId: "8372:22873",
    elementMapping: "LoginPage",
    interactive: true,
    Demo: makeDemo("login"),
    codeTemplate: loginCode,
    variants: [
      "路由 /examples/login",
      "营销区 + 表单卡 · Login 校验通过 → /examples/verification-code",
    ],
    props: [],
  },
  "verification-code": {
    slug: "verification-code",
    title: "02 验证码",
    subtitle: "Figma moduleScreens 8372:23055",
    figmaNodeId: "8372:23055",
    elementMapping: "VerificationCodePage · InputOTP Large",
    interactive: true,
    Demo: makeDemo("verification-code"),
    codeTemplate: verificationCodeTemplate,
    variants: [
      "路由 /examples/verification-code",
      "OTP 满 6 位 → 图形验证码 Dialog · Save → A1 安全中心",
    ],
    props: [],
  },
  "image-captcha": {
    slug: "image-captcha",
    title: "03 图形验证码",
    subtitle: "Figma moduleScreens 8374:23542",
    figmaNodeId: "8374:23542",
    elementMapping: "VerificationCodePage + ImageCaptchaDialog",
    interactive: true,
    Demo: makeDemo("image-captcha"),
    codeTemplate: imageCaptchaTemplate,
    variants: [
      "路由 /examples/image-captcha",
      "02 背景 + 遮罩 · Dialog 387 · Captcha + Refresh + Save",
    ],
    props: [],
  },
  "admin-login": {
    slug: "admin-login",
    title: "04 后台登录",
    subtitle: "Figma moduleScreens 8375:24178",
    figmaNodeId: "8375:24178",
    elementMapping: "AdminLoginPage",
    interactive: true,
    Demo: makeDemo("admin-login"),
    codeTemplate: adminLoginTemplate,
    variants: [
      "路由 /examples/admin-login",
      "灰底 · 白卡 480 · Login → 06 后台验证",
    ],
    props: [],
  },
  "admin-register": {
    slug: "admin-register",
    title: "05 后台注册",
    subtitle: "Figma moduleScreens 8375:24188",
    figmaNodeId: "8375:24188",
    elementMapping: "AdminRegisterPage",
    interactive: true,
    Demo: makeDemo("admin-register"),
    codeTemplate: adminRegisterTemplate,
    variants: [
      "路由 /examples/admin-register",
      "Email + Password + Confirm · Create Account → 06",
    ],
    props: [],
  },
  "admin-verification": {
    slug: "admin-verification",
    title: "06 后台验证",
    subtitle: "Figma moduleScreens 8375:24203",
    figmaNodeId: "8375:24203",
    elementMapping: "AdminVerificationOtpCard",
    interactive: true,
    Demo: makeDemo("admin-verification"),
    codeTemplate: adminVerificationTemplate,
    variants: [
      "路由 /examples/admin-verification",
      "白卡 OTP 满宽 · OTP 满 6 位 → 07 全局验证",
    ],
    props: [],
  },
  "global-verification": {
    slug: "global-verification",
    title: "07 全局验证",
    subtitle: "Figma moduleScreens 8375:24316",
    figmaNodeId: "8375:24316",
    elementMapping: "GlobalVerificationDialog",
    interactive: true,
    Demo: makeDemo("global-verification"),
    codeTemplate: globalVerificationTemplate,
    variants: [
      "路由 /examples/global-verification",
      "系统级遮罩 · 关闭仅收起弹窗（不返回 06）· OTP 满 6 位 → A1",
    ],
    props: [],
  },
  "permission-management": {
    slug: "permission-management",
    title: "C1 权限管理",
    subtitle: "Figma moduleScreens 8370:13257",
    figmaNodeId: "8370:13257",
    elementMapping: "AppShell + PermissionManagementPanel",
    interactive: true,
    Demo: makeDemo("permission-management"),
    codeTemplate: permissionCode,
    variants: ["路由 /examples/permission-management", "Layout-04 应用壳"],
    props: [],
  },
  "security-center": {
    slug: "security-center",
    title: "A1 安全中心",
    subtitle: "Figma moduleScreens 8349:5393",
    figmaNodeId: "8349:5393",
    elementMapping: "AppShell + SecurityCenterPanel",
    interactive: true,
    Demo: makeDemo("security-center"),
    codeTemplate: securityCenterCode,
    variants: ["路由 /examples/security-center", "Layout-04 · Page Layout"],
    props: [],
  },
  "change-password": {
    slug: "change-password",
    title: "A2 修改登录密码",
    subtitle: "Figma moduleScreens 8349:5537",
    figmaNodeId: "8349:5537",
    elementMapping: "AppShell + ChangePasswordPanel",
    interactive: true,
    Demo: makeDemo("change-password"),
    codeTemplate: changePasswordCode,
    variants: ["路由 /examples/change-password", "Layout-04 · 返回栏 + 居中表单"],
    props: [],
  },
  "authenticator-bind": {
    slug: "authenticator-bind",
    title: "A3 绑定身份验证器",
    subtitle: "Figma moduleScreens 8370:5786",
    figmaNodeId: "8370:5786",
    elementMapping: "AppShell + AuthenticatorBindPanel",
    interactive: true,
    Demo: makeDemo("authenticator-bind"),
    codeTemplate: authenticatorBindCode,
    variants: [
      "路由 /examples/authenticator-bind",
      "Layout-04 · 纵向 Steps（返回栏 → 安全中心 · 点 01/02 回上级步 · ?step=2|3）",
    ],
    props: [],
  },
  "personal-profile": {
    slug: "personal-profile",
    title: "B1 个人资料",
    subtitle: "Figma moduleScreens 8370:13091",
    figmaNodeId: "8370:13091",
    elementMapping: "AppShell + DocMetaPanel（文档元数据面板布局）",
    interactive: true,
    Demo: makeDemo("personal-profile"),
    codeTemplate: personalProfileCode,
    variants: ["路由 /examples/personal-profile", "Layout-04 · Page Layout"],
    props: [],
  },
  "personal-profile-b2": {
    slug: "personal-profile-b2",
    title: "B2 个人信息",
    subtitle: "Profile 页布局 · 固定模版 B2-个人信息（Profile）",
    figmaNodeId: "209:1848",
    elementMapping: "AppShell + ProfileHero + ProfileInfoCard",
    interactive: true,
    Demo: makeDemo("personal-profile-b2"),
    codeTemplate: personalProfileB2Code,
    variants: [
      "路由 /examples/personal-profile-b2（中文）",
      "路由 /examples/personal-profile-b2-en（英文）",
      "docs/layouts/PROFILE-PAGE-LAYOUT.md",
    ],
    props: [],
  },
  "personal-profile-b2-en": {
    slug: "personal-profile-b2-en",
    title: "B2 Personal profile",
    subtitle: "Profile layout · EN",
    figmaNodeId: "209:2061",
    elementMapping: "AppShell + ProfileHero + ProfileInfoCard (locale=en)",
    interactive: true,
    Demo: makeDemo("personal-profile-b2-en"),
    codeTemplate: personalProfileB2EnCode,
    variants: ["路由 /examples/personal-profile-b2-en", "docs/layouts/PROFILE-PAGE-LAYOUT.md"],
    props: [],
  },
  "api-management": {
    slug: "api-management",
    title: "D2 API 管理",
    subtitle: "Figma moduleScreens D2-API管理 `8770:65333`",
    figmaNodeId: "8770:65333",
    elementMapping: "EnterpriseApiShell + ApiManagementPanel",
    interactive: true,
    Demo: makeDemo("api-management"),
    codeTemplate: apiManagementCode,
    variants: [
      "路由 /examples/api-management",
      "画布 8349:5392 · 建议 x=3920 y=1620",
      "企业侧栏 · API 信息 · 白名单表 + 分页",
    ],
    props: [],
  },
};

export function getTemplateDoc(slug: string): ComponentDoc | undefined {
  return templateScreenDocs[slug];
}
