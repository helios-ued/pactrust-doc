import { useState } from "react";
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
import { SidebarStyle04Setting, SidebarStyle04User } from "@/components/Menu/SidebarStyle04Slots";
import {
  FIGMA_SIDEBAR_SHOWCASE_OPTIONS,
  type FigmaSidebarMenuStyle,
  type FigmaSidebarShowcaseVariant,
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
  const [sidebarUnfolded, setSidebarUnfolded] = useState(true);
  const [headerType, setHeaderType] = useState<GlobalHeaderType>("Default");
  const [headerLogo, setHeaderLogo] = useState(true);
  const [headerFold, setHeaderFold] = useState(true);
  const [headerCrumbs, setHeaderCrumbs] = useState(false);
  const [headerMenu, setHeaderMenu] = useState(false);
  const [headerFlush, setHeaderFlush] = useState(false);

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
        headerType,
        headerLogo,
        headerFold,
        headerCrumbs,
        headerMenu,
        headerFlush,
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
      headerType,
      headerLogo,
      headerFold,
      headerCrumbs,
      headerMenu,
      headerFlush,
    ],
  );

  const previewLevel = demoType === "Top" ? 1 : level;
  const canOnlyIcon = isSidebar && menuSize === "Small" && previewLevel === 1;

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
          ) : (
            <CustomizeField label="Size">
              <CustomizeSelect value={menuSize} onChange={(e) => setMenuSize(e.target.value as MenuSize)}>
                {menuSizes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </CustomizeSelect>
            </CustomizeField>
          )}
          {isMenu ? (
            <CustomizeBooleanField
              label="Preview item"
              checked={previewItem}
              onChange={(e) => setPreviewItem(e.target.checked)}
            />
          ) : null}
          {!previewItem && isSidebar ? (
            <CustomizeField label="Sidebar Style">
              <CustomizeSelect
                value={sidebarStyle}
                onChange={(e) => {
                  const next = e.target.value as FigmaSidebarShowcaseVariant;
                  setSidebarStyle(next);
                  if (next === "04" && level > 1) setLevel(1);
                }}
              >
                {FIGMA_SIDEBAR_SHOWCASE_OPTIONS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </CustomizeSelect>
            </CustomizeField>
          ) : null}
          {!previewItem && isSidebar ? (
            <CustomizeField label="Unfold">
              <CustomizeSelect
                value={sidebarUnfolded ? "on" : "off"}
                onChange={(e) => setSidebarUnfolded(e.target.value === "on")}
              >
                <option value="on">Unfold=on</option>
                <option value="off">Unfold=off</option>
              </CustomizeSelect>
            </CustomizeField>
          ) : null}
          {!previewItem && isGlobalHeader ? (
            <>
              <CustomizeBooleanField label="Logo" checked={headerLogo} onChange={(e) => setHeaderLogo(e.target.checked)} />
              <CustomizeBooleanField
                label="Fold button"
                checked={headerFold}
                onChange={(e) => setHeaderFold(e.target.checked)}
              />
              <CustomizeBooleanField
                label="Crumbs"
                checked={headerCrumbs}
                onChange={(e) => setHeaderCrumbs(e.target.checked)}
              />
              <CustomizeBooleanField label="Menu" checked={headerMenu} onChange={(e) => setHeaderMenu(e.target.checked)} />
              <CustomizeBooleanField
                label="Flushed button"
                checked={headerFlush}
                onChange={(e) => setHeaderFlush(e.target.checked)}
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
          minHeight={
            previewItem
              ? 56
              : isGlobalHeader
                ? 72
                : isSidebar && sidebarStyle === "04"
                  ? 1080
                  : isSidebar
                    ? 460
                    : 80
          }
        >
          <EdsPreviewStack className="max-w-full items-center">
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
              <div className="w-full max-w-4xl">
                <GlobalHeader
                  headerType={headerType}
                  logo={headerLogo}
                  foldButton={headerFold}
                  crumbs={headerCrumbs}
                  headerMenu={headerMenu}
                  flushedButton={headerFlush}
                />
              </div>
            ) : isSidebar ? (
              <Sidebar
                unfolded={sidebarUnfolded}
                onUnfoldedChange={setSidebarUnfolded}
                sidebarStyle={sidebarStyle}
                logoTitle={sidebarStyle === "04" ? "PacsTrust" : undefined}
                showFooter={sidebarStyle !== "04"}
                settingSlot={
                  sidebarStyle === "04" ? <SidebarStyle04Setting /> : undefined
                }
                userSlot={sidebarStyle === "04" ? <SidebarStyle04User /> : undefined}
              >
                {sidebarStyle === "04" ? (
                  <MenuSidebarStyle04Sample menuSize={menuSize} embedded />
                ) : (
                  <MenuSidebarSample menuSize={menuSize} embedded />
                )}
              </Sidebar>
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
  headerFold: true,
  headerCrumbs: false,
  headerMenu: false,
  headerFlush: false,
});
