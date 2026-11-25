import {
  POPOVER_LAYOUTS,
  Popover,
  type PopoverLayout,
} from "@/components/Popover/Popover";
import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElPopoverCode } from "../lib/elementPlusCode/builders";
import {
  CustomizeField,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import { EdsPreviewStack } from "../ui/EdsShowcaseUi";
import type { ShowcaseDemoProps } from "./types";

export function PopoverDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [layout, setLayout] = useState<PopoverLayout>("up-middle");

  useReportElementPlusCode(reportElementPlusCode, () => buildElPopoverCode({ layout }), [layout]);

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Layout">
            <CustomizeSelect value={layout} onChange={(e) => setLayout(e.target.value as PopoverLayout)}>
              {POPOVER_LAYOUTS.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={140} className="items-center justify-center overflow-hidden">
          <EdsPreviewStack className="max-w-none items-center">
            <Popover layout={layout} />
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const popoverDemoCode = buildElPopoverCode({ layout: "up-middle" });
