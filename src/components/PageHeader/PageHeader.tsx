import { Breadcrumb } from "@/components/Breadcrumb/Breadcrumb";
import { Button } from "@/components/Button/Button";
import { ButtonGroup } from "@/components/Button/ButtonGroup";
import { groupButtonSize } from "@/components/Button/buttonGroupStyles";
import { IconButton } from "@/components/Button/IconButton";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { RadioGroup } from "@/components/Radio/RadioGroup";
import { Tag } from "@/components/Tag/Tag";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import "./page-header.css";

/** Figma PageHeader · Option-type */
export type PageHeaderOptionType = "Option" | "Radio";

const DEFAULT_CRUMBS = [
  { label: "Home", href: "#" },
  { label: "Navigation", href: "#" },
  { label: "Page Header", current: true },
] as const;

export type PageHeaderProps = {
  optionType?: PageHeaderOptionType;
  backButton?: boolean;
  /** 替换默认返回图标 */
  changeButton?: ReactNode;
  crumbs?: boolean;
  showOption?: boolean;
  tag?: boolean;
  title?: ReactNode;
  subheading?: ReactNode;
  className?: string;
  /** 右侧操作区自定义内容（覆盖 Option / Radio 预设） */
  extra?: ReactNode;
};

function PageHeaderOptionActions() {
  return (
    <ButtonGroup layout="segmented">
      <Button buttonType="Default" className={groupButtonSize} leftIcon={false} rightIcon={false}>
        Button
      </Button>
      <Button buttonType="Default" className={groupButtonSize} leftIcon={false} rightIcon={false}>
        Button
      </Button>
      <Button buttonType="Primary" className={groupButtonSize} leftIcon={false} rightIcon={false}>
        Button
      </Button>
      <IconButton
        buttonType="Default"
        className="pt-page-header__more"
        aria-label="更多"
        icon={<EpIconByName name="More" size={14} />}
      />
    </ButtonGroup>
  );
}

function PageHeaderRadioActions() {
  return (
    <RadioGroup
      type="Button"
      className="pt-page-header__radio-group"
      defaultValue="1"
      options={[
        { label: "Button", value: "1" },
        { label: "Button", value: "2" },
        { label: "Button", value: "3" },
      ]}
    />
  );
}

export function PageHeader({
  optionType = "Option",
  backButton = true,
  changeButton,
  crumbs = true,
  showOption = true,
  tag = true,
  title = "UI Design",
  subheading = "This is a description",
  className,
  extra,
}: PageHeaderProps) {
  const backControl =
    changeButton ??
    (backButton ? (
      <button type="button" className="pt-page-header__back" aria-label="返回">
        <EpIconByName name="Back" size={16} />
      </button>
    ) : null);

  const actions =
    extra ??
    (showOption ? (
      optionType === "Radio" ? <PageHeaderRadioActions /> : <PageHeaderOptionActions />
    ) : null);

  return (
    <section className={cn("pt-page-header", className)} data-name="PageHeader">
      {crumbs ? (
        <div className="pt-page-header__crumbs">
          <Breadcrumb items={[...DEFAULT_CRUMBS]} />
        </div>
      ) : null}
      <div className="pt-page-header__main">
        <div className="pt-page-header__left">
          {backControl}
          <h1 className="pt-page-header__title">{title}</h1>
          <span className="pt-page-header__divider" aria-hidden />
          <p className="pt-page-header__subtitle">{subheading}</p>
          {tag ? (
            <Tag size="Small" topic="Light" tagStyle="Default">
              Tag
            </Tag>
          ) : null}
        </div>
        {actions ? <div className="pt-page-header__actions">{actions}</div> : null}
      </div>
    </section>
  );
}
