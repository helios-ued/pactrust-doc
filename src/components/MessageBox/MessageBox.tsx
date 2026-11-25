import { Button } from "@/components/Button/Button";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { Input } from "@/components/Input/Input";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import "./message-box.css";

export type MessageBoxType = "Message prompts" | "Confirm the message" | "Submit";

export type MessageBoxProps = {
  boxType?: MessageBoxType;
  title?: ReactNode;
  message?: ReactNode;
  className?: string;
};

const footerBtnClass =
  "pt-message-box__btn !h-8 !min-h-8 !max-h-8 !w-auto shrink-0 !px-4 !py-1";

export function MessageBox({
  boxType = "Confirm the message",
  title = "Title",
  message = "This is a message",
  className,
}: MessageBoxProps) {
  return (
    <div className={cn("pt-message-box", className)} role="alertdialog" aria-labelledby="pt-mb-title">
      <header className="pt-message-box__header">
        <h2 id="pt-mb-title" className="pt-message-box__title">
          {title}
        </h2>
        <button type="button" className="pt-message-box__close" aria-label="关闭">
          <EpIconByName name="Close" size={16} />
        </button>
      </header>

      {boxType === "Message prompts" ? (
        <div className="pt-message-box__content">
          <p className="pt-message-box__text">{message}</p>
        </div>
      ) : null}

      {boxType === "Confirm the message" ? (
        <div className={cn("pt-message-box__content", "pt-message-box__content--confirm")}>
          <EpIconByName name="WarningFilled" size={16} className="pt-message-box__status-icon" />
          <p className="pt-message-box__text">{message}</p>
        </div>
      ) : null}

      {boxType === "Submit" ? (
        <div className={cn("pt-message-box__content", "pt-message-box__content--submit")}>
          <p className="pt-message-box__text">{message}</p>
          <Input className="pt-message-box__input" placeholder="" aria-label="输入" readOnly />
        </div>
      ) : null}

      <footer className="pt-message-box__footer">
        {boxType === "Message prompts" ? (
          <Button buttonType="Primary" size="Default" className={footerBtnClass}>
            Button
          </Button>
        ) : (
          <>
            <Button buttonType="Default" size="Default" className={footerBtnClass}>
              Button
            </Button>
            <Button buttonType="Primary" size="Default" className={footerBtnClass}>
              Button
            </Button>
          </>
        )}
      </footer>
    </div>
  );
}
