import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/Button/Button";
import { Form, FormItems } from "@/components/Form/Form";
import { FormItem } from "@/components/Form/FormItem";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { Input } from "@/components/Input/Input";
import type { StepStatus } from "@/components/Steps/Steps";
import { StepsItem } from "@/components/Steps/Steps";
import { AuthenticatorBindIntro } from "./AuthenticatorBindIntro";
import {
  authenticatorBindStepToSearchParams,
  parseAuthenticatorBindStep,
  type AuthenticatorBindStep,
} from "./authenticatorBindStep";
import "../module-screens/module-screen-layout.css";
import "./authenticator-bind.css";

const SECRET_KEY = "MLTNMLLCS5YKG6TRLZ4ABHJWUIIQHX7Z";

function stepStatus(step: AuthenticatorBindStep, active: AuthenticatorBindStep): StepStatus {
  if (step < active) return "Wait";
  if (step === active) return "Process";
  return "Wait";
}

/** Figma A3 · steps 01 `8370:5786` · 02 `8370:10268` · 03 `8370:11363` */
export function AuthenticatorBindPanel() {
  const [searchParams, setSearchParams] = useSearchParams();
  const step = parseAuthenticatorBindStep(searchParams.get("step"));

  const setStep = useCallback(
    (next: AuthenticatorBindStep) => {
      const params = authenticatorBindStepToSearchParams(next);
      if (params) setSearchParams(params);
      else setSearchParams({});
    },
    [setSearchParams],
  );

  const stepsNodeId = useMemo(() => {
    if (step === 2) return "8370:10280";
    if (step === 3) return "8370:11375";
    return "8370:5797";
  }, [step]);

  const bodyNodeId = useMemo(() => {
    if (step === 2) return "8370:10275";
    if (step === 3) return "8370:11370";
    return "8370:5793";
  }, [step]);

  return (
    <div className="pt-module-screen__body pt-auth-bind" data-node-id={bodyNodeId}>
      <div className="pt-module-screen__content pt-auth-bind__content">
        <AuthenticatorBindIntro />

        <div
          className="pt-steps pt-steps--vertical pt-auth-bind__steps"
          data-node-id={stepsNodeId}
        >
          <StepsItem
            index={1}
            status={stepStatus(1, step)}
            direction="Vertical"
            lastStep={false}
            title="下载身份验证 App"
            description={step === 1 ? "例如 Google Authentication" : ""}
            className={step > 1 ? "pt-auth-bind__step--compact" : undefined}
            onActivate={step > 1 ? () => setStep(1) : undefined}
          >
            {step === 1 ? (
              <div className="pt-auth-bind__step-body">
                <div className="pt-auth-bind__qr-row">
                  <div className="pt-auth-bind__qr">
                    <div className="pt-auth-bind__qr-placeholder" aria-hidden />
                    <span className="pt-auth-bind__qr-label">IOS</span>
                  </div>
                  <div className="pt-auth-bind__qr">
                    <div className="pt-auth-bind__qr-placeholder" aria-hidden />
                    <span className="pt-auth-bind__qr-label">Android</span>
                  </div>
                </div>
                <Button
                  type="button"
                  buttonType="Primary"
                  size="Small"
                  className="pt-auth-bind__next !w-auto"
                  onClick={() => setStep(2)}
                >
                  下一步
                </Button>
              </div>
            ) : null}
          </StepsItem>

          <StepsItem
            index={2}
            status={stepStatus(2, step)}
            direction="Vertical"
            lastStep={false}
            title="扫描二维码"
            description={step === 2 ? "打开身份验证 App 并扫描二维码或输入密钥" : ""}
            className={step !== 2 ? "pt-auth-bind__step--compact" : undefined}
            onActivate={step > 2 ? () => setStep(2) : undefined}
          >
            {step === 2 ? (
              <div className="pt-auth-bind__step-body">
                <div className="pt-auth-bind__scan-block">
                  <div className="pt-auth-bind__qr-placeholder pt-auth-bind__qr-placeholder--scan" aria-hidden />
                  <div className="pt-auth-bind__secret">
                    <span className="pt-auth-bind__secret-text">{SECRET_KEY}</span>
                    <button type="button" className="pt-auth-bind__copy" aria-label="复制密钥">
                      <EpIconByName name="CopyDocument" size={16} />
                    </button>
                  </div>
                </div>
                <Button
                  type="button"
                  buttonType="Primary"
                  size="Small"
                  className="pt-auth-bind__next !w-auto"
                  onClick={() => setStep(3)}
                >
                  下一步
                </Button>
              </div>
            ) : null}
          </StepsItem>

          <StepsItem
            index={3}
            status={stepStatus(3, step)}
            direction="Vertical"
            lastStep
            title="安全验证"
            description={
              step === 3
                ? "添加成功后，您将得到一个有一定时效的6位数验证码，请在过期前填入下方"
                : ""
            }
          >
            {step === 3 ? (
              <div className="pt-auth-bind__step-body pt-auth-bind__step-body--verify">
                <Form layout="Vertical" className="pt-auth-bind__verify-form">
                  <FormItems className="pt-auth-bind__verify-fields">
                    <FormItem label="身份验证APP" required>
                      <Input size="Large" placeholder="请输入身份验证APP 生成的6位代码" />
                    </FormItem>
                    <FormItem label="邮箱验证码" required>
                      <div className="pt-auth-bind__mixed-input">
                        <div className="pt-auth-bind__mixed-input-main">
                          <Input size="Large" placeholder="请输入验证码" />
                        </div>
                        <button type="button" className="pt-auth-bind__send-code">
                          发送验证码
                        </button>
                      </div>
                    </FormItem>
                  </FormItems>
                </Form>
                <Button
                  type="button"
                  buttonType="Primary"
                  size="Small"
                  className="pt-auth-bind__next !w-auto"
                >
                  确定
                </Button>
              </div>
            ) : null}
          </StepsItem>
        </div>
      </div>
    </div>
  );
}
