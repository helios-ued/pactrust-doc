import { Drawer, type DrawerLayout } from "@/components/Drawer/Drawer";
import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElDrawerCode } from "../lib/elementPlusCode/builders";
import {
  CustomizeField,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import type { ShowcaseDemoProps } from "./types";

const layouts: DrawerLayout[] = ["Left", "Right", "Top", "Bottom"];

export function DrawerDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [layout, setLayout] = useState<DrawerLayout>("Right");

  useReportElementPlusCode(reportElementPlusCode, () => buildElDrawerCode({ layout }), [layout]);

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Layout">
            <CustomizeSelect value={layout} onChange={(e) => setLayout(e.target.value as DrawerLayout)}>
              {layouts.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
        </CustomizeToolbar>
      }
      preview={
        <DemoStage className="!items-stretch !justify-stretch !p-0">
          <div className="pt-drawer-preview-host">
            <Drawer layout={layout} />
          </div>
        </DemoStage>
      }
    />
  );
}

export const drawerDemoCode = buildElDrawerCode({ layout: "Right" });
