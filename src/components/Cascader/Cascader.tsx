import { Checkbox } from "@/components/Checkbox/Checkbox";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { Radio } from "@/components/Radio/Radio";
import { cn } from "@/lib/cn";
import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import type { InputSize, InputState } from "../Input/Input";
import "./cascader.css";

export type CascaderOption = {
  label: string;
  value: string;
  disabled?: boolean;
  children?: CascaderOption[];
};

/** Figma Component/Option — Type */
export type CascaderOptionType = "Default" | "Radio" | "Checkbox";

export type CascaderProps = {
  options: CascaderOption[];
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[], labels: string[]) => void;
  placeholder?: string;
  size?: InputSize;
  state?: InputState;
  disabled?: boolean;
  /** Figma panel option Type */
  optionType?: CascaderOptionType;
  /** Showcase: keep panel open (e.g. State=Focus) */
  forceOpen?: boolean;
  className?: string;
};

const triggerSize: Record<InputSize, string> = {
  Default: "h-8 px-pt-8 py-pt-4 text-el-base leading-el-base",
  Large: "h-10 px-pt-12 py-pt-8 text-el-base leading-el-base",
  Small: "h-6 px-pt-8 py-pt-4 text-xs leading-el-base",
};

const iconSize: Record<InputSize, number> = {
  Default: 16,
  Large: 16,
  Small: 14,
};

function pathKey(path: string[]) {
  return path.join("/");
}

function findPath(
  options: CascaderOption[],
  target: string[],
): { labels: string[]; nodes: CascaderOption[][] } | null {
  const labels: string[] = [];
  const nodes: CascaderOption[][] = [options];
  let level = options;
  for (const v of target) {
    const hit = level.find((o) => o.value === v);
    if (!hit) return null;
    labels.push(hit.label);
    if (hit.children?.length) {
      level = hit.children;
      nodes.push(level);
    } else {
      break;
    }
  }
  return { labels, nodes };
}

function collectLeafPaths(
  options: CascaderOption[],
  prefix: string[] = [],
): { path: string[]; labels: string[] }[] {
  const out: { path: string[]; labels: string[] }[] = [];
  for (const opt of options) {
    const next = [...prefix, opt.value];
    if (opt.children?.length) {
      out.push(...collectLeafPaths(opt.children, next));
    } else {
      const resolved = findPath(options, next);
      out.push({ path: next, labels: resolved?.labels ?? [opt.label] });
    }
  }
  return out;
}

export function Cascader({
  options,
  value: controlled,
  defaultValue = [],
  onChange,
  placeholder = "Select",
  size = "Default",
  state = "Default",
  disabled = false,
  optionType = "Default",
  forceOpen = false,
  className,
}: CascaderProps) {
  const [open, setOpen] = useState(false);
  const [internal, setInternal] = useState<string[]>(defaultValue);
  const [checkedKeys, setCheckedKeys] = useState<Set<string>>(() => new Set());
  const value = controlled ?? internal;
  const rootRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  const panelOpen = open || forceOpen;

  const path = useMemo(() => findPath(options, value), [options, value]);
  const display =
    optionType === "Checkbox" && checkedKeys.size > 0
      ? collectLeafPaths(options)
          .filter((leaf) => checkedKeys.has(pathKey(leaf.path)))
          .map((leaf) => leaf.labels.join(" / "))
          .join(", ")
      : path?.labels.join(" / ") || (value.length ? value.join(" / ") : "");

  const [activePath, setActivePath] = useState<string[]>(value);
  useEffect(() => {
    if (panelOpen) setActivePath(value.length ? value : []);
  }, [panelOpen, value]);

  const columns = useMemo(() => {
    const cols: CascaderOption[][] = [options];
    let level = options;
    for (const v of activePath) {
      const node = level.find((o) => o.value === v);
      if (node?.children?.length) {
        level = node.children;
        cols.push(level);
      } else {
        break;
      }
    }
    return cols;
  }, [options, activePath]);

  const isDisabled = disabled || state === "Disabled";

  useEffect(() => {
    if (!panelOpen || forceOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [panelOpen, forceOpen]);

  const commit = (next: string[], labels: string[]) => {
    if (controlled === undefined) setInternal(next);
    onChange?.(next, labels);
    if (!forceOpen) setOpen(false);
  };

  const onPick = (levelIndex: number, opt: CascaderOption) => {
    if (opt.disabled) return;
    const prefix = activePath.slice(0, levelIndex);
    const nextPath = [...prefix, opt.value];
    setActivePath(nextPath);

    if (optionType === "Checkbox") {
      const key = pathKey(nextPath);
      setCheckedKeys((prev) => {
        const next = new Set(prev);
        if (next.has(key)) next.delete(key);
        else next.add(key);
        return next;
      });
      if (opt.children?.length) return;
      return;
    }

    if (opt.children?.length) return;
    const resolved = findPath(options, nextPath);
    commit(nextPath, resolved?.labels ?? [opt.label]);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && !forceOpen) setOpen(false);
  };

  return (
    <div
      ref={rootRef}
      className={cn("pt-cascader", className)}
      onKeyDown={onKeyDown}
    >
      <button
        type="button"
        disabled={isDisabled}
        aria-expanded={panelOpen}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        className={cn(
          "pt-cascader__trigger",
          triggerSize[size],
          panelOpen && "pt-cascader__trigger--open",
          isDisabled && "pt-cascader__trigger--disabled",
          state === "Error" && "pt-cascader__trigger--error",
          state === "Hover" && "pt-cascader__trigger--force-hover",
        )}
        onClick={() => !isDisabled && !forceOpen && setOpen((o) => !o)}
      >
        <span
          className={cn(
            "pt-cascader__label",
            !display && "pt-cascader__label--placeholder",
          )}
        >
          {display || placeholder}
        </span>
        <EpIconByName
          name="ArrowDown"
          size={iconSize[size]}
          className="pt-cascader__icon"
          aria-hidden
        />
      </button>
      {panelOpen ? (
        <div id={listboxId} role="listbox" className="pt-cascader__panel">
          {columns.map((col, colIndex) => (
            <ul key={colIndex} className="pt-cascader__column">
              {col.map((opt) => {
                const selected = activePath[colIndex] === opt.value;
                const hasChildren = Boolean(opt.children?.length);
                const rowPath = [...activePath.slice(0, colIndex), opt.value];
                const checked =
                  optionType === "Checkbox" &&
                  checkedKeys.has(pathKey(rowPath));
                const radioChecked =
                  optionType === "Radio" && activePath[colIndex] === opt.value;

                return (
                  <li key={opt.value}>
                    <div
                      role="option"
                      aria-selected={selected}
                      aria-disabled={opt.disabled || undefined}
                      className={cn(
                        "pt-cascader__option",
                        optionType === "Default"
                          ? "pt-cascader__option--default"
                          : "pt-cascader__option--with-control",
                        selected && "pt-cascader__option--active",
                        (selected || checked) && "pt-cascader__option--selected",
                        opt.disabled && "pointer-events-none opacity-60",
                      )}
                      onClick={() => onPick(colIndex, opt)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          onPick(colIndex, opt);
                        }
                      }}
                      tabIndex={opt.disabled ? -1 : 0}
                    >
                      {optionType === "Radio" ? (
                        <Radio
                          name={`cascader-${listboxId}-${colIndex}`}
                          size="Small"
                          checked={radioChecked}
                          onChange={() => undefined}
                          tabIndex={-1}
                          className="pt-cascader__option-control !min-h-0 !cursor-pointer !gap-0 !p-0"
                          aria-hidden
                        />
                      ) : null}
                      {optionType === "Checkbox" ? (
                        <Checkbox
                          size="Small"
                          checked={checked}
                          onChange={() => undefined}
                          tabIndex={-1}
                          className="pt-cascader__option-control !min-h-0 !cursor-pointer !gap-0 !p-0"
                          aria-hidden
                        />
                      ) : null}
                      <span className="pt-cascader__option-label">{opt.label}</span>
                      {hasChildren ? (
                        <EpIconByName
                          name="ArrowRight"
                          size={16}
                          className="pt-cascader__option-suffix"
                          aria-hidden
                        />
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      ) : null}
    </div>
  );
}
