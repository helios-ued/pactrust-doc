const HERO_IMAGE = "/login-hero-gray-clouds.jpg";

/** Right panel — full gray + cloud scene (cover), character scale via zoom token */
export function LoginMarketingHero() {
  return (
    <aside className="relative hidden min-h-[var(--pt-login-hero-min-height)] min-w-0 flex-1 overflow-hidden bg-[color:var(--pt-login-hero-bg)] lg:block">
      <div
        className="absolute inset-0 origin-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundPosition: "center center",
          transform: "scale(var(--pt-login-hero-clay-zoom))",
        }}
        aria-hidden
      />
    </aside>
  );
}
