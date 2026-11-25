import { InputOTP, Link } from "@/components";
import { useResendCooldown } from "./useResendCooldown";
import "@/pages/verification-code-page.css";
import "./admin-verification.css";

type AdminVerificationOtpCardProps = {
  code: string;
  onCodeChange: (value: string) => void;
  cardNodeId?: string;
};

/** 06 后台验证 · 白卡 OTP 内容 */
export function AdminVerificationOtpCard({
  code,
  onCodeChange,
  cardNodeId = "8375:24204",
}: AdminVerificationOtpCardProps) {
  const { secondsLeft, restart } = useResendCooldown();

  return (
    <div className="pt-admin-login__card pt-admin-verification__card" data-node-id={cardNodeId}>
      <header className="pt-admin-login__intro" data-node-id="8375:24205">
        <h1 className="pt-admin-login__title" data-node-id="8375:24206">
          Enter verification code.
        </h1>
        <div className="pt-verification-code-page__resend" data-node-id="8375:24207" aria-live="polite">
          {secondsLeft > 0 ? (
            <>
              <span className="pt-verification-code-page__resend-label">Resend Code</span>
              <span className="pt-verification-code-page__resend-timer">{secondsLeft}s</span>
            </>
          ) : (
            <Link
              href="#resend"
              linkType="Primary"
              className="pt-verification-code-page__resend-link"
              onClick={(e) => {
                e.preventDefault();
                restart();
              }}
            >
              Resend Code
            </Link>
          )}
        </div>
      </header>

      <div className="pt-admin-verification__field" data-node-id="8375:24210">
        <InputOTP
          length={6}
          size="Large"
          value={code}
          onChange={onCodeChange}
          className="pt-admin-verification__otp"
        />
        <div className="pt-verification-code-page__switch" data-node-id="8375:24212">
          <span className="pt-verification-code-page__switch-prefix">Switch to</span>
          <Link href="#authenticator" linkType="Primary">
            Authenticator Verification
          </Link>
        </div>
      </div>
    </div>
  );
}
