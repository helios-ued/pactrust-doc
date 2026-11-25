import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputOTP, Link, TextButton, type InputState } from "@/components";
import { PacsTrustLogo } from "@/components/brand/PacsTrustLogo";
import { LoginMarketingHero } from "@/components/login/LoginMarketingHero";
import { ImageCaptchaDialog } from "@/templates/login-flow/ImageCaptchaDialog";
import "@/templates/login-flow/image-captcha-dialog.css";
import "./login-page.css";
import "./verification-code-page.css";

function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M1.5 7h11M7 1.5c1.5 1.8 2.3 3.8 2.3 5.5S8.5 10.7 7 12.5M7 1.5C5.5 3.3 4.7 5.3 4.7 7s.8 3.7 2.3 5.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3.5 5.25 7 8.75l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const RESEND_COOLDOWN_SEC = 56;

export type VerificationCodePageProps = {
  /** Figma 03 帧：进入即展示图形验证码 */
  initialCaptchaOpen?: boolean;
  /** Showcase 03 预览用 · 预填 OTP */
  defaultOtp?: string;
};

/** Figma moduleScreens 02-验证码 `8372:23055`（03 叠层 `8374:23542`） */
export function VerificationCodePage({
  initialCaptchaOpen = false,
  defaultOtp = "",
}: VerificationCodePageProps) {
  const navigate = useNavigate();
  const [code, setCode] = useState(defaultOtp);
  const [secondsLeft, setSecondsLeft] = useState(RESEND_COOLDOWN_SEC);
  const [captchaOpen, setCaptchaOpen] = useState(initialCaptchaOpen);
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaSeed, setCaptchaSeed] = useState(0);
  const [captchaInputState, setCaptchaInputState] = useState<InputState>("Default");

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const id = window.setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [secondsLeft]);

  useEffect(() => {
    if (code.length === 6 && !captchaOpen) {
      setCaptchaOpen(true);
    }
  }, [code, captchaOpen]);

  function handleResend() {
    setSecondsLeft(RESEND_COOLDOWN_SEC);
  }

  function closeCaptcha() {
    setCaptchaOpen(false);
    setCaptchaInputState("Default");
  }

  function refreshCaptcha() {
    setCaptchaSeed((n) => n + 1);
  }

  function handleCaptchaSave() {
    if (!captchaValue.trim()) {
      setCaptchaInputState("Error");
      return;
    }
    setCaptchaOpen(false);
    navigate("/examples/security-center");
  }

  const viewportNodeId = initialCaptchaOpen ? "8374:23542" : "8372:23055";

  return (
    <div className="pt-login-viewport" data-node-id={viewportNodeId}>
      <div className="pt-login-page">
        <div className="pt-login-page__panel">
          <header className="pt-login-page__header flex h-pt-8xl shrink-0 items-center gap-pt-8">
            <div className="pt-login-page__logo-slot">
              <PacsTrustLogo />
            </div>
            <TextButton
              buttonType="Default"
              size="Default"
              leftIcon={<GlobeIcon />}
              rightIcon={<ChevronDownIcon />}
              aria-haspopup="listbox"
              aria-label="Language"
            >
              English
            </TextButton>
          </header>

          <main className="pt-login-page__main pt-verification-code-page__main">
            <div
              className="pt-login-page__form-wrap pt-verification-code-page__body"
              data-node-id="8372:23057"
            >
              <header
                className="pt-verification-code-page__intro"
                data-node-id="8372:23058"
              >
                <h1 className="pt-verification-code-page__title" data-node-id="8372:23059">
                  Enter verification code.
                </h1>
                <div
                  className="pt-verification-code-page__resend"
                  data-node-id="8372:23127"
                  aria-live="polite"
                >
                  {secondsLeft > 0 ? (
                    <>
                      <span className="pt-verification-code-page__resend-label">
                        Resend Code
                      </span>
                      <span className="pt-verification-code-page__resend-timer">
                        {secondsLeft}s
                      </span>
                    </>
                  ) : (
                    <Link
                      href="#resend"
                      linkType="Primary"
                      className="pt-verification-code-page__resend-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleResend();
                      }}
                    >
                      Resend Code
                    </Link>
                  )}
                </div>
              </header>

              <div className="pt-verification-code-page__field" data-node-id="8372:23061">
                <div data-node-id="8372:23473">
                  <InputOTP
                    length={6}
                    size="Large"
                    value={code}
                    onChange={setCode}
                    className="pt-verification-code-page__otp"
                  />
                </div>
                <div
                  className="pt-verification-code-page__switch"
                  data-node-id="8374:23507"
                >
                  <span className="pt-verification-code-page__switch-prefix">
                    Switch to
                  </span>
                  <Link href="#authenticator" linkType="Primary">
                    Authenticator Verification
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>

        <LoginMarketingHero />
      </div>

      {captchaOpen ? (
        <>
          <div
            className="pt-login-flow-scrim"
            data-node-id="8374:23543"
            aria-hidden
            onClick={closeCaptcha}
          />
          <div className="pt-login-flow-dialog-layer" role="presentation">
            <ImageCaptchaDialog
              open
              value={captchaValue}
              onChange={(v) => {
                setCaptchaValue(v);
                if (captchaInputState === "Error" && v.trim()) {
                  setCaptchaInputState("Default");
                }
              }}
              captchaSeed={captchaSeed}
              onRefresh={refreshCaptcha}
              onClose={closeCaptcha}
              onSave={handleCaptchaSave}
              inputState={captchaInputState}
            />
          </div>
        </>
      ) : null}
    </div>
  );
}
