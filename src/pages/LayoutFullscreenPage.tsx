import { Link, Navigate, useParams } from "react-router-dom";
import { DashboardShell } from "@/templates/layout/DashboardShell";
import {
  LAYOUT_FRAME_SPECS,
  type FigmaLayoutVariant,
} from "@/templates/layout/layoutFrameSpecs";
import { layoutShowcasePath } from "@/showcase/nav";
import "./layout-fullscreen-page.css";

function isLayoutVariant(slug: string): slug is FigmaLayoutVariant {
  return slug in LAYOUT_FRAME_SPECS;
}

/** 全屏 Layout 帧预览（无 Showcase 侧栏） */
export function LayoutFullscreenPage() {
  const { slug = "" } = useParams();

  if (!isLayoutVariant(slug)) {
    return <Navigate to="/layout/layout-01" replace />;
  }

  return (
    <div className="pt-layout-fullscreen-page">
      <div className="pt-layout-fullscreen-page__toolbar">
        <Link
          to={layoutShowcasePath(slug)}
          className="text-sm text-[color:var(--el-color-primary)] hover:opacity-80"
        >
          返回文档
        </Link>
      </div>
      <DashboardShell variant={slug} className="pt-layout-fullscreen-page__shell" />
    </div>
  );
}
