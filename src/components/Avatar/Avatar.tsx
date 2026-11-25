import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { AVATAR_FIGMA_SAMPLE_SRC } from "./avatarAssets";
import "./avatar.css";

/** Figma Avatar — Size × Type × Shape (`1300:45972`) */
export type AvatarSize = "Custom" | "24" | "32" | "40" | "48" | "56";
export type AvatarType = "Icon" | "Image" | "Text";
export type AvatarShape = "Square" | "Circle";

export type AvatarProps = HTMLAttributes<HTMLSpanElement> & {
  size?: AvatarSize;
  avatarType?: AvatarType;
  shape?: AvatarShape;
  /** Type=Text 时展示字符 */
  text?: string;
  /** Type=Image 时图片地址 */
  src?: string;
  alt?: string;
  /** Custom 尺寸（px） */
  customSize?: number;
};

const presetPx: Record<Exclude<AvatarSize, "Custom">, number> = {
  "24": 24,
  "32": 32,
  "40": 40,
  "48": 48,
  "56": 56,
};

function resolvePx(size: AvatarSize, customSize?: number): number {
  if (size === "Custom") return customSize ?? 24;
  return presetPx[size];
}

function iconInnerPx(outer: number): number {
  return Math.round(outer * 0.6);
}

/** Figma Text 头像字号（bold / Headline3 @ 40px） */
function textFontPx(outer: number): number {
  if (outer <= 24) return 12;
  if (outer <= 32) return 13;
  if (outer <= 40) return 16;
  if (outer <= 48) return 16;
  return 18;
}

function avatarInitial(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return "U";
  return trimmed.charAt(0).toUpperCase();
}

export function Avatar({
  size = "40",
  avatarType = "Icon",
  shape = "Circle",
  text = "U",
  src = AVATAR_FIGMA_SAMPLE_SRC,
  alt = "",
  customSize,
  className,
  style,
  ...rest
}: AvatarProps) {
  const px = resolvePx(size, customSize);
  const innerIcon = iconInnerPx(px);

  const body =
    avatarType === "Icon" ? (
      <EpIconByName name="User" size={innerIcon} aria-hidden />
    ) : avatarType === "Image" ? (
      <img className="pt-avatar__img" src={src} alt={alt} />
    ) : (
      <span className="pt-avatar__initial" aria-hidden>
        {avatarInitial(text)}
      </span>
    );

  return (
    <span
      className={cn(
        "pt-avatar",
        shape === "Circle" ? "pt-avatar--shape-circle" : "pt-avatar--shape-square",
        avatarType === "Text" && "pt-avatar--type-text",
        avatarType === "Icon" && "pt-avatar--type-icon",
        avatarType === "Image" && "pt-avatar--type-image",
        className,
      )}
      style={{ width: px, height: px, fontSize: textFontPx(px), ...style }}
      {...rest}
    >
      <span className="pt-avatar__inner">{body}</span>
    </span>
  );
}

export type AvatarGroupProps = HTMLAttributes<HTMLDivElement> & {
  /** overlap 叠放 · gap 间距（Figma Copy me） */
  layout?: "overlap" | "gap";
  /** overlap 布局时用于 margin 计算（px） */
  avatarSizePx?: number;
  children?: ReactNode;
};

export function AvatarGroup({
  layout = "overlap",
  avatarSizePx = 48,
  className,
  style,
  children,
  ...rest
}: AvatarGroupProps) {
  return (
    <div
      className={cn(
        "pt-avatar-group",
        layout === "overlap" ? "pt-avatar-group--overlap" : "pt-avatar-group--gap",
        className,
      )}
      style={
        layout === "overlap"
          ? ({
              ...style,
              ["--pt-avatar-size" as string]: `${avatarSizePx}px`,
              ["--pt-avatar-overlap-step" as string]: "34px",
            } as CSSProperties)
          : style
      }
      {...rest}
    >
      {children}
    </div>
  );
}
