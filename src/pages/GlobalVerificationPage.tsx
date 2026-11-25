import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalVerificationOverlay } from "@/templates/admin-auth/GlobalVerificationOverlay";
import "@/pages/verification-code-page.css";
import "./global-verification-page.css";

/** Figma 07-全局验证 `8375:24316` · 系统弹窗（关闭 ≠ 返回 06） */
export function GlobalVerificationPage() {
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(true);
  const [code, setCode] = useState("");

  useEffect(() => {
    if (code.length === 6) {
      navigate("/examples/security-center", {
        state: { loginFlow: "global-verification-complete" },
      });
    }
  }, [code, navigate]);

  function closeDialog() {
    setDialogOpen(false);
    setCode("");
  }

  return (
    <div className="pt-global-verification-viewport" data-node-id="8375:24316">
      <div className="pt-global-verification-underlay" aria-hidden={dialogOpen}>
        <p className="pt-global-verification-underlay__hint">
          业务页占位（关闭弹窗后仍停留当前上下文，不返回登录流）
        </p>
      </div>

      <GlobalVerificationOverlay
        open={dialogOpen}
        code={code}
        onCodeChange={setCode}
        onClose={closeDialog}
      />
    </div>
  );
}
