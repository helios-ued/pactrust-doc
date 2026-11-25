import { IconArrowDown } from "@/components/Icon/icons";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "./Button";
import { IconButton } from "./IconButton";

/** Figma Mix button component set on Button Group page */
export type MixButtonType =
  | "Split Primary"
  | "Split Default"
  | "Confirm"
  | "Delete"
  | "Primary"
  | "Default";

export type MixButtonProps = {
  type?: MixButtonType;
  className?: string;
};

export function MixButton({ type = "Split Primary", className }: MixButtonProps) {
  if (type === "Split Primary" || type === "Split Default") {
    const primary = type === "Split Primary";
    return (
      <ButtonGroup layout="attached" className={className}>
        <Button buttonType={primary ? "Primary" : "Default"} className="!min-w-[7rem]">
          Split Button
        </Button>
        <IconButton
          buttonType={primary ? "Primary" : "Default"}
          plain={false}
          icon={<IconArrowDown width={14} height={14} />}
          aria-label="展开菜单"
        />
      </ButtonGroup>
    );
  }

  if (type === "Confirm") {
    return (
      <ButtonGroup layout="attached" className={className}>
        <Button buttonType="Primary">确认</Button>
        <Button buttonType="Default">取消</Button>
      </ButtonGroup>
    );
  }

  if (type === "Delete") {
    return (
      <ButtonGroup layout="attached" className={className}>
        <Button buttonType="Danger">删除</Button>
        <Button buttonType="Default">取消</Button>
      </ButtonGroup>
    );
  }

  if (type === "Primary") {
    return (
      <ButtonGroup layout="attached" className={className}>
        <Button buttonType="Primary">Left</Button>
        <Button buttonType="Primary">Middle</Button>
        <Button buttonType="Primary" rightIcon={<IconArrowDown width={14} height={14} />}>
          Middle
        </Button>
        <Button buttonType="Primary">Right</Button>
      </ButtonGroup>
    );
  }

  return (
    <ButtonGroup layout="segmented" className={className}>
      <Button buttonType="Default">Left</Button>
      <Button buttonType="Default">Middle</Button>
      <Button buttonType="Default">Right</Button>
    </ButtonGroup>
  );
}
