import { DocPageChrome } from "../DocChrome";

export function DocExploreInShellPage() {
  return (
    <DocPageChrome
      title="探索"
      meta={[
        { label: "名称", value: "Explore" },
        { label: "状态", value: "已启用" },
      ]}
      toc={[{ id: "map", label: "文档地图", level: 2 }]}
    >
      <section id="map">
        <h2>文档地图</h2>
        <p>
          左侧图标栏切换分层：入门、原子（全局变量）、分子（筹备中）。色彩系统入口：
          <code>/atoms/color-system</code>，对齐{" "}
          <a
            href="https://eds-ued.github.io/eds-doc/atoms/color-system"
            className="text-[color:var(--el-color-primary)]"
            target="_blank"
            rel="noreferrer"
          >
            EDS Doc · Color System
          </a>
          的信息架构。
        </p>
      </section>
    </DocPageChrome>
  );
}