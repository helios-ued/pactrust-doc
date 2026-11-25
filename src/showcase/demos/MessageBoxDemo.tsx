import { MessageBox, type MessageBoxType } from "@/components/MessageBox/MessageBox";
import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElMessageBoxCode } from "../lib/elementPlusCode/builders";
import {
  CustomizeField,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import { EdsPreviewStack } from "../ui/EdsShowcaseUi";
import type { ShowcaseDemoProps } from "./types";

const types: MessageBoxType[] = ["Message prompts", "Confirm the message", "Submit"];

export function MessageBoxDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [boxType, setBoxType] = useState<MessageBoxType>("Confirm the message");

  useReportElementPlusCode(reportElementPlusCode, () => buildElMessageBoxCode({ boxType }), [boxType]);

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Type">
            <CustomizeSelect value={boxType} onChange={(e) => setBoxType(e.target.value as MessageBoxType)}>
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={120} className="items-start justify-center">
          <EdsPreviewStack className="max-w-none items-center">
            <MessageBox boxType={boxType} />
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const messageBoxDemoCode = buildElMessageBoxCode({ boxType: "Confirm the message" });
