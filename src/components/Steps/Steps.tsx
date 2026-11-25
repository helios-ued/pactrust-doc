import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import "./steps.css";

/** Figma Line · Status */
export type StepStatus = "Wait" | "Process" | "Success" | "Error";

/** Figma Type */
export type StepIconType = "Default" | "State";

export type StepDirection = "Horizontal" | "Vertical";

const STATE_ICONS = {
  process: "/steps/step-process-state.svg",
  wait: "/steps/step-wait-state.svg",
  check: "/steps/step-check.svg",
} as const;

export type StepItemData = {
  title?: ReactNode;
  description?: ReactNode;
  status?: StepStatus;
};

export type StepsLineProps = {
  status?: StepStatus;
  stepType?: StepIconType;
  lastStep?: boolean;
  index?: number;
  direction?: StepDirection;
  className?: string;
};

export function StepsLine({
  status = "Wait",
  stepType = "Default",
  lastStep = false,
  index = 1,
  direction = "Horizontal",
  className,
}: StepsLineProps) {
  const vertical = direction === "Vertical";
  const lineTone =
    status === "Success" ? "primary" : status === "Error" ? "error" : "default";

  const icon = (
    <StepIcon status={status} stepType={stepType} index={index} />
  );

  return (
    <div
      className={cn(
        "pt-steps__track",
        vertical && "pt-steps__track--vertical",
        className,
      )}
    >
      {icon}
      {!lastStep ? (
        <span
          className={cn(
            "pt-steps__line",
            vertical && "pt-steps__line--vertical",
            lineTone === "primary" && "pt-steps__line--primary",
            lineTone === "error" && "pt-steps__line--error",
          )}
          aria-hidden
        />
      ) : null}
    </div>
  );
}

function StepIcon({
  status,
  stepType,
  index,
}: {
  status: StepStatus;
  stepType: StepIconType;
  index: number;
}) {
  if (stepType === "State") {
    if (status === "Success") {
      return (
        <span className="pt-steps__icon pt-steps__icon--state-success" aria-hidden>
          <img src={STATE_ICONS.check} alt="" className="pt-steps__icon-check" />
        </span>
      );
    }
    const src =
      status === "Process" ? STATE_ICONS.process : STATE_ICONS.wait;
    return (
      <img src={src} alt="" className="pt-steps__icon-state" aria-hidden />
    );
  }

  return (
    <span
      className={cn(
        "pt-steps__icon",
        status === "Wait" && "pt-steps__icon--wait",
        status === "Success" && "pt-steps__icon--success",
        status === "Process" && "pt-steps__icon--process",
        status === "Error" && "pt-steps__icon--error",
      )}
      aria-hidden
    >
      {index}
    </span>
  );
}

export type StepTextProps = {
  title?: ReactNode;
  description?: ReactNode;
  alignCenter?: boolean;
  className?: string;
  children?: ReactNode;
};

export function StepText({
  title = "Step text",
  description = "Some description",
  alignCenter = false,
  className,
  children,
}: StepTextProps) {
  return (
    <div
      className={cn(
        "pt-steps__body",
        alignCenter ? "pt-steps__body--center" : "pt-steps__body--start",
        className,
      )}
    >
      <div className="pt-steps__content">
        <span className="pt-steps__title">{title}</span>
        <span className="pt-steps__description">{description}</span>
      </div>
      {children}
    </div>
  );
}

export type StepsItemProps = {
  status?: StepStatus;
  stepType?: StepIconType;
  lastStep?: boolean;
  index?: number;
  direction?: StepDirection;
  alignCenter?: boolean;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
  /** 纵向步骤 · 点击整块回到已完成步（如 A3 点 01/02） */
  onActivate?: () => void;
};

export function StepsItem({
  status = "Wait",
  stepType = "Default",
  lastStep = false,
  index = 1,
  direction = "Horizontal",
  alignCenter = false,
  title,
  description,
  children,
  className,
  onActivate,
}: StepsItemProps) {
  const vertical = direction === "Vertical";
  return (
    <div
      className={cn(
        "pt-steps__item",
        onActivate && "pt-steps__item--interactive",
        className,
      )}
      role={onActivate ? "button" : undefined}
      tabIndex={onActivate ? 0 : undefined}
      onClick={onActivate}
      onKeyDown={
        onActivate
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onActivate();
              }
            }
          : undefined
      }
    >
      <StepsLine
        status={status}
        stepType={stepType}
        lastStep={lastStep}
        index={index}
        direction={direction}
      />
      {vertical ? (
        <StepText title={title} description={description} alignCenter={false}>
          {children}
        </StepText>
      ) : (
        <StepText title={title} description={description} alignCenter={alignCenter} />
      )}
    </div>
  );
}

export type StepsProps = {
  direction?: StepDirection;
  stepType?: StepIconType;
  alignCenter?: boolean;
  /** 1-based 当前进行中的步骤（Copy me 默认 2） */
  active?: 1 | 2 | 3 | 4 | 5;
  stepCount?: 4 | 5;
  /** 将某步标为 Error（Default 类型展示） */
  errorStep?: 1 | 2 | 3 | 4 | 5 | null;
  className?: string;
};

function resolveStatus(
  index: number,
  active: number,
  errorStep: number | null | undefined,
): StepStatus {
  const step = index + 1;
  if (errorStep && step === errorStep) return "Error";
  if (step < active) return "Success";
  if (step === active) return "Process";
  return "Wait";
}

export function Steps({
  direction = "Horizontal",
  stepType = "Default",
  alignCenter = true,
  active = 2,
  stepCount = 4,
  errorStep = null,
  className,
}: StepsProps) {
  const vertical = direction === "Vertical";

  return (
    <div
      className={cn(
        "pt-steps",
        vertical ? "pt-steps--vertical" : "pt-steps--horizontal",
        className,
      )}
      data-name="Steps"
    >
      {Array.from({ length: stepCount }, (_, index) => {
        const status = resolveStatus(index, active, errorStep);
        return (
          <StepsItem
            key={index}
            index={index + 1}
            status={status}
            stepType={stepType}
            lastStep={index === stepCount - 1}
            direction={direction}
            alignCenter={vertical ? false : alignCenter}
          />
        );
      })}
    </div>
  );
}
