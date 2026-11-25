import type { ReactNode } from "react";
import { TextButton } from "@/components";
import { PacsTrustLogo } from "@/components/brand/PacsTrustLogo";

function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M1.5 7h11M7 1.5c1.5 1.8 2.3 3.8 2.3 5.5S8.5 10.7 7 12.5M7 1.5C5.5 3.3 4.7 5.3 4.7 7s.8 3.7 2.3 5.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3.5 5.25 7 8.75l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** 04–06 后台认证 · 顶栏 Logo + 语言 */
export function AdminAuthChrome({
  children,
  viewportNodeId,
}: {
  children: ReactNode;
  viewportNodeId?: string;
}) {
  return (
    <div className="pt-admin-login-viewport" data-node-id={viewportNodeId}>
      <header className="pt-admin-login__header">
        <div className="pt-admin-login__logo-slot">
          <PacsTrustLogo />
        </div>
        <TextButton
          buttonType="Default"
          size="Default"
          leftIcon={<GlobeIcon />}
          rightIcon={<ChevronDownIcon />}
          aria-haspopup="listbox"
          aria-label="Language"
        >
          English
        </TextButton>
      </header>
      <main className="pt-admin-login__main">{children}</main>
    </div>
  );
}
