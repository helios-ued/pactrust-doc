import { Breadcrumb } from "@/components/Breadcrumb/Breadcrumb";
import { PacsTrustLogoIcon } from "@/components/brand/PacsTrustLogoIcon";
import { EdsIconById } from "@/components/Icon/EdsIconById";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import { MenuTopSample } from "./Menu";
import { MENU_EDS_ICONS } from "./menuFigmaIcons";
import "./global-header.css";

/** Figma Global-header · `type` */
export type GlobalHeaderType = "Default" | "Large" | "Small";

export type GlobalHeaderProps = {
  headerType?: GlobalHeaderType;
  logo?: boolean;
  /** Figma `collapseButton` */
  collapseButton?: boolean;
  /** Figma `breadcrumb` */
  breadcrumb?: boolean;
  /** Figma `flushedButton` */
  flushedButton?: boolean;
  /** Figma `menu` · 顶栏内水平菜单 */
  menu?: boolean;
  /** Figma `pageTitle` · 展示 PageTitle 区（非文案） */
  pageTitle?: boolean;
  logoTitle?: string;
  /** PageTitle 文案 · 默认「安全中心」 */
  pageTitleText?: string;
  sidebarUnfolded?: boolean;
  onSidebarToggle?: () => void;
  layoutFrame?: boolean;
  headerDivider?: boolean;
  /** Figma `actionIcons` · 通知 / 锁 / 客服 */
  actionIcons?: boolean;
  user?: boolean;
  userActive?: boolean;
  onUserMouseEnter?: () => void;
  onUserMouseLeave?: () => void;
  avatarSrc?: string;
  userName?: string;
  className?: string;
};

export function GlobalHeader({
  headerType = "Default",
  logo = true,
  collapseButton = true,
  breadcrumb = false,
  flushedButton = false,
  menu = false,
  pageTitle = true,
  logoTitle = "Element Design",
  pageTitleText = "安全中心",
  sidebarUnfolded = true,
  onSidebarToggle,
  layoutFrame = false,
  headerDivider = true,
  actionIcons = true,
  user = true,
  userActive,
  onUserMouseEnter,
  onUserMouseLeave,
  avatarSrc,
  userName = "Lily-Rose",
  className,
}: GlobalHeaderProps) {
  const leftContent = (
    <>
      {collapseButton && layoutFrame ? (
        <span className="pt-global-header__fold-static" aria-hidden>
          <EdsIconById id={MENU_EDS_ICONS.foldLayout} size={20} />
        </span>
      ) : null}
      {collapseButton && !layoutFrame ? (
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
      {pageTitle && !menu && pageTitleText ? (
        <span className="pt-global-header__title" data-name="PageTitle">
          {pageTitleText}
        </span>
      ) : null}
      {flushedButton ? (
        <button type="button" className="pt-global-header__refresh" aria-label="刷新">
          <EpIconByName name="RefreshRight" size={16} />
        </button>
      ) : null}
      {breadcrumb ? (
        <div className="pt-global-header__breadcrumb" data-name="Breadcrumb">
          <Breadcrumb number={2} />
        </div>
      ) : null}
      {menu ? (
        <div className="pt-global-header__menu" data-name="menu">
          <MenuTopSample menuSize={headerType === "Large" ? "Large" : "Default"} />
        </div>
      ) : null}
    </>
  );

  return (
    <header
      data-node-id="3319:51837"
      className={cn(
        "pt-global-header",
        headerType === "Large" && "pt-global-header--large",
        headerType === "Small" && "pt-global-header--small",
        headerType === "Default" && "pt-global-header--default",
        layoutFrame && "pt-global-header--layout-frame",
        layoutFrame && !headerDivider && "pt-global-header--no-divider",
        logo && "pt-global-header--with-logo-rail",
        className,
      )}
    >
      {logo ? (
        <div className="pt-global-header__logo-rail" data-name="logo">
          <PacsTrustLogoIcon />
          {logoTitle ? <span className="pt-global-header__logo-text">{logoTitle}</span> : null}
        </div>
      ) : null}
      <div className="pt-global-header__actions" data-name="HeaderInner">
        <div className="pt-global-header__left" data-name="LeftContent">
          {leftContent}
        </div>
        <div className="pt-global-header__toolbar" data-name="HeaderRight">
          {actionIcons ? (
            <div className="pt-global-header__action-icons" data-name="ActionIcons" data-node-id="9107:5574">
              <span className="pt-global-header__tool" aria-hidden>
                <EdsIconById id={MENU_EDS_ICONS.notifications} size={20} />
              </span>
              <span className="pt-global-header__tool" aria-hidden>
                <EdsIconById id={MENU_EDS_ICONS.lock} size={20} />
              </span>
              <span className="pt-global-header__tool" aria-hidden>
                <EdsIconById id={MENU_EDS_ICONS.headset} size={20} />
              </span>
            </div>
          ) : null}
          {user ? (
            <div
              className="pt-global-header__user"
              data-name="User"
              role={onUserMouseEnter ? "button" : undefined}
              tabIndex={onUserMouseEnter ? 0 : undefined}
              data-active={userActive ? "true" : "false"}
              aria-label={onUserMouseEnter ? "用户菜单" : undefined}
              onMouseEnter={onUserMouseEnter}
              onMouseLeave={onUserMouseLeave}
            >
              {avatarSrc ? (
                <img src={avatarSrc} alt="" className="pt-global-header__avatar" />
              ) : (
                <span className="pt-global-header__avatar" aria-hidden />
              )}
              <span className="pt-global-header__user-name">{userName}</span>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}