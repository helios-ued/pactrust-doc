import { Dialog } from "@/components/Dialog/Dialog";
import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElDialogCode } from "../lib/elementPlusCode/builders";
import {
  CustomizeBooleanField,
  CustomizeRoot,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import { EdsPreviewStack } from "../ui/EdsShowcaseUi";
import type { ShowcaseDemoProps } from "./types";

export function DialogDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [titleCenter, setTitleCenter] = useState(false);
  const [titleIcon, setTitleIcon] = useState(true);

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElDialogCode({ titleCenter, titleIcon }),
    [titleCenter, titleIcon],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeBooleanField
            label="Title center"
            checked={titleCenter}
            onChange={(e) => setTitleCenter(e.target.checked)}
          />
          <CustomizeBooleanField
            label="Title icon"
            checked={titleIcon}
            onChange={(e) => setTitleIcon(e.target.checked)}
          />
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={280} className="items-start">
          <EdsPreviewStack className="items-stretch">
            <Dialog titleCenter={titleCenter} titleIcon={titleIcon} />
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const dialogDemoCode = buildElDialogCode({ titleCenter: false, titleIcon: true });
