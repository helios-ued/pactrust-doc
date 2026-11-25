import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElCheckboxCode } from "../lib/elementPlusCode";
import { Checkbox, type CheckboxSize } from "@/components/Checkbox/Checkbox";
import {
  CheckboxGroup,
  type CheckboxGroupType,
} from "@/components/Checkbox/CheckboxGroup";
import {
  CustomizeField,
  CustomizeInlineCheck,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import type { ShowcaseDemoProps } from "./types";

type CheckboxVisualState =
  | "Default"
  | "Selected"
  | "Selected(Partially)"
  | "Hover"
  | "Disable(Default)"
  | "Disable(Selected)";

const checkboxStates: CheckboxVisualState[] = [
  "Default",
  "Selected",
  "Selected(Partially)",
  "Hover",
  "Disable(Default)",
  "Disable(Selected)",
];

const groupOptions = [{ label: "Option", value: "1" }];

export function CheckboxDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [size, setSize] = useState<CheckboxSize>("Default");
  const [groupType, setGroupType] = useState<CheckboxGroupType>("Default");
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState<CheckboxVisualState>("Default");
  const [value, setValue] = useState<string[]>(["1"]);

  const showGroup = state === "Default";

  useReportElementPlusCode(
    reportElementPlusCode,
    () =>
      buildElCheckboxCode({
        groupType,
        disabled: disabled || state.startsWith("Disable"),
      }),
    [groupType, disabled, state],
  );

  const stateChecked =
    state === "Selected" || state === "Disable(Selected)";
  const stateIndeterminate = state === "Selected(Partially)";
  const stateDisabled =
    disabled ||
    state === "Disable(Default)" ||
    state === "Disable(Selected)";

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Group Type">
            <CustomizeSelect
              value={groupType}
              onChange={(e) => setGroupType(e.target.value as CheckboxGroupType)}
            >
              <option value="Default">Default</option>
              <option value="Border">Border</option>
              <option value="Button">Button</option>
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Size">
            <CustomizeSelect
              value={size}
              onChange={(e) => setSize(e.target.value as CheckboxSize)}
            >
              <option value="Default">Default</option>
              <option value="Large">Large</option>
              <option value="Small">Small</option>
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="State">
            <CustomizeSelect
              value={state}
              onChange={(e) => setState(e.target.value as CheckboxVisualState)}
            >
              {checkboxStates.map((s) => (
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
            <CheckboxGroup
              name="checkbox-demo"
              type={groupType}
              size={size}
              options={groupOptions}
              value={value}
              onChange={setValue}
              disabled={disabled}
            />
          ) : (
            <Checkbox
              size={size}
              border={groupType === "Border"}
              label="Option"
              disabled={stateDisabled}
              checked={stateChecked && !stateIndeterminate}
              indeterminate={stateIndeterminate}
              onChange={() => undefined}
              className={state === "Hover" ? "pt-checkbox--force-hover" : undefined}
            />
          )}
        </DemoStage>
      }
    />
  );
}

export const checkboxCode = buildElCheckboxCode({ groupType: "Default", disabled: false });
