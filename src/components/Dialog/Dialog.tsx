import { Button } from "@/components/Button/Button";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import "./dialog.css";

export type DialogProps = {
  title?: ReactNode;
  titleCenter?: boolean;
  titleIcon?: boolean;
  showFooter?: boolean;
  children?: ReactNode;
  className?: string;
};

const DEFAULT_BODY = (
  <>
    <p className="mb-0">
      Element Plus 默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。但是如果需要大规模替换样式，
    </p>
    <p>例如： 将主题颜色从蓝色改为橙色或绿色，也许一个个将其覆盖起来不是一个好主意。</p>
  </>
);

export function Dialog({
  title = "This is a custom header!",
  titleCenter = false,
  titleIcon = true,
  showFooter = true,
  children = DEFAULT_BODY,
  className,
}: DialogProps) {
  return (
    <div
      className={cn("pt-dialog", className)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pt-dialog-title"
    >
      <header
        className={cn(
          "pt-dialog__header",
          titleCenter && "pt-dialog__header--center",
        )}
      >
        <div className="pt-dialog__title-row">
          {titleIcon ? (
            <EpIconByName name="InfoFilled" size={16} className="text-[color:var(--el-color-primary)]" />
          ) : null}
          <h2 id="pt-dialog-title" className="pt-dialog__title">
            {title}
          </h2>
        </div>
        <button type="button" className="pt-dialog__close" aria-label="关闭">
          <EpIconByName name="Close" size={16} />
        </button>
      </header>
      <div className="pt-dialog__body">{children}</div>
      {showFooter ? (
        <footer className="pt-dialog__footer">
          <Button buttonType="Default" className="!w-auto shrink-0">
            Button
          </Button>
          <Button buttonType="Primary" className="!w-auto shrink-0">
            Button
          </Button>
        </footer>
      ) : null}
    </div>
  );
}
