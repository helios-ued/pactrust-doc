import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElRadioCode } from "../lib/elementPlusCode";
import { Radio, type RadioSize } from "@/components/Radio/Radio";
import { RadioGroup, type RadioGroupType } from "@/components/Radio/RadioGroup";
import {
  CustomizeField,
  CustomizeInlineCheck,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import type { ShowcaseDemoProps } from "./types";

type RadioVisualState =
  | "Default"
  | "Selected"
  | "Hover"
  | "Disable(Default)"
  | "Disable(Selected)";

const radioStates: RadioVisualState[] = [
  "Default",
  "Selected",
  "Hover",
  "Disable(Default)",
  "Disable(Selected)",
];

const groupOptions = [{ label: "Option", value: "1" }];

export function RadioDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [size, setSize] = useState<RadioSize>("Default");
  const [groupType, setGroupType] = useState<RadioGroupType>("Default");
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState<RadioVisualState>("Default");
  const [value, setValue] = useState("1");

  const showGroup = state === "Default";

  const stateSelected =
    state === "Selected" || state === "Disable(Selected)";
  const stateDisabled =
    disabled ||
    state === "Disable(Default)" ||
    state === "Disable(Selected)";

  useReportElementPlusCode(
    reportElementPlusCode,
    () =>
      buildElRadioCode({
        mode: showGroup ? "group" : "single",
        groupType,
        size,
        disabled: stateDisabled,
        selected: stateSelected,
      }),
    [showGroup, groupType, size, stateDisabled, stateSelected],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Group Type">
            <CustomizeSelect
              value={groupType}
              onChange={(e) => setGroupType(e.target.value as RadioGroupType)}
            >
              <option value="Default">Default</option>
              <option value="Border">Border</option>
              <option value="Button">Button</option>
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Size">
            <CustomizeSelect
              value={size}
              onChange={(e) => setSize(e.target.value as RadioSize)}
            >
              <option value="Default">Default</option>
              <option value="Large">Large</option>
              <option value="Small">Small</option>
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="State">
            <CustomizeSelect
              value={state}
              onChange={(e) => setState(e.target.value as RadioVisualState)}
            >
              {radioStates.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeInlineCheck
            label="Disabled"
            checked={disabled}
            onChange={(e) => setDisabled(e.target.checked)}
          />
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={100}>
          {showGroup ? (
            <RadioGroup
              name="radio-demo"
              type={groupType}
              size={size}
              options={groupOptions}
              value={value}
              onChange={setValue}
              disabled={disabled}
            />
          ) : (
            <Radio
              name="radio-state-preview"
              size={size}
              border={groupType === "Border"}
              label="Option"
              disabled={stateDisabled}
              checked={stateSelected}
              onChange={() => undefined}
              className={state === "Hover" ? "pt-radio--force-hover" : undefined}
            />
          )}
        </DemoStage>
      }
    />
  );
}

export const radioCode = buildElRadioCode({
  mode: "group",
  groupType: "Default",
  size: "Default",
  disabled: false,
});
