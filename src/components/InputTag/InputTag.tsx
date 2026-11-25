import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import { type KeyboardEvent, useState } from "react";
import {
  inputFieldStateClasses,
  inputSizeClasses,
} from "../Input/inputFieldStyles";
import "./input-tag.css";

export type InputTagSize = "Default" | "Large" | "Small";
export type InputTagState = "Default" | "Hover" | "Focus" | "Disabled";

export type InputTagProps = {
  value?: string[];
  defaultValue?: string[];
  onChange?: (tags: string[]) => void;
  placeholder?: string;
  size?: InputTagSize;
  state?: InputTagState;
  prefixIcon?: boolean;
  suffixIcon?: boolean;
  className?: string;
};

const iconSize: Record<InputTagSize, number> = {
  Default: 14,
  Large: 14,
  Small: 14,
};

const chipSizeClass: Record<InputTagSize, string> = {
  Default: "",
  Large: "pt-input-tag__chip--large",
  Small: "pt-input-tag__chip--small",
};

const chipCloseIconSize: Record<InputTagSize, number> = {
  Default: 14,
  Large: 14,
  Small: 12,
};

export function InputTag({
  value: controlled,
  defaultValue = [],
  onChange,
  placeholder = "Please input",
  size = "Default",
  state = "Default",
  prefixIcon = true,
  suffixIcon = true,
  className,
}: InputTagProps) {
  const [internal, setInternal] = useState(defaultValue);
  const tags = controlled ?? internal;
  const [draft, setDraft] = useState("");
  const [focused, setFocused] = useState(false);

  const isDisabled = state === "Disabled";
  let visualState = state;
  if (focused && (state === "Default" || state === "Hover")) {
    visualState = "Focus";
  }

  const setTags = (next: string[]) => {
    if (controlled === undefined) setInternal(next);
    onChange?.(next);
  };

  const addTag = (raw: string) => {
    const t = raw.trim();
    if (!t || tags.includes(t) || isDisabled) return;
    setTags([...tags, t]);
    setDraft("");
  };

  const clearAll = () => {
    if (isDisabled) return;
    setTags([]);
    setDraft("");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag(draft);
    }
    if (e.key === "Backspace" && !draft && tags.length) {
      setTags(tags.slice(0, -1));
    }
  };

  const icon = iconSize[size];
  const showSuffixClear = suffixIcon && (tags.length > 0 || draft.length > 0);

  return (
    <div
      className={cn(
        "pt-input-tag rounded-el-base border bg-el-fill-blank",
        inputSizeClasses[size],
        inputFieldStateClasses(visualState),
        isDisabled && "cursor-not-allowed opacity-60",
        className,
      )}
    >
      {prefixIcon ? (
        <span className="pt-input-tag__affix">
          <EpIconByName name="User" size={icon} aria-hidden />
        </span>
      ) : null}

      <div className="pt-input-tag__body">
        {tags.map((t) => (
          <span key={t} className={cn("pt-input-tag__chip", chipSizeClass[size])}>
            <span className="pt-input-tag__chip-label">{t}</span>
            {!isDisabled ? (
              <button
                type="button"
                className="pt-input-tag__chip-remove"
                aria-label={`Remove ${t}`}
                onClick={() => setTags(tags.filter((x) => x !== t))}
              >
                <EpIconByName name="Close" size={chipCloseIconSize[size]} />
              </button>
            ) : null}
          </span>
        ))}
        <input
          disabled={isDisabled}
          value={draft}
          placeholder={tags.length ? "" : placeholder}
          className="pt-input-tag__field"
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={onKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false);
            addTag(draft);
          }}
        />
      </div>

      {suffixIcon ? (
        <span className="pt-input-tag__affix">
          {showSuffixClear ? (
            <button
              type="button"
              className="pt-input-tag__affix-btn"
              aria-label="Clear all"
              disabled={isDisabled}
              onClick={clearAll}
            >
              <EpIconByName name="CircleClose" size={icon} />
            </button>
          ) : (
            <EpIconByName name="CircleClose" size={icon} className="opacity-40" aria-hidden />
          )}
        </span>
      ) : null}
    </div>
  );
}
