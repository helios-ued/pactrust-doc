import { Checkbox } from "@/components/Checkbox/Checkbox";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import { useState } from "react";
import {
  DEFAULT_CUSTOM_GROUPS,
  DEFAULT_SYSTEM_GROUPS,
  PERMISSION_MATRIX_ROWS,
} from "./permissionMatrixData";
import { GroupAddIcon } from "./GroupAddIcon";
import "./permission-management.css";

function PermissionMatrix() {
  return (
    <div className="pt-perm-matrix__table-wrap">
      <table className="pt-perm-matrix__table">
        <thead>
          <tr>
            <th className="pt-perm-matrix__col-module">模块</th>
            <th className="pt-perm-matrix__col-module">模块</th>
            <th className="pt-perm-matrix__col-actions">模块</th>
          </tr>
        </thead>
        <tbody>
          {PERMISSION_MATRIX_ROWS.map((row) => (
            <tr key={row.id}>
              {row.col1 ? (
                <td
                  rowSpan={row.col1RowSpan ?? 1}
                  className="pt-perm-matrix__col-module pt-perm-matrix__col-module--span"
                >
                  <Checkbox label={row.col1} />
                </td>
              ) : null}
              <td className="pt-perm-matrix__col-module">
                {row.col2 ? <Checkbox label={row.col2} /> : null}
              </td>
              <td className="pt-perm-matrix__col-actions">
                {row.col3?.length ? (
                  <div className="pt-perm-matrix__cell-checks">
                    {row.col3.map((label) => (
                      <Checkbox key={label} label={label} />
                    ))}
                  </div>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PermissionManagementPanel() {
  const [activeGroup, setActiveGroup] = useState("UI设计");

  return (
    <div className="pt-perm-page">
      <section className="pt-perm-panel pt-perm-panel--groups" aria-label="用户组">
        <header className="pt-perm-panel__header">用户组</header>
        <div className="pt-perm-groups__section">
          <h3 className="pt-perm-groups__title">
            <span>系统默认</span>
          </h3>
          <div className="pt-perm-groups__list">
            {DEFAULT_SYSTEM_GROUPS.map((name) => (
              <button
                key={name}
                type="button"
                className={cn(
                  "pt-perm-groups__item",
                  activeGroup === name && "is-active",
                )}
                onClick={() => setActiveGroup(name)}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
        <div className="pt-perm-groups__divider" role="separator" aria-hidden />
        <div className="pt-perm-groups__section">
          <h3 className="pt-perm-groups__title">
            <span>自定义分组</span>
            <button type="button" className="pt-perm-groups__add" aria-label="添加分组">
              <GroupAddIcon />
            </button>
          </h3>
          <div className="pt-perm-groups__list">
            {DEFAULT_CUSTOM_GROUPS.map((name) => (
              <button
                key={name}
                type="button"
                className={cn(
                  "pt-perm-groups__item",
                  activeGroup === name && "is-active",
                )}
                onClick={() => setActiveGroup(name)}
              >
                <span>{name}</span>
                {name === "UI设计" ? (
                  <span className="pt-perm-groups__item-more">
                    <EpIconByName name="MoreFilled" size={12} />
                  </span>
                ) : null}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section
        className="pt-perm-panel pt-perm-panel--matrix"
        aria-label="权限管理"
        data-node-id="8370:13262"
      >
        <header className="pt-perm-panel__header">权限管理</header>
        <div className="pt-perm-matrix__body">
          <PermissionMatrix />
        </div>
      </section>
    </div>
  );
}
