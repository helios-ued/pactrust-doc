import { useEffect, useState, type RefObject } from "react";

/** 壳层宽度 &lt; 1000px 时侧栏收起到 Unfold off（58px 图标轨，Figma `3313:56233`） */
export const LAYOUT_SIDEBAR_EXPAND_MIN_WIDTH = 1000;

export function useLayoutSidebarNarrow(
  shellRef: RefObject<HTMLElement | null>,
): boolean {
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const el = shellRef.current;
    if (!el) return;

    const measure = () => {
      const w = el.getBoundingClientRect().width;
      setNarrow(w < LAYOUT_SIDEBAR_EXPAND_MIN_WIDTH);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [shellRef]);

  return narrow;
}
