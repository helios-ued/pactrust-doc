import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElTransferCode } from "../lib/elementPlusCode";
import { Transfer, type TransferButtonType, type TransferLayout } from "@/components/Transfer/Transfer";
import {
  CustomizeField,
  CustomizeInlineCheck,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import type { ShowcaseDemoProps } from "./types";

const transferData = Array.from({ length: 10 }, (_, i) => ({
  key: String(i + 1),
  label: "Option text",
}));

export function TransferDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [keys, setKeys] = useState<string[]>([]);
  const [filterable, setFilterable] = useState(true);
  const [panelFooter, setPanelFooter] = useState(true);
  const [buttonType, setButtonType] = useState<TransferButtonType>("Icon");
  const [layout, setLayout] = useState<TransferLayout>("Horizontal");

  useReportElementPlusCode(reportElementPlusCode, () => buildElTransferCode(), []);

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeInlineCheck
            label="Filterable"
            checked={filterable}
            onChange={(e) => setFilterable(e.target.checked)}
          />
          <CustomizeInlineCheck
            label="Panel footer"
            checked={panelFooter}
            onChange={(e) => setPanelFooter(e.target.checked)}
          />
          <CustomizeField label="Button">
            <CustomizeSelect
              value={buttonType}
              onChange={(e) => setButtonType(e.target.value as TransferButtonType)}
            >
              <option value="Icon">Icon</option>
              <option value="Text">Text</option>
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Layout">
            <CustomizeSelect
              value={layout}
              onChange={(e) => setLayout(e.target.value as TransferLayout)}
            >
              <option value="Horizontal">Horizontal</option>
              <option value="Vertical">Vertical</option>
            </CustomizeSelect>
          </CustomizeField>
        </CustomizeToolbar>
      }
      preview={
        <DemoStage className="items-stretch overflow-x-auto">
          <div className="mx-auto min-w-0">
            <Transfer
              data={transferData}
              value={keys}
              onChange={setKeys}
              filterable={filterable}
              panelFooter={panelFooter}
              buttonType={buttonType}
              layout={layout}
            />
          </div>
        </DemoStage>
      }
    />
  );
}

export const transferDemoCode = buildElTransferCode();
