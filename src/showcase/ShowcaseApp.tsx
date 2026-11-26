import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { VerificationCodePage } from "@/pages/VerificationCodePage";
import { ImageCaptchaPage } from "@/pages/ImageCaptchaPage";
import { AdminLoginPage } from "@/pages/AdminLoginPage";
import { AdminRegisterPage } from "@/pages/AdminRegisterPage";
import { AdminVerificationPage } from "@/pages/AdminVerificationPage";
import { GlobalVerificationPage } from "@/pages/GlobalVerificationPage";
import { PermissionManagementTemplatePage } from "@/pages/PermissionManagementTemplatePage";
import { SecurityCenterTemplatePage } from "@/pages/SecurityCenterTemplatePage";
import { ChangePasswordTemplatePage } from "@/pages/ChangePasswordTemplatePage";
import { AuthenticatorBindTemplatePage } from "@/pages/AuthenticatorBindTemplatePage";
import { PersonalProfileTemplatePage } from "@/pages/PersonalProfileTemplatePage";
import { PersonalProfileB2TemplatePage } from "@/pages/PersonalProfileB2TemplatePage";
import { PersonalProfileB2EnTemplatePage } from "@/pages/PersonalProfileB2EnTemplatePage";
import { ApiManagementTemplatePage } from "@/pages/ApiManagementTemplatePage";
import { RemittancePoboTemplatePage } from "@/pages/RemittancePoboTemplatePage";
import { RemittanceRegularTemplatePage } from "@/pages/RemittanceRegularTemplatePage";
import { DesignLayout } from "./layout/DesignLayout";
import { TemplateCatalogLayout } from "./layout/TemplateCatalogLayout";
import {
  LegacyComponentRedirect,
  LegacyLayoutRedirect,
  LegacyTemplateRedirect,
} from "./layout/LegacyRedirects";
import { ComponentShowcasePage } from "./pages/ComponentShowcasePage";
import { LayoutShowcasePage } from "./pages/LayoutShowcasePage";
import { LayoutFullscreenPage } from "@/pages/LayoutFullscreenPage";
import { TemplateShowcasePage } from "./pages/TemplateShowcasePage";
import { OverviewPage } from "./pages/OverviewPage";
import { ExplorePage } from "./pages/ExplorePage";
import { TokensPage } from "./pages/TokensPage";
import { docTokensPath, templateShowcasePath } from "./nav";
import { getShowcaseProduct } from "./showcaseProduct";

const templateExamples = (
  <>
    <Route path="/examples/login" element={<LoginPage />} />
    <Route path="/examples/verification-code" element={<VerificationCodePage />} />
    <Route path="/examples/image-captcha" element={<ImageCaptchaPage />} />
    <Route path="/examples/admin-login" element={<AdminLoginPage />} />
    <Route path="/examples/admin-register" element={<AdminRegisterPage />} />
    <Route path="/examples/admin-verification" element={<AdminVerificationPage />} />
    <Route path="/examples/global-verification" element={<GlobalVerificationPage />} />
    <Route path="/examples/layout/:slug" element={<LayoutFullscreenPage />} />
    <Route
      path="/examples/permission-management"
      element={<PermissionManagementTemplatePage />}
    />
    <Route path="/examples/security-center" element={<SecurityCenterTemplatePage />} />
    <Route path="/examples/change-password" element={<ChangePasswordTemplatePage />} />
    <Route path="/examples/authenticator-bind" element={<AuthenticatorBindTemplatePage />} />
    <Route path="/examples/personal-profile" element={<PersonalProfileTemplatePage />} />
    <Route
      path="/examples/personal-profile-b2"
      element={<PersonalProfileB2TemplatePage />}
    />
    <Route
      path="/examples/personal-profile-b2-en"
      element={<PersonalProfileB2EnTemplatePage />}
    />
    <Route path="/examples/api-management" element={<ApiManagementTemplatePage />} />
    <Route
      path="/examples/remittance-regular"
      element={<RemittanceRegularTemplatePage />}
    />
    <Route path="/examples/remittance-pobo" element={<RemittancePoboTemplatePage />} />
  </>
);

function UnifiedShowcaseRoutes() {
  return (
    <>
      <Route path="/" element={<Navigate to={docTokensPath()} replace />} />
      <Route element={<DesignLayout />}>
        <Route path="/doc/tokens" element={<TokensPage />} />
        <Route path="/doc/overview" element={<OverviewPage />} />
        <Route path="/doc/explore" element={<ExplorePage />} />
        <Route path="/doc" element={<Navigate to={docTokensPath()} replace />} />
        <Route path="/desktop/components/:slug" element={<ComponentShowcasePage />} />
        <Route path="/desktop/layout/:slug" element={<LayoutShowcasePage />} />
      </Route>
      <Route element={<TemplateCatalogLayout />}>
        <Route
          path="/desktop/templates/:slug"
          element={<TemplateShowcasePage />}
        />
        <Route
          path="/desktop"
          element={<Navigate to={templateShowcasePath("login")} replace />}
        />
      </Route>
      <Route path="/tokens" element={<Navigate to={docTokensPath()} replace />} />
      <Route path="/design-tokens" element={<Navigate to={docTokensPath()} replace />} />
      <Route path="/overview" element={<Navigate to="/doc/overview" replace />} />
      <Route path="/components/:slug" element={<LegacyComponentRedirect />} />
      <Route path="/templates/:slug" element={<LegacyTemplateRedirect />} />
      <Route path="/layout/:slug" element={<LegacyLayoutRedirect />} />
      {templateExamples}
      <Route path="*" element={<Navigate to={docTokensPath()} replace />} />
    </>
  );
}

/** 本地 all：设计规范与 Desktop 展示分栏；分仓见 VITE_SHOWCASE_PRODUCT */
export function ShowcaseApp() {
  const product = getShowcaseProduct();

  if (product === "desktop") {
    return (
      <Routes>
        <Route element={<DesignLayout />}>
          <Route path="/tokens" element={<TokensPage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/components/:slug" element={<ComponentShowcasePage />} />
          <Route path="/layout/:slug" element={<LayoutShowcasePage />} />
          <Route path="/" element={<Navigate to="/tokens" replace />} />
        </Route>
        <Route path="/doc/tokens" element={<Navigate to="/tokens" replace />} />
        <Route path="/desktop/components/:slug" element={<LegacyComponentRedirect />} />
        <Route path="*" element={<Navigate to="/tokens" replace />} />
      </Routes>
    );
  }

  if (product === "doc") {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="/examples/login" replace />} />
        <Route path="/templates/:slug" element={<LegacyTemplateRedirect />} />
        <Route
          path="/desktop/templates/:slug"
          element={<LegacyTemplateRedirect />}
        />
        {templateExamples}
        <Route path="*" element={<Navigate to="/examples/login" replace />} />
      </Routes>
    );
  }

  return <Routes>{UnifiedShowcaseRoutes()}</Routes>;
}