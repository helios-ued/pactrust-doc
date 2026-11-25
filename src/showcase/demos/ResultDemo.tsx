import { useState } from "react";
import { Result, type ResultState } from "@/components/Result/Result";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElResultCode } from "../lib/elementPlusCode/builders";
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

export function ResultDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [state, setState] = useState<ResultState>("Success");
  const [showSubTitle, setShowSubTitle] = useState(true);
  const [showButton, setShowButton] = useState(true);

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElResultCode({ state, showSubTitle, showButton }),
    [state, showSubTitle, showButton],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="State">
            <CustomizeSelect value={state} onChange={(e) => setState(e.target.value as ResultState)}>
              <option value="Success">Success</option>
              <option value="Warning">Warning</option>
              <option value="Error">Error</option>
              <option value="Info">Info</option>
              <option value="Other">Other</option>
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeBooleanField
            label="Show prompt"
            checked={showSubTitle}
            onChange={(e) => setShowSubTitle(e.target.checked)}
          />
          <CustomizeBooleanField
            label="Show button"
            checked={showButton}
            onChange={(e) => setShowButton(e.target.checked)}
          />
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={252}>
          <EdsPreviewStack className="max-w-full">
            <Result state={state} showSubTitle={showSubTitle} showButton={showButton} />
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const resultDemoCode = buildElResultCode({
  state: "Success",
  showSubTitle: true,
  showButton: true,
});
