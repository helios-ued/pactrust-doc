import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElAlertCode } from "../lib/elementPlusCode";
import {
  Alert,
  type AlertAlign,
  type AlertCloseType,
  type AlertState,
  type AlertStyle,
} from "@/components/Alert/Alert";
import {
  CustomizeField,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import type { ShowcaseDemoProps } from "./types";

export function AlertDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [state, setState] = useState<AlertState>("Primary");
  const [style, setStyle] = useState<AlertStyle>("Default");
  const [align, setAlign] = useState<AlertAlign>("Left");
  const [closeType, setCloseType] = useState<AlertCloseType>("Icon");
  const [withDescription, setWithDescription] = useState(true);
  const [showIcon, setShowIcon] = useState(false);

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElAlertCode({ state, style, align, closeType, withDescription }),
    [state, style, align, closeType, withDescription],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="State">
            <CustomizeSelect value={state} onChange={(e) => setState(e.target.value as AlertState)}>
              {["Primary", "Success", "Warning", "Danger", "Info"].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Style">
            <CustomizeSelect value={style} onChange={(e) => setStyle(e.target.value as AlertStyle)}>
              <option value="Default">Default</option>
              <option value="Fill">Fill</option>
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Align">
            <CustomizeSelect value={align} onChange={(e) => setAlign(e.target.value as AlertAlign)}>
              <option value="Left">Left</option>
              <option value="Center">Center</option>
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Close-type">
            <CustomizeSelect
              value={closeType}
              onChange={(e) => setCloseType(e.target.value as AlertCloseType)}
            >
              <option value="Icon">Icon</option>
              <option value="Text">Text</option>
              <option value="Default">Default</option>
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Description">
            <CustomizeSelect
              value={withDescription ? "true" : "false"}
              onChange={(e) => setWithDescription(e.target.value === "true")}
            >
              <option value="true">true</option>
              <option value="false">false</option>
            </CustomizeSelect>
          </CustomizeField>
          {!withDescription ? (
            <CustomizeField label="Show-icon">
              <CustomizeSelect
                value={showIcon ? "true" : "false"}
                onChange={(e) => setShowIcon(e.target.value === "true")}
              >
                <option value="false">false</option>
                <option value="true">true</option>
              </CustomizeSelect>
            </CustomizeField>
          ) : null}
        </CustomizeToolbar>
      }
      preview={
        <DemoStage className="items-start justify-center">
          <Alert
            state={state}
            style={style}
            align={align}
            closeType={closeType}
            showIcon={withDescription ? true : showIcon}
            title={withDescription ? "here is the title" : "This is a description."}
            description={withDescription ? "more text description" : undefined}
          />
        </DemoStage>
      }
    />
  );
}

export const alertCode = buildElAlertCode({
  state: "Primary",
  style: "Default",
  align: "Left",
  closeType: "Icon",
  withDescription: true,
});
