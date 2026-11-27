export type DocNavLink = {
  label: string;
  to: string;
  implemented?: boolean;
};

export type DocNavGroup = {
  title: string;
  items: DocNavLink[];
};

export type DocRailSection = {
  id: string;
  label: string;
  /** 点击图标后的默认入口 */
  entry: string;
  groups: DocNavGroup[];
};

export const docRailSections: DocRailSection[] = [
  {
    id: "explore",
    label: "探索",
    entry: "/explore",
    groups: [
      {
        title: "简介",
        items: [{ label: "探索", to: "/explore", implemented: true }],
      },
    ],
  },
  {
    id: "started",
    label: "入门",
    entry: "/started/overview",
    groups: [
      {
        title: "简介",
        items: [{ label: "了解入门", to: "/started/overview", implemented: true }],
      },
    ],
  },
  {
    id: "atoms",
    label: "原子",
    entry: "/atoms/color-system",
    groups: [
      {
        title: "全局变量",
        items: [
          { label: "Color System", to: "/atoms/color-system", implemented: true },
          { label: "Scale System", to: "/atoms/scale-system", implemented: true },
          { label: "Typography", to: "/atoms/typography", implemented: false },
          { label: "Text Styles", to: "/atoms/text-styles", implemented: false },
        ],
      },
      {
        title: "核心元件",
        items: [
          { label: "Icons", to: "/atoms/icons", implemented: false },
        ],
      },
    ],
  },
  {
    id: "molecules",
    label: "分子",
    entry: "/molecules/overview",
    groups: [
      {
        title: "简介",
        items: [{ label: "了解分子", to: "/molecules/overview", implemented: false }],
      },
    ],
  },
];

export function docSectionIdFromPath(pathname: string): string {
  const seg = pathname.split("/").filter(Boolean)[0];
  if (seg && docRailSections.some((s) => s.id === seg)) return seg;
  return "atoms";
}

export function docSectionById(id: string): DocRailSection {
  return docRailSections.find((s) => s.id === id) ?? docRailSections[2];
}