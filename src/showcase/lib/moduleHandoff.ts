import {
  buildElApiManagementPageCode,
  buildElModuleHandoffStub,
  buildElSecurityCenterFullPageCode,
  buildElSecurityCenterPageCode,
} from "./elementPlusCode/moduleScreens";
import { templateFullscreenPath } from "../nav";

/** 全屏交付 ≈ 本站 /examples 全屏；仅内容区 = 嵌进已有框架 */
export type HandoffDeliverMode = "fullscreen" | "content";

export type ModuleHandoffMeta = {
  /** 仓库内锁定说明（给前端 / AI 对照） */
  lockDoc: string;
  /** 本设计站实现文件（供拷贝结构或对照） */
  sourcePaths: string[];
  /** 是否已提供可粘贴的 Element Plus 页面示例 */
  vueReady: boolean;
  /** 默认「全屏交付」：复制一次、改路由即可演示 */
  supportsFullscreen: boolean;
  buildElementPlusCode: (mode?: HandoffDeliverMode) => string;
};

const MODULE_LOCK_DOCS: Record<string, string> = {
  "security-center": "docs/module-screens/A1-security-center.md",
  "change-password": "docs/MODULE-SCREENS.md · A2",
  "authenticator-bind": "docs/MODULE-SCREENS.md · A3",
  "personal-profile": "docs/MODULE-SCREENS.md · B1",
  "personal-profile-b2": "docs/layouts/PROFILE-PAGE-LAYOUT.md · B2",
  "personal-profile-b2-en": "docs/layouts/PROFILE-PAGE-LAYOUT.md · B2 EN",
  "permission-management": "docs/MODULE-SCREENS.md · C1",
  "api-management": "docs/module-screens/D2-api-management.md",
};

const MODULE_SOURCE: Record<string, string[]> = {
  "security-center": [
    "src/pages/SecurityCenterTemplatePage.tsx",
    "src/templates/security-center/SecurityCenterPanel.tsx",
    "src/templates/security-center/security-center.css",
    "docs/module-screens/A1-security-center.md",
  ],
  "change-password": ["src/pages/ChangePasswordTemplatePage.tsx", "src/templates/change-password/"],
  "authenticator-bind": ["src/pages/AuthenticatorBindTemplatePage.tsx", "src/templates/authenticator-bind/"],
  "personal-profile": [
    "src/pages/PersonalProfileTemplatePage.tsx",
    "src/templates/layout/doc-meta-panel/DocMetaPanel.tsx",
    "docs/layouts/DOC-META-PANEL-LAYOUT.md",
  ],
  "personal-profile-b2": [
    "src/pages/PersonalProfileB2TemplatePage.tsx",
    "src/pages/PersonalProfileB2EnTemplatePage.tsx",
    "src/templates/personal-profile/ProfileHero.tsx",
    "src/templates/personal-profile/ProfileInfoCard.tsx",
    "docs/layouts/PROFILE-PAGE-LAYOUT.md",
  ],
  "personal-profile-b2-en": [
    "src/pages/PersonalProfileB2EnTemplatePage.tsx",
    "docs/layouts/PROFILE-PAGE-LAYOUT.md",
  ],
  "permission-management": [
    "src/pages/PermissionManagementTemplatePage.tsx",
    "src/templates/permission-management/",
  ],
  "api-management": [
    "src/pages/ApiManagementTemplatePage.tsx",
    "src/templates/api-management/ApiManagementPanel.tsx",
    "src/templates/api-management/enterprise-api-shell.css",
    "src/templates/api-management/api-management.css",
  ],
};

export function getModuleHandoff(slug: string, title: string, elementMapping: string): ModuleHandoffMeta | undefined {
  const lockDoc = MODULE_LOCK_DOCS[slug];
  if (!lockDoc) return undefined;

  const sourcePaths = MODULE_SOURCE[slug] ?? [];
  const previewRoute = templateFullscreenPath(slug);

  if (slug === "security-center") {
    return {
      lockDoc,
      sourcePaths,
      vueReady: true,
      supportsFullscreen: true,
      buildElementPlusCode: (mode = "fullscreen") =>
        mode === "content" ? buildElSecurityCenterPageCode() : buildElSecurityCenterFullPageCode(),
    };
  }

  if (slug === "api-management") {
    return {
      lockDoc,
      sourcePaths,
      vueReady: true,
      supportsFullscreen: false,
      buildElementPlusCode: () => buildElApiManagementPageCode(),
    };
  }

  return {
    lockDoc,
    sourcePaths,
    vueReady: false,
    supportsFullscreen: false,
    buildElementPlusCode: () =>
      buildElModuleHandoffStub({
        title,
        lockDoc,
        mapping: elementMapping,
        previewRoute,
      }),
  };
}
