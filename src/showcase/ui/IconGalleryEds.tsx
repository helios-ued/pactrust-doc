import { useMemo, useState } from "react";
import { EdsIcon } from "@/components/Icon/EdsIcon";
import { EpIcon } from "@/components/Icon/EpIcon";
import {
  figmaIconCategories,
  figmaIconTotalCount,
  resolveEpManifestItem,
} from "@/components/Icon/figmaIconCatalog";
import { IconSearch } from "@/components/Icon/icons";
import type { ShowcaseIcon } from "@/components/Icon/showcaseIconTypes";
import { cn } from "@/lib/cn";

const sizePx = { Default: 20, Large: 24, Small: 16 } as const;

export type IconGallerySize = keyof typeof sizePx;

function buildShowcaseIcons(): ShowcaseIcon[] {
  const out: ShowcaseIcon[] = [];
  for (const cat of figmaIconCategories) {
    if (cat.kind === "ep") {
      for (const icon of cat.icons) {
        if (icon.missing) continue;
        const epItem = resolveEpManifestItem(icon.id);
        if (!epItem) continue;
        out.push({ kind: "ep", id: icon.id, name: icon.name, epItem });
      }
    } else {
      for (const icon of cat.icons) {
        if (!icon.svg) continue;
        out.push({ kind: "eds", id: icon.id, figmaName: icon.figmaName, svg: icon.svg });
      }
    }
  }
  return out;
}

const allShowcaseIcons = buildShowcaseIcons();

function matchesQuery(item: ShowcaseIcon, q: string): boolean {
  const hay =
    item.kind === "ep"
      ? [item.id, item.name, item.name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()].join(" ")
      : [item.id, item.figmaName].join(" ");
  return hay.toLowerCase().includes(q);
}

export type IconGalleryEdsProps = {
  size?: IconGallerySize;
  query?: string;
  onQueryChange?: (q: string) => void;
  onSelect?: (item: ShowcaseIcon) => void;
  selectedId?: string | null;
  embedded?: boolean;
  /** flat：EDS 单网格；sections：按 Figma 分类 */
  layout?: "flat" | "sections";
  /** 文档页：分类列表随右侧内容区滚动，不嵌套固定高度滚动条 */
  fullPage?: boolean;
};

function IconGrid({
  icons,
  px,
  selectedId,
  onSelect,
}: {
  icons: ShowcaseIcon[];
  px: number;
  selectedId?: string | null;
  onSelect?: (item: ShowcaseIcon) => void;
}) {
  return (
    <ul className="grid grid-cols-4 gap-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7">
      {icons.map((item) => (
        <li key={item.id}>
          <button
            type="button"
            title={item.kind === "ep" ? item.id : item.figmaName}
            className={cn(
              "flex w-full flex-col items-center rounded-el-base px-1 py-2.5 transition-colors",
              "bg-[color:var(--ds-bg-muted)] hover:bg-[color:var(--el-border-color-light)]",
              selectedId === item.id &&
                "bg-[color:var(--el-border-color-light)] ring-1 ring-inset ring-[color:var(--el-color-primary-light-5)]",
            )}
            onClick={() => onSelect?.(item)}
          >
            <span className="flex h-10 w-full items-center justify-center text-el-text-primary">
              {item.kind === "ep" ? (
                <EpIcon item={item.epItem} size={px} />
              ) : (
                <EdsIcon svg={item.svg} size={px} />
              )}
            </span>
            <span className="mt-2 line-clamp-2 w-full px-0.5 text-center font-mono text-[10px] leading-[1.25] text-el-text-secondary">
              {item.id}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}

/** Figma 1-Icon 页：Element Plus 分类 + PacsTrust eds 分类 */
export function IconGalleryEds({
  size = "Default",
  query: controlledQuery,
  onQueryChange,
  onSelect,
  selectedId,
  embedded = false,
  layout = "sections",
  fullPage = false,
}: IconGalleryEdsProps) {
  const [internalQuery, setInternalQuery] = useState("");
  const query = controlledQuery ?? internalQuery;
  const setQuery = onQueryChange ?? setInternalQuery;
  const q = query.trim().toLowerCase();
  const px = sizePx[size];

  const flatIcons = useMemo(() => {
    if (layout !== "flat") return [];
    return allShowcaseIcons.filter((item) => !q || matchesQuery(item, q));
  }, [layout, q]);

  const sections = useMemo(() => {
    if (layout === "flat") return [];
    return figmaIconCategories
      .map((cat) => {
        const icons: ShowcaseIcon[] = [];
        if (cat.kind === "ep") {
          for (const icon of cat.icons) {
            if (icon.missing) continue;
            const epItem = resolveEpManifestItem(icon.id);
            if (!epItem) continue;
            const item: ShowcaseIcon = { kind: "ep", id: icon.id, name: icon.name, epItem };
            if (q && !matchesQuery(item, q)) continue;
            icons.push(item);
          }
        } else {
          for (const icon of cat.icons) {
            if (!icon.svg) continue;
            const item: ShowcaseIcon = {
              kind: "eds",
              id: icon.id,
              figmaName: icon.figmaName,
              svg: icon.svg,
            };
            if (q && !matchesQuery(item, q)) continue;
            icons.push(item);
          }
        }
        return { id: cat.id, label: cat.label, icons };
      })
      .filter((s) => s.icons.length > 0);
  }, [layout, q]);

  const visibleCount =
    layout === "flat" ? flatIcons.length : sections.reduce((n, s) => n + s.icons.length, 0);

  return (
    <div className="flex w-full flex-col gap-4 text-left">
      {!embedded ? (
        <>
          <h1 className="text-2xl font-bold tracking-tight text-el-text-primary md:text-3xl">EgIcon</h1>
          {layout === "flat" ? (
            <p className="text-sm leading-relaxed text-el-text-secondary">
              共{" "}
              <span className="font-medium text-el-text-primary">{allShowcaseIcons.length}</span> 个可展示图标
              {q ? (
                <>
                  {" "}
                  · 搜索命中 <span className="font-medium text-el-text-primary">{visibleCount}</span> 个
                </>
              ) : null}
              ；name 与图库 id 一致（Element Plus 为 ep-*，PacsTrust 扩展为 eds-*）。
            </p>
          ) : (
            <p className="text-sm leading-relaxed text-el-text-regular">
              与 Figma「1-Icon 图标」一致：Element Plus 九类 + PacsTrust 扩展 eds；共{" "}
              <span className="font-medium text-el-text-primary">{figmaIconTotalCount}</span> 个可展示图标
              {q ? (
                <>
                  {" "}
                  · 搜索命中 <span className="font-medium">{visibleCount}</span> 个
                </>
              ) : null}
            </p>
          )}
        </>
      ) : (
        <p className="text-sm text-el-text-regular">
          Figma 分类共 <span className="font-medium text-el-text-primary">{figmaIconTotalCount}</span> 个 ·
          当前 <span className="font-medium">{visibleCount}</span> 个
        </p>
      )}

      <div className="relative">
        <IconSearch
          width={16}
          height={16}
          className="pointer-events-none absolute left-3 top-1/2 z-[1] -translate-y-1/2 text-el-text-placeholder"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={layout === "flat" ? "例如 eds-add 或 ep-search" : "例如 ep-search、Action/search、Document/PDF"}
          aria-label="搜索图标"
          className={cn(
            "h-10 w-full rounded-el-base border-0 bg-[color:var(--ds-bg-muted)]",
            "pl-9 pr-3 text-sm text-el-text-primary outline-none",
            "ring-1 ring-inset ring-transparent focus:ring-[color:var(--el-color-primary-light-5)]",
          )}
        />
      </div>

      {visibleCount === 0 ? (
        <p className="py-12 text-center text-sm text-el-text-secondary">无匹配图标</p>
      ) : layout === "flat" ? (
        <IconGrid icons={flatIcons} px={px} selectedId={selectedId} onSelect={onSelect} />
      ) : (
        (() => {
          const categoryList = (
            <div className="flex flex-col gap-8">
              {sections.map((section) => (
                <section key={section.id} aria-labelledby={`icon-cat-${section.id}`}>
                  <h3
                    id={`icon-cat-${section.id}`}
                    className="mb-3 border-b border-[color:var(--el-border-color-lighter)] py-1 text-sm font-semibold text-el-text-primary"
                  >
                    {section.label}
                    <span className="ml-2 font-normal text-el-text-secondary">
                      ({section.icons.length})
                    </span>
                  </h3>
                  <IconGrid icons={section.icons} px={px} selectedId={selectedId} onSelect={onSelect} />
                </section>
              ))}
            </div>
          );

          if (fullPage) return categoryList;

          return (
            <div
              className="max-h-[min(560px,60vh)] overflow-y-auto overscroll-contain pr-1"
              style={{ scrollbarWidth: "thin" }}
            >
              {categoryList}
            </div>
          );
        })()
      )}
    </div>
  );
}

export { allShowcaseIcons };
