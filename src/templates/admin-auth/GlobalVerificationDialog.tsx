import { InputOTP, Link } from "@/components";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { useResendCooldown } from "./useResendCooldown";
import "@/pages/verification-code-page.css";
import "./admin-verification.css";
import "./global-verification-dialog.css";

export type GlobalVerificationDialogProps = {
  code: string;
  onCodeChange: (value: string) => void;
  onClose?: () => void;
};

/** Figma 07-全局验证 · Dialog `8375:24330` */
export function GlobalVerificationDialog({
  code,
  onCodeChange,
  onClose,
}: GlobalVerificationDialogProps) {
  const { secondsLeft, restart } = useResendCooldown();

  return (
    <div
      className="pt-global-verification-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pt-global-verification-title"
      data-node-id="8375:24330"
    >
      <header className="pt-global-verification-dialog__header">
        <button
          type="button"
          className="pt-global-verification-dialog__close"
          aria-label="Close"
          onClick={onClose}
        >
          <EpIconByName name="Close" size={16} />
        </button>
      </header>

      <div className="pt-global-verification-dialog__body">
        <header className="pt-admin-login__intro" data-node-id="8375:24319">
          <h2 id="pt-global-verification-title" className="pt-admin-login__title" data-node-id="8375:24320">
            Enter verification code.
          </h2>
          <div className="pt-verification-code-page__resend" data-node-id="8375:24321" aria-live="polite">
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

        <div className="pt-global-verification-dialog__field" data-node-id="8375:24324">
          <InputOTP
            length={6}
            size="Large"
            value={code}
            onChange={onCodeChange}
            className="pt-admin-verification__otp"
          />
          <div className="pt-verification-code-page__switch" data-node-id="8375:24326">
            <span className="pt-verification-code-page__switch-prefix">Switch to</span>
            <Link href="#authenticator" linkType="Primary">
              Authenticator Verification
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
