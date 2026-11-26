import { Link } from "react-router-dom";
import {
  defaultDesktopPath,
  docOverviewPath,
  docTokensPath,
  templateShowcasePath,
} from "../nav";

export function ExplorePage() {
  return (
    <div className="mx-auto max-w-3xl prose prose-sm dark:prose-invert">
      <h1 className="text-3xl font-bold">探索 · PacsTrust Design</h1>
      <p className="text-[color:var(--ds-text-regular)]">
        站点结构对齐{" "}
        <a
          href="https://eds-ued.github.io/eds-doc/explore"
          className="text-[color:var(--el-color-primary)]"
          target="_blank"
          rel="noreferrer"
        >
          EDS Doc
        </a>{" "}
        与{" "}
        <a
          href="https://eds-ued.github.io/eds-desktop/components/button-text"
          className="text-[color:var(--el-color-primary)]"
          target="_blank"
          rel="noreferrer"
        >
          EDS Desktop
        </a>
        ：设计文档与界面展示分开入口，互不混在侧栏。
      </p>
      <ul className="mt-6 list-disc space-y-3 pl-5 text-[color:var(--ds-text-regular)]">
        <li>
          <strong>设计文档</strong> —{" "}
          <Link to={docTokensPath()} className="text-[color:var(--el-color-primary)]">
            设计令牌
          </Link>
          、
          <Link to={docOverviewPath()} className="text-[color:var(--el-color-primary)]">
            规范说明
          </Link>
          （Foundation / Spec）
        </li>
        <li>
          <strong>Desktop 展示</strong> —{" "}
          <Link to={defaultDesktopPath} className="text-[color:var(--el-color-primary)]">
            组件预览
          </Link>
          、
          <Link
            to={templateShowcasePath("login")}
            className="text-[color:var(--el-color-primary)]"
          >
            模板界面
          </Link>
          （Layout 帧在设计规范的「组件 → Layout」）
          （可交互 / 全屏示例）
        </li>
      </ul>
    </div>
  );
}