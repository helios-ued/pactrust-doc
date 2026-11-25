import { EpIconByName } from "@/components/Icon/EpIconByName";
import { useNavigate } from "react-router-dom";
import "./module-screen-layout.css";

export function ModuleSubpageBar({
  title,
  backTo,
  nodeId,
}: {
  title: string;
  backTo: string;
  nodeId?: string;
}) {
  const navigate = useNavigate();
  return (
    <header
      className="pt-module-screen__subnav"
      data-node-id={nodeId}
    >
      <button
        type="button"
        className="pt-module-screen__back"
        aria-label="返回"
        onClick={() => navigate(backTo)}
      >
        <EpIconByName name="Back" size={14} />
      </button>
      <span className="pt-module-screen__subnav-title">{title}</span>
    </header>
  );
}
