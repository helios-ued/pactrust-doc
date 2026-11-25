import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElInputTagCode } from "../lib/elementPlusCode";
import {
  InputTag,
  type InputTagSize,
  type InputTagState,
} from "@/components/InputTag/InputTag";
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

const sizes: InputTagSize[] = ["Default", "Large", "Small"];
const states: InputTagState[] = ["Default", "Hover", "Focus", "Disabled"];

export function InputTagDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [size, setSize] = useState<InputTagSize>("Default");
  const [state, setState] = useState<InputTagState>("Default");
  const [prefixIcon, setPrefixIcon] = useState(true);
  const [suffixIcon, setSuffixIcon] = useState(true);
  const [forceInput, setForceInput] = useState<boolean | "auto">("auto");
  const [placeholder, setPlaceholder] = useState("Please input");
  const [tags, setTags] = useState<string[]>(["Tag", "Tag"]);

  const previewTags =
    forceInput === "auto" ? tags : forceInput ? ["Tag", "Tag"] : [];

  useReportElementPlusCode(reportElementPlusCode, () => buildElInputTagCode(), []);

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Size">
            <CustomizeSelect
              value={size}
              onChange={(e) => setSize(e.target.value as InputTagSize)}
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
              onChange={(e) => setState(e.target.value as InputTagState)}
            >
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Input">
            <CustomizeSelect
              value={forceInput === "auto" ? "auto" : forceInput ? "True" : "False"}
              onChange={(e) => {
                const v = e.target.value;
                setForceInput(v === "auto" ? "auto" : v === "True");
              }}
            >
              <option value="auto">Auto</option>
              <option value="True">True</option>
              <option value="False">False</option>
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeInlineCheck
            label="Prefix Icon"
            checked={prefixIcon}
            onChange={(e) => setPrefixIcon(e.target.checked)}
          />
          <CustomizeInlineCheck
            label="Suffix Icon"
            checked={suffixIcon}
            onChange={(e) => setSuffixIcon(e.target.checked)}
          />
          <CustomizeField label="Placeholder" wide>
            <CustomizeInput value={placeholder} onChange={(e) => setPlaceholder(e.target.value)} />
          </CustomizeField>
        </CustomizeToolbar>
      }
      preview={
        <DemoStage>
          <InputTag
            key={forceInput === "auto" ? "auto" : forceInput ? "on" : "off"}
            size={size}
            state={state}
            prefixIcon={prefixIcon}
            suffixIcon={suffixIcon}
            placeholder={placeholder}
            value={previewTags}
            onChange={forceInput === "auto" ? setTags : undefined}
          />
        </DemoStage>
      }
    />
  );
}

export const inputTagDemoCode = buildElInputTagCode();
