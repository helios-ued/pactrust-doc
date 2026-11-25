import { useState } from "react";
import {
  Anchor,
  AnchorLink,
  type AnchorDirection,
  type AnchorLevel,
  type AnchorMarkerType,
} from "@/components/Anchor/Anchor";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElAnchorCode } from "../lib/elementPlusCode/builders";
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

const directions: AnchorDirection[] = ["Vertical", "Horizontal"];
const markers: AnchorMarkerType[] = ["Default", "Underline"];
const levels: AnchorLevel[] = [1, 2, 3, 4];

const LIST_ITEMS: { href: string; level: AnchorLevel }[] = [
  { href: "#l1", level: 1 },
  { href: "#l2", level: 2 },
  { href: "#l3", level: 3 },
  { href: "#l4", level: 4 },
];

export function AnchorDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [direction, setDirection] = useState<AnchorDirection>("Vertical");
  const [markerType, setMarkerType] = useState<AnchorMarkerType>("Default");
  const [level, setLevel] = useState<AnchorLevel>(1);
  const [selected, setSelected] = useState(true);
  const [showList, setShowList] = useState(false);

  const vertical = direction === "Vertical";

  useReportElementPlusCode(
    reportElementPlusCode,
    () =>
      buildElAnchorCode({
        direction,
        markerType,
        level,
        selected,
        showList,
        activeLevel: level,
      }),
    [direction, markerType, level, selected, showList],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Direction">
            <CustomizeSelect
              value={direction}
              onChange={(e) => setDirection(e.target.value as AnchorDirection)}
            >
              {directions.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          {vertical ? (
            <CustomizeField label="Underline">
              <CustomizeSelect
                value={markerType}
                onChange={(e) => setMarkerType(e.target.value as AnchorMarkerType)}
              >
                {markers.map((m) => (
                  <option key={m} value={m}>
                    {m === "Underline" ? "on" : "off"}
                  </option>
                ))}
              </CustomizeSelect>
            </CustomizeField>
          ) : null}
          {vertical && !showList ? (
            <CustomizeField label="Level">
              <CustomizeSelect
                value={String(level)}
                onChange={(e) => setLevel(Number(e.target.value) as AnchorLevel)}
              >
                {levels.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </CustomizeSelect>
            </CustomizeField>
          ) : null}
          {!showList ? (
            <CustomizeBooleanField
              label="Selected"
              checked={selected}
              onChange={(e) => setSelected(e.target.checked)}
            />
          ) : null}
          {vertical ? (
            <CustomizeBooleanField
              label="Show list"
              checked={showList}
              onChange={(e) => setShowList(e.target.checked)}
            />
          ) : null}
          {showList && vertical ? (
            <CustomizeField label="Active level">
              <CustomizeSelect
                value={String(level)}
                onChange={(e) => setLevel(Number(e.target.value) as AnchorLevel)}
              >
                {levels.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </CustomizeSelect>
            </CustomizeField>
          ) : null}
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={showList && vertical ? 140 : 48}>
          <EdsPreviewStack className="max-w-full items-center">
            <Anchor direction={direction} markerType={vertical ? markerType : "Default"}>
              {showList && vertical ? (
                LIST_ITEMS.map((item) => (
                  <AnchorLink
                    key={item.href}
                    href={item.href}
                    level={item.level}
                    selected={item.level === level}
                  />
                ))
              ) : direction === "Horizontal" ? (
                <>
                  <AnchorLink href="#a" selected={!selected} />
                  <AnchorLink href="#b" selected={selected} />
                </>
              ) : (
                <AnchorLink level={level} selected={selected} />
              )}
            </Anchor>
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const anchorDemoCode = buildElAnchorCode({
  direction: "Vertical",
  markerType: "Default",
  level: 1,
  selected: true,
  showList: false,
  activeLevel: 1,
});
