import { Breadcrumb } from "@/components/Breadcrumb/Breadcrumb";
import { PacsTrustLogoIcon } from "@/components/brand/PacsTrustLogoIcon";
import { EdsIconById } from "@/components/Icon/EdsIconById";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import { MenuTopSample } from "./Menu";
import { MENU_EDS_ICONS } from "./menuFigmaIcons";
import "./global-header.css";

/** Figma Global-header · Type */
export type GlobalHeaderType = "Default" | "Large" | "Small";

export type GlobalHeaderProps = {
  headerType?: GlobalHeaderType;
  logo?: boolean;
  foldButton?: boolean;
  crumbs?: boolean;
  flushedButton?: boolean;
  /** Figma menu（顶栏内水平菜单） */
  headerMenu?: boolean;
  logoTitle?: string;
  pageTitle?: string;
  /** 侧栏是否展开（用于折叠按钮状态） */
  sidebarUnfolded?: boolean;
  onSidebarToggle?: () => void;
  /** Figma Layout 内 Global-header：Action/layout 仅展示、无交互 */
  layoutFrame?: boolean;
  /** Layout-03：无底部分割线 */
  headerDivider?: boolean;
  avatarSrc?: string;
  className?: string;
};

export function GlobalHeader({
  headerType = "Default",
  logo = true,
  foldButton = true,
  crumbs = false,
  flushedButton = false,
  headerMenu = false,
  logoTitle = "UI Design",
  pageTitle = "安全中心",
  sidebarUnfolded = true,
  onSidebarToggle,
  layoutFrame = false,
  headerDivider = true,
  avatarSrc,
  className,
}: GlobalHeaderProps) {
  return (
    <header
      className={cn(
        "pt-global-header",
        headerType === "Large" && "pt-global-header--large",
        headerType === "Small" && "pt-global-header--small",
        headerType === "Default" && "pt-global-header--default",
        layoutFrame && "pt-global-header--layout-frame",
        layoutFrame && !headerDivider && "pt-global-header--no-divider",
        className,
      )}
    >
      <div className="pt-global-header__left">
        {logo ? (
          <div className="pt-global-header__logo">
            <PacsTrustLogoIcon />
            {logoTitle ? <span className="pt-global-header__logo-text">{logoTitle}</span> : null}
          </div>
        ) : null}
        {foldButton && layoutFrame ? (
          <span className="pt-global-header__fold-static" aria-hidden>
            <EdsIconById id={MENU_EDS_ICONS.foldLayout} size={20} />
          </span>
        ) : null}
        {foldButton && !layoutFrame ? (
          <button
            type="button"
            className="pt-global-header__fold"
            aria-label={sidebarUnfolded ? "收起侧栏" : "展开侧栏"}
            aria-expanded={sidebarUnfolded}
            onClick={onSidebarToggle}
          >
            <EdsIconById id={MENU_EDS_ICONS.foldLayout} size={20} />
          </button>
        ) : null}
        {!headerMenu && pageTitle ? (
          <span className="pt-global-header__title">{pageTitle}</span>
        ) : null}
        {flushedButton ? (
          <button type="button" className="pt-global-header__refresh" aria-label="刷新">
            <EpIconByName name="RefreshRight" size={16} />
          </button>
        ) : null}
        {crumbs ? (
          <div className="pt-global-header__crumbs">
            <Breadcrumb number={2} />
          </div>
        ) : null}
        {headerMenu ? (
          <div className="pt-global-header__menu">
            <MenuTopSample menuSize={headerType === "Large" ? "Large" : "Default"} />
          </div>
        ) : null}
      </div>
      <div className="pt-global-header__toolbar">
        <span className="pt-global-header__tool" aria-hidden>
          <EdsIconById id={MENU_EDS_ICONS.notifications} size={20} />
        </span>
        <span className="pt-global-header__tool" aria-hidden>
          <EdsIconById id={MENU_EDS_ICONS.lock} size={20} />
        </span>
        <span className="pt-global-header__tool" aria-hidden>
          <EdsIconById id={MENU_EDS_ICONS.headset} size={20} />
        </span>
        <div className="pt-global-header__user">
          {avatarSrc ? (
            <img src={avatarSrc} alt="" className="pt-global-header__avatar" />
          ) : (
            <span className="pt-global-header__avatar" aria-hidden />
          )}
          <span>Designer</span>
        </div>
        <span className="pt-global-header__tool" aria-hidden>
          <EdsIconById id={MENU_EDS_ICONS.globe} size={20} />
        </span>
      </div>
    </header>
  );
}
