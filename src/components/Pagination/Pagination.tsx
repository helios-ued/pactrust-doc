import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import { useMemo, useState, type ReactNode } from "react";
import "./pagination.css";

export type PaginationLayoutType = "lt5" | "gt5" | "omitted" | "inputGoTo";

export type PaginationStyle = "Default" | "Background" | "Border";

export type PaginationSize = "Default" | "Small";

export type PaginationProps = {
  layoutType?: PaginationLayoutType;
  paginationStyle?: PaginationStyle;
  size?: PaginationSize;
  showTotal?: boolean;
  totalLabel?: ReactNode;
  showPageSize?: boolean;
  pageSizeLabel?: string;
  showGoTo?: boolean;
  totalPages?: number;
  currentPage?: number;
  defaultCurrentPage?: number;
  onPageChange?: (page: number) => void;
  disabled?: boolean;
  className?: string;
};

type PageToken = number | "more";

function buildPageTokens(type: PaginationLayoutType, current: number, total: number): PageToken[] {
  if (type === "inputGoTo") return [];
  if (type === "lt5") {
    return Array.from({ length: Math.min(5, total) }, (_, i) => i + 1);
  }
  if (type === "gt5") {
    return [1, 2, 3, 4, 5, "more", total];
  }
  if (current <= 3) {
    return [1, 2, 3, "more", total];
  }
  if (current >= total - 2) {
    return [1, "more", total - 2, total - 1, total];
  }
  return [1, "more", current - 1, current, current + 1, "more", total];
}

export function Pagination({
  layoutType = "gt5",
  paginationStyle = "Default",
  size = "Default",
  showTotal = false,
  totalLabel = "Total 1000",
  showPageSize = false,
  pageSizeLabel = "100",
  showGoTo = false,
  totalPages = 99,
  currentPage: controlledPage,
  defaultCurrentPage = 1,
  onPageChange,
  disabled = false,
  className,
}: PaginationProps) {
  const [uncontrolledPage, setUncontrolledPage] = useState(defaultCurrentPage);
  const [goToValue, setGoToValue] = useState(String(defaultCurrentPage));
  const current = controlledPage ?? uncontrolledPage;

  const setPage = (page: number) => {
    const next = Math.min(Math.max(1, page), totalPages);
    if (controlledPage === undefined) setUncontrolledPage(next);
    setGoToValue(String(next));
    onPageChange?.(next);
  };

  const tokens = useMemo(
    () => buildPageTokens(layoutType, current, totalPages),
    [layoutType, current, totalPages],
  );

  const iconSize = size === "Small" ? 14 : 16;

  const itemClass = (extra?: string) =>
    cn("pt-pagination__item", extra, disabled && "opacity-50");

  return (
    <nav
      className={cn(
        "pt-pagination",
        size === "Small" ? "pt-pagination--size-small" : "pt-pagination--size-default",
        paginationStyle === "Background" && "pt-pagination--style-background",
        paginationStyle === "Border" && "pt-pagination--style-border",
        className,
      )}
      aria-label="Pagination"
    >
      {showTotal ? <span className="pt-pagination__total">{totalLabel}</span> : null}

      {showPageSize ? (
        <div className="pt-pagination__sizes">
          <span className="pt-pagination__sizes-text">
            <span>{pageSizeLabel}</span>
            <span>/Page</span>
          </span>
          <EpIconByName name="ArrowDown" size={iconSize} />
        </div>
      ) : null}

      <div className="pt-pagination__list">
        {layoutType === "inputGoTo" ? (
          <>
            <button
              type="button"
              className={itemClass("pt-pagination__item--icon")}
              disabled={disabled || current <= 1}
              aria-label="First page"
              onClick={() => setPage(1)}
            >
              <EpIconByName name="DArrowLeft" size={iconSize} />
            </button>
            <button
              type="button"
              className={itemClass("pt-pagination__item--icon")}
              disabled={disabled || current <= 1}
              aria-label="Previous page"
              onClick={() => setPage(current - 1)}
            >
              <EpIconByName name="ArrowLeft" size={iconSize} />
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className={itemClass("pt-pagination__item--icon")}
              disabled={disabled || current <= 1}
              aria-label="Previous page"
              onClick={() => setPage(current - 1)}
            >
              <EpIconByName name="ArrowLeft" size={iconSize} />
            </button>
            {tokens.map((token, index) =>
              token === "more" ? (
                <span
                  key={`more-${index}`}
                  className={itemClass("pt-pagination__item--icon pt-pagination__item--more")}
                  aria-hidden
                >
                  <EpIconByName name="More" size={iconSize} />
                </span>
              ) : (
                <button
                  key={token}
                  type="button"
                  className={itemClass(token === current ? "pt-pagination__item--selected" : undefined)}
                  disabled={disabled}
                  aria-current={token === current ? "page" : undefined}
                  onClick={() => setPage(token)}
                >
                  {token}
                </button>
              ),
            )}
            <button
              type="button"
              className={itemClass("pt-pagination__item--icon")}
              disabled={disabled || current >= totalPages}
              aria-label="Next page"
              onClick={() => setPage(current + 1)}
            >
              <EpIconByName name="ArrowRight" size={iconSize} />
            </button>
          </>
        )}

        {layoutType === "inputGoTo" ? (
          <>
            <div className="pt-pagination__goto">
              <span>Go to</span>
              <input
                className="pt-pagination__goto-input"
                value={goToValue}
                disabled={disabled}
                aria-label="Go to page"
                onChange={(e) => setGoToValue(e.target.value.replace(/\D/g, ""))}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const n = Number(goToValue);
                    if (n) setPage(n);
                  }
                }}
              />
              <span>Page</span>
            </div>
            <button
              type="button"
              className={itemClass("pt-pagination__item--icon")}
              disabled={disabled || current >= totalPages}
              aria-label="Next page"
              onClick={() => setPage(current + 1)}
            >
              <EpIconByName name="ArrowRight" size={iconSize} />
            </button>
            <button
              type="button"
              className={itemClass("pt-pagination__item--icon")}
              disabled={disabled || current >= totalPages}
              aria-label="Last page"
              onClick={() => setPage(totalPages)}
            >
              <EpIconByName name="DArrowRight" size={iconSize} />
            </button>
            <button
              type="button"
              className={itemClass("pt-pagination__item--icon")}
              disabled={disabled}
              aria-label="Refresh"
              onClick={() => setPage(current)}
            >
              <EpIconByName name="Refresh" size={iconSize} />
            </button>
          </>
        ) : null}
      </div>

      {showGoTo && layoutType !== "inputGoTo" ? (
        <div className="pt-pagination__goto">
          <span>Go to</span>
          <input
            className="pt-pagination__goto-input"
            value={goToValue}
            disabled={disabled}
            aria-label="Go to page"
            onChange={(e) => setGoToValue(e.target.value.replace(/\D/g, ""))}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const n = Number(goToValue);
                if (n) setPage(n);
              }
            }}
          />
          <span>Page</span>
        </div>
      ) : null}
    </nav>
  );
}
