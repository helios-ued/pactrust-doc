import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElScrollbarCode } from "../lib/elementPlusCode";
import { Scrollbar, type ScrollbarDirection } from "@/components/Scrollbar/Scrollbar";
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

const directions: ScrollbarDirection[] = ["vertical", "horizontal"];

const sizeDefaults: Record<ScrollbarDirection, string> = {
  vertical: "160",
  horizontal: "400",
};

const sizeLimits: Record<
  ScrollbarDirection,
  { min: number; max: number; label: string }
> = {
  vertical: { min: 80, max: 480, label: "maxHeight" },
  horizontal: { min: 200, max: 640, label: "maxWidth" },
};

export function ScrollbarDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [direction, setDirection] = useState<ScrollbarDirection>("vertical");
  const [maxSize, setMaxSize] = useState(sizeDefaults.vertical);

  const sizeNum = Number(maxSize) || Number(sizeDefaults[direction]);
  const isHorizontal = direction === "horizontal";
  const limits = sizeLimits[direction];

  useReportElementPlusCode(reportElementPlusCode, () => buildElScrollbarCode(), []);

  const handleDirectionChange = (next: ScrollbarDirection) => {
    setDirection(next);
    setMaxSize(sizeDefaults[next]);
  };

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Direction">
            <CustomizeSelect
              value={direction}
              onChange={(e) => handleDirectionChange(e.target.value as ScrollbarDirection)}
            >
              {directions.map((d) => (
                <option key={d} value={d}>
                  {d === "vertical" ? "vertical" : "Horizontal"}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label={limits.label}>
            <CustomizeInput
              type="number"
              min={limits.min}
              max={limits.max}
              value={maxSize}
              onChange={(e) => setMaxSize(e.target.value)}
            />
          </CustomizeField>
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={isHorizontal ? 180 : 200}>
          <div className="flex w-full justify-center">
            {isHorizontal ? (
              <Scrollbar
                direction="horizontal"
                maxWidth={sizeNum}
                height={130}
                className="shrink-0"
              >
                <div className="flex w-max gap-4 p-6">
                  {Array.from({ length: 6 }, (_, i) => (
                    <div
                      key={i}
                      className="flex h-[82px] w-[280px] shrink-0 items-center justify-center rounded-el-base border border-[color:var(--el-border-color-light)] bg-[color:var(--ds-bg-muted)]"
                    >
                      <Text role="Title" size="Default" weight="Regular">
                        {i + 1}
                      </Text>
                    </div>
                  ))}
                </div>
              </Scrollbar>
            ) : (
              <Scrollbar
                direction="vertical"
                maxHeight={sizeNum}
                width={320}
                className="shrink-0"
              >
                <div className="space-y-4 p-6">
                  {Array.from({ length: 8 }, (_, i) => (
                    <div
                      key={i}
                      className="flex h-[82px] items-center justify-center rounded-el-base border border-[color:var(--el-border-color-light)] bg-[color:var(--ds-bg-muted)]"
                    >
                      <Text role="Title" size="Default" weight="Regular">
                        {i + 1}
                      </Text>
                    </div>
                  ))}
                </div>
              </Scrollbar>
            )}
          </div>
        </DemoStage>
      }
    />
  );
}

export const scrollbarCode = buildElScrollbarCode();
