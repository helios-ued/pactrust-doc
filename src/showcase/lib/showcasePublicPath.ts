/** iframe / 新窗口等不走 React Router basename 时，需拼上 Vite `base`（GitHub Pages 子路径） */
export function showcasePublicPath(pathname: string): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const base = import.meta.env.BASE_URL;
  if (!base || base === "/") return path;
  const trimmed = path.slice(1);
  return base.endsWith("/") ? `${base}${trimmed}` : `${base}/${trimmed}`;
}