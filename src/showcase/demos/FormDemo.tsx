import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElFormCode } from "../lib/elementPlusCode";
import { Button } from "@/components/Button/Button";
import { Form, FormActions, FormItems } from "@/components/Form/Form";
import { FormItem } from "@/components/Form/FormItem";
import type { FormLabelAlign, FormLabelSize, FormLayout } from "@/components/Form/formContext";
import { Input } from "@/components/Input/Input";
import { Select } from "@/components/Select/Select";
import { Switch } from "@/components/Switch/Switch";
import { Textarea } from "@/components/Textarea/Textarea";
import {
  CustomizeField,
  CustomizeInlineCheck,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import type { ShowcaseDemoProps } from "./types";

type DemoItemType = "Input" | "Text field" | "Select" | "Switch";

const layouts: FormLayout[] = ["Horizontal", "Vertical"];
const labelSizes: FormLabelSize[] = ["Default", "Large", "Small"];
const labelAligns: FormLabelAlign[] = ["Left", "Right"];
const itemTypes: DemoItemType[] = ["Input", "Text field", "Select", "Switch"];

function DemoControl({ type, size }: { type: DemoItemType; size: FormLabelSize }) {
  const inputSize = size === "Large" ? "Large" : size === "Small" ? "Small" : "Default";
  switch (type) {
    case "Text field":
      return <Textarea placeholder="Please input" />;
    case "Select":
      return (
        <Select
          size={inputSize}
          defaultValue=""
          options={[
            { label: "Please select", value: "" },
            { label: "Option A", value: "a" },
            { label: "Option B", value: "b" },
          ]}
        />
      );
    case "Switch":
      return <Switch />;
    default:
      return <Input size={inputSize} placeholder="Please input" />;
  }
}

export function FormDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [layout, setLayout] = useState<FormLayout>("Horizontal");
  const [labelSize, setLabelSize] = useState<FormLabelSize>("Default");
  const [labelAlign, setLabelAlign] = useState<FormLabelAlign>("Right");
  const [itemType, setItemType] = useState<DemoItemType>("Input");
  const [required, setRequired] = useState(true);
  const [info, setInfo] = useState(true);
  const [showPrompt, setShowPrompt] = useState(true);
  const [showActions, setShowActions] = useState(true);

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElFormCode({ layout, labelAlign }),
    [layout, labelAlign],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Layout">
            <CustomizeSelect
              value={layout}
              onChange={(e) => setLayout(e.target.value as FormLayout)}
            >
              {layouts.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Label Size">
            <CustomizeSelect
              value={labelSize}
              onChange={(e) => setLabelSize(e.target.value as FormLabelSize)}
            >
              {labelSizes.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          {layout === "Horizontal" ? (
            <CustomizeField label="Label Align">
              <CustomizeSelect
                value={labelAlign}
                onChange={(e) => setLabelAlign(e.target.value as FormLabelAlign)}
              >
                {labelAligns.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </CustomizeSelect>
            </CustomizeField>
          ) : null}
          <CustomizeField label="Type">
            <CustomizeSelect
              value={itemType}
              onChange={(e) => setItemType(e.target.value as DemoItemType)}
            >
              {itemTypes.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeInlineCheck label="Required" checked={required} onChange={(e) => setRequired(e.target.checked)} />
          <CustomizeInlineCheck label="Info" checked={info} onChange={(e) => setInfo(e.target.checked)} />
          <CustomizeInlineCheck
            label="Prompt"
            checked={showPrompt}
            onChange={(e) => setShowPrompt(e.target.checked)}
          />
          <CustomizeInlineCheck
            label="Actions"
            checked={showActions}
            onChange={(e) => setShowActions(e.target.checked)}
          />
        </CustomizeToolbar>
      }
      preview={
        <DemoStage className="items-stretch">
          <Form layout={layout} labelSize={labelSize} labelAlign={labelAlign}>
            <FormItems>
              <FormItem
                label="Label"
                required={required}
                info={info}
                prompt={showPrompt ? "This is the prompt" : undefined}
              >
                <DemoControl type={itemType} size={labelSize} />
              </FormItem>
              <FormItem label="Label" required={required} info={info}>
                <DemoControl type="Input" size={labelSize} />
              </FormItem>
              <FormItem label="Label" required={required} info={info}>
                <DemoControl type="Input" size={labelSize} />
              </FormItem>
            </FormItems>
            {showActions ? (
              <FormActions>
                <Button buttonType="Primary" size="Default" className="w-auto">
                  Create
                </Button>
                <Button buttonType="Default" size="Default" className="w-auto">
                  Cancel
                </Button>
              </FormActions>
            ) : null}
          </Form>
        </DemoStage>
      }
    />
  );
}

export const formDemoCode = buildElFormCode({ layout: "Horizontal", labelAlign: "Right" });
