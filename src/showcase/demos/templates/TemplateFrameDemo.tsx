import { cn } from "@/lib/cn";
import { templateFullscreenPath } from "@/showcase/nav";

export type TemplateFrameSlug =
  | "login"
  | "verification-code"
  | "image-captcha"
  | "admin-login"
  | "admin-register"
  | "admin-verification"
  | "global-verification"
  | "permission-management"
  | "security-center"
  | "change-password"
  | "authenticator-bind"
  | "personal-profile"
  | "personal-profile-b2"
  | "personal-profile-b2-en"
  | "api-management";

export function TemplateFrameDemo({ slug }: { slug: TemplateFrameSlug }) {
  const src = templateFullscreenPath(slug);
  return (
    <div
      className={cn(
        "pt-frame-demo-viewport pt-template-frame-demo",
        slug === "login" && "pt-template-frame-demo--login",
        slug === "verification-code" && "pt-template-frame-demo--verification-code",
        slug === "image-captcha" && "pt-template-frame-demo--image-captcha",
        slug === "admin-login" && "pt-template-frame-demo--admin-login",
        slug === "admin-register" && "pt-template-frame-demo--admin-register",
        slug === "admin-verification" && "pt-template-frame-demo--admin-verification",
        slug === "global-verification" && "pt-template-frame-demo--global-verification",
        slug === "permission-management" && "pt-template-frame-demo--permission",
        slug === "security-center" && "pt-template-frame-demo--security-center",
        slug === "change-password" && "pt-template-frame-demo--change-password",
        slug === "authenticator-bind" && "pt-template-frame-demo--authenticator-bind",
        slug === "personal-profile" && "pt-template-frame-demo--personal-profile",
        (slug === "personal-profile-b2" || slug === "personal-profile-b2-en") &&
          "pt-template-frame-demo--personal-profile",
        slug === "api-management" && "pt-template-frame-demo--api-management",
      )}
    >
      <iframe
        title={`${slug} 模板预览`}
        className="pt-frame-demo-viewport__iframe"
        src={src}
        loading="lazy"
      />
    </div>
  );
}
