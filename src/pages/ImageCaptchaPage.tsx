import { VerificationCodePage } from "@/pages/VerificationCodePage";

/** Figma moduleScreens 03-图形验证码 `8374:23542` */
export function ImageCaptchaPage() {
  return (
    <VerificationCodePage initialCaptchaOpen defaultOtp="123456" />
  );
}
