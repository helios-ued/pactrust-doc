import { useNavigate } from "react-router-dom";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import "../module-screens/module-screen-layout.css";

/** Figma A3 Header · `8370:5792` · 各步返回统一至 A1 安全中心 */
export function AuthenticatorBindPageBar() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/examples/security-center");
  };

  return (
    <header className="pt-module-screen__subnav" data-node-id="8370:5792">
      <button
        type="button"
        className="pt-module-screen__back"
        aria-label="返回"
        onClick={handleBack}
      >
        <EpIconByName name="Back" size={14} />
      </button>
      <span className="pt-module-screen__subnav-title">绑定身份验证器</span>
    </header>
  );
}
