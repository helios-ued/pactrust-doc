import { EdsIconById } from "@/components/Icon/EdsIconById";
import { cn } from "@/lib/cn";
import { MENU_EDS_ICONS } from "./menuFigmaIcons";
import { sidebarMenuIconId } from "./sidebarMenuItemIcons";
import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  createContext,
  type ReactElement,
  type ReactNode,
} from "react";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import { useSidebarMenuStyle, useSidebarUnfolded } from "./Sidebar";
import "./menu.css";

/** Figma menu · Type */
export type MenuType = "Sidebar" | "Top";

/** Figma menu-vertical/horizontal · Size */
export type MenuSize = "Large" | "Default" | "Small";

/** Figma menu · State */
export type MenuItemState = "Default" | "Hover" | "Selected" | "Disable";

export type MenuLevel = 1 | 2 | 3;

type MenuContextValue = {
  menuType: MenuType;
  menuSize: MenuSize;
};

const MenuContext = createContext<MenuContextValue>({
  menuType: "Sidebar",
  menuSize: "Default",
});

type MenuFlyoutBusValue = {
  ownerId: string | null;
  claim: (id: string) => void;
  release: (id: string) => void;
};

const MenuFlyoutBusContext = createContext<MenuFlyoutBusValue | null>(null);

export type MenuProps = {
  menuType?: MenuType;
  menuSize?: MenuSize;
  /** 置于 Sidebar 内：去掉右边框并由 Sidebar 控制宽度 */
  embedded?: boolean;
  className?: string;
  children?: ReactNode;
};

export function Menu({
  menuType = "Sidebar",
  menuSize = "Default",
  embedded = false,
  className,
  children,
}: MenuProps) {
  const isTop = menuType === "Top";
  const sidebarUnfolded = useSidebarUnfolded();
  const sidebarCollapsed = !isTop && embedded && !sidebarUnfolded;
  const [flyoutOwnerId, setFlyoutOwnerId] = useState<string | null>(null);

  const flyoutBus = useMemo<MenuFlyoutBusValue | null>(() => {
    if (!sidebarCollapsed) return null;
    return {
      ownerId: flyoutOwnerId,
      claim: (id: string) => setFlyoutOwnerId(id),
      release: (id: string) =>
        setFlyoutOwnerId((current) => (current === id ? null : current)),
    };
  }, [sidebarCollapsed, flyoutOwnerId]);

  return (
    <MenuContext.Provider value={{ menuType, menuSize }}>
      <MenuFlyoutBusContext.Provider value={flyoutBus}>
      <nav
        className={cn(
          "pt-menu",
          isTop ? "pt-menu--top" : "pt-menu--sidebar",
          embedded && "pt-menu--embedded",
          sidebarCollapsed && "pt-menu--sidebar-collapsed",
          menuSize === "Large" && "pt-menu--size-large",
          menuSize === "Default" && "pt-menu--size-default",
          menuSize === "Small" && "pt-menu--size-small",
          className,
        )}
        aria-label="Menu"
      >
        {children}
      </nav>
      </MenuFlyoutBusContext.Provider>
    </MenuContext.Provider>
  );
}

export type MenuItemProps = {
  level?: MenuLevel;
  /** Figma State（Showcase 可强制 Hover / Disable） */
  visualState?: MenuItemState;
  selected?: boolean;
  disabled?: boolean;
  /** Figma Unfold */
  unfold?: boolean;
  /** 子级展开箭头（2nd / 1st horizontal） */
  childIcon?: boolean;
  /** 一级左侧 Menu 18px */
  showIcon?: boolean;
  /** Figma 实例图标（Layout 页等） */
  iconId?: string;
  /** Figma Only-icon（Small 一级收起） */
  onlyIcon?: boolean;
  /** 收起轨悬浮子菜单内展示（仍用 level 2 样式） */
  flyout?: boolean;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
};

export function MenuItem({
  level = 1,
  visualState,
  selected: selectedProp,
  disabled: disabledProp,
  unfold = false,
  childIcon = true,
  showIcon = true,
  iconId,
  onlyIcon = false,
  flyout = false,
  className,
  children = "Navigator One",
  onClick,
  onMouseEnter,
  onMouseLeave,
}: MenuItemProps) {
  const { menuType, menuSize } = useContext(MenuContext);
  const sidebarUnfolded = useSidebarUnfolded();
  const sidebarMenuStyle = useSidebarMenuStyle();
  const horizontal = menuType === "Top";
  const sidebarCollapsed = !horizontal && !sidebarUnfolded;
  const selected = selectedProp || visualState === "Selected";
  const disabled = disabledProp || visualState === "Disable";
  const forceHover = visualState === "Hover";
  if (sidebarCollapsed && level > 1 && !flyout) return null;

  const collapsedOnlyIcon = sidebarCollapsed && level === 1;
  const showLabel = !collapsedOnlyIcon && !(onlyIcon && menuSize === "Small" && level === 1);
  const showChevron = !sidebarCollapsed && childIcon && !onlyIcon && level === 1;

  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(
        "pt-menu__item",
        horizontal ? "pt-menu__item--horizontal" : "pt-menu__item--vertical",
        `pt-menu__item--level-${level}`,
        selected && "pt-menu__item--selected",
        disabled && "pt-menu__item--disabled",
        forceHover && "pt-menu__item--hover",
        (onlyIcon && showLabel === false) || collapsedOnlyIcon ? "pt-menu__item--only-icon" : null,
        collapsedOnlyIcon && "pt-menu__item--rail",
        className,
      )}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className="pt-menu__item-left">
        {(showIcon || collapsedOnlyIcon) && level === 1 && !horizontal && (
          <EdsIconById
            id={iconId ?? MENU_EDS_ICONS.menuGrid}
            size={18}
            className={cn(
              "pt-menu__item-icon",
              disabled && "text-[color:var(--el-text-color-disabled)]",
              selected &&
                !disabled &&
                (sidebarMenuStyle === "04"
                  ? "text-[color:var(--el-text-color-primary)]"
                  : "text-[color:var(--el-color-primary)]"),
            )}
          />
        )}
        {showLabel ? <span className="pt-menu__item-label">{children}</span> : null}
        {horizontal && showChevron ? (
          <EdsIconById
            id={MENU_EDS_ICONS.chevronDown}
            size={12}
            className={cn(
              "pt-menu__item-chevron",
              selected && !disabled && "text-[color:var(--el-color-primary)]",
            )}
          />
        ) : null}
      </span>
      {!horizontal && showChevron ? (
        <EdsIconById
          id={unfold ? MENU_EDS_ICONS.chevronUp : MENU_EDS_ICONS.chevronDown}
          size={12}
          className={cn(
            "pt-menu__item-chevron",
            selected && !disabled && "text-[color:var(--el-color-primary)]",
            disabled && "text-[color:var(--el-text-color-disabled)]",
          )}
        />
      ) : null}
    </button>
  );
}

const SIDEBAR_RAIL_LABELS = [
  "Dashboard",
  "系统管理",
  "列表页",
  "异常页面",
  "表单页面",
  "设置页面",
  "功能页面",
  "组件示例",
  "常用模板",
  "外部页面",
] as const;

/** Figma menu-vertical/2nd*04 · Style 01 内二级无 gap；02 内二级 gap 2 */
export function MenuSubStack({ children }: { children: ReactNode }) {
  return <div className="pt-menu-substack">{children}</div>;
}

export type MenuSidebarSectionProps = {
  label: string;
  /** 收起轨悬浮窗顶部分组标题 */
  flyoutTitle?: string;
  /** 侧栏 Unfold on 时二级是否初始展开（默认 false，点击一级展开） */
  defaultSubExpanded?: boolean;
  selected?: boolean;
  iconId?: string;
  visualState?: MenuItemState;
  /** Style 04 等：展开时仅一级项，二级只在收起悬浮窗内展示 */
  expandAsLeaf?: boolean;
  childIcon?: boolean;
  children?: ReactNode;
};

/** 展开：1st + 2nd 栈；收起：1st 图标轨 + 右侧悬浮子菜单 */
export function MenuSidebarSection({
  label,
  flyoutTitle,
  defaultSubExpanded = false,
  selected = false,
  iconId,
  visualState,
  expandAsLeaf = false,
  childIcon = true,
  children,
}: MenuSidebarSectionProps) {
  const sidebarUnfolded = useSidebarUnfolded();
  const sidebarMenuStyle = useSidebarMenuStyle();
  const collapsedFlyoutTooltip = sidebarMenuStyle === "04";
  const flyoutBus = useContext(MenuFlyoutBusContext);
  const sectionId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [flyoutOpen, setFlyoutOpen] = useState(false);
  const [subExpanded, setSubExpanded] = useState(defaultSubExpanded);
  const [panelPos, setPanelPos] = useState<CSSProperties | null>(null);
  const hasSubMenu = Boolean(children);

  const toggleSubMenu = () => {
    if (!hasSubMenu) return;
    setSubExpanded((open) => !open);
  };

  const updatePanelPosition = useCallback(() => {
    const trigger = rootRef.current?.querySelector<HTMLElement>(".pt-menu__item");
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    if (collapsedFlyoutTooltip) {
      const sidebarRect = rootRef.current
        ?.closest<HTMLElement>(".pt-sidebar")
        ?.getBoundingClientRect();
      const anchorLeft = sidebarRect?.right ?? rect.right;
      setPanelPos({
        position: "fixed",
        top: rect.top + rect.height / 2,
        left: anchorLeft,
        transform: "translateY(-50%)",
        zIndex: 1200,
      });
    } else {
      setPanelPos({
        position: "fixed",
        top: rect.top,
        left: rect.right + 4,
        zIndex: 1200,
      });
    }
  }, [collapsedFlyoutTooltip]);

  const cancelScheduledClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openFlyout = () => {
    cancelScheduledClose();
    flyoutBus?.claim(sectionId);
    updatePanelPosition();
    setFlyoutOpen(true);
  };

  const scheduleFlyoutClose = () => {
    cancelScheduledClose();
    closeTimerRef.current = setTimeout(() => {
      setFlyoutOpen(false);
      flyoutBus?.release(sectionId);
    }, 150);
  };

  useLayoutEffect(() => {
    if (!flyoutOpen || sidebarUnfolded) {
      setPanelPos(null);
      return;
    }
    updatePanelPosition();
    window.addEventListener("resize", updatePanelPosition);
    window.addEventListener("scroll", updatePanelPosition, true);
    return () => {
      window.removeEventListener("resize", updatePanelPosition);
      window.removeEventListener("scroll", updatePanelPosition, true);
    };
  }, [flyoutOpen, sidebarUnfolded, updatePanelPosition]);

  useEffect(() => {
    if (sidebarUnfolded || !flyoutBus) return;
    if (flyoutOpen && flyoutBus.ownerId !== sectionId) {
      setFlyoutOpen(false);
    }
  }, [flyoutBus, flyoutBus?.ownerId, flyoutOpen, sectionId, sidebarUnfolded]);

  useEffect(() => {
    if (!flyoutOpen || sidebarUnfolded) return;
    const onDoc = (e: MouseEvent) => {
      const target = e.target as Node;
      if (rootRef.current?.contains(target) || panelRef.current?.contains(target)) return;
      cancelScheduledClose();
      setFlyoutOpen(false);
      flyoutBus?.release(sectionId);
    };
    document.addEventListener("mousedown", onDoc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      cancelScheduledClose();
    };
  }, [flyoutOpen, sidebarUnfolded]);

  const flyoutItems =
    children &&
    Children.map(children, (child) => {
      if (!isValidElement(child)) return child;
      return cloneElement(child as ReactElement<MenuItemProps>, { flyout: true });
    });

  const flyoutHeading = flyoutTitle ?? label;

  if (sidebarUnfolded) {
    if (expandAsLeaf) {
      return (
        <MenuItem
          level={1}
          showIcon
          childIcon={childIcon}
          selected={selected}
          visualState={visualState}
          iconId={iconId}
        >
          {label}
        </MenuItem>
      );
    }
    return (
      <>
        <MenuItem
          level={1}
          showIcon
          childIcon={childIcon && hasSubMenu}
          unfold={subExpanded}
          selected={selected}
          visualState={visualState}
          iconId={iconId}
          onClick={toggleSubMenu}
        >
          {label}
        </MenuItem>
        {hasSubMenu && subExpanded ? <MenuSubStack>{children}</MenuSubStack> : null}
      </>
    );
  }

  return (
    <div
      ref={rootRef}
      className="pt-menu-flyout"
      onMouseLeave={scheduleFlyoutClose}
    >
      <MenuItem
        level={1}
        showIcon
        childIcon={false}
        selected={selected || (flyoutOpen && flyoutBus?.ownerId === sectionId)}
        visualState={visualState}
        iconId={iconId}
        onClick={() => openFlyout()}
        onMouseEnter={openFlyout}
      >
        {label}
      </MenuItem>
      {flyoutOpen && flyoutBus?.ownerId === sectionId ? (
        <div
          ref={panelRef}
          className={cn(
            "pt-menu-flyout__panel pt-menu-flyout__panel--fixed",
            collapsedFlyoutTooltip && "pt-menu-flyout__panel--tooltip",
          )}
          style={
            panelPos ?? {
              position: "fixed",
              top: 0,
              left: 0,
              visibility: "hidden",
            }
          }
          role={collapsedFlyoutTooltip ? "tooltip" : "menu"}
          aria-label={label}
          onMouseEnter={openFlyout}
          onMouseLeave={scheduleFlyoutClose}
        >
          {collapsedFlyoutTooltip ? (
            <Tooltip layout="Right" content={label} className="pt-menu-flyout__tooltip" />
          ) : (
            <>
              {flyoutHeading ? (
                <p className="pt-menu-flyout__title">{flyoutHeading}</p>
              ) : null}
              {flyoutItems}
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}

/** Figma Sidebar Style 04 · 分组标题（非菜单级）+ 组内仅 menu-vertical/1st */
export function MenuGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="pt-menu-group">
      <p className="pt-menu-group__title">{title}</p>
      {children}
    </div>
  );
}

type MenuSidebarStyle04Group = {
  title: string;
  items: { label: string; visualState?: MenuItemState; selected?: boolean }[];
};

const MENU_SIDEBAR_STYLE_04_GROUPS: MenuSidebarStyle04Group[] = [
  {
    title: "平台数据",
    items: [
      { label: "Dashboard" },
      { label: "系统管理", selected: true },
      { label: "列表页" },
    ],
  },
  {
    title: "数据管理",
    items: [
      { label: "表单页面" },
      { label: "设置页面" },
      { label: "功能页面" },
      { label: "组件示例" },
      { label: "功能页面" },
      { label: "组件示例" },
    ],
  },
  {
    title: "系统管理",
    items: [
      { label: "常用模版" },
      { label: "外部页面" },
      { label: "外部页面" },
      { label: "外部页面" },
    ],
  },
];

/** Style 04 展开：分组一级；收起：轨上图标 + 分组标题悬浮窗 */
export function MenuGroupLeafItem({
  groupTitle,
  label,
  selected = false,
  visualState,
  iconId,
}: {
  groupTitle: string;
  label: string;
  selected?: boolean;
  visualState?: MenuItemState;
  iconId?: string;
}) {
  return (
    <MenuSidebarSection
      label={label}
      flyoutTitle={groupTitle}
      expandAsLeaf
      childIcon={false}
      selected={selected}
      visualState={visualState}
      iconId={iconId}
    >
      <MenuItem level={2} childIcon={false} selected={selected} visualState={visualState}>
        {label}
      </MenuItem>
    </MenuSidebarSection>
  );
}

/** Figma Sidebar Style 04 · `8739:1936` · 仅一级栈，无二级/三级 */
export function MenuSidebarStyle04Sample({
  menuSize = "Default",
  embedded = false,
}: {
  menuSize?: MenuSize;
  embedded?: boolean;
}) {
  return (
    <Menu menuType="Sidebar" menuSize={menuSize} embedded={embedded}>
      {MENU_SIDEBAR_STYLE_04_GROUPS.map((group) => (
        <MenuGroup key={group.title} title={group.title}>
          {group.items.map((item, index) => (
            <MenuGroupLeafItem
              key={`${group.title}-${index}`}
              groupTitle={group.title}
              label={item.label}
              selected={item.selected}
              visualState={item.visualState}
              iconId={sidebarMenuIconId(item.label)}
            />
          ))}
        </MenuGroup>
      ))}
    </Menu>
  );
}

/** @deprecated 使用 `MenuSidebarStyle04Sample`（Figma Style 04） */
export const MenuSidebarStyle03Sample = MenuSidebarStyle04Sample;

/** Figma Sidebar Style 01/02/03 · 多级示例（3008:57062） */
export function MenuSidebarSample({ menuSize = "Default", embedded = false }: { menuSize?: MenuSize; embedded?: boolean }) {
  return (
    <Menu menuType="Sidebar" menuSize={menuSize} embedded={embedded}>
      <MenuSidebarSection
        label="Dashboard"
        flyoutTitle="平台数据"
        selected
        iconId={sidebarMenuIconId("Dashboard")}
      >
        <MenuItem level={2} selected>
          主控台
        </MenuItem>
        <MenuItem level={2}>监控页</MenuItem>
        <MenuItem level={2}>工作台</MenuItem>
      </MenuSidebarSection>
      {SIDEBAR_RAIL_LABELS.slice(1).map((label) => (
        <MenuSidebarSection
          key={label}
          label={label}
          flyoutTitle={label}
          iconId={sidebarMenuIconId(label)}
        >
          <MenuItem level={2}>{label}</MenuItem>
        </MenuSidebarSection>
      ))}
    </Menu>
  );
}

/** Figma Top 示例（3008:57064） */
export function MenuTopSample({ menuSize = "Large" }: { menuSize?: MenuSize }) {
  return (
    <Menu menuType="Top" menuSize={menuSize}>
      <MenuItem>Navigator One</MenuItem>
      <MenuItem selected>Navigator One</MenuItem>
      <MenuItem>Navigator One</MenuItem>
      <MenuItem>Navigator One</MenuItem>
    </Menu>
  );
}
