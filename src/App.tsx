import { BrowserRouter } from "react-router-dom";
import { ShowcaseApp } from "@/showcase/ShowcaseApp";

/** GitHub Pages 子路径部署时与 `vite.config` 的 `base` 对齐；本地 dev 仍为 `/` */
function showcaseBasename(): string | undefined {
  const base = import.meta.env.BASE_URL;
  if (!base || base === "/") return undefined;
  return base.replace(/\/$/, "");
}

export default function App() {
  return (
    <BrowserRouter basename={showcaseBasename()}>
      <ShowcaseApp />
    </BrowserRouter>
  );
}
