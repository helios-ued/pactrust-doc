import { useMemo, useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElAvatarCode } from "../lib/elementPlusCode";
import {
  Avatar,
  AvatarGroup,
  type AvatarShape,
  type AvatarSize,
  type AvatarType,
} from "@/components/Avatar/Avatar";
import {
  CustomizeField,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import {
  EdsHeroStage,
  EdsPreviewDivider,
  EdsPreviewStack,
  EdsVariantSection,
  EdsVariantTile,
} from "../ui/EdsShowcaseUi";
import type { ShowcaseDemoProps } from "./types";

type AvatarPreview = "Avatar" | "Avatar Group";
type GroupLayout = "overlap" | "gap";

const avatarSizes: Exclude<AvatarSize, "Custom">[] = ["24", "32", "40", "48", "56"];
const groupCounts = [2, 3, 4, 5, 6] as const;

function AvatarSignatureShowcase({
  avatarType,
  shape,
}: {
  avatarType: AvatarType;
  shape: AvatarShape;
}) {
  return (
    <>
      <EdsPreviewDivider />
      <EdsVariantSection>
        {avatarSizes.map((s) => (
          <EdsVariantTile key={s}>
            <Avatar size={s} avatarType={avatarType} shape={shape} text="User" />
          </EdsVariantTile>
        ))}
      </EdsVariantSection>
      <EdsPreviewDivider />
      <EdsVariantSection>
        <EdsVariantTile>
          <AvatarGroup layout="overlap" avatarSizePx={48}>
            {Array.from({ length: 6 }, (_, i) => (
              <Avatar key={i} size="48" avatarType={avatarType} shape={shape} text="User" />
            ))}
          </AvatarGroup>
        </EdsVariantTile>
        <EdsVariantTile>
          <AvatarGroup layout="gap" avatarSizePx={48}>
            {Array.from({ length: 4 }, (_, i) => (
              <Avatar key={i} size="48" avatarType={avatarType} shape={shape} text="User" />
            ))}
          </AvatarGroup>
        </EdsVariantTile>
      </EdsVariantSection>
    </>
  );
}

export function AvatarDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [preview, setPreview] = useState<AvatarPreview>("Avatar");
  const [size, setSize] = useState<AvatarSize>("40");
  const [avatarType, setAvatarType] = useState<AvatarType>("Icon");
  const [shape, setShape] = useState<AvatarShape>("Circle");
  const [groupLayout, setGroupLayout] = useState<GroupLayout>("overlap");
  const [groupCount, setGroupCount] = useState<(typeof groupCounts)[number]>(6);
  const [groupSize, setGroupSize] = useState<Exclude<AvatarSize, "Custom">>("48");

  const groupSizePx = useMemo(() => {
    const map: Record<Exclude<AvatarSize, "Custom">, number> = {
      "24": 24,
      "32": 32,
      "40": 40,
      "48": 48,
      "56": 56,
    };
    return map[groupSize];
  }, [groupSize]);

  useReportElementPlusCode(
    reportElementPlusCode,
    () =>
      buildElAvatarCode({
        mode: preview,
        size,
        shape,
        groupCount,
      }),
    [preview, size, shape, groupCount],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="展示">
            <CustomizeSelect value={preview} onChange={(e) => setPreview(e.target.value as AvatarPreview)}>
              <option value="Avatar">Avatar</option>
              <option value="Avatar Group">Avatar Group</option>
            </CustomizeSelect>
          </CustomizeField>
          {preview === "Avatar" ? (
            <>
              <CustomizeField label="Size">
                <CustomizeSelect value={size} onChange={(e) => setSize(e.target.value as AvatarSize)}>
                  <option value="Custom">Custom</option>
                  {avatarSizes.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
              <CustomizeField label="Type">
                <CustomizeSelect value={avatarType} onChange={(e) => setAvatarType(e.target.value as AvatarType)}>
                  {(["Icon", "Image", "Text"] as const).map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
              <CustomizeField label="Shape">
                <CustomizeSelect value={shape} onChange={(e) => setShape(e.target.value as AvatarShape)}>
                  <option value="Square">Square</option>
                  <option value="Circle">Circle</option>
                </CustomizeSelect>
              </CustomizeField>
            </>
          ) : (
            <>
              <CustomizeField label="Layout">
                <CustomizeSelect value={groupLayout} onChange={(e) => setGroupLayout(e.target.value as GroupLayout)}>
                  <option value="overlap">Overlap</option>
                  <option value="gap">Gap</option>
                </CustomizeSelect>
              </CustomizeField>
              <CustomizeField label="Count">
                <CustomizeSelect
                  value={String(groupCount)}
                  onChange={(e) => setGroupCount(Number(e.target.value) as (typeof groupCounts)[number])}
                >
                  {groupCounts.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
              <CustomizeField label="Size">
                <CustomizeSelect
                  value={groupSize}
                  onChange={(e) => setGroupSize(e.target.value as Exclude<AvatarSize, "Custom">)}
                >
                  {avatarSizes.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
            </>
          )}
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={preview === "Avatar" ? 340 : 200}>
          <EdsPreviewStack>
            <EdsHeroStage className="min-h-[72px] w-full py-2">
              {preview === "Avatar" ? (
                <Avatar
                  size={size}
                  customSize={24}
                  avatarType={avatarType}
                  shape={shape}
                  text="User"
                />
              ) : (
                <AvatarGroup layout={groupLayout} avatarSizePx={groupSizePx}>
                  {Array.from({ length: groupCount }, (_, i) => (
                    <Avatar key={i} size={groupSize} avatarType="Image" shape="Circle" />
                  ))}
                </AvatarGroup>
              )}
            </EdsHeroStage>
            {preview === "Avatar" ? (
              <AvatarSignatureShowcase avatarType={avatarType} shape={shape} />
            ) : (
              <>
                <EdsPreviewDivider />
                <EdsVariantSection>
                  <EdsVariantTile>
                    <AvatarGroup layout="overlap" avatarSizePx={groupSizePx}>
                      {Array.from({ length: 4 }, (_, i) => (
                        <Avatar key={i} size={groupSize} avatarType="Image" shape="Circle" />
                      ))}
                    </AvatarGroup>
                  </EdsVariantTile>
                  <EdsVariantTile>
                    <AvatarGroup layout="gap" avatarSizePx={groupSizePx}>
                      {Array.from({ length: 4 }, (_, i) => (
                        <Avatar key={i} size={groupSize} avatarType="Image" shape="Circle" />
                      ))}
                    </AvatarGroup>
                  </EdsVariantTile>
                </EdsVariantSection>
              </>
            )}
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const avatarDemoCode = buildElAvatarCode({
  mode: "Avatar",
  size: "40",
  shape: "Circle",
});
