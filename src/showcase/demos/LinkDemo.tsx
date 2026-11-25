import { useState } from "react";
import { Link, type LinkType } from "@/components/Link/Link";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElLinkCode } from "../lib/elementPlusCode";
import { cn } from "@/lib/cn";
import {
  CustomizeField,
  CustomizeInput,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import type { ShowcaseDemoProps } from "./types";

const linkTypes: LinkType[] = ["Default", "Primary", "Success", "Warning", "Danger", "Info"];

/** Figma State 枚举（Error → Danger 已在 Style 中） */
const linkStates = ["Default", "Hover", "Hover(underline)", "Disable"] as const;
type LinkPreviewState = (typeof linkStates)[number];

export function LinkDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [linkType, setLinkType] = useState<LinkType>("Primary");
  const [state, setState] = useState<LinkPreviewState>("Default");
  const [label, setLabel] = useState("链接文字");
  const [href, setHref] = useState("#");

  const underline = state === "Hover(underline)";
  const disabled = state === "Disable";
  const forceHover = state === "Hover" || state === "Hover(underline)";

  useReportElementPlusCode(
    reportElementPlusCode,
    () =>
      buildElLinkCode({
        type: linkType,
        href,
        label,
        disabled,
        underline,
      }),
    [linkType, href, label, disabled, underline],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Style">
            <CustomizeSelect value={linkType} onChange={(e) => setLinkType(e.target.value as LinkType)}>
              {linkTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="State">
            <CustomizeSelect value={state} onChange={(e) => setState(e.target.value as LinkPreviewState)}>
              {linkStates.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="href" wide>
            <CustomizeInput value={href} onChange={(e) => setHref(e.target.value)} />
          </CustomizeField>
          <CustomizeField label="文案" wide>
            <CustomizeInput value={label} onChange={(e) => setLabel(e.target.value)} />
          </CustomizeField>
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={100}>
          <Link
            href={href}
            linkType={linkType}
            underline={underline}
            disabled={disabled}
            className={cn(forceHover && !disabled && "opacity-80")}
            onClick={(e) => {
              if (href === "#") e.preventDefault();
            }}
          >
            {label}
          </Link>
        </DemoStage>
      }
    />
  );
}

export const linkCode = buildElLinkCode({
  type: "Primary",
  href: "#",
  label: "链接文字",
  disabled: false,
  underline: false,
});
