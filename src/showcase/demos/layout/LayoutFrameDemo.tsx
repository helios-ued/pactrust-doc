import { DashboardShell } from "@/templates/layout/DashboardShell";
import type { FigmaLayoutVariant } from "@/templates/layout/layoutFrameSpecs";
import type { ShowcaseDemoProps } from "../types";
import "./layout-frame-demo.css";

export type LayoutFrameDemoProps = ShowcaseDemoProps & {
  variant?: FigmaLayoutVariant;
};

export function LayoutFrameDemo({ variant = "layout-01" }: LayoutFrameDemoProps) {
  return (
    <div className="pt-frame-demo-viewport pt-layout-frame-demo">
      <DashboardShell variant={variant} />
    </div>
  );
}

export const layoutFrameDemoCode = `import { DashboardShell } from "@/templates/layout/DashboardShell";

export function MyPage() {
  return (
    <DashboardShell variant="layout-01" pageTitle="个人中心">
      {/* 页面内容 */}
    </DashboardShell>
  );
}`;
