import { Menu, MenuItem, MenuSidebarSection } from "@/components/Menu/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import { PROTOTYPE_MENU_GROUPS } from "./prototypeRoutes";

function PrototypeNavItem({
  label,
  path,
}: {
  label: string;
  path: string;
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const selected = location.pathname === path;

  return (
    <MenuItem
      level={2}
      selected={selected}
      onClick={() => navigate(path)}
    >
      {label}
    </MenuItem>
  );
}

/** 中台原型 · 侧栏与 `/examples/*` 联动（对齐 Layout-04 示意菜单） */
export function PrototypeSidebarMenu() {
  const location = useLocation();

  return (
    <Menu menuType="Sidebar" menuSize="Default" embedded>
      {PROTOTYPE_MENU_GROUPS.map((group) => {
        const sectionActive = group.routes.some((r) => location.pathname === r.path);
        return (
          <MenuSidebarSection
            key={group.label}
            label={group.label}
            flyoutTitle={group.flyoutTitle ?? group.label}
            iconId={group.iconId}
            defaultSubExpanded={sectionActive}
            selected={sectionActive && group.routes.length === 1}
          >
            {group.routes.map((route) => (
              <PrototypeNavItem
                key={`${group.label}-${route.slug}-${route.path}`}
                label={route.label}
                path={route.path}
              />
            ))}
          </MenuSidebarSection>
        );
      })}
    </Menu>
  );
}