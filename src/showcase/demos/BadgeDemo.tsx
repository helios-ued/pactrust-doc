import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElBadgeCode } from "../lib/elementPlusCode";
import { Avatar } from "@/components/Avatar/Avatar";
import { Badge, type BadgeStyle } from "@/components/Badge/Badge";
import { Button } from "@/components/Button/Button";
import {
  CustomizeBooleanField,
  CustomizeField,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import { EdsPreviewStack } from "../ui/EdsShowcaseUi";
import type { ShowcaseDemoProps } from "./types";

export function BadgeDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [badgeStyle, setBadgeStyle] = useState<BadgeStyle>("Danger");
  const [dot, setDot] = useState(false);
  const [value, setValue] = useState("9");

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElBadgeCode({ type: badgeStyle, dot, value }),
    [badgeStyle, dot, value],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Style">
            <CustomizeSelect value={badgeStyle} onChange={(e) => setBadgeStyle(e.target.value as BadgeStyle)}>
              {(["Primary", "Success", "Warning", "Danger"] as const).map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeBooleanField label="Dot" checked={dot} onChange={(e) => setDot(e.target.checked)} />
          {!dot ? (
            <CustomizeField label="Value">
              <CustomizeSelect value={value} onChange={(e) => setValue(e.target.value)}>
                <option value="9">9</option>
                <option value="99">99</option>
                <option value="999">999+</option>
              </CustomizeSelect>
            </CustomizeField>
          ) : null}
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={88}>
          <EdsPreviewStack className="gap-0">
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
              <Badge badgeStyle={badgeStyle} dot={dot} value={value}>
                <Avatar size="40" avatarType="Icon" shape="Circle" />
              </Badge>
              <Badge badgeStyle={badgeStyle} dot={dot} value={value}>
                <Button buttonType="Primary">Comments</Button>
              </Badge>
              <Badge badgeStyle={badgeStyle} dot={dot} value={value} />
            </div>
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const badgeDemoCode = buildElBadgeCode({ type: "Danger", dot: false, value: "9" });
