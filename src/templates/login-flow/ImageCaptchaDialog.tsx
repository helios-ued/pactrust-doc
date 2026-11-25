import { Button, Input, type InputState } from "@/components";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import "./image-captcha-dialog.css";

export type ImageCaptchaDialogProps = {
  open: boolean;
  value: string;
  onChange: (value: string) => void;
  captchaSeed: number;
  onRefresh: () => void;
  onClose: () => void;
  onSave: () => void;
  inputState?: InputState;
};

/** Figma moduleScreens 03 · Dialog `8375:23598` */
export function ImageCaptchaDialog({
  open,
  value,
  onChange,
  captchaSeed,
  onRefresh,
  onClose,
  onSave,
  inputState = "Default",
}: ImageCaptchaDialogProps) {
  if (!open) return null;

  const captchaSrc = `/image-captcha-sample.svg?v=${captchaSeed}`;

  return (
    <div
      className="pt-image-captcha-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pt-image-captcha-title"
      data-node-id="8375:23598"
    >
      <header className="pt-image-captcha-dialog__header">
        <h2 id="pt-image-captcha-title" className="pt-image-captcha-dialog__title">
          Please enter image captcha
        </h2>
        <button
          type="button"
          className="pt-image-captcha-dialog__close"
          aria-label="Close"
          onClick={onClose}
        >
          <EpIconByName name="Close" size={16} />
        </button>
      </header>

      <div className="pt-image-captcha-dialog__body">
        <div className="pt-image-captcha-dialog__row">
          <Input
            className="pt-image-captcha-dialog__input"
            size="Large"
            placeholder="Captcha"
            value={value}
            state={inputState}
            onChange={(e) => onChange(e.target.value)}
          />
          <div className="pt-image-captcha-dialog__image" aria-hidden>
            <img src={captchaSrc} alt="" width={115} height={40} />
          </div>
        </div>
        <button
          type="button"
          className="pt-image-captcha-dialog__refresh"
          onClick={onRefresh}
        >
          <EpIconByName name="Refresh" size={14} />
          Refresh
        </button>
      </div>

      <footer className="pt-image-captcha-dialog__footer">
        <Button buttonType="Primary" size="Default" onClick={onSave}>
          Save
        </Button>
      </footer>
    </div>
  );
}
