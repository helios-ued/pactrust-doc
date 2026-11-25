import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import type { HTMLAttributes, MouseEvent, ReactNode } from "react";
import "./tag.css";

/** Figma Tag — Style × Size × Topic × Close (`44:13712`) */
export type TagStyle = "Default" | "Success" | "Warning" | "Danger" | "Info";
export type TagSize = "Default" | "Large" | "Small";
export type TagTopic = "Plain" | "Light" | "Dark";

export type TagProps = HTMLAttributes<HTMLSpanElement> & {
  tagStyle?: TagStyle;
  size?: TagSize;
  topic?: TagTopic;
  /** Figma Close */
  closable?: boolean;
  onClose?: (e: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
};

const styleKey: Record<TagStyle, string> = {
  Default: "default",
  Success: "success",
  Warning: "warning",
  Danger: "danger",
  Info: "info",
};

const sizeClass: Record<TagSize, string> = {
  Small: "pt-tag--size-small",
  Default: "pt-tag--size-default",
  Large: "pt-tag--size-large",
};

const topicKey: Record<TagTopic, string> = {
  Plain: "plain",
  Light: "light",
  Dark: "dark",
};

const closeIconSize: Record<TagSize, number> = {
  Small: 12,
  Default: 14,
  Large: 14,
};

export function Tag({
  tagStyle = "Default",
  size = "Default",
  topic = "Plain",
  closable = false,
  onClose,
  className,
  children = "Tag",
  ...rest
}: TagProps) {
  return (
    <span
      className={cn(
        "pt-tag",
        sizeClass[size],
        `pt-tag--${styleKey[tagStyle]}`,
        `pt-tag--${topicKey[topic]}`,
        className,
      )}
      {...rest}
    >
      {children}
      {closable ? (
        <button type="button" className="pt-tag__close" aria-label="关闭" onClick={onClose}>
          <EpIconByName name="CircleClose" size={closeIconSize[size]} />
        </button>
      ) : null}
    </span>
  );
}

export type TagGroupNumber = 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type TagGroupProps = HTMLAttributes<HTMLDivElement> & {
  /** Figma Custom=False */
  custom?: boolean;
  /** Figma Number=2…8（custom=false） */
  number?: TagGroupNumber;
  children?: ReactNode;
};

const TAG_GROUP_CUSTOM: Array<{
  tagStyle: TagStyle;
  topic: TagTopic;
  closable?: boolean;
  label: string;
}> = [
  { tagStyle: "Default", topic: "Plain", label: "Tag" },
  { tagStyle: "Success", topic: "Light", label: "Tag" },
  { tagStyle: "Warning", topic: "Dark", label: "Tag" },
  { tagStyle: "Danger", topic: "Plain", closable: true, label: "Tag" },
  { tagStyle: "Info", topic: "Light", label: "Tag" },
  { tagStyle: "Default", topic: "Dark", label: "Tag" },
  { tagStyle: "Success", topic: "Plain", closable: true, label: "Tag" },
  { tagStyle: "Warning", topic: "Light", label: "Tag" },
];

export function TagGroup({
  custom = false,
  number = 2,
  className,
  children,
  ...rest
}: TagGroupProps) {
  const content =
    children ??
    (custom
      ? TAG_GROUP_CUSTOM.map((t, i) => (
          <Tag key={i} tagStyle={t.tagStyle} topic={t.topic} closable={t.closable}>
            {t.label}
          </Tag>
        ))
      : Array.from({ length: number }, (_, i) => (
          <Tag key={i} tagStyle="Default" topic="Plain">
            Tag
          </Tag>
        )));

  return (
    <div className={cn("pt-tag-group", className)} {...rest}>
      {content}
    </div>
  );
}

export type NewTagVisualState = "Default" | "Hover" | "Focus";

export type NewTagProps = HTMLAttributes<HTMLButtonElement> & {
  size?: TagSize;
  /** Figma New Tag State */
  visualState?: NewTagVisualState;
};

export function NewTag({
  size = "Default",
  visualState = "Default",
  className,
  children = "+ New Tag",
  ...rest
}: NewTagProps) {
  const sizeMap: Record<TagSize, string> = {
    Small: "pt-new-tag--size-small",
    Default: "pt-new-tag--size-default",
    Large: "pt-new-tag--size-large",
  };
  const stateMap: Record<Exclude<NewTagVisualState, "Default">, string> = {
    Hover: "pt-new-tag--state-hover",
    Focus: "pt-new-tag--state-focus",
  };
  return (
    <button
      type="button"
      className={cn(
        "pt-new-tag",
        sizeMap[size],
        visualState !== "Default" && stateMap[visualState],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export type CheckTagProps = HTMLAttributes<HTMLButtonElement> & {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

export function CheckTag({
  checked = false,
  onCheckedChange,
  className,
  children = "Tag",
  onClick,
  ...rest
}: CheckTagProps) {
  return (
    <button
      type="button"
      className={cn("pt-check-tag", checked && "pt-check-tag--checked", className)}
      aria-pressed={checked}
      onClick={(e) => {
        onClick?.(e);
        if (!e.defaultPrevented) onCheckedChange?.(!checked);
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
