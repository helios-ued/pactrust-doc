import { EpIconByName } from "@/components/Icon/EpIconByName";
import { TextButton } from "@/components/Button/TextButton";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import "./time-picker.css";

export type TimeParts = { h: number; m: number; s: number };

type TimePickerPanelProps = {
  value: TimeParts;
  endValue?: TimeParts;
  onChange: (value: TimeParts) => void;
  onEndChange?: (value: TimeParts) => void;
  range?: boolean;
  arrow?: boolean;
  showSeconds?: boolean;
  onCancel?: () => void;
  onOk?: () => void;
  className?: string;
};

const VISIBLE_ROWS = 7;
const SELECTED_ROW = 3;

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function wrap(n: number, max: number) {
  const mod = max + 1;
  return ((n % mod) + mod) % mod;
}

type SpinnerColumnsProps = {
  parts: TimeParts;
  onChange: (p: TimeParts) => void;
  showSeconds?: boolean;
  bandVariant?: "single" | "range-box";
};

function SpinnerCell({
  row,
  selected,
  children,
  onClick,
}: {
  row: number;
  selected: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={cn(
        "pt-time-picker-panel__cell",
        row === SELECTED_ROW && "pt-time-picker-panel__cell--selected-row",
        selected && "pt-time-picker-panel__cell--selected",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function SpinnerColumns({ parts, onChange, showSeconds = true, bandVariant = "single" }: SpinnerColumnsProps) {
  const fields: Array<{ key: "h" | "m" | "s"; max: number }> = showSeconds
    ? [
        { key: "h", max: 23 },
        { key: "m", max: 59 },
        { key: "s", max: 59 },
      ]
    : [
        { key: "h", max: 23 },
        { key: "m", max: 59 },
      ];

  return (
    <div
      className={cn(
        "pt-time-picker-panel__spinner-wrap",
        bandVariant === "range-box" && "pt-time-picker-panel__spinner-wrap--range-box",
        !showSeconds && "pt-time-picker-panel__spinner-wrap--two-cols",
      )}
    >
      <span
        className={cn(
          "pt-time-picker-panel__band",
          bandVariant === "range-box" && "pt-time-picker-panel__band--range-box",
        )}
        aria-hidden
      />
      <div className="pt-time-picker-panel__spinner pt-time-picker-panel__spinner--columns">
        {fields.map(({ key, max }) => (
          <div key={key} className="pt-time-picker-panel__col">
            {Array.from({ length: VISIBLE_ROWS }, (_, row) => {
              const delta = row - SELECTED_ROW;
              const value = wrap(parts[key] + delta, max);
              const selected = row === SELECTED_ROW;
              return (
                <SpinnerCell
                  key={row}
                  row={row}
                  selected={selected}
                  onClick={() => onChange({ ...parts, [key]: value })}
                >
                  {pad(value)}
                </SpinnerCell>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

type ArrowColumnProps = {
  value: number;
  max: number;
  onChange: (n: number) => void;
};

function ArrowColumn({ value, max, onChange }: ArrowColumnProps) {
  const prev = wrap(value - 1, max);
  const next = wrap(value + 1, max);
  const bump = (delta: number) => onChange(wrap(value + delta, max));

  return (
    <div className="pt-time-picker-panel__col pt-time-picker-panel__col--arrow">
      <button type="button" className="pt-time-picker-panel__cell" onClick={() => bump(-1)}>
        <EpIconByName name="ArrowUp" size={16} className="pt-time-picker-panel__cell-icon" />
      </button>
      <button type="button" className="pt-time-picker-panel__cell" onClick={() => onChange(prev)}>
        {pad(prev)}
      </button>
      <button type="button" className="pt-time-picker-panel__cell pt-time-picker-panel__cell--selected">
        {pad(value)}
      </button>
      <button type="button" className="pt-time-picker-panel__cell" onClick={() => onChange(next)}>
        {pad(next)}
      </button>
      <button type="button" className="pt-time-picker-panel__cell" onClick={() => bump(1)}>
        <EpIconByName name="ArrowDown" size={16} className="pt-time-picker-panel__cell-icon" />
      </button>
    </div>
  );
}

function SpinnerArrowGroup({ parts, onChange, showSeconds }: SpinnerColumnsProps) {
  return (
    <div className="pt-time-picker-panel__spinner-wrap pt-time-picker-panel__spinner-wrap--arrow">
      <span className="pt-time-picker-panel__band pt-time-picker-panel__band--arrow" aria-hidden />
      <div className="pt-time-picker-panel__spinner">
        <ArrowColumn value={parts.h} max={23} onChange={(h) => onChange({ ...parts, h })} />
        <ArrowColumn value={parts.m} max={59} onChange={(m) => onChange({ ...parts, m })} />
        {showSeconds !== false ? (
          <ArrowColumn value={parts.s} max={59} onChange={(s) => onChange({ ...parts, s })} />
        ) : null}
      </div>
    </div>
  );
}

function SpinnerGroup(props: SpinnerColumnsProps & { arrow?: boolean }) {
  if (props.arrow) return <SpinnerArrowGroup {...props} />;
  return <SpinnerColumns {...props} />;
}

export function TimePickerPanel({
  value,
  endValue,
  onChange,
  onEndChange,
  range = false,
  arrow = false,
  showSeconds = true,
  onCancel,
  onOk,
  className,
}: TimePickerPanelProps) {
  const end = endValue ?? value;

  return (
    <div
      className={cn(
        "pt-time-picker-panel",
        range ? "pt-time-picker-panel--range" : "pt-time-picker-panel--single",
        className,
      )}
    >
      {range ? (
        <div className="pt-time-picker-panel__range-head">
          <span>Start Time</span>
          <span>End Time</span>
        </div>
      ) : null}
      <div className={cn("pt-time-picker-panel__body", range && "pt-time-picker-panel__body--range")}>
        {range ? (
          <>
            <div className="pt-time-picker-panel__range-box">
              <SpinnerGroup
                parts={value}
                onChange={onChange}
                arrow={arrow}
                showSeconds={showSeconds}
                bandVariant="range-box"
              />
            </div>
            <div className="pt-time-picker-panel__range-box">
              <SpinnerGroup
                parts={end}
                onChange={(p) => onEndChange?.(p)}
                arrow={arrow}
                showSeconds={showSeconds}
                bandVariant="range-box"
              />
            </div>
          </>
        ) : (
          <SpinnerGroup
            parts={value}
            onChange={onChange}
            arrow={arrow}
            showSeconds={showSeconds}
            bandVariant="single"
          />
        )}
      </div>
      <div className="pt-time-picker-panel__footer">
        <TextButton size="Small" type="button" onClick={onCancel}>
          Cancel
        </TextButton>
        <TextButton
          size="Small"
          buttonType="Primary"
          type="button"
          className="pt-time-picker-panel__footer-ok"
          onClick={onOk}
        >
          OK
        </TextButton>
      </div>
    </div>
  );
}

export function parseTimeString(raw: string | undefined): TimeParts {
  const [h = "0", m = "0", s = "0"] = (raw || "00:00:00").split(":");
  return {
    h: Math.min(23, Math.max(0, Number(h) || 0)),
    m: Math.min(59, Math.max(0, Number(m) || 0)),
    s: Math.min(59, Math.max(0, Number(s) || 0)),
  };
}

export function formatTimeParts(p: TimeParts, showSeconds = true) {
  return showSeconds ? `${pad(p.h)}:${pad(p.m)}:${pad(p.s)}` : `${pad(p.h)}:${pad(p.m)}`;
}
