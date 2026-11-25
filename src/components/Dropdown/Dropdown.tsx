import { Button } from "@/components/Button/Button";
import { ButtonGroup } from "@/components/Button/ButtonGroup";
import { IconButton } from "@/components/Button/IconButton";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { IconArrowDown } from "@/components/Icon/icons";
import { cn } from "@/lib/cn";
import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react";
import "./dropdown.css";

/** Figma Dropdown Trigger · Type */
export type DropdownTriggerType = "Text" | "Button" | "Split button";

/** Figma Dropdown Menu · Pop-up */
export type DropdownPlacement = "Top" | "Bottom";

/** Figma Component/Dropdown Option */
export type DropdownOptionType = "Default" | "Selected" | "Multiple Choice";

export type DropdownOptionState = "Default" | "Hover" | "Disable";

export type DropdownProps = {
  triggerType?: DropdownTriggerType;
  placement?: DropdownPlacement;
  /** Showcase：默认展开菜单（对齐 Figma Show select） */
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  menuMinWidth?: number | "wide";
  triggerLabel?: string;
  className?: string;
  children?: ReactNode;
};

function DropdownTrigger({
  triggerType,
  label,
  onToggle,
  open,
}: {
  triggerType: DropdownTriggerType;
  label: string;
  onToggle: () => void;
  open: boolean;
}) {
  if (triggerType === "Text") {
    return (
      <button type="button" className="pt-dropdown__trigger-text" onClick={onToggle} aria-expanded={open}>
        <span>{label}</span>
        <EpIconByName name="ArrowDown" size={14} className="text-[color:var(--el-color-primary)]" />
      </button>
    );
  }

  if (triggerType === "Button") {
    return (
      <Button
        buttonType="Primary"
        className="!w-auto gap-2 px-4"
        rightIcon={<IconArrowDown width={14} height={14} className="text-[color:var(--el-text-color-write)]" />}
        onClick={onToggle}
        aria-expanded={open}
      >
        {label}
      </Button>
    );
  }

  return (
    <ButtonGroup layout="attached">
      <Button buttonType="Primary" className={cn("!min-w-0 px-4", "pt-dropdown__split-main")} type="button">
        {label}
      </Button>
      <IconButton
        buttonType="Primary"
        className="pt-dropdown__split-trigger"
        icon={<IconArrowDown width={14} height={14} className="text-[color:var(--el-text-color-write)]" />}
        aria-label="打开下拉菜单"
        aria-expanded={open}
        onClick={onToggle}
      />
    </ButtonGroup>
  );
}

export function Dropdown({
  triggerType = "Text",
  placement = "Top",
  defaultOpen = true,
  open: controlledOpen,
  onOpenChange,
  menuMinWidth,
  triggerLabel = "Dropdown List",
  className,
  children,
}: DropdownProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultOpen);
  const open = controlledOpen ?? uncontrolled;
  const setOpen = (next: boolean) => {
    setUncontrolled(next);
    onOpenChange?.(next);
  };
  const rootRef = useRef<HTMLDivElement>(null);
  const anchorRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const [triggerWidth, setTriggerWidth] = useState(0);
  /** 仅 Figma Option 行需 ≥280 时显式传入；默认随内容 + 不小于触发器 */
  const wide = menuMinWidth === "wide" || menuMinWidth === 280;
  const below = placement === "Top";

  const menuMinPx = useMemo(() => {
    let min = triggerWidth;
    if (wide) min = Math.max(min, 280);
    if (typeof menuMinWidth === "number") min = Math.max(min, menuMinWidth);
    return min;
  }, [triggerWidth, wide, menuMinWidth]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const anchor = anchorRef.current;
    if (!root || !anchor) return;

    const syncTriggerWidth = () => {
      const w = Math.ceil(anchor.getBoundingClientRect().width);
      setTriggerWidth(w);
      root.style.setProperty("--pt-dropdown-anchor-w", `${w}px`);
    };
    syncTriggerWidth();
    const raf = requestAnimationFrame(syncTriggerWidth);

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(syncTriggerWidth) : null;
    ro?.observe(anchor);
    const inner = anchor.firstElementChild;
    if (inner) ro?.observe(inner);
    window.addEventListener("resize", syncTriggerWidth);
    return () => {
      cancelAnimationFrame(raf);
      ro?.disconnect();
      window.removeEventListener("resize", syncTriggerWidth);
    };
  }, [open, triggerType, triggerLabel]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  return (
    <div ref={rootRef} className={cn("pt-dropdown", className)}>
        <div ref={anchorRef} className="pt-dropdown__trigger-anchor">
          <DropdownTrigger
            triggerType={triggerType}
            label={triggerType === "Button" || triggerType === "Split button" ? "Button" : triggerLabel}
            open={open}
            onToggle={() => setOpen(!open)}
          />
        </div>
        {open ? (
          <div
            id={menuId}
            role="menu"
            className={cn(
              "pt-dropdown__popper",
              below ? "pt-dropdown__popper--below" : "pt-dropdown__popper--above",
              wide && "pt-dropdown__popper--wide",
            )}
            style={menuMinPx > 0 ? { minWidth: menuMinPx } : undefined}
          >
            {below ? <span className="pt-dropdown__arrow pt-dropdown__arrow--top" aria-hidden /> : null}
            <div className="pt-dropdown__menu">{children}</div>
            {!below ? <span className="pt-dropdown__arrow pt-dropdown__arrow--bottom" aria-hidden /> : null}
          </div>
        ) : null}
    </div>
  );
}

export type DropdownOptionProps = {
  optionType?: DropdownOptionType;
  /** Figma State（Showcase 可强制 Hover / Disable） */
  visualState?: DropdownOptionState;
  description?: string;
  showIcon?: boolean;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
};

export function DropdownOption({
  optionType = "Default",
  visualState,
  description,
  showIcon = false,
  disabled: disabledProp,
  className,
  children = "Option text",
  onClick,
}: DropdownOptionProps) {
  const disabled = disabledProp || visualState === "Disable";
  const forceHover = visualState === "Hover";
  const selected = optionType === "Selected";
  const multiple = optionType === "Multiple Choice";

  return (
    <button
      type="button"
      role="menuitem"
      disabled={disabled}
      className={cn(
        "pt-dropdown__option",
        selected && "pt-dropdown__option--selected",
        multiple && "pt-dropdown__option--multiple",
        disabled && "pt-dropdown__option--disabled",
        forceHover && "pt-dropdown__option--hover",
        className,
      )}
      onClick={onClick}
    >
      <span className="pt-dropdown__option-left">
        {showIcon ? (
          <EpIconByName
            name="Message"
            size={14}
            className={disabled ? "text-[color:var(--el-text-color-disabled)]" : "text-[color:var(--el-color-primary)]"}
          />
        ) : null}
        <span className="pt-dropdown__option-label">{children}</span>
      </span>
      {description ? <span className="pt-dropdown__option-desc">{description}</span> : null}
      {multiple ? <EpIconByName name="Check" size={16} className="pt-dropdown__option-check" /> : null}
    </button>
  );
}

/** 菜单内联展示（无触发器） */
export type DropdownMenuProps = {
  placement?: DropdownPlacement;
  wide?: boolean;
  className?: string;
  children?: ReactNode;
};

export function DropdownMenu({ placement = "Top", wide = false, className, children }: DropdownMenuProps) {
  const below = placement === "Top";
  return (
    <div
      className={cn(
        "pt-dropdown__popper pt-dropdown__popper--static",
        below ? "pt-dropdown__popper--below" : "pt-dropdown__popper--above",
        wide && "pt-dropdown__popper--wide",
        className,
      )}
      style={{ position: "relative", top: 0, bottom: "auto", left: 0 }}
    >
      {below ? <span className="pt-dropdown__arrow pt-dropdown__arrow--top" aria-hidden /> : null}
      <div className="pt-dropdown__menu">{children}</div>
      {!below ? <span className="pt-dropdown__arrow pt-dropdown__arrow--bottom" aria-hidden /> : null}
    </div>
  );
}
