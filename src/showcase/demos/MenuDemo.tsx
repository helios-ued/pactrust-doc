import { useCallback, useRef, useState } from "react";
import {
  Menu,
  MenuItem,
  MenuSidebarSample,
  MenuSidebarStyle04Sample,
  MenuTopSample,
  type MenuItemState,
  type MenuLevel,
  type MenuSize,
} from "@/components/Menu/Menu";
import { GlobalHeader, type GlobalHeaderType } from "@/components/Menu/GlobalHeader";
import { Sidebar } from "@/components/Menu/Sidebar";
import { SidebarShowcaseSetting, SidebarShowcaseUser } from "@/components/Menu/SidebarShowcaseSlots";
import { SidebarUserDropdownShowcase } from "@/components/Menu/SidebarUserDropdownShowcase";
import { SidebarStyle04Setting, SidebarStyle04User } from "@/components/Menu/SidebarStyle04Slots";
import {
  FIGMA_SIDEBAR_STATE_VALUES,
  FIGMA_SIDEBAR_STYLE_VALUES,
  figmaSidebarStateToUnfolded,
  type FigmaSidebarMenuStyle,
  type FigmaSidebarShowcaseVariant,
  type FigmaSidebarState,
} from "@/components/Menu/sidebarMenuStyles";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElMenuCode } from "../lib/elementPlusCode/builders";
import {
  CustomizeBooleanField,
  CustomizeField,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import { EdsPreviewStack } from "../ui/EdsShowcaseUi";
import type { ShowcaseDemoProps } from "./types";

/** Figma menu 预览 · Type（含独立 Global-header） */
export type MenuDemoType = "Sidebar" | "Top" | "Global-header";

const demoTypes: MenuDemoType[] = ["Sidebar", "Top", "Global-header"];
const menuSizes: MenuSize[] = ["Large", "Default", "Small"];
const headerTypes: GlobalHeaderType[] = ["Default", "Large", "Small"];
const levels: MenuLevel[] = [1, 2, 3];
const itemStates: MenuItemState[] = ["Default", "Hover", "Selected", "Disable"];

export function MenuDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [demoType, setDemoType] = useState<MenuDemoType>("Sidebar");
  const [menuSize, setMenuSize] = useState<MenuSize>("Default");
  const [previewItem, setPreviewItem] = useState(false);
  const [level, setLevel] = useState<MenuLevel>(1);
  const [itemState, setItemState] = useState<MenuItemState>("Default");
  const [unfold, setUnfold] = useState(false);
  const [childIcon, setChildIcon] = useState(true);
  const [showIcon, setShowIcon] = useState(true);
  const [onlyIcon, setOnlyIcon] = useState(false);
  const [sidebarStyle, setSidebarStyle] = useState<FigmaSidebarMenuStyle>("01");
  const [sidebarState, setSidebarState] = useState<FigmaSidebarState>("Expanded");
  const [sidebarShowLogo, setSidebarShowLogo] = useState(true);
  const [sidebarMenuGroup, setSidebarMenuGroup] = useState(true);
  const [sidebarSetting, setSidebarSetting] = useState(true);
  const [sidebarUser, setSidebarUser] = useState(true);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const userDropdownCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sidebarUnfolded = figmaSidebarStateToUnfolded(sidebarState);
  const setSidebarUnfolded = (next: boolean) =>
    setSidebarState(next ? "Expanded" : "Collapsed");
  const [headerType, setHeaderType] = useState<GlobalHeaderType>("Default");
  const [headerLogo, setHeaderLogo] = useState(true);
  const [headerCollapseButton, setHeaderCollapseButton] = useState(true);
  const [headerPageTitle, setHeaderPageTitle] = useState(true);
  const [headerBreadcrumb, setHeaderBreadcrumb] = useState(false);
  const [headerMenu, setHeaderMenu] = useState(false);
  const [headerFlushedButton, setHeaderFlushedButton] = useState(false);
  const [headerActionIcons, setHeaderActionIcons] = useState(true);
  const [headerUser, setHeaderUser] = useState(true);
  const [headerUserDropdownOpen, setHeaderUserDropdownOpen] = useState(false);
  const headerUserDropdownCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isMenu = demoType === "Sidebar" || demoType === "Top";
  const isSidebar = demoType === "Sidebar";
  const isGlobalHeader = demoType === "Global-header";

  useReportElementPlusCode(
    reportElementPlusCode,
    () =>
      buildElMenuCode({
        demoType,
        menuSize,
        previewItem,
        level,
        itemState,
        unfold,
        childIcon,
        showIcon,
        onlyIcon,
        sidebarUnfolded,
        sidebarStyle,
        sidebarState,
        sidebarShowLogo,
        sidebarMenuGroup,
        sidebarSetting,
        sidebarUser,
        headerType,
        headerLogo,
        headerCollapseButton,
        headerPageTitle,
        headerBreadcrumb,
        headerMenu,
        headerFlushedButton,
        headerActionIcons,
        headerUser,
      }),
    [
      demoType,
      menuSize,
      previewItem,
      level,
      itemState,
      unfold,
      childIcon,
      showIcon,
      onlyIcon,
      sidebarUnfolded,
      sidebarStyle,
      sidebarState,
      sidebarShowLogo,
      sidebarMenuGroup,
      sidebarSetting,
      sidebarUser,
      headerType,
      headerLogo,
      headerCollapseButton,
      headerPageTitle,
      headerBreadcrumb,
      headerMenu,
      headerFlushedButton,
      headerActionIcons,
      headerUser,
    ],
  );

  const previewLevel = demoType === "Top" ? 1 : level;
  const canOnlyIcon = isSidebar && menuSize === "Small" && previewLevel === 1;

  /** Figma：`user=true` ⇒ `dropdownMenu=true`（定制区不单独展示） */
  const userDropdownEnabled = sidebarUser;

  const openUserDropdown = useCallback(() => {
    if (!userDropdownEnabled) return;
    if (userDropdownCloseTimer.current) clearTimeout(userDropdownCloseTimer.current);
    setUserDropdownOpen(true);
  }, [userDropdownEnabled]);

  const scheduleCloseUserDropdown = useCallback(() => {
    if (userDropdownCloseTimer.current) clearTimeout(userDropdownCloseTimer.current);
    userDropdownCloseTimer.current = setTimeout(() => setUserDropdownOpen(false), 160);
  }, []);

  const showUserDropdown = userDropdownEnabled && userDropdownOpen;

  const headerUserDropdownEnabled = headerUser;

  const openHeaderUserDropdown = useCallback(() => {
    if (!headerUserDropdownEnabled) return;
    if (headerUserDropdownCloseTimer.current) clearTimeout(headerUserDropdownCloseTimer.current);
    setHeaderUserDropdownOpen(true);
  }, [headerUserDropdownEnabled]);

  const scheduleCloseHeaderUserDropdown = useCallback(() => {
    if (headerUserDropdownCloseTimer.current) clearTimeout(headerUserDropdownCloseTimer.current);
    headerUserDropdownCloseTimer.current = setTimeout(() => setHeaderUserDropdownOpen(false), 160);
  }, []);

  const showHeaderUserDropdown = headerUserDropdownEnabled && headerUserDropdownOpen;

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Type">
            <CustomizeSelect value={demoType} onChange={(e) => setDemoType(e.target.value as MenuDemoType)}>
              {demoTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          {isGlobalHeader ? (
            <CustomizeField label="Size">
              <CustomizeSelect
                value={headerType}
                onChange={(e) => setHeaderType(e.target.value as GlobalHeaderType)}
              >
                {headerTypes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </CustomizeSelect>
            </CustomizeField>
          ) : !(isSidebar && !previewItem) ? (
            <CustomizeField label="Size">
              <CustomizeSelect value={menuSize} onChange={(e) => setMenuSize(e.target.value as MenuSize)}>
                {menuSizes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </CustomizeSelect>
            </CustomizeField>
          ) : null}
          {isMenu ? (
            <CustomizeBooleanField
              label="Preview item"
              checked={previewItem}
              onChange={(e) => setPreviewItem(e.target.checked)}
            />
          ) : null}
          {!previewItem && isSidebar ? (
            <>
              <CustomizeField label="Style">
                <CustomizeSelect
                  value={sidebarStyle}
                  onChange={(e) => {
                    const next = e.target.value as FigmaSidebarShowcaseVariant;
                    setSidebarStyle(next);
                    if (next === "04" && level > 1) setLevel(1);
                  }}
                >
                  {FIGMA_SIDEBAR_STYLE_VALUES.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
              <CustomizeField label="State">
                <CustomizeSelect
                  value={sidebarState}
                  onChange={(e) => setSidebarState(e.target.value as FigmaSidebarState)}
                >
                  {FIGMA_SIDEBAR_STATE_VALUES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
              <CustomizeBooleanField
                label="showLogo"
                checked={sidebarShowLogo}
                onChange={(e) => setSidebarShowLogo(e.target.checked)}
              />
              <CustomizeBooleanField
                label="menuGroup"
                checked={sidebarMenuGroup}
                onChange={(e) => setSidebarMenuGroup(e.target.checked)}
              />
              <CustomizeBooleanField
                label="setting"
                checked={sidebarSetting}
                onChange={(e) => setSidebarSetting(e.target.checked)}
              />
              <CustomizeBooleanField
                label="user"
                checked={sidebarUser}
                onChange={(e) => {
                  const next = e.target.checked;
                  setSidebarUser(next);
                  if (!next) setUserDropdownOpen(false);
                }}
              />
            </>
          ) : null}
          {!previewItem && isGlobalHeader ? (
            <>
              <CustomizeBooleanField label="logo" checked={headerLogo} onChange={(e) => setHeaderLogo(e.target.checked)} />
              <CustomizeBooleanField
                label="collapseButton"
                checked={headerCollapseButton}
                onChange={(e) => setHeaderCollapseButton(e.target.checked)}
              />
              <CustomizeBooleanField
                label="pageTitle"
                checked={headerPageTitle}
                onChange={(e) => setHeaderPageTitle(e.target.checked)}
              />
              <CustomizeBooleanField
                label="breadcrumb"
                checked={headerBreadcrumb}
                onChange={(e) => setHeaderBreadcrumb(e.target.checked)}
              />
              <CustomizeBooleanField
                label="menu"
                checked={headerMenu}
                onChange={(e) => setHeaderMenu(e.target.checked)}
              />
              <CustomizeBooleanField
                label="flushedButton"
                checked={headerFlushedButton}
                onChange={(e) => setHeaderFlushedButton(e.target.checked)}
              />
              <CustomizeBooleanField
                label="actionIcons"
                checked={headerActionIcons}
                onChange={(e) => setHeaderActionIcons(e.target.checked)}
              />
              <CustomizeBooleanField
                label="user"
                checked={headerUser}
                onChange={(e) => {
                  const next = e.target.checked;
                  setHeaderUser(next);
                  if (!next) setHeaderUserDropdownOpen(false);
                }}
              />
            </>
          ) : null}
          {previewItem && isMenu ? (
            <>
              {isSidebar ? (
                <CustomizeField label="Level">
                  <CustomizeSelect
                    value={String(level)}
                    onChange={(e) => setLevel(Number(e.target.value) as MenuLevel)}
                  >
                    {(sidebarStyle === "04" ? ([1] as const) : levels).map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                  </CustomizeSelect>
                </CustomizeField>
              ) : null}
              <CustomizeField label="State">
                <CustomizeSelect
                  value={itemState}
                  onChange={(e) => setItemState(e.target.value as MenuItemState)}
                >
                  {itemStates.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
              {previewLevel <= 2 ? (
                <>
                  <CustomizeBooleanField label="Unfold" checked={unfold} onChange={(e) => setUnfold(e.target.checked)} />
                  <CustomizeBooleanField
                    label="Child icon"
                    checked={childIcon}
                    onChange={(e) => setChildIcon(e.target.checked)}
                  />
                </>
              ) : null}
              {isSidebar && previewLevel === 1 ? (
                <CustomizeBooleanField
                  label="Leading icon"
                  checked={showIcon}
                  onChange={(e) => setShowIcon(e.target.checked)}
                />
              ) : null}
              {canOnlyIcon ? (
                <CustomizeBooleanField
                  label="Only icon"
                  checked={onlyIcon}
                  onChange={(e) => setOnlyIcon(e.target.checked)}
                />
              ) : null}
            </>
          ) : null}
        </CustomizeToolbar>
      }
      preview={
        <DemoStage
          className={isSidebar || isGlobalHeader ? "overflow-visible" : undefined}
          minHeight={
            previewItem
              ? 56
              : isGlobalHeader
                ? 320
                : isSidebar && sidebarStyle === "04"
                  ? 1080
                  : isSidebar
                    ? sidebarUnfolded
                      ? 460
                      : 480
                    : 80
          }
        >
          <EdsPreviewStack className="max-w-full items-center justify-center overflow-visible">
            {previewItem && isMenu ? (
              <Menu menuType={demoType === "Top" ? "Top" : "Sidebar"} menuSize={menuSize}>
                <MenuItem
                  level={previewLevel}
                  visualState={itemState}
                  unfold={unfold}
                  childIcon={childIcon}
                  showIcon={showIcon}
                  onlyIcon={onlyIcon}
                >
                  {previewLevel === 1 ? "Navigator One" : "item one"}
                </MenuItem>
              </Menu>
            ) : isGlobalHeader ? (
              <div
                className="pt-global-header-preview-anchor w-full max-w-4xl"
                onMouseLeave={scheduleCloseHeaderUserDropdown}
              >
                <GlobalHeader
                  headerType={headerType}
                  logo={headerLogo}
                  collapseButton={headerCollapseButton}
                  pageTitle={headerPageTitle}
                  breadcrumb={headerBreadcrumb}
                  menu={headerMenu}
                  flushedButton={headerFlushedButton}
                  actionIcons={headerActionIcons}
                  user={headerUser}
                  userActive={showHeaderUserDropdown}
                  onUserMouseEnter={openHeaderUserDropdown}
                  onUserMouseLeave={scheduleCloseHeaderUserDropdown}
                  avatarSrc={`${import.meta.env.BASE_URL}login-hero-mascot.jpg`}
                />
                {showHeaderUserDropdown ? (
                  <div
                    className="pt-global-header-dropdown-layer"
                    onMouseEnter={openHeaderUserDropdown}
                    onMouseLeave={scheduleCloseHeaderUserDropdown}
                  >
                    <SidebarUserDropdownShowcase
                      avatarSrc={`${import.meta.env.BASE_URL}login-hero-mascot.jpg`}
                    />
                  </div>
                ) : null}
              </div>
            ) : isSidebar ? (
              <div
                className="pt-sidebar-preview-anchor"
                onMouseLeave={scheduleCloseUserDropdown}
                data-figma-sidebar-variant={`Style=${sidebarStyle}, State=${sidebarState}`}
              >
                <Sidebar
                  unfolded={sidebarUnfolded}
                  onUnfoldedChange={setSidebarUnfolded}
                  sidebarStyle={sidebarStyle}
                  showLogo={sidebarShowLogo}
                  logoTitle={sidebarStyle === "04" ? "PacsTrust" : "PacsTrust"}
                  showFooter={false}
                  settingSlot={
                    sidebarSetting
                      ? sidebarStyle === "04"
                        ? <SidebarStyle04Setting />
                        : <SidebarShowcaseSetting menuSize={menuSize} />
                      : undefined
                  }
                  userSlot={
                    sidebarUser && sidebarStyle === "04" ? (
                      <SidebarStyle04User
                        active={showUserDropdown}
                        onMouseEnter={openUserDropdown}
                        onMouseLeave={scheduleCloseUserDropdown}
                      />
                    ) : undefined
                  }
                  profileFooter={
                    sidebarUser && sidebarStyle !== "04" ? (
                      <SidebarShowcaseUser
                        avatarSrc={`${import.meta.env.BASE_URL}login-hero-mascot.jpg`}
                        active={showUserDropdown}
                        onMouseEnter={openUserDropdown}
                        onMouseLeave={scheduleCloseUserDropdown}
                      />
                    ) : undefined
                  }
                >
                  {sidebarMenuGroup ? (
                    sidebarStyle === "04" ? (
                      <MenuSidebarStyle04Sample menuSize={menuSize} embedded />
                    ) : (
                      <MenuSidebarSample menuSize={menuSize} embedded />
                    )
                  ) : null}
                </Sidebar>
                {showUserDropdown ? (
                  <SidebarUserDropdownShowcase
                    avatarSrc={`${import.meta.env.BASE_URL}login-hero-mascot.jpg`}
                    collapsed={!sidebarUnfolded}
                    onMouseEnter={openUserDropdown}
                    onMouseLeave={scheduleCloseUserDropdown}
                  />
                ) : null}
              </div>
            ) : (
              <MenuTopSample menuSize={menuSize} />
            )}
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const menuDemoCode = buildElMenuCode({
  demoType: "Sidebar",
  menuSize: "Default",
  previewItem: false,
  level: 1,
  itemState: "Default",
  unfold: false,
  childIcon: true,
  showIcon: true,
  onlyIcon: false,
  sidebarUnfolded: true,
  headerType: "Default",
  headerLogo: true,
  headerCollapseButton: true,
  headerPageTitle: true,
  headerBreadcrumb: false,
  headerMenu: false,
  headerFlushedButton: false,
  headerActionIcons: true,
});
