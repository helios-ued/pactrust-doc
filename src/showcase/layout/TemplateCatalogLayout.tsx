import { cn } from "@/lib/cn";
import { isUiShowcaseAreaPath, templateSidebarNav } from "../nav";
import { getShowcaseProduct } from "../showcaseProduct";
import { ProductSwitcher } from "./ProductSwitcher";
import { TemplateFlatNav } from "./shared-nav";
import { ShowcaseShell } from "./ShowcaseShell";
import { useLocation } from "react-router-dom";

/** Desktop 展示：仅模板界面（图 1 列表） */
export function TemplateCatalogLayout() {
  const location = useLocation();
  const onUi = isUiShowcaseAreaPath(location.pathname);
  const product = getShowcaseProduct();

  return (
    <ShowcaseShell
      nav={
        <>
          {product === "all" ? <ProductSwitcher /> : null}
          <p
            className={cn(
              "showcase-sidebar-section-title px-3 py-2 text-xs font-semibold text-[color:var(--ds-text-secondary)]",
              onUi && "text-[color:var(--ds-text-primary)]",
            )}
          >
            Desktop 展示 · 模板
          </p>
          <TemplateFlatNav items={templateSidebarNav} />
        </>
      }
    />
  );
}