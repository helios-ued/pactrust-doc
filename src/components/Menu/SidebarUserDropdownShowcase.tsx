import { EdsIconById } from "@/components/Icon/EdsIconById";
import { cn } from "@/lib/cn";
import { useCallback, useId, useRef, useState } from "react";
import { SidebarUserRow } from "./SidebarUserRow";
import "./sidebar-user-dropdown-showcase.css";

export type SidebarUserDropdownShowcaseProps = {
  avatarSrc?: string;
  collapsed?: boolean;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

/**
 * Figma `dropdownMenu=true` · UserDropdown `8952:21170` + 语言二级 `8875:6399`
 * 主面板底对齐侧栏；语言二级仅在 hover/click「语言」时出现
 */
export function SidebarUserDropdownShowcase({
  avatarSrc,
  collapsed = false,
  className,
  onMouseEnter,
  onMouseLeave,
}: SidebarUserDropdownShowcaseProps) {
  const [langOpen, setLangOpen] = useState(false);
  const langBtnId = useId();
  const langPanelId = useId();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openLang = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setLangOpen(true);
  }, []);

  const scheduleCloseLang = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setLangOpen(false), 120);
  }, []);

  const toggleLang = useCallback(() => {
    setLangOpen((v) => !v);
  }, []);

  return (
    <div
      className={cn(
        "pt-sidebar-user-dropdown-layer",
        collapsed && "pt-sidebar-user-dropdown-layer--collapsed",
        className,
      )}
      data-name="Dropdown Menu Group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <section
        className={cn(
          "pt-sidebar-user-dropdown pt-sidebar-user-dropdown--primary",
          langOpen && "pt-sidebar-user-dropdown--primary-lang-open",
        )}
        data-node-id="8952:21170"
        data-name="UserDropdown"
        role="menu"
        aria-label="用户菜单"
        onMouseLeave={scheduleCloseLang}
      >
        <SidebarUserRow avatarSrc={avatarSrc} className="pt-sidebar-user-dropdown__user" />
        <div className="pt-sidebar-user-dropdown__divider" role="separator" />
        <div className="pt-sidebar-user-dropdown__list">
          <div className="pt-sidebar-user-dropdown__option" role="menuitem">
            个人资料
          </div>
          <div className="pt-sidebar-user-dropdown__option" role="menuitem">
            安全中心
          </div>
          <div
            className={cn(
              "pt-sidebar-user-dropdown__option-wrap",
              langOpen && "is-lang-open",
            )}
            onMouseEnter={openLang}
            onMouseLeave={scheduleCloseLang}
          >
            <button
              type="button"
              id={langBtnId}
              className={cn(
                "pt-sidebar-user-dropdown__option pt-sidebar-user-dropdown__option--trigger",
                langOpen && "pt-sidebar-user-dropdown__option--hover",
              )}
              role="menuitem"
              aria-expanded={langOpen}
              aria-controls={langPanelId}
              onClick={toggleLang}
            >
              <span className="pt-sidebar-user-dropdown__option-label">语言</span>
              <EdsIconById
                id="eds-arrow-arrow-forward-simple"
                size={12}
                className="pt-sidebar-user-dropdown__option-arrow"
              />
            </button>
          </div>
          <div className="pt-sidebar-user-dropdown__divider" role="separator" />
          <div className="pt-sidebar-user-dropdown__option" role="menuitem">
            退出登录
          </div>
        </div>
        {langOpen ? (
          <section
            id={langPanelId}
            className="pt-sidebar-user-dropdown pt-sidebar-user-dropdown--language pt-sidebar-user-dropdown--language-flyout"
            data-node-id="8875:6399"
            data-name="Dropdown Menu"
            role="menu"
            aria-labelledby={langBtnId}
            onMouseEnter={openLang}
            onMouseLeave={scheduleCloseLang}
          >
            <div className="pt-sidebar-user-dropdown__list pt-sidebar-user-dropdown__list--sub">
              <div
                className="pt-sidebar-user-dropdown__option pt-sidebar-user-dropdown__option--selected"
                role="menuitem"
              >
                <span className="pt-sidebar-user-dropdown__option-label">简体中文</span>
                <EdsIconById id="eds-action-check" size={12} className="pt-sidebar-user-dropdown__option-check" />
              </div>
              <div className="pt-sidebar-user-dropdown__option" role="menuitem">
                繁体中文
              </div>
              <div className="pt-sidebar-user-dropdown__option" role="menuitem">
                English
              </div>
            </div>
          </section>
        ) : null}
      </section>
    </div>
  );
}