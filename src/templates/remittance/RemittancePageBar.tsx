import { useNavigate } from "react-router-dom";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import "../module-screens/module-screen-layout.css";

export type RemittancePageBarProps = {
  title: string;
};

/** 对齐 A3 · `pt-module-screen__subnav`（Page Layout 顶栏） */
export function RemittancePageBar({ title }: RemittancePageBarProps) {
  const navigate = useNavigate();

  return (
    <header className="pt-module-screen__subnav">
      <button
        type="button"
        className="pt-module-screen__back"
        aria-label="返回"
        onClick={() => navigate(-1)}
      >
        <EpIconByName name="Back" size={14} />
      </button>
      <span className="pt-module-screen__subnav-title">{title}</span>
    </header>
  );
}
