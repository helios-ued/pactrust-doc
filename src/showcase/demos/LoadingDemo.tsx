import { Loading, type LoadingIconType, type LoadingSize } from "@/components/Loading/Loading";
import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElLoadingCode } from "../lib/elementPlusCode/builders";
import {
  CustomizeField,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import { EdsPreviewStack } from "../ui/EdsShowcaseUi";
import type { ShowcaseDemoProps } from "./types";

const types: LoadingIconType[] = ["Round", "Icon"];
const sizes: LoadingSize[] = ["Small", "Default", "Large"];

export function LoadingDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [iconType, setIconType] = useState<LoadingIconType>("Round");
  const [size, setSize] = useState<LoadingSize>("Default");

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElLoadingCode({ iconType, size }),
    [iconType, size],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Type">
            <CustomizeSelect value={iconType} onChange={(e) => setIconType(e.target.value as LoadingIconType)}>
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Size">
            <CustomizeSelect value={size} onChange={(e) => setSize(e.target.value as LoadingSize)}>
              {sizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={120}>
          <EdsPreviewStack>
            <Loading iconType={iconType} size={size} />
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const loadingDemoCode = buildElLoadingCode({ iconType: "Round", size: "Default" });
