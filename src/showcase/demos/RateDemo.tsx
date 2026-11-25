import { useEffect, useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElRateCode } from "../lib/elementPlusCode";
import { Rate } from "@/components/Rate/Rate";
import {
  CustomizeField,
  CustomizeInlineCheck,
  CustomizeInput,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import type { ShowcaseDemoProps } from "./types";

/** Figma Rate — Type */
type RatePreviewType = "Default" | "Low rating" | "Medium rating" | "High rating";

const previewTypes: RatePreviewType[] = [
  "Default",
  "Low rating",
  "Medium rating",
  "High rating",
];

const presetValueFull: Record<RatePreviewType, number> = {
  Default: 0,
  "Low rating": 2,
  "Medium rating": 3,
  "High rating": 5,
};

const presetValueHalf: Record<RatePreviewType, number> = {
  Default: 0.5,
  "Low rating": 1.5,
  "Medium rating": 2.5,
  "High rating": 4.5,
};

function presetForType(type: RatePreviewType, half: boolean): number {
  return half ? presetValueHalf[type] : presetValueFull[type];
}

export function RateDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [previewType, setPreviewType] = useState<RatePreviewType>("Medium rating");
  const [allowHalf, setAllowHalf] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [showScore, setShowScore] = useState(true);
  const [caption, setCaption] = useState("Captions");
  const [value, setValue] = useState(3);

  useEffect(() => {
    setValue(presetForType(previewType, allowHalf));
  }, [previewType, allowHalf]);

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElRateCode({ disabled }),
    [disabled],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Type">
            <CustomizeSelect
              value={previewType}
              onChange={(e) => setPreviewType(e.target.value as RatePreviewType)}
            >
              {previewTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Caption" wide>
            <CustomizeInput
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              disabled={!showScore}
            />
          </CustomizeField>
          <CustomizeInlineCheck
            label="Half"
            checked={allowHalf}
            onChange={(e) => setAllowHalf(e.target.checked)}
          />
          <CustomizeInlineCheck
            label="Show Captions"
            checked={showScore}
            onChange={(e) => setShowScore(e.target.checked)}
          />
          <CustomizeInlineCheck
            label="Disabled"
            checked={disabled}
            onChange={(e) => setDisabled(e.target.checked)}
          />
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={80}>
          <Rate
            value={value}
            onChange={setValue}
            allowHalf={allowHalf}
            disabled={disabled}
            showScore={showScore}
            texts={showScore ? [caption] : undefined}
          />
        </DemoStage>
      }
    />
  );
}

export const rateCode = buildElRateCode({ disabled: false });
