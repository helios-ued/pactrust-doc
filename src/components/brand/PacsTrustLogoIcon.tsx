import { cn } from "@/lib/cn";

const ICON_WRAPPER_SRC = "/pacstrust-icon-wrapper.svg";

const LOGO_SIZE = 24;

export type PacsTrustLogoIconProps = {
  className?: string;
};

/** Figma: PaceTrust - icon-wrapper (`8339:56151`) · 展示 24×24 */
export function PacsTrustLogoIcon({ className }: PacsTrustLogoIconProps) {
  return (
    <span
      className={cn("relative inline-block size-6 shrink-0", className)}
      data-node-id="8339:56151"
      data-name="PaceTrust - icon-wrapper"
      aria-hidden
    >
      <img
        alt=""
        src={ICON_WRAPPER_SRC}
        width={LOGO_SIZE}
        height={LOGO_SIZE}
        className="absolute inset-0 block size-full max-w-none object-contain"
        draggable={false}
      />
    </span>
  );
}
