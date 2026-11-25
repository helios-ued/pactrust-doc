import { Button } from "@/components/Button/Button";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import "./drawer.css";

export type DrawerLayout = "Left" | "Right" | "Top" | "Bottom";

const DEFAULT_BODY = (
  <>
    <p className="pt-drawer-preview__body-text">
      Element Plus 默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。但是如果需要大规模替换样式，
    </p>
    <p className="pt-drawer-preview__body-text">
      例如： 将主题颜色从蓝色改为橙色或绿色，也许一个个将其覆盖起来不是一个好主意。
    </p>
  </>
);

export type DrawerProps = {
  layout?: DrawerLayout;
  title?: ReactNode;
  children?: ReactNode;
  className?: string;
};

const footerButtonClass = "!h-8 !min-h-8 !max-h-8 !w-auto shrink-0 !px-4 !py-1";

export function Drawer({
  layout = "Right",
  title = "I am the title",
  children,
  className,
}: DrawerProps) {
  return (
    <div className={cn("pt-drawer-preview", `pt-drawer-preview--${layout.toLowerCase()}`, className)}>
      <div className="pt-drawer-preview__mask" aria-hidden />
      <aside className="pt-drawer-preview__panel" role="dialog" aria-label="Drawer">
        <header className="pt-drawer-preview__header">
          <h2 className="pt-drawer-preview__title">{title}</h2>
          <button type="button" className="pt-drawer-preview__close" aria-label="关闭">
            <EpIconByName name="Close" size={16} />
          </button>
        </header>
        <div className="pt-drawer-preview__body">{children ?? DEFAULT_BODY}</div>
        <footer className="pt-drawer-preview__footer">
          <Button buttonType="Default" size="Default" className={footerButtonClass}>
            Button
          </Button>
          <Button buttonType="Primary" size="Default" className={footerButtonClass}>
            Button
          </Button>
        </footer>
      </aside>
    </div>
  );
}
