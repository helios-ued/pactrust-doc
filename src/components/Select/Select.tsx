import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import "./select.css";

export type SelectSize = "Default" | "Large" | "Small";

export type SelectState = "Default" | "Hover" | "Focus" | "Error" | "Disabled";

/** Figma Select Dropdown — Type */
export type SelectDropdownType = "Default" | "Pinyin" | "Group";

export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
  pinyin?: string;
  /** 分组 key（Group 模式） */
  group?: string;
  /** 分组标题展示文案，默认同 `group` */
  groupLabel?: string;
};

export type SelectProps = {
  options: SelectOption[];
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value: string | string[]) => void;
  placeholder?: string;
  size?: SelectSize;
  state?: SelectState;
  multiple?: boolean;
  /** Figma Input=ON */
  filterable?: boolean;
  collapseTags?: boolean;
  dropdownType?: SelectDropdownType;
  forceOpen?: boolean;
  disabled?: boolean;
  className?: string;
};

const triggerSize: Record<SelectSize, string> = {
  Default: "h-8 px-pt-8 py-pt-4 text-el-base leading-el-base",
  Large: "h-10 px-pt-12 py-pt-8 text-el-base leading-el-base",
  Small: "h-6 px-pt-8 py-pt-4 text-xs leading-el-base",
};

const iconSize: Record<SelectSize, number> = {
  Default: 16,
  Large: 16,
  Small: 14,
};

function normalizeSingle(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

function normalizeMultiple(value: string | string[] | undefined): string[] {
  if (Array.isArray(value)) return value;
  if (value) return [value];
  return [];
}

export function Select({
  options,
  value: controlled,
  defaultValue,
  onChange,
  placeholder = "Select",
  size = "Default",
  state = "Default",
  multiple = false,
  filterable = false,
  collapseTags = false,
  dropdownType = "Default",
  forceOpen = false,
  disabled = false,
  className,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [internalSingle, setInternalSingle] = useState(() =>
    normalizeSingle(defaultValue),
  );
  const [internalMulti, setInternalMulti] = useState<string[]>(() =>
    normalizeMultiple(defaultValue),
  );
  const [query, setQuery] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLInputElement>(null);
  const listboxId = useId();

  const isControlled = controlled !== undefined;
  const singleValue = isControlled
    ? normalizeSingle(controlled)
    : internalSingle;
  const multiValue = isControlled
    ? normalizeMultiple(controlled)
    : internalMulti;

  const panelOpen = open || forceOpen;
  const isDisabled = disabled || state === "Disabled";

  const filteredOptions = useMemo(() => {
    if (!filterable || !query.trim()) return options;
    const q = query.trim().toLowerCase();
    return options.filter(
      (o) =>
        o.label.toLowerCase().includes(q) ||
        o.pinyin?.toLowerCase().includes(q),
    );
  }, [options, filterable, query]);

  const groupStructure = useMemo(() => {
    if (dropdownType !== "Group") return null;
    const ungrouped: SelectOption[] = [];
    const groupOrder: string[] = [];
    const groupMap = new Map<string, SelectOption[]>();
    const groupTitles = new Map<string, string>();
    for (const opt of filteredOptions) {
      if (!opt.group) {
        ungrouped.push(opt);
        continue;
      }
      if (!groupMap.has(opt.group)) {
        groupMap.set(opt.group, []);
        groupOrder.push(opt.group);
        groupTitles.set(opt.group, opt.groupLabel ?? opt.group);
      }
      groupMap.get(opt.group)!.push(opt);
    }
    return { ungrouped, groupOrder, groupMap, groupTitles };
  }, [dropdownType, filteredOptions]);

  const selectedLabel = useMemo(() => {
    if (multiple) return "";
    const hit = options.find((o) => o.value === singleValue);
    return hit?.label ?? "";
  }, [multiple, options, singleValue]);

  const selectedTags = useMemo(() => {
    if (!multiple) return [];
    return multiValue
      .map((v) => options.find((o) => o.value === v))
      .filter(Boolean) as SelectOption[];
  }, [multiple, multiValue, options]);

  useEffect(() => {
    if (!panelOpen || forceOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [panelOpen, forceOpen]);

  useEffect(() => {
    if (panelOpen && filterable) filterRef.current?.focus();
  }, [panelOpen, filterable]);

  const commitSingle = (next: string) => {
    if (!isControlled) setInternalSingle(next);
    onChange?.(next);
    if (!forceOpen) setOpen(false);
    setQuery("");
  };

  const commitMulti = (next: string[]) => {
    if (!isControlled) setInternalMulti(next);
    onChange?.(next);
  };

  const toggleMulti = (optionValue: string) => {
    const set = new Set(multiValue);
    if (set.has(optionValue)) set.delete(optionValue);
    else set.add(optionValue);
    commitMulti([...set]);
  };

  const isSelected = (optionValue: string) =>
    multiple ? multiValue.includes(optionValue) : singleValue === optionValue;

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && !forceOpen) setOpen(false);
  };

  const renderOption = (opt: SelectOption) => {
    const selected = isSelected(opt.value);
    const showPinyin = dropdownType === "Pinyin" && Boolean(opt.pinyin);
    return (
      <div
        key={opt.value}
        role="option"
        aria-selected={selected}
        aria-disabled={opt.disabled || undefined}
        className={cn(
          "pt-select__option",
          selected && "pt-select__option--selected",
          opt.disabled && "pt-select__option--disabled",
        )}
        onClick={() => {
          if (opt.disabled) return;
          if (multiple) toggleMulti(opt.value);
          else commitSingle(opt.value);
        }}
      >
        <span className="pt-select__option-label">{opt.label}</span>
        {showPinyin ? (
          <span className="pt-select__option-pinyin">{opt.pinyin}</span>
        ) : null}
        {multiple && selected ? (
          <EpIconByName
            name="Check"
            size={16}
            className="pt-select__option-check"
            aria-hidden
          />
        ) : null}
      </div>
    );
  };

  const visibleTags =
    collapseTags && selectedTags.length > 1
      ? [selectedTags[0], { label: `+${selectedTags.length - 1}`, value: "__collapse" }]
      : selectedTags;

  return (
    <div ref={rootRef} className={cn("pt-select", className)} onKeyDown={onKeyDown}>
      <button
        type="button"
        disabled={isDisabled}
        aria-expanded={panelOpen}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        className={cn(
          "pt-select__trigger",
          triggerSize[size],
          multiple && "pt-select__trigger--tags",
          panelOpen && "pt-select__trigger--open",
          isDisabled && "pt-select__trigger--disabled",
          state === "Error" && "pt-select__trigger--error",
          state === "Hover" && "pt-select__trigger--force-hover",
        )}
        onClick={() => {
          if (isDisabled || forceOpen) return;
          setOpen((o) => !o);
        }}
      >
        {multiple ? (
          <div className="pt-select__tags">
            {visibleTags.length ? (
              visibleTags.map((tag) => (
                <span key={tag.value} className="pt-select__tag">
                  <span className="pt-select__tag-label">{tag.label}</span>
                </span>
              ))
            ) : (
              <span className="pt-select__value pt-select__value--placeholder">
                {placeholder}
              </span>
            )}
          </div>
        ) : filterable && panelOpen ? (
          <input
            ref={filterRef}
            className="pt-select__filter"
            value={query}
            placeholder={placeholder}
            disabled={isDisabled}
            onChange={(e) => setQuery(e.target.value)}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <span
            className={cn(
              "pt-select__value",
              !selectedLabel && "pt-select__value--placeholder",
            )}
          >
            {selectedLabel || placeholder}
          </span>
        )}
        <EpIconByName
          name="ArrowDown"
          size={iconSize[size]}
          className="pt-select__icon"
          aria-hidden
        />
      </button>
      {panelOpen ? (
        dropdownType === "Group" ? (
          <div className="pt-select__popper">
            <div className="pt-select__popper-arrow" aria-hidden />
            <div
              id={listboxId}
              role="listbox"
              className="pt-select__panel pt-select__panel--group"
            >
              {groupStructure ? (
                groupStructure.groupOrder.map((groupKey, index) => (
                  <div key={groupKey} className="pt-select__group">
                    {index > 0 ? (
                      <div className="pt-select__group-divider" role="separator" />
                    ) : null}
                    <div className="pt-select__group-label">
                      {groupStructure.groupTitles.get(groupKey)}
                    </div>
                    {groupStructure.groupMap.get(groupKey)!.map(renderOption)}
                  </div>
                ))
              ) : null}
            </div>
          </div>
        ) : (
          <div id={listboxId} role="listbox" className="pt-select__panel">
            {filteredOptions.map(renderOption)}
          </div>
        )
      ) : null}
    </div>
  );
}
