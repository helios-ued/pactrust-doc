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
import { ShowcaseLayout } from "./layout/ShowcaseLayout";
import { ComponentShowcasePage } from "./pages/ComponentShowcasePage";
import { LayoutShowcasePage } from "./pages/LayoutShowcasePage";
import { LayoutFullscreenPage } from "@/pages/LayoutFullscreenPage";
import { TemplateShowcasePage } from "./pages/TemplateShowcasePage";
import { OverviewPage } from "./pages/OverviewPage";
import { TokensPage } from "./pages/TokensPage";

/**
 * 模板页与登录页相同：独立全屏路由，不在 ShowcaseLayout 内。
 * （嵌套在 pathless layout 下时，RR7 可能误匹配 index → /tokens）
 */
export function ShowcaseApp() {
  return (
    <Routes>
      <Route path="/" element={<ShowcaseLayout />}>
        <Route index element={<Navigate to="/tokens" replace />} />
        <Route path="tokens" element={<TokensPage />} />
        <Route path="design-tokens" element={<Navigate to="/tokens" replace />} />
        <Route path="overview" element={<OverviewPage />} />
        <Route path="components/:slug" element={<ComponentShowcasePage />} />
        <Route path="layout/:slug" element={<LayoutShowcasePage />} />
        <Route path="templates/:slug" element={<TemplateShowcasePage />} />
      </Route>
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
      <Route
        path="/examples/security-center"
        element={<SecurityCenterTemplatePage />}
      />
      <Route
        path="/examples/change-password"
        element={<ChangePasswordTemplatePage />}
      />
      <Route
        path="/examples/authenticator-bind"
        element={<AuthenticatorBindTemplatePage />}
      />
      <Route
        path="/examples/personal-profile"
        element={<PersonalProfileTemplatePage />}
      />
      <Route
        path="/examples/personal-profile-b2"
        element={<PersonalProfileB2TemplatePage />}
      />
      <Route
        path="/examples/personal-profile-b2-en"
        element={<PersonalProfileB2EnTemplatePage />}
      />
      <Route
        path="/examples/api-management"
        element={<ApiManagementTemplatePage />}
      />
      <Route
        path="/examples/remittance-regular"
        element={<RemittanceRegularTemplatePage />}
      />
      <Route path="/examples/remittance-pobo" element={<RemittancePoboTemplatePage />} />
      <Route path="*" element={<Navigate to="/tokens" replace />} />
    </Routes>
  );
}
