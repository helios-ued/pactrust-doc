import { useEffect, useMemo, useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElSelectCode } from "../lib/elementPlusCode";
import {
  Select,
  type SelectDropdownType,
  type SelectOption,
  type SelectSize,
  type SelectState,
} from "@/components/Select/Select";
import {
  CustomizeField,
  CustomizeInlineCheck,
  CustomizeInput,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import type { ShowcaseDemoProps } from "./types";

const sizes: SelectSize[] = ["Default", "Large", "Small"];
const states: SelectState[] = ["Default", "Hover", "Focus", "Error", "Disabled"];
const dropdownTypes: SelectDropdownType[] = ["Default", "Pinyin", "Group"];

/** Default / Pinyin */
export const selectDemoOptions: SelectOption[] = [
  { label: "Option A", value: "a", pinyin: "Pinyin" },
  { label: "Option B", value: "b", pinyin: "Pinyin" },
  { label: "Option C", value: "c", pinyin: "Pinyin" },
  { label: "Option D", value: "d", pinyin: "Pinyin" },
  { label: "Option E", value: "e", pinyin: "Pinyin" },
];

/** Figma Copy me — Group dropdown (3045:70780) */
export const selectGroupDemoOptions: SelectOption[] = [
  { label: "Option 1", value: "1", group: "g1", groupLabel: "group name" },
  { label: "Option 2", value: "2", group: "g1", groupLabel: "group name" },
  { label: "Option 3", value: "3", group: "g2", groupLabel: "group name" },
  { label: "Option 4", value: "4", group: "g2", groupLabel: "group name" },
  { label: "Option 5", value: "5", group: "g2", groupLabel: "group name" },
];

export function SelectDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [size, setSize] = useState<SelectSize>("Default");
  const [state, setState] = useState<SelectState>("Default");
  const [dropdownType, setDropdownType] = useState<SelectDropdownType>("Default");
  const [multiple, setMultiple] = useState(false);
  const [filterable, setFilterable] = useState(false);
  const [collapseTags, setCollapseTags] = useState(false);
  const [placeholder, setPlaceholder] = useState("Select");
  const [singleValue, setSingleValue] = useState("");
  const [multiValue, setMultiValue] = useState<string[]>(["a", "b"]);

  const options = useMemo(
    () => (dropdownType === "Group" ? selectGroupDemoOptions : selectDemoOptions),
    [dropdownType],
  );

  useReportElementPlusCode(
    reportElementPlusCode,
    () =>
      buildElSelectCode({
        size,
        disabled: state === "Disabled",
        multiple,
      }),
    [size, state, multiple],
  );

  useEffect(() => {
    if (dropdownType === "Group" && !multiple) setSingleValue("3");
  }, [dropdownType, multiple]);

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Size">
            <CustomizeSelect
              value={size}
              onChange={(e) => setSize(e.target.value as SelectSize)}
            >
              {sizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="State">
            <CustomizeSelect
              value={state}
              onChange={(e) => setState(e.target.value as SelectState)}
            >
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Dropdown Type">
            <CustomizeSelect
              value={dropdownType}
              onChange={(e) =>
                setDropdownType(e.target.value as SelectDropdownType)
              }
            >
              {dropdownTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Placeholder" wide>
            <CustomizeInput
              value={placeholder}
              onChange={(e) => setPlaceholder(e.target.value)}
            />
          </CustomizeField>
          <CustomizeInlineCheck
            label="Multiple"
            checked={multiple}
            onChange={(e) => setMultiple(e.target.checked)}
          />
          <CustomizeInlineCheck
            label="Filterable"
            checked={filterable}
            onChange={(e) => setFilterable(e.target.checked)}
          />
          <CustomizeInlineCheck
            label="Collapse Tags"
            checked={collapseTags && multiple}
            onChange={(e) => setCollapseTags(e.target.checked)}
          />
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={280} className="items-start justify-center">
          <Select
            options={options}
            value={multiple ? multiValue : singleValue}
            onChange={(v) => {
              if (Array.isArray(v)) setMultiValue(v);
              else setSingleValue(v);
            }}
            placeholder={placeholder}
            size={size}
            state={state}
            multiple={multiple}
            filterable={filterable}
            collapseTags={collapseTags}
            dropdownType={dropdownType}
            forceOpen={state === "Focus"}
            disabled={state === "Disabled"}
          />
        </DemoStage>
      }
    />
  );
}

export const selectCode = buildElSelectCode({ size: "Default", disabled: false, multiple: false });
