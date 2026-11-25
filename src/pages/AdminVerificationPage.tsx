import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminAuthChrome } from "@/templates/admin-auth/AdminAuthChrome";
import { AdminVerificationOtpCard } from "@/templates/admin-auth/AdminVerificationOtpCard";
import "@/templates/admin-auth/admin-verification.css";
import "@/pages/verification-code-page.css";
import "@/pages/admin-login-page.css";

/** Figma 06-后台验证 `8375:24203` */
export function AdminVerificationPage() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  useEffect(() => {
    if (code.length === 6) {
      navigate("/examples/global-verification", { replace: true });
    }
  }, [code, navigate]);

  return (
    <AdminAuthChrome viewportNodeId="8375:24203">
      <AdminVerificationOtpCard code={code} onCodeChange={setCode} />
    </AdminAuthChrome>
  );
}
