import {
  TabItemPreview,
  Tabs,
  type TabItemLayout,
  type TabItemState,
  type TabsAlign,
  type TabsPosition,
  type TabsVisualType,
} from "@/components/Tabs/Tabs";
import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElTabsCode } from "../lib/elementPlusCode/builders";
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

const tabTypes: TabsVisualType[] = ["Default", "Card", "Border-card"];
const positions: TabsPosition[] = ["Top", "Left", "Right"];
const aligns: TabsAlign[] = ["Left", "Center", "Right"];
const itemStates: TabItemState[] = ["Default", "Hover", "Selected"];
const defaultLayouts: TabItemLayout[] = ["Default", "Left", "Right"];
const cardLayouts: TabItemLayout[] = ["Left", "Center", "Right"];
const actives = [1, 2, 3, 4] as const;

export function TabsDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [previewItem, setPreviewItem] = useState(false);
  const [tabType, setTabType] = useState<TabsVisualType>("Default");
  const [position, setPosition] = useState<TabsPosition>("Top");
  const [align, setAlign] = useState<TabsAlign>("Left");
  const [active, setActive] = useState<1 | 2 | 3 | 4>(2);
  const [itemState, setItemState] = useState<TabItemState>("Default");
  const [itemLayout, setItemLayout] = useState<TabItemLayout>("Default");

  const copyPosition =
    tabType === "Default" ? position : "Top";
  const layoutOptions = tabType === "Default" ? defaultLayouts : cardLayouts;

  useReportElementPlusCode(
    reportElementPlusCode,
    () =>
      buildElTabsCode({
        previewItem,
        tabType,
        position: copyPosition,
        align,
        active,
        itemState,
        itemLayout,
      }),
    [previewItem, tabType, copyPosition, align, active, itemState, itemLayout],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeBooleanField
            label="Preview item"
            checked={previewItem}
            onChange={(e) => setPreviewItem(e.target.checked)}
          />
          {previewItem ? (
            <>
              <CustomizeField label="State">
                <CustomizeSelect
                  value={itemState}
                  onChange={(e) => setItemState(e.target.value as TabItemState)}
                >
                  {itemStates.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
              <CustomizeField label="Layout">
                <CustomizeSelect
                  value={itemLayout}
                  onChange={(e) => setItemLayout(e.target.value as TabItemLayout)}
                >
                  {layoutOptions.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
              <CustomizeField label="Type">
                <CustomizeSelect
                  value={tabType}
                  onChange={(e) => {
                    const next = e.target.value as TabsVisualType;
                    setTabType(next);
                    if (next !== "Default" && itemLayout === "Default") {
                      setItemLayout("Left");
                    }
                    if (next === "Default" && itemLayout === "Center") {
                      setItemLayout("Default");
                    }
                  }}
                >
                  {tabTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
            </>
          ) : (
            <>
              <CustomizeField label="Type">
                <CustomizeSelect
                  value={tabType}
                  onChange={(e) => {
                    const next = e.target.value as TabsVisualType;
                    setTabType(next);
                    if (next !== "Default" && position !== "Top") {
                      setPosition("Top");
                    }
                  }}
                >
                  {tabTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
              {tabType === "Default" ? (
                <CustomizeField label="Position">
                  <CustomizeSelect
                    value={position}
                    onChange={(e) => setPosition(e.target.value as TabsPosition)}
                  >
                    {positions.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </CustomizeSelect>
                </CustomizeField>
              ) : null}
              {tabType === "Default" && position === "Top" ? (
                <CustomizeField label="Align">
                  <CustomizeSelect value={align} onChange={(e) => setAlign(e.target.value as TabsAlign)}>
                    {aligns.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </CustomizeSelect>
                </CustomizeField>
              ) : null}
              <CustomizeField label="Active">
                <CustomizeSelect
                  value={String(active)}
                  onChange={(e) => setActive(Number(e.target.value) as 1 | 2 | 3 | 4)}
                >
                  {actives.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
            </>
          )}
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={copyPosition === "Top" ? 56 : 400} className="items-start">
          <EdsPreviewStack className="w-full max-w-[800px] items-stretch">
            {previewItem ? (
              <TabItemPreview
                tabType={tabType}
                position={tabType === "Default" ? position : "Top"}
                state={itemState}
                layout={itemLayout}
              />
            ) : (
              <Tabs tabType={tabType} position={copyPosition} align={align} active={active} />
            )}
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const tabsDemoCode = buildElTabsCode({
  previewItem: false,
  tabType: "Default",
  position: "Top",
  align: "Left",
  active: 2,
  itemState: "Default",
  itemLayout: "Default",
});
