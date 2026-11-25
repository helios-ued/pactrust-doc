import { useEffect, type DependencyList } from "react";

/** 定制区变更时同步 Element Plus（Vue 3）示例到「代码」Tab */
export function useReportElementPlusCode(
  report: ((code: string) => void) | undefined,
  build: () => string,
  deps: DependencyList,
) {
  useEffect(() => {
    report?.(build());
    // eslint-disable-next-line react-hooks/exhaustive-deps -- build 由 deps 驱动
  }, [report, ...deps]);
}
