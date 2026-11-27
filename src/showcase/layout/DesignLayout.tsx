import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/cn";
import {
  designSpecComponentNav,
  docOverviewPath,
  docTokensPath,
  groupByCategory,
  isComponentsAreaPath,
} from "../nav";
import { getShowcaseProduct } from "../showcaseProduct";
import { ProductSwitcher } from "./ProductSwitcher";
import { ComponentsNavMenu } from "./shared-nav";
import { ShowcaseShell } from "./ShowcaseShell";

const designComponentGroups = groupByCategory(designSpecComponentNav, [
  "Basic",
  "Form",
  "Data",
  "Navigation",
  "Feedback",
  "Module",
  "Others",
]);

/** 设计规范：设计令牌 + 组件（含 Layout，不含模板） */
export function DesignLayout() {
  const location = useLocation();
  const onComponents = isComponentsAreaPath(location.pathname);
  const product = getShowcaseProduct();

  return (
    <ShowcaseShell
      nav={
        <>
          {product === "all" || product === "doc" ? <ProductSwitcher /> : null}
          <NavLink
            to={docTokensPath()}
            className={({ isActive }) =>
              cn("showcase-sidebar-l1", isActive && "is-active")
            }
          >
            设计令牌
          </NavLink>
          <NavLink
            to={docOverviewPath()}
            className={({ isActive }) =>
              cn("showcase-sidebar-l1", isActive && "is-active")
            }
          >
            规范说明
          </NavLink>
          <ComponentsNavMenu groups={designComponentGroups} areaActive={onComponents} />
        </>
      }
    />
  );
}