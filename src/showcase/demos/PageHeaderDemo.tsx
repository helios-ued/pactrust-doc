import { PageHeader, type PageHeaderOptionType } from "@/components/PageHeader/PageHeader";
import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElPageHeaderCode } from "../lib/elementPlusCode/builders";
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

const optionTypes: PageHeaderOptionType[] = ["Option", "Radio"];

export function PageHeaderDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [optionType, setOptionType] = useState<PageHeaderOptionType>("Option");
  const [backButton, setBackButton] = useState(true);
  const [crumbs, setCrumbs] = useState(true);
  const [tag, setTag] = useState(true);
  const [showOption, setShowOption] = useState(true);

  useReportElementPlusCode(
    reportElementPlusCode,
    () =>
      buildElPageHeaderCode({
        optionType,
        backButton,
        crumbs,
        tag,
        showOption,
      }),
    [optionType, backButton, crumbs, tag, showOption],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Option-type">
            <CustomizeSelect
              value={optionType}
              onChange={(e) => setOptionType(e.target.value as PageHeaderOptionType)}
            >
              {optionTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeBooleanField
            label="Back button"
            checked={backButton}
            onChange={(e) => setBackButton(e.target.checked)}
          />
          <CustomizeBooleanField label="Crumbs" checked={crumbs} onChange={(e) => setCrumbs(e.target.checked)} />
          <CustomizeBooleanField label="Tag" checked={tag} onChange={(e) => setTag(e.target.checked)} />
          <CustomizeBooleanField
            label="Show option"
            checked={showOption}
            onChange={(e) => setShowOption(e.target.checked)}
          />
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={120}>
          <EdsPreviewStack className="w-full max-w-[848px] items-stretch">
            <PageHeader
              optionType={optionType}
              backButton={backButton}
              crumbs={crumbs}
              tag={tag}
              showOption={showOption}
            />
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const pageHeaderDemoCode = buildElPageHeaderCode({
  optionType: "Option",
  backButton: true,
  crumbs: true,
  tag: true,
  showOption: true,
});
