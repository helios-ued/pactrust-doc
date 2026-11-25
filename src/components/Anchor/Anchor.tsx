import { cn } from "@/lib/cn";
import {
  createContext,
  useContext,
  type AnchorHTMLAttributes,
  type CSSProperties,
  type ReactNode,
} from "react";
import "./anchor.css";

/** Figma Anchor link · Level 1–4 */
export type AnchorLevel = 1 | 2 | 3 | 4;

export type AnchorMarkerType = "Default" | "Underline";

export type AnchorDirection = "Vertical" | "Horizontal";

type AnchorContextValue = {
  direction: AnchorDirection;
  markerType: AnchorMarkerType;
};

const AnchorContext = createContext<AnchorContextValue>({
  direction: "Vertical",
  markerType: "Default",
});

function verticalPlainPadding(level: AnchorLevel): number {
  return 14 * level;
}

function verticalDotGap(level: AnchorLevel): number {
  return 14 * level - 4;
}

function verticalUnderlineGap(level: AnchorLevel): number {
  return 12 + (level - 1) * 14;
}

export type AnchorProps = {
  direction?: AnchorDirection;
  /** Figma Underline on → underline marker rail */
  markerType?: AnchorMarkerType;
  className?: string;
  children?: ReactNode;
};

export function Anchor({
  direction = "Vertical",
  markerType = "Default",
  className,
  children,
}: AnchorProps) {
  return (
    <nav
      className={cn(
        "pt-anchor",
        direction === "Horizontal" ? "pt-anchor--horizontal" : "pt-anchor--vertical",
        className,
      )}
      aria-label="Anchor"
    >
      <AnchorContext.Provider value={{ direction, markerType }}>{children}</AnchorContext.Provider>
    </nav>
  );
}

export type AnchorLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
  level?: AnchorLevel;
  /** Figma Selected */
  selected?: boolean;
  title?: ReactNode;
  children?: ReactNode;
};

export function AnchorLink({
  level = 1,
  selected = false,
  title = "Anchor API",
  className,
  href = "#",
  onClick,
  children,
  ...rest
}: AnchorLinkProps) {
  const { direction, markerType } = useContext(AnchorContext);
  const underline = markerType === "Underline";
  const label = children ?? title;

  if (direction === "Horizontal") {
    return (
      <a
        href={href}
        className={cn(
          "pt-anchor-link pt-anchor-link--horizontal",
          selected && "pt-anchor-link--selected",
          className,
        )}
        aria-current={selected ? "location" : undefined}
        onClick={(e) => {
          e.preventDefault();
          onClick?.(e);
        }}
        {...rest}
      >
        <span className="pt-anchor-link__text">{label}</span>
        {selected ? <span className="pt-anchor-link__marker-h" aria-hidden /> : null}
      </a>
    );
  }

  const selectedClass = selected ? "pt-anchor-link--selected" : undefined;
  const underlineMode = underline;

  let rowStyle: CSSProperties | undefined;
  let inner: ReactNode;

  if (underlineMode) {
    const gap = verticalUnderlineGap(level);
    rowStyle = { gap: `${gap}px` };
    inner = (
      <>
        <div className="pt-anchor-link__rail-wrap" aria-hidden>
          <div className="pt-anchor-link__rail">
            {selected ? <span className="pt-anchor-link__marker-line" /> : null}
          </div>
        </div>
        <span className="pt-anchor-link__text">{label}</span>
      </>
    );
  } else if (selected) {
    rowStyle = { gap: `${verticalDotGap(level)}px` };
    inner = (
      <>
        <span className="pt-anchor-link__marker-dot" aria-hidden />
        <span className="pt-anchor-link__text">{label}</span>
      </>
    );
  } else {
    rowStyle = { paddingLeft: `${verticalPlainPadding(level)}px` };
    inner = <span className="pt-anchor-link__text">{label}</span>;
  }

  return (
    <a
      href={href}
      className={cn("pt-anchor-link", selectedClass, className)}
      style={rowStyle}
      aria-current={selected ? "location" : undefined}
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
      }}
      {...rest}
    >
      {inner}
    </a>
  );
}
