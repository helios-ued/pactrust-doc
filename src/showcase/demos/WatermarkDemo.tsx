import { Watermark, type WatermarkType } from "@/components/Watermark/Watermark";
import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElWatermarkCode } from "../lib/elementPlusCode/builders";
import {
  CustomizeField,
  CustomizeInput,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import { EdsPreviewStack } from "../ui/EdsShowcaseUi";
import type { ShowcaseDemoProps } from "./types";

const types: WatermarkType[] = ["Text", "Icon"];

export function WatermarkDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [watermarkType, setWatermarkType] = useState<WatermarkType>("Text");
  const [content, setContent] = useState("Element Plus");

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElWatermarkCode({ watermarkType, content }),
    [watermarkType, content],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Type">
            <CustomizeSelect
              value={watermarkType}
              onChange={(e) => setWatermarkType(e.target.value as WatermarkType)}
            >
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          {watermarkType === "Text" ? (
            <CustomizeField label="Content">
              <CustomizeInput value={content} onChange={(e) => setContent(e.target.value)} />
            </CustomizeField>
          ) : null}
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={340} className="items-start">
          <EdsPreviewStack className="w-full">
            <Watermark watermarkType={watermarkType} content={content}>
              Page content area
            </Watermark>
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const watermarkDemoCode = buildElWatermarkCode({ watermarkType: "Text", content: "Element Plus" });
