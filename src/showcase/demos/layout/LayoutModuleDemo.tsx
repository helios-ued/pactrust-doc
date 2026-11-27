import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import type { FigmaLayoutVariant } from "@/templates/layout/layoutFrameSpecs";
import { LAYOUT_FRAME_SPECS } from "@/templates/layout/layoutFrameSpecs";
import {
  CustomizeField,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../../ui/CustomizeLayout";
import type { ShowcaseDemoProps } from "../types";
import { LayoutFrameDemo } from "./LayoutFrameDemo";

const layoutStyles: FigmaLayoutVariant[] = ["layout-01", "layout-02", "layout-03", "layout-04"];

const styleLabels: Record<FigmaLayoutVariant, string> = {
  "layout-01": "Layout-01",
  "layout-02": "Layout-02",
  "layout-03": "Layout-03",
  "layout-04": "Layout-04",
};

export type LayoutModuleDemoProps = ShowcaseDemoProps & {
  /** 由路由 `layout-01`… 重定向或文档注册注入 */
  initialVariant?: FigmaLayoutVariant;
};

export function LayoutModuleDemo({
  part = "all",
  splitRender,
  initialVariant = "layout-01",
}: LayoutModuleDemoProps) {
  const location = useLocation();
  const stateVariant = (location.state as { variant?: FigmaLayoutVariant } | null)?.variant;
  const resolvedInitial = stateVariant ?? initialVariant;
  const [variant, setVariant] = useState<FigmaLayoutVariant>(resolvedInitial);
  const spec = LAYOUT_FRAME_SPECS[variant];

  useEffect(() => {
    setVariant(resolvedInitial);
  }, [resolvedInitial]);

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Style">
            <CustomizeSelect
              value={variant}
              onChange={(e) => setVariant(e.target.value as FigmaLayoutVariant)}
            >
              {layoutStyles.map((v) => (
                <option key={v} value={v}>
                  {styleLabels[v]}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Figma" wide>
            <span className="text-sm text-el-text-regular">{spec.rootNodeId}</span>
          </CustomizeField>
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={560} className="w-full items-stretch !p-2 md:!p-3">
          <LayoutFrameDemo variant={variant} />
        </DemoStage>
      }
    />
  );
}

export const layoutModuleDemoCode = `import { DashboardShell } from "@/templates/layout/DashboardShell";

export function Page() {
  return <DashboardShell variant="layout-01" />;
}`;