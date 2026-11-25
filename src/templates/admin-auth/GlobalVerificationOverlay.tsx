import { GlobalVerificationDialog } from "./GlobalVerificationDialog";
import "@/templates/login-flow/image-captcha-dialog.css";

export type GlobalVerificationOverlayProps = {
  open: boolean;
  code: string;
  onCodeChange: (value: string) => void;
  /** 关闭仅收起弹窗，不绑定登录/注册路由 */
  onClose: () => void;
};

/** 07 全局验证 · 系统级遮罩 + Dialog（可叠加在任意业务页上） */
export function GlobalVerificationOverlay({
  open,
  code,
  onCodeChange,
  onClose,
}: GlobalVerificationOverlayProps) {
  if (!open) return null;

  return (
    <>
      <div
        className="pt-login-flow-scrim"
        data-node-id="8375:24317"
        aria-hidden
        onClick={onClose}
      />
      <div className="pt-login-flow-dialog-layer" role="presentation">
        <GlobalVerificationDialog code={code} onCodeChange={onCodeChange} onClose={onClose} />
      </div>
    </>
  );
}
