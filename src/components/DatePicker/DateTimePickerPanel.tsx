import { Button } from "@/components/Button/Button";
import { TextButton } from "@/components/Button/TextButton";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import { useMemo, useState } from "react";
import { DatePickerPanel } from "./DatePickerPanel";
import "./date-picker.css";

const HOURS = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));
const MINUTES = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function formatDatePart(d: Date | null | undefined) {
  if (!d) return "";
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function formatTimePart(d: Date | null | undefined) {
  if (!d) return "";
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

export type DateTimePickerPanelProps = {
  view: Date;
  onViewChange: (next: Date) => void;
  value?: Date | null;
  onChange?: (next: Date | null) => void;
  sidebar?: boolean;
  showFooter?: boolean;
  onNow?: () => void;
  onOk?: () => void;
  className?: string;
};

export function DateTimePickerPanel({
  view,
  onViewChange,
  value,
  onChange,
  sidebar = false,
  showFooter = true,
  onNow,
  onOk,
  className,
}: DateTimePickerPanelProps) {
  const [timeOpen, setTimeOpen] = useState(false);
  const today = useMemo(() => new Date(), []);

  const mergeDay = (day: Date) => {
    const base = value ?? new Date();
    const next = new Date(day);
    next.setHours(base.getHours(), base.getMinutes(), base.getSeconds(), 0);
    onChange?.(next);
  };

  const setTime = (hour: string, minute: string) => {
    const base = value ?? new Date();
    const next = new Date(base);
    next.setHours(Number(hour), Number(minute), next.getSeconds(), 0);
    onChange?.(next);
    setTimeOpen(false);
  };

  const clearDate = () => {
    onChange?.(null);
  };

  const clearTime = () => {
    if (!value) return;
    const next = new Date(value);
    next.setHours(0, 0, 0, 0);
    onChange?.(next);
  };

  const h = value ? pad(value.getHours()) : "00";
  const m = value ? pad(value.getMinutes()) : "00";

  const sidebarShortcuts = [
    { label: "Today", date: () => new Date() },
    {
      label: "Yesterday",
      date: () => new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1),
    },
    {
      label: "A week day",
      date: () => new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7),
    },
  ];

  const onSidebarPick = (pick: () => Date) => {
    const day = pick();
    mergeDay(day);
    onViewChange(day);
  };

  const inputGroup = (
    <div className="pt-datetime-picker-panel__inputs">
      <div
        className={cn(
          "pt-datetime-picker-panel__mini-input",
          value && formatDatePart(value) && "is-filled",
        )}
      >
        <EpIconByName name="Calendar" size={12} className="text-el-text-placeholder" />
        <span className="min-w-0 flex-1 truncate">
          {value ? formatDatePart(value) : "Select date"}
        </span>
        <button type="button" aria-label="Clear date" onClick={clearDate}>
          <EpIconByName name="CircleClose" size={12} />
        </button>
      </div>
      <div
        className={cn(
          "pt-datetime-picker-panel__mini-input",
          value && formatTimePart(value) !== "00:00:00" && "is-filled",
        )}
      >
        <EpIconByName name="Clock" size={12} className="text-el-text-placeholder" />
        <button
          type="button"
          className="min-w-0 flex-1 truncate border-0 bg-transparent p-0 text-left"
          onClick={() => setTimeOpen((o) => !o)}
        >
          {value ? formatTimePart(value).slice(0, 8) : "Select time"}
        </button>
        <button type="button" aria-label="Clear time" onClick={clearTime}>
          <EpIconByName name="CircleClose" size={12} />
        </button>
      </div>
    </div>
  );

  const calendarBlock = (
    <div className="pt-datetime-picker-panel__center">
      <DatePickerPanel
        embedded
        type="Week"
        view={view}
        onViewChange={onViewChange}
        value={value}
        onSelect={mergeDay}
        sidebar={false}
        showFooter={false}
      />
      {timeOpen ? (
        <div className="pt-datetime-picker-panel__time-pop">
          <div className="pt-datetime-picker-panel__time-col">
            {HOURS.map((hour) => (
              <button
                key={hour}
                type="button"
                className={cn(hour === h && "is-active")}
                onClick={() => setTime(hour, m)}
              >
                {hour}
              </button>
            ))}
          </div>
          <div className="pt-datetime-picker-panel__time-col">
            {MINUTES.filter((_, i) => i % 5 === 0).map((minute) => (
              <button
                key={minute}
                type="button"
                className={cn(minute === m && "is-active")}
                onClick={() => setTime(h, minute)}
              >
                {minute}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );

  const footer = showFooter ? (
    <div className="pt-datetime-picker-panel__footer">
      <TextButton size="Small" onClick={onNow}>
        Now
      </TextButton>
      <Button size="Small" buttonType="Default" onClick={onOk}>
        OK
      </Button>
    </div>
  ) : null;

  const sidebarColumn = (
    <aside className="pt-datetime-picker-panel__sidebar">
      {sidebarShortcuts.map((s) => (
        <button
          key={s.label}
          type="button"
          className="pt-datetime-picker-panel__sidebar-btn"
          onClick={() => onSidebarPick(s.date)}
        >
          {s.label}
        </button>
      ))}
    </aside>
  );

  return (
    <div className={cn("pt-datetime-picker-panel", sidebar && "pt-datetime-picker-panel--sidebar", className)}>
      {sidebar ? (
        <div className="pt-datetime-picker-panel__body-row">
          {sidebarColumn}
          <div className="pt-datetime-picker-panel__main">
            {inputGroup}
            {calendarBlock}
            {footer}
          </div>
        </div>
      ) : (
        <>
          {inputGroup}
          {calendarBlock}
          {footer}
        </>
      )}
    </div>
  );
}
