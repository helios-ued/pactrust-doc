import { Button } from "@/components/Button/Button";
import { TextButton } from "@/components/Button/TextButton";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import { useMemo, type ReactNode } from "react";
import "./date-picker.css";

export type DatePickerPanelType = "Week" | "Month" | "Year";

const WEEK_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function buildMonthGrid(view: Date) {
  const year = view.getFullYear();
  const month = view.getMonth();
  const startOffset = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: { date: Date; inMonth: boolean }[] = [];
  for (let i = 0; i < startOffset; i++) {
    cells.push({
      date: new Date(year, month, i - startOffset + 1),
      inMonth: false,
    });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: new Date(year, month, d), inMonth: true });
  }
  let trailing = 1;
  while (cells.length % 7 !== 0) {
    cells.push({ date: new Date(year, month + 1, trailing++), inMonth: false });
  }
  return cells;
}

export type DatePickerPanelProps = {
  type?: DatePickerPanelType;
  view: Date;
  onViewChange: (next: Date) => void;
  value?: Date | null;
  onSelect?: (day: Date) => void;
  sidebar?: boolean;
  showFooter?: boolean;
  onNow?: () => void;
  onOk?: () => void;
  embedded?: boolean;
  className?: string;
};

function NavIcon({
  name,
  label,
  onClick,
}: {
  name: "DArrowLeft" | "ArrowLeft" | "ArrowRight" | "DArrowRight";
  label: string;
  onClick: () => void;
}) {
  return (
    <button type="button" className="pt-date-picker-panel__nav-btn" aria-label={label} onClick={onClick}>
      <EpIconByName name={name} size={12} />
    </button>
  );
}

export function DatePickerPanel({
  type = "Week",
  view,
  onViewChange,
  value,
  onSelect,
  sidebar = false,
  showFooter = true,
  onNow,
  onOk,
  embedded = false,
  className,
}: DatePickerPanelProps) {
  const today = useMemo(() => new Date(), []);
  const cells = useMemo(() => buildMonthGrid(view), [view]);
  const year = view.getFullYear();

  const shiftMonth = (delta: number) => {
    onViewChange(new Date(view.getFullYear(), view.getMonth() + delta, 1));
  };
  const shiftYear = (delta: number) => {
    onViewChange(new Date(view.getFullYear() + delta, view.getMonth(), 1));
  };

  const sidebarShortcuts = [
    { label: "Today", date: () => new Date() },
    { label: "Yesterday", date: () => new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1) },
    { label: "A week day", date: () => new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7) },
  ];

  const header = (
    <div className="pt-date-picker-panel__header">
      {type === "Year" ? (
        <>
          <NavIcon name="DArrowLeft" label="Previous years" onClick={() => shiftYear(-10)} />
          <span className="pt-date-picker-panel__title">
            <span>{year - 5}</span>
            <span>–</span>
            <span>{year + 4}</span>
          </span>
          <NavIcon name="DArrowRight" label="Next years" onClick={() => shiftYear(10)} />
        </>
      ) : type === "Month" ? (
        <>
          <NavIcon name="DArrowLeft" label="Previous year" onClick={() => shiftYear(-1)} />
          <span className="pt-date-picker-panel__title">{year}</span>
          <NavIcon name="DArrowRight" label="Next year" onClick={() => shiftYear(1)} />
        </>
      ) : (
        <>
          <div className="pt-date-picker-panel__nav-group">
            <NavIcon name="DArrowLeft" label="Previous year" onClick={() => shiftYear(-1)} />
            <NavIcon name="ArrowLeft" label="Previous month" onClick={() => shiftMonth(-1)} />
          </div>
          <span className="pt-date-picker-panel__title">
            <span>{year}</span>
            <span>{MONTH_LABELS[view.getMonth()]}</span>
          </span>
          <div className="pt-date-picker-panel__nav-group">
            <NavIcon name="ArrowRight" label="Next month" onClick={() => shiftMonth(1)} />
            <NavIcon name="DArrowRight" label="Next year" onClick={() => shiftYear(1)} />
          </div>
        </>
      )}
    </div>
  );

  let calendarBody: ReactNode = null;

  if (type === "Week") {
    calendarBody = (
      <>
        {header}
        <div className="pt-date-picker-panel__weekdays">
          {WEEK_LABELS.map((w) => (
            <div key={w} className="pt-date-picker-panel__weekday">
              {w}
            </div>
          ))}
        </div>
        <div className="pt-date-picker-panel__grid-divider" aria-hidden />
        <div className="pt-date-picker-panel__grid">
          {cells.map(({ date, inMonth }) => {
            const selected = value ? sameDay(date, value) : false;
            const isToday = sameDay(date, today);
            return (
              <div key={date.toISOString()} className="pt-date-picker-panel__cell-wrap">
                <button
                  type="button"
                  disabled={!inMonth}
                  className={cn(
                    "pt-date-picker-panel__cell",
                    !inMonth && "is-other-month",
                    isToday && "is-today",
                    selected && "is-selected",
                  )}
                  onClick={() => inMonth && onSelect?.(date)}
                >
                  {date.getDate()}
                </button>
              </div>
            );
          })}
        </div>
      </>
    );
  } else if (type === "Month") {
    calendarBody = (
      <>
        {header}
        <div className="pt-date-picker-panel__month-grid">
          {MONTH_LABELS.map((label, idx) => {
            const selected = value?.getMonth() === idx && value.getFullYear() === year;
            return (
              <button
                key={label}
                type="button"
                className={cn("pt-date-picker-panel__month-cell", selected && "is-selected")}
                onClick={() => onSelect?.(new Date(year, idx, 1))}
              >
                {label}
              </button>
            );
          })}
        </div>
      </>
    );
  } else {
    calendarBody = (
      <>
        {header}
        <div className="pt-date-picker-panel__month-grid">
          {Array.from({ length: 10 }, (_, i) => year - 5 + i).map((y) => {
            const selected = value?.getFullYear() === y;
            return (
              <button
                key={y}
                type="button"
                className={cn("pt-date-picker-panel__month-cell", selected && "is-selected")}
                onClick={() => onSelect?.(new Date(y, view.getMonth(), 1))}
              >
                {y}
              </button>
            );
          })}
        </div>
      </>
    );
  }

  const footer = showFooter ? (
    <div className="pt-date-picker-panel__footer">
      <TextButton size="Small" onClick={onNow}>
        Now
      </TextButton>
      <Button size="Small" buttonType="Default" onClick={onOk}>
        OK
      </Button>
    </div>
  ) : null;

  const body = (
    <>
      {sidebar ? (
        <div className="pt-date-picker-panel__sidebar-layout">
          <aside className="pt-date-picker-panel__sidebar">
            {sidebarShortcuts.map((s) => (
              <button
                key={s.label}
                type="button"
                className="pt-date-picker-panel__sidebar-btn"
                onClick={() => onSelect?.(s.date())}
              >
                {s.label}
              </button>
            ))}
          </aside>
          <div className="pt-date-picker-panel__main">
            {calendarBody}
            {footer}
          </div>
        </div>
      ) : (
        <>
          {calendarBody}
          {footer}
        </>
      )}
    </>
  );

  if (embedded) {
    return <div className={cn("pt-date-picker-panel-embedded", className)}>{body}</div>;
  }

  return (
    <div className={cn("pt-date-picker-panel", sidebar && "pt-date-picker-panel--sidebar", className)}>
      {body}
    </div>
  );
}
