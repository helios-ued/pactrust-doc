import { cn } from "@/lib/cn";

const LOGO_SRC = "/pacstrust-logo.svg";

export type PacsTrustLogoProps = {
  className?: string;
};

/** Figma: PaceTrust -logo (8339:56150) */
export function PacsTrustLogo({ className }: PacsTrustLogoProps) {
  return (
    <img
      src={LOGO_SRC}
      alt="PacsTrust"
      className={cn("h-[var(--pt-logo-height)] w-auto max-w-full object-contain object-left", className)}
      width={154}
      height={30}
    />
  );
}
