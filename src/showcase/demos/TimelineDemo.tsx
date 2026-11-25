import { useState } from "react";
import {
  Timeline,
  type TimelineCellType,
  type TimelineItemSize,
  type TimelineItemType,
} from "@/components/Timeline/Timeline";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElTimelineCode } from "../lib/elementPlusCode/builders";
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

const cellTypes: TimelineCellType[] = ["Vertical", "Horizontal", "Card"];
const itemTypes: TimelineItemType[] = [
  "Default",
  "Primary",
  "Success",
  "Warning",
  "Error",
  "Info",
];
const sizes: TimelineItemSize[] = ["Default", "Large"];

export function TimelineDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [cellType, setCellType] = useState<TimelineCellType>("Vertical");
  const [activeType, setActiveType] = useState<TimelineItemType>("Primary");
  const [size, setSize] = useState<TimelineItemSize>("Default");
  const [hollow, setHollow] = useState(false);

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElTimelineCode({ cellType, activeType, size, hollow }),
    [cellType, activeType, size, hollow],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Type">
            <CustomizeSelect
              value={cellType}
              onChange={(e) => setCellType(e.target.value as TimelineCellType)}
            >
              {cellTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Active type">
            <CustomizeSelect
              value={activeType}
              onChange={(e) => setActiveType(e.target.value as TimelineItemType)}
            >
              {itemTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Size">
            <CustomizeSelect value={size} onChange={(e) => setSize(e.target.value as TimelineItemSize)}>
              {sizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeBooleanField label="Hollow" checked={hollow} onChange={(e) => setHollow(e.target.checked)} />
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={cellType === "Card" ? 320 : 200} className="items-start">
          <EdsPreviewStack className="max-w-full items-start">
            <Timeline cellType={cellType} activeType={activeType} size={size} hollow={hollow} />
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const timelineDemoCode = buildElTimelineCode({
  cellType: "Vertical",
  activeType: "Primary",
  size: "Default",
  hollow: false,
});
