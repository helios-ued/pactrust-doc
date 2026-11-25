import { Button } from "@/components/Button/Button";
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import { useMemo, useState, type Dispatch, type SetStateAction } from "react";
import "./transfer.css";

export type TransferItem = { key: string; label: string; disabled?: boolean };

export type TransferButtonType = "Icon" | "Text";
export type TransferLayout = "Horizontal" | "Vertical";

export type TransferProps = {
  data: TransferItem[];
  value?: string[];
  defaultValue?: string[];
  onChange?: (keys: string[]) => void;
  filterable?: boolean;
  filterPlaceholder?: string;
  buttonType?: TransferButtonType;
  layout?: TransferLayout;
  panelFooter?: boolean;
  className?: string;
};

function filterItems(list: TransferItem[], query: string) {
  if (!query.trim()) return list;
  const q = query.trim().toLowerCase();
  return list.filter((d) => d.label.toLowerCase().includes(q));
}

export function Transfer({
  data,
  value: controlled,
  defaultValue = [],
  onChange,
  filterable = false,
  filterPlaceholder = "State Abbreviations",
  buttonType = "Icon",
  layout = "Horizontal",
  panelFooter = false,
  className,
}: TransferProps) {
  const [internal, setInternal] = useState(defaultValue);
  const selected = controlled ?? internal;
  const [leftChecked, setLeftChecked] = useState<string[]>([]);
  const [rightChecked, setRightChecked] = useState<string[]>([]);
  const [leftFilter, setLeftFilter] = useState("");
  const [rightFilter, setRightFilter] = useState("");

  const setSelected = (keys: string[]) => {
    if (controlled === undefined) setInternal(keys);
    onChange?.(keys);
  };

  const left = useMemo(
    () => data.filter((d) => !selected.includes(d.key)),
    [data, selected],
  );
  const right = useMemo(
    () => data.filter((d) => selected.includes(d.key)),
    [data, selected],
  );

  const leftVisible = useMemo(() => filterItems(left, leftFilter), [left, leftFilter]);
  const rightVisible = useMemo(() => filterItems(right, rightFilter), [right, rightFilter]);

  const moveRight = () => {
    setSelected([...selected, ...leftChecked]);
    setLeftChecked([]);
  };
  const moveLeft = () => {
    setSelected(selected.filter((k) => !rightChecked.includes(k)));
    setRightChecked([]);
  };

  const togglePanelCheck = (
    key: string,
    checked: boolean,
    setChecked: Dispatch<SetStateAction<string[]>>,
  ) => {
    setChecked((prev) =>
      checked ? [...prev, key] : prev.filter((k) => k !== key),
    );
  };

  const headerSelectAll = (
    list: TransferItem[],
    checked: string[],
    setChecked: (k: string[]) => void,
  ) => {
    const enabled = list.filter((i) => !i.disabled).map((i) => i.key);
    const allOn = enabled.length > 0 && enabled.every((k) => checked.includes(k));
    const partial = !allOn && enabled.some((k) => checked.includes(k));
    return (
      <Checkbox
        size="Default"
        indeterminate={partial}
        checked={allOn}
        disabled={!enabled.length}
        onChange={(e) => setChecked(e.target.checked ? enabled : [])}
        aria-label="Select all"
      />
    );
  };

  const Panel = ({
    side,
    list,
    visible,
    checked,
    setChecked,
    filter,
    setFilter,
    empty,
  }: {
    side: "left" | "right";
    list: TransferItem[];
    visible: TransferItem[];
    checked: string[];
    setChecked: Dispatch<SetStateAction<string[]>>;
    filter: string;
    setFilter: (v: string) => void;
    empty?: boolean;
  }) => (
    <div className="pt-transfer__panel">
      <div className="pt-transfer__header">
        {headerSelectAll(visible, checked, setChecked)}
        <span className="pt-transfer__count">
          {checked.length}/{list.length}
        </span>
      </div>
      <div className="pt-transfer__body">
        {filterable ? (
          <div className="pt-transfer__filter">
            <div className="pt-transfer__filter-input">
              <EpIconByName name="Search" size={14} className="shrink-0 text-el-text-placeholder" />
              <input
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder={filterPlaceholder}
                aria-label={`Filter ${side} panel`}
              />
              {filter ? (
                <button
                  type="button"
                  className="pt-transfer__filter-clear"
                  aria-label="Clear filter"
                  onClick={() => setFilter("")}
                >
                  <EpIconByName name="CircleClose" size={14} />
                </button>
              ) : null}
            </div>
          </div>
        ) : null}
        <div className="pt-transfer__list">
          {visible.map((item) => {
            const isChecked = checked.includes(item.key);
            return (
              <div
                key={item.key}
                role="button"
                tabIndex={item.disabled ? -1 : 0}
                className={cn("pt-transfer__item", item.disabled && "is-disabled")}
                onClick={() => {
                  if (item.disabled) return;
                  togglePanelCheck(item.key, !isChecked, setChecked);
                }}
                onKeyDown={(e) => {
                  if (item.disabled) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    togglePanelCheck(item.key, !isChecked, setChecked);
                  }
                }}
              >
                <Checkbox
                  size="Default"
                  checked={isChecked}
                  disabled={item.disabled}
                  label={item.label}
                  onChange={() => {}}
                />
              </div>
            );
          })}
          {empty && !visible.length ? (
            <div className="pt-transfer__empty">No Data</div>
          ) : null}
        </div>
      </div>
      {panelFooter ? (
        <div className="pt-transfer__footer">
          <Button size="Small" buttonType="Default">
            Operation
          </Button>
        </div>
      ) : null}
    </div>
  );

  const actions = (
    <div
      className={cn(
        "pt-transfer__actions",
        layout === "Vertical" && "pt-transfer__actions--vertical",
      )}
    >
      {buttonType === "Icon" ? (
        <>
          <button
            type="button"
            className="pt-transfer__icon-btn"
            aria-label="Move to left"
            disabled={!rightChecked.length}
            onClick={moveLeft}
          >
            <EpIconByName name="ArrowLeft" size={16} />
          </button>
          <button
            type="button"
            className="pt-transfer__icon-btn"
            aria-label="Move to right"
            disabled={!leftChecked.length}
            onClick={moveRight}
          >
            <EpIconByName name="ArrowRight" size={16} />
          </button>
        </>
      ) : (
        <>
          <Button
            size="Default"
            buttonType="Primary"
            leftIcon={<EpIconByName name="ArrowLeft" size={14} />}
            disabled={!rightChecked.length}
            onClick={moveLeft}
          >
            Button
          </Button>
          <Button
            size="Default"
            buttonType="Primary"
            rightIcon={<EpIconByName name="ArrowRight" size={14} />}
            disabled={!leftChecked.length}
            onClick={moveRight}
          >
            Button
          </Button>
        </>
      )}
    </div>
  );

  return (
    <div
      className={cn(
        "pt-transfer",
        layout === "Vertical" && "pt-transfer--vertical",
        className,
      )}
    >
      <Panel
        side="left"
        list={left}
        visible={leftVisible}
        checked={leftChecked}
        setChecked={setLeftChecked}
        filter={leftFilter}
        setFilter={setLeftFilter}
      />
      {actions}
      <Panel
        side="right"
        list={right}
        visible={rightVisible}
        checked={rightChecked}
        setChecked={setRightChecked}
        filter={rightFilter}
        setFilter={setRightFilter}
        empty
      />
    </div>
  );
}
