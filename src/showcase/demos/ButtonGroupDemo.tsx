import { useMemo, useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElButtonGroupCode } from "../lib/elementPlusCode";
import { Button, type ButtonType } from "@/components/Button/Button";
import { ButtonGroup, type ButtonGroupProps } from "@/components/Button/ButtonGroup";
import { IconButton } from "@/components/Button/IconButton";
import { MixButton, type MixButtonType } from "@/components/Button/MixButton";
import {
  IconArrowLeft,
  IconArrowRight,
  IconDelete,
  IconEdit,
  IconShare,
} from "@/components/Icon/icons";
import type { ShowcaseDemoProps } from "./types";
import {
  CustomizeField,
  CustomizeInlineCheck,
  CustomizeInput,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";

const buttonTypes: ButtonType[] = [
  "Default",
  "Primary",
  "Success",
  "Warning",
  "Danger",
  "Info",
];

type PresetId =
  | "custom"
  | "segmented"
  | "segmented-bg"
  | "attached-pagination"
  | "attached-icons"
  | "mix-split-primary"
  | "mix-split-default"
  | "mix-confirm"
  | "mix-delete"
  | "mix-primary"
  | "mix-default";

const presets: { id: PresetId; label: string }[] = [
  { id: "custom", label: "自定义" },
  { id: "segmented", label: "Segmented · Background=false" },
  { id: "segmented-bg", label: "Segmented · Background=true" },
  { id: "attached-pagination", label: "Attached · 分页" },
  { id: "attached-icons", label: "Attached · Icon-button" },
  { id: "mix-split-primary", label: "Mix · Split Primary" },
  { id: "mix-split-default", label: "Mix · Split Default" },
  { id: "mix-confirm", label: "Mix · Confirm" },
  { id: "mix-delete", label: "Mix · Delete" },
  { id: "mix-primary", label: "Mix · Primary" },
  { id: "mix-default", label: "Mix · Default" },
];

function isMixPreset(p: PresetId) {
  return p.startsWith("mix-");
}

function presetToMixType(p: PresetId): MixButtonType {
  const map: Record<string, MixButtonType> = {
    "mix-split-primary": "Split Primary",
    "mix-split-default": "Split Default",
    "mix-confirm": "Confirm",
    "mix-delete": "Delete",
    "mix-primary": "Primary",
    "mix-default": "Default",
  };
  return map[p] ?? "Split Primary";
}

export function ButtonGroupDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [preset, setPreset] = useState<PresetId>("segmented");
  const [layout, setLayout] = useState<ButtonGroupProps["layout"]>("segmented");
  const [background, setBackground] = useState(false);
  const [count, setCount] = useState(2);
  const [firstType, setFirstType] = useState<ButtonType>("Primary");
  const [restType, setRestType] = useState<ButtonType>("Default");
  const [label, setLabel] = useState("Button");
  const [prevLabel, setPrevLabel] = useState("Previous Page");
  const [nextLabel, setNextLabel] = useState("Next Page");
  const [disabled, setDisabled] = useState(false);

  useReportElementPlusCode(reportElementPlusCode, () => buildElButtonGroupCode(), []);

  const isMix = isMixPreset(preset);
  const isCustom = preset === "custom";

  const applyPreset = (id: PresetId) => {
    setPreset(id);
    if (id === "segmented") {
      setLayout("segmented");
      setBackground(false);
      setCount(2);
      setFirstType("Primary");
      setRestType("Default");
    } else if (id === "segmented-bg") {
      setLayout("segmented");
      setBackground(true);
      setCount(2);
      setFirstType("Primary");
      setRestType("Default");
    } else if (id === "attached-pagination") {
      setLayout("attached");
      setBackground(false);
      setCount(2);
      setFirstType("Primary");
      setRestType("Primary");
    } else if (id === "attached-icons") {
      setLayout("attached");
      setBackground(false);
      setCount(3);
    }
  };

  const preview = useMemo(() => {
    if (isMix) {
      return <MixButton type={presetToMixType(preset)} />;
    }

    if (preset === "attached-pagination") {
      return (
        <ButtonGroup layout="attached">
          <Button
            buttonType="Primary"
            disabled={disabled}
            leftIcon={<IconArrowLeft width={14} height={14} />}
          >
            {prevLabel}
          </Button>
          <Button
            buttonType="Primary"
            disabled={disabled}
            rightIcon={<IconArrowRight width={14} height={14} />}
          >
            {nextLabel}
          </Button>
        </ButtonGroup>
      );
    }

    if (preset === "attached-icons") {
      return (
        <ButtonGroup layout="attached">
          <IconButton
            buttonType="Primary"
            disabled={disabled}
            aria-label="编辑"
            icon={<IconEdit />}
          />
          <IconButton
            buttonType="Primary"
            disabled={disabled}
            aria-label="分享"
            icon={<IconShare />}
          />
          <IconButton
            buttonType="Primary"
            disabled={disabled}
            aria-label="删除"
            icon={<IconDelete />}
          />
        </ButtonGroup>
      );
    }

    const buttons = Array.from({ length: count }, (_, i) => {
      const type = i === 0 ? firstType : restType;
      return (
        <Button key={i} buttonType={type} disabled={disabled}>
          {label}
          {count > 1 ? ` ${i + 1}` : ""}
        </Button>
      );
    });

    return (
      <ButtonGroup layout={layout} background={layout === "segmented" ? background : false}>
        {buttons}
      </ButtonGroup>
    );
  }, [
    background,
    count,
    disabled,
    firstType,
    isMix,
    label,
    layout,
    nextLabel,
    preset,
    prevLabel,
    restType,
  ]);

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Figma 预设">
            <CustomizeSelect
              value={preset}
              onChange={(e) => applyPreset(e.target.value as PresetId)}
            >
              {presets.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>

          {isCustom && !isMix ? (
            <>
              <CustomizeField label="Layout">
                <CustomizeSelect
                  value={layout}
                  onChange={(e) => setLayout(e.target.value as ButtonGroupProps["layout"])}
                >
                  <option value="segmented">segmented</option>
                  <option value="attached">attached</option>
                </CustomizeSelect>
              </CustomizeField>
              <CustomizeField label="Number">
                <CustomizeSelect
                  value={String(count)}
                  onChange={(e) => setCount(Number(e.target.value))}
                >
                  {[2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
              <CustomizeField label="首项 Type">
                <CustomizeSelect
                  value={firstType}
                  onChange={(e) => setFirstType(e.target.value as ButtonType)}
                >
                  {buttonTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
              <CustomizeField label="其余 Type">
                <CustomizeSelect
                  value={restType}
                  onChange={(e) => setRestType(e.target.value as ButtonType)}
                >
                  {buttonTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
              <CustomizeInlineCheck
                label="Background"
                checked={background}
                onChange={(e) => setBackground(e.target.checked)}
              />
              <CustomizeField label="文案" wide>
                <CustomizeInput value={label} onChange={(e) => setLabel(e.target.value)} />
              </CustomizeField>
            </>
          ) : null}

          {preset === "attached-pagination" ? (
            <>
              <CustomizeField label="上一页" wide>
                <CustomizeInput value={prevLabel} onChange={(e) => setPrevLabel(e.target.value)} />
              </CustomizeField>
              <CustomizeField label="下一页" wide>
                <CustomizeInput value={nextLabel} onChange={(e) => setNextLabel(e.target.value)} />
              </CustomizeField>
            </>
          ) : null}

          {!isMix && preset !== "attached-icons" ? (
            <CustomizeInlineCheck
              label="Disable"
              checked={disabled}
              onChange={(e) => setDisabled(e.target.checked)}
            />
          ) : null}
        </CustomizeToolbar>
      }
      preview={<DemoStage>{preview}</DemoStage>}
    />
  );
}

export const buttonGroupCode = buildElButtonGroupCode();
