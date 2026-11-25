import { useState } from "react";
import { buildElIconCode } from "../lib/elementPlusCode";
import { IconGalleryEds } from "../ui/IconGalleryEds";
import type { ShowcaseDemoProps } from "./types";

/** Icon 文档页：EDS 式图库（搜索 + 按 Figma 分类网格），无定制区 / 预览区 */
export function IconDemo(_props: ShowcaseDemoProps = {}) {
  const [query, setQuery] = useState("");
  return (
    <IconGalleryEds layout="sections" fullPage query={query} onQueryChange={setQuery} />
  );
}

export const iconDemoCode = buildElIconCode();
