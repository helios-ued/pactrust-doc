import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElSpaceCode } from "../lib/elementPlusCode";
import { Space, type SpaceDirection, type SpaceSize, resolveSpaceGap } from "@/components/Space/Space";
import { Text } from "@/components/Text/Text";
import {
  CustomizeField,
  CustomizeInput,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import type { ShowcaseDemoProps } from "./types";

type SizePreset = Exclude<SpaceSize, number> | "custom";

const sizePresets: { value: Exclude<SpaceSize, number>; label: string }[] = [
  { value: "small", label: "Small (8px)" },
  { value: "default", label: "Default (12px)" },
  { value: "large", label: "Large (16px)" },
  { value: "spacing3xl", label: "spacing-3xl (24px)" },
  { value: "spacing4xl", label: "spacing-4xl (32px)" },
];

function DemoCard({ label }: { label: string }) {
  return (
    <div className="flex h-[140px] w-[200px] shrink-0 flex-col justify-end rounded-el-base border border-[color:var(--el-color-info-light-3)] bg-[color:color-mix(in_srgb,var(--el-color-info-light-3)_22%,var(--el-fill-color-blank))] p-4 md:h-[180px] md:w-[240px]">
      <Text role="Title" size="Default" weight="Regular">
        {label}
      </Text>
    </div>
  );
}

export function SpaceDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [direction, setDirection] = useState<SpaceDirection>("horizontal");
  const [sizePreset, setSizePreset] = useState<SizePreset>("default");
  const [customGap, setCustomGap] = useState("120");

  const size: SpaceSize =
    sizePreset === "custom" ? Number(customGap) || 0 : sizePreset;
  const gapPx = resolveSpaceGap(size);

  useReportElementPlusCode(
    reportElementPlusCode,
    () =>
      buildElSpaceCode({
        direction,
        size: sizePreset === "custom" ? "default" : String(sizePreset),
      }),
    [direction, sizePreset],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Direction">
            <CustomizeSelect
              value={direction}
              onChange={(e) => setDirection(e.target.value as SpaceDirection)}
            >
              <option value="horizontal">horizontal · Space/width</option>
              <option value="vertical">vertical · Space/height</option>
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Size">
            <CustomizeSelect
              value={sizePreset}
              onChange={(e) => setSizePreset(e.target.value as SizePreset)}
            >
              {sizePresets.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
              <option value="custom">Custom</option>
            </CustomizeSelect>
          </CustomizeField>
          {sizePreset === "custom" ? (
            <CustomizeField label="Custom (px)">
              <CustomizeInput
                type="number"
                min={0}
                max={240}
                value={customGap}
                onChange={(e) => setCustomGap(e.target.value)}
              />
            </CustomizeField>
          ) : null}
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={direction === "vertical" ? 520 : 260}>
          <div className="flex w-full flex-col items-center gap-3">
            <Space direction={direction} size={size} align="stretch">
              <DemoCard label="Card A" />
              <DemoCard label="Card B" />
              <DemoCard label="Card C" />
            </Space>
            <p className="text-xs text-el-text-secondary">
              间距 {gapPx}px · Figma {direction === "horizontal" ? "Space/width" : "Space/height"}
            </p>
          </div>
        </DemoStage>
      }
    />
  );
}

export const spaceDemoCode = buildElSpaceCode({ direction: "horizontal", size: "default" });
