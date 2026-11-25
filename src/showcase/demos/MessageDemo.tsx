import { Message } from "@/components/Message/Message";
import type { FeedbackSemanticType } from "@/components/feedback/semanticTone";
import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElMessageCode } from "../lib/elementPlusCode/builders";
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

const types: FeedbackSemanticType[] = ["Primary", "Success", "Warning", "Danger", "Info"];

export function MessageDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [messageType, setMessageType] = useState<FeedbackSemanticType>("Primary");
  const [plain, setPlain] = useState(false);
  const [closable, setClosable] = useState(true);

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElMessageCode({ messageType, plain, closable }),
    [messageType, plain, closable],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Type">
            <CustomizeSelect
              value={messageType}
              onChange={(e) => setMessageType(e.target.value as FeedbackSemanticType)}
            >
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeBooleanField label="Plain" checked={plain} onChange={(e) => setPlain(e.target.checked)} />
          <CustomizeBooleanField
            label="Close icon"
            checked={closable}
            onChange={(e) => setClosable(e.target.checked)}
          />
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={80}>
          <EdsPreviewStack>
            <Message messageType={messageType} plain={plain} closable={closable} />
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const messageDemoCode = buildElMessageCode({
  messageType: "Primary",
  plain: false,
  closable: true,
});
