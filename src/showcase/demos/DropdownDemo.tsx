import { useState } from "react";
import {
  Dropdown,
  DropdownOption,
  type DropdownOptionType,
  type DropdownOptionState,
  type DropdownPlacement,
  type DropdownTriggerType,
} from "@/components/Dropdown/Dropdown";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElDropdownCode } from "../lib/elementPlusCode/builders";
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

const triggerTypes: DropdownTriggerType[] = ["Text", "Button", "Split button"];
const placements: DropdownPlacement[] = ["Top", "Bottom"];
const optionTypes: DropdownOptionType[] = ["Default", "Selected", "Multiple Choice"];
const optionStates: DropdownOptionState[] = ["Default", "Hover", "Disable"];

const MENU_ACTIONS = ["Action", "Action", "Action", "Action"];

export function DropdownDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [triggerType, setTriggerType] = useState<DropdownTriggerType>("Text");
  const [placement, setPlacement] = useState<DropdownPlacement>("Top");
  const [previewOption, setPreviewOption] = useState(false);
  const [optionType, setOptionType] = useState<DropdownOptionType>("Default");
  const [optionState, setOptionState] = useState<DropdownOptionState>("Default");
  const [description, setDescription] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  useReportElementPlusCode(
    reportElementPlusCode,
    () =>
      buildElDropdownCode({
        triggerType,
        placement,
        previewOption,
        optionType,
        optionState,
        description,
        showIcon,
      }),
    [triggerType, placement, previewOption, optionType, optionState, description, showIcon],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeBooleanField
            label="Preview option"
            checked={previewOption}
            onChange={(e) => setPreviewOption(e.target.checked)}
          />
          {previewOption ? (
            <>
              <CustomizeField label="Type">
                <CustomizeSelect
                  value={optionType}
                  onChange={(e) => setOptionType(e.target.value as DropdownOptionType)}
                >
                  {optionTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
              <CustomizeField label="State">
                <CustomizeSelect
                  value={optionState}
                  onChange={(e) => setOptionState(e.target.value as DropdownOptionState)}
                >
                  {optionStates.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
              <CustomizeBooleanField
                label="Description"
                checked={description}
                onChange={(e) => setDescription(e.target.checked)}
              />
              <CustomizeBooleanField label="Icon" checked={showIcon} onChange={(e) => setShowIcon(e.target.checked)} />
            </>
          ) : (
            <>
              <CustomizeField label="Type">
                <CustomizeSelect
                  value={triggerType}
                  onChange={(e) => setTriggerType(e.target.value as DropdownTriggerType)}
                >
                  {triggerTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
              <CustomizeField label="Pop-up">
                <CustomizeSelect
                  value={placement}
                  onChange={(e) => setPlacement(e.target.value as DropdownPlacement)}
                >
                  {placements.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
            </>
          )}
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={previewOption ? 48 : placement === "Bottom" ? 200 : 220}>
          <EdsPreviewStack className="max-w-full items-center">
            {previewOption ? (
              <Dropdown triggerType="Text" placement="Top" defaultOpen>
                <DropdownOption
                  optionType={optionType}
                  visualState={optionState}
                  showIcon={showIcon}
                  description={description ? "description" : undefined}
                >
                  Option text
                </DropdownOption>
              </Dropdown>
            ) : (
              <Dropdown triggerType={triggerType} placement={placement} defaultOpen>
                {MENU_ACTIONS.map((label, i) => (
                  <DropdownOption key={i}>{label}</DropdownOption>
                ))}
              </Dropdown>
            )}
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const dropdownDemoCode = buildElDropdownCode({
  triggerType: "Text",
  placement: "Top",
  previewOption: false,
  optionType: "Default",
  optionState: "Default",
  description: false,
  showIcon: false,
});
