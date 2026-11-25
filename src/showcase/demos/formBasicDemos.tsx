import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import {
  buildElIconButtonCode,
  buildElMixedInputCode,
  buildElPasswordCode,
  buildElSplitterCode,
  buildElStubCode,
  buildElTextareaCode,
} from "../lib/elementPlusCode";
import { IconButton } from "@/components/Button/IconButton";
import { Password } from "@/components/Input/Password";
import { Textarea } from "@/components/Textarea/Textarea";
import { MixedInput } from "@/components/Input/MixedInput";
import { Splitter } from "@/components/Splitter/Splitter";
import { SpecPlaceholder } from "../ui/SpecPlaceholder";
import type { ShowcaseDemoProps } from "./types";
import {
  CustomizeBooleanField,
  CustomizeField,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";

export { ButtonGroupDemo, buttonGroupCode } from "./ButtonGroupDemo";

export const passwordCode = buildElPasswordCode({ showPassword: true });
export const textareaCode = buildElTextareaCode({});
export const mixedInputCode = buildElMixedInputCode();
export const splitterCode = buildElSplitterCode("horizontal");
export const iconButtonCode = buildElIconButtonCode({ type: "Primary" });

export function IconButtonDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElIconButtonCode({ type: "Primary", plain: false, round: false }),
    [],
  );
  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      preview={
      <DemoStage className="gap-4">
      <IconButton buttonType="Primary" round={false} />
      <IconButton buttonType="Primary" round plain />
      </DemoStage>
    }
    />
  );
}

export { SpaceDemo, spaceDemoCode } from "./SpaceDemo";

export function PasswordDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [display, setDisplay] = useState(true);
  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElPasswordCode({ showPassword: display }),
    [display],
  );
  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeBooleanField
            label="Display（明文切换）"
            checked={display}
            onChange={(e) => setDisplay(e.target.checked)}
          />
        </CustomizeToolbar>
      }
      preview={
        <DemoStage>
          <div className="mx-auto w-full max-w-xs">
            <Password display={display} placeholder="密码" />
          </div>
        </DemoStage>
      }
    />
  );
}

export function TextareaDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  useReportElementPlusCode(reportElementPlusCode, () => buildElTextareaCode({}), []);
  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      preview={
      <DemoStage>
        <div className="mx-auto w-full max-w-md">
          <Textarea placeholder="请输入多行文本" defaultValue="" />
        </div>
      </DemoStage>
    }
    />
  );
}

export { SwitchDemo, switchCode } from "./SwitchDemo";

export { SelectDemo, selectCode } from "./SelectDemo";

export { CascaderDemo, cascaderCode } from "./CascaderDemo";

export { DatePickerDemo, datePickerDemoCode } from "./DatePickerDemo";

export { DateTimePickerDemo, dateTimePickerDemoCode } from "./DateTimePickerDemo";

export { IconDemo, iconDemoCode } from "./IconDemo";

export { ScrollbarDemo, scrollbarCode } from "./ScrollbarDemo";

export function SplitterDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [dir, setDir] = useState<"horizontal" | "vertical">("horizontal");
  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElSplitterCode(dir),
    [dir],
  );
  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="方向">
            <CustomizeSelect
              value={dir}
              onChange={(e) => setDir(e.target.value as "horizontal" | "vertical")}
            >
              <option value="horizontal">Horizontal</option>
              <option value="vertical">Vertical</option>
            </CustomizeSelect>
          </CustomizeField>
        </CustomizeToolbar>
      }
      preview={
        <DemoStage className="items-stretch">
          <div className="mx-auto w-full max-w-xl">
            <Splitter
              direction={dir}
              first={<span>面板 A · 可拖拽分隔条</span>}
              second={<span>面板 B</span>}
            />
          </div>
        </DemoStage>
      }
    />
  );
}

export { ColorPickerPanelDemo, colorPickerPanelDemoCode } from "./ColorPickerPanelDemo";

export { ColorPickerDemo, colorPickerDemoCode } from "./ColorPickerDemo";

export { InputTagDemo, inputTagDemoCode } from "./InputTagDemo";

export { InputOTPDemo, inputOtpDemoCode } from "./InputOTPDemo";

export function MixedInputDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  useReportElementPlusCode(reportElementPlusCode, () => buildElMixedInputCode(), []);
  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      preview={
      <DemoStage className="items-stretch">
        <div className="mx-auto w-full max-w-md space-y-4">
          <MixedInput prefix="https://" placeholder="example.com" defaultValue="" />
          <MixedInput suffix=".com" placeholder="子域名" />
        </div>
      </DemoStage>
    }
    />
  );
}

export { SliderDemo, sliderCode } from "./SliderDemo";

export { InputNumberDemo, inputNumberDemoCode } from "./InputNumberDemo";

export { RateDemo, rateCode } from "./RateDemo";

export { TimePickerDemo, timePickerCode } from "./TimePickerDemo";

export { TimeSelectDemo, timeSelectDemoCode } from "./TimeSelectDemo";

export { TransferDemo, transferDemoCode } from "./TransferDemo";
export { UploadDemo, uploadDemoCode } from "./UploadDemo";

export { FormDemo, formDemoCode } from "./FormDemo";

export function makeSpecDemo(name: string, nodeId: string, variants: string[], elMapping?: string) {
  return function SpecDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
    useReportElementPlusCode(
      reportElementPlusCode,
      () => buildElStubCode(elMapping ?? "el-component", name),
      [name, elMapping],
    );
    return (
      <CustomizeRoot
        part={part}
      splitRender={splitRender}
        preview={
          <DemoStage className="items-stretch">
            <SpecPlaceholder name={name} nodeId={nodeId} variants={variants} />
          </DemoStage>
        }
      />
    );
  };
}
