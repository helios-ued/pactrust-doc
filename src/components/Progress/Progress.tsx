import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import { useMemo, type CSSProperties } from "react";
import "./progress.css";

/** Figma Progress `6424:62238` · Type × State */
export type ProgressVisualType = "Default" | "Internal" | "Circle" | "Dashboard";

export type ProgressState = "Primary" | "Success" | "Warning" | "Error";

export type ProgressProps = {
  /** 0–100 */
  percentage?: number;
  visualType?: ProgressVisualType;
  state?: ProgressState;
  /** Default 线形是否展示右侧百分比 */
  showLabel?: boolean;
  className?: string;
};

const stateColor: Record<ProgressState, string> = {
  Primary: "var(--el-color-primary)",
  Success: "var(--el-color-success)",
  Warning: "var(--el-color-warning)",
  Error: "var(--el-color-danger)",
};

const defaultLineSuffix: Partial<Record<ProgressState, { name: string; className: string }>> = {
  Success: { name: "CircleCheck", className: "pt-progress__suffix-icon pt-progress__suffix-icon--success" },
  Warning: { name: "WarningFilled", className: "pt-progress__suffix-icon pt-progress__suffix-icon--warning" },
  Error: { name: "CircleClose", className: "pt-progress__suffix-icon pt-progress__suffix-icon--error" },
};

function clampPct(n: number): number {
  if (Number.isNaN(n)) return 0;
  return Math.min(100, Math.max(0, n));
}

/** Circle 全环 · r=54 · 线宽 12 → 周长约 2π×54 */
function CircleRing({ percentage, fill }: { percentage: number; fill: string }) {
  const r = 54;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - percentage / 100);
  return (
    <svg className="pt-progress__svg" viewBox="0 0 126 126" aria-hidden>
      <circle
        className="pt-progress__ring-bg"
        cx="63"
        cy="63"
        r={r}
        fill="none"
        strokeWidth="12"
        transform="rotate(-90 63 63)"
      />
      <circle
        className="pt-progress__ring-fill"
        cx="63"
        cy="63"
        r={r}
        fill="none"
        strokeWidth="12"
        strokeDasharray={c}
        strokeDashoffset={offset}
        style={{ stroke: fill }}
        transform="rotate(-90 63 63)"
      />
      <text className="pt-progress__svg-text" x="63" y="67" textAnchor="middle">
        {Math.round(percentage)}%
      </text>
    </svg>
  );
}

/** Dashboard：270° 弧（Figma Type=Dashboard） */
function DashboardRing({ percentage, fill }: { percentage: number; fill: string }) {
  const r = 54;
  const c = 2 * Math.PI * r;
  const arcLen = (270 / 360) * c;
  const offset = arcLen * (1 - percentage / 100);
  return (
    <svg className="pt-progress__svg" viewBox="0 0 126 126" aria-hidden>
      <g transform="rotate(135 63 63)">
        <circle
          className="pt-progress__ring-bg"
          cx="63"
          cy="63"
          r={r}
          fill="none"
          strokeWidth="12"
          strokeDasharray={`${arcLen} ${c}`}
          strokeLinecap="round"
        />
        <circle
          className="pt-progress__ring-fill"
          cx="63"
          cy="63"
          r={r}
          fill="none"
          strokeWidth="12"
          strokeDasharray={`${arcLen} ${c}`}
          strokeDashoffset={offset}
          style={{ stroke: fill }}
          strokeLinecap="round"
        />
      </g>
      <text className="pt-progress__svg-text" x="63" y="78" textAnchor="middle">
        {Math.round(percentage)}%
      </text>
    </svg>
  );
}

export function Progress({
  percentage = 50,
  visualType = "Default",
  state = "Primary",
  showLabel = true,
  className,
}: ProgressProps) {
  const pct = clampPct(percentage);
  const fill = stateColor[state];

  const styleVars = useMemo(
    () =>
      ({
        "--pt-progress-fill": fill,
      }) as CSSProperties,
    [fill],
  );

  if (visualType === "Circle") {
    return (
      <div className={cn("pt-progress pt-progress--circle", className)} style={styleVars}>
        <CircleRing percentage={pct} fill={fill} />
      </div>
    );
  }

  if (visualType === "Dashboard") {
    return (
      <div className={cn("pt-progress pt-progress--dashboard", className)} style={styleVars}>
        <DashboardRing percentage={pct} fill={fill} />
      </div>
    );
  }

  const internal = visualType === "Internal";
  /** &lt;10%：左缘 +4px；≥10%：右缘 +4px */
  const internalLabelAtEnd = pct >= 10;
  const suffix = defaultLineSuffix[state];

  return (
    <div
      className={cn(
        "pt-progress",
        internal ? "pt-progress--line-internal" : "pt-progress--line-default",
        className,
      )}
      style={styleVars}
    >
      <div
        className={cn(
          "pt-progress__track",
          internal ? "pt-progress__track--internal" : "pt-progress__track--default",
        )}
      >
        <div
          className={cn(
            "pt-progress__fill",
            internal &&
              (internalLabelAtEnd ? "pt-progress__fill--internal-end" : "pt-progress__fill--internal-start"),
          )}
          style={{ width: `${pct}%` }}
        >
          {internal && showLabel ? (
            <span className="pt-progress__label pt-progress__label--internal">{Math.round(pct)}%</span>
          ) : null}
        </div>
      </div>
      {!internal && state === "Primary" && showLabel ? (
        <span className="pt-progress__label">{Math.round(pct)}%</span>
      ) : null}
      {!internal && suffix ? (
        <span className="pt-progress__suffix">
          <EpIconByName name={suffix.name} size={16} className={suffix.className} />
        </span>
      ) : null}
    </div>
  );
}
