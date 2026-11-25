import { Link } from "@/components/Link/Link";
import { EdsIconById } from "@/components/Icon/EdsIconById";
import { MENU_EDS_ICONS } from "@/components/Menu/menuFigmaIcons";
import "@/components/Menu/global-header.css";
import "./enterprise-api-shell.css";

export function EnterpriseApiHeader() {
  return (
    <header className="pt-global-header pt-global-header--default pt-global-header--layout-frame pt-enterprise-api-header">
      <div className="pt-global-header__left">
        <div className="pt-enterprise-api-header__heading">
          <h1 className="pt-global-header__title pt-enterprise-api-header__title">API管理</h1>
          <Link
            href="#"
            className="pt-enterprise-api-header__guide"
            linkType="Primary"
            underline
          >
            查看接入指南
          </Link>
        </div>
      </div>
      <div className="pt-global-header__toolbar">
        <button type="button" className="pt-enterprise-api-header__locale" aria-haspopup="listbox">
          <EdsIconById id={MENU_EDS_ICONS.globe} size={16} />
          <span>简体中文</span>
          <EdsIconById id={MENU_EDS_ICONS.chevronDown} size={12} />
        </button>
        <div className="pt-global-header__user pt-enterprise-api-header__user">
          <span className="pt-global-header__avatar pt-enterprise-api-header__avatar" aria-hidden />
        </div>
      </div>
    </header>
  );
}
