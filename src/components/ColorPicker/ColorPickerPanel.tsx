import { cn } from "@/lib/cn";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  clamp,
  hsvToRgb,
  parseColor,
  rgbToHsv,
  rgbaToString,
  toHex,
  type Rgba,
} from "./colorMath";
import "./color-picker-panel.css";

/** Figma ColorPickerPanel — Type × Border × Disabled */
export type ColorPickerPanelType = "default" | "alpha" | "predefined";

export const FIGMA_PREDEFINE_COLORS: { color: string; checkered?: boolean }[] = [
  { color: "#ec5428" },
  { color: "#f19135" },
  { color: "#fad649" },
  { color: "#a6ea99" },
  { color: "#5bcbcf" },
  { color: "var(--el-color-primary)" },
  { color: "#b73082" },
  { color: "#e77f61" },
  { color: "#ef7f31" },
  { color: "#f5d348" },
  { color: "#51b7bb" },
  { color: "rgba(166, 234, 153, 0.8)", checkered: true },
  { color: "rgba(65, 145, 247, 0.8)", checkered: true },
  { color: "rgba(183, 48, 130, 0.8)", checkered: true },
];

export type ColorPickerPanelProps = {
  type?: ColorPickerPanelType;
  border?: boolean;
  value?: string;
  onChange?: (color: string) => void;
  disabled?: boolean;
  className?: string;
  predefinedColors?: { color: string; checkered?: boolean }[];
};

function emitColor(
  type: ColorPickerPanelType,
  rgba: Rgba,
  onChange?: (c: string) => void,
) {
  if (!onChange) return;
  onChange(type === "default" ? toHex(rgba) : rgbaToString(rgba));
}

export function ColorPickerPanel({
  type = "default",
  border = true,
  value = "#1677ff",
  onChange,
  disabled = false,
  className,
  predefinedColors = FIGMA_PREDEFINE_COLORS,
}: ColorPickerPanelProps) {
  const initial = parseColor(value);
  const initialHsv = rgbToHsv(initial.r, initial.g, initial.b);
  const [hue, setHue] = useState(initialHsv.h);
  const [sat, setSat] = useState(initialHsv.s);
  const [val, setVal] = useState(initialHsv.v);
  const [alpha, setAlpha] = useState(initial.a);

  const svRef = useRef<HTMLDivElement>(null);
  const hueRef = useRef<HTMLDivElement>(null);
  const alphaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const next = parseColor(value);
    const hsv = rgbToHsv(next.r, next.g, next.b);
    setHue(hsv.h);
    setSat(hsv.s);
    setVal(hsv.v);
    setAlpha(next.a);
  }, [value]);

  const rgb = useMemo(() => {
    const base = hsvToRgb(hue, sat, val);
    return { ...base, a: alpha };
  }, [hue, sat, val, alpha]);

  const pureHue = useMemo(() => hsvToRgb(hue, 1, 1), [hue]);

  const updateFromHsv = useCallback(
    (h: number, s: number, v: number, a: number) => {
      setHue(h);
      setSat(s);
      setVal(v);
      setAlpha(a);
      const rgba = { ...hsvToRgb(h, s, v), a };
      emitColor(type, rgba, onChange);
    },
    [onChange, type],
  );

  const onSvPointer = (e: ReactPointerEvent) => {
    if (disabled || !svRef.current) return;
    const rect = svRef.current.getBoundingClientRect();
    const s = clamp((e.clientX - rect.left) / rect.width, 0, 1);
    const v = clamp(1 - (e.clientY - rect.top) / rect.height, 0, 1);
    updateFromHsv(hue, s, v, alpha);
  };

  const onHuePointer = (e: ReactPointerEvent) => {
    if (disabled || !hueRef.current) return;
    const rect = hueRef.current.getBoundingClientRect();
    const t = clamp((e.clientY - rect.top) / rect.height, 0, 1);
    updateFromHsv(t * 360, sat, val, alpha);
  };

  const onAlphaPointer = (e: ReactPointerEvent) => {
    if (disabled || !alphaRef.current) return;
    const rect = alphaRef.current.getBoundingClientRect();
    const a = clamp((e.clientX - rect.left) / rect.width, 0, 1);
    updateFromHsv(hue, sat, val, a);
  };

  const dragSurface = (move: (e: ReactPointerEvent) => void) => ({
    onPointerDown: (e: ReactPointerEvent) => {
      if (disabled) return;
      e.currentTarget.setPointerCapture(e.pointerId);
      move(e);
    },
    onPointerMove: (e: ReactPointerEvent) => {
      if (disabled || !e.currentTarget.hasPointerCapture(e.pointerId)) return;
      move(e);
    },
    onPointerUp: (e: ReactPointerEvent) => {
      e.currentTarget.releasePointerCapture(e.pointerId);
    },
  });

  const displayValue = type === "default" ? toHex(rgb) : rgbaToString(rgb);

  const svStyle = {
    background: `
      linear-gradient(180deg, rgba(0,0,0,0) 21%, rgba(0,0,0,0.09) 34%, rgba(0,0,0,0.67) 84%, rgb(0,0,0) 100%),
      linear-gradient(to right, #fff, rgb(${pureHue.r}, ${pureHue.g}, ${pureHue.b}))
    `,
  };

  const alphaGradient = `linear-gradient(to right, rgba(${rgb.r},${rgb.g},${rgb.b},0), rgba(${rgb.r},${rgb.g},${rgb.b},1))`;

  return (
    <div
      className={cn("pt-color-picker-panel", disabled && "is-disabled", className)}
      data-type={type}
      data-border={border ? "true" : "false"}
    >
      <div className="pt-color-picker-panel__wrapper">
        <div
          ref={svRef}
          className="pt-color-picker-panel__sv"
          style={svStyle}
          {...dragSurface(onSvPointer)}
        >
          <span
            className="pt-color-picker-panel__sv-cursor"
            style={{ left: `${sat * 100}%`, top: `${(1 - val) * 100}%` }}
          />
        </div>
        <div
          ref={hueRef}
          className="pt-color-picker-panel__hue"
          {...dragSurface(onHuePointer)}
        >
          <span
            className="pt-color-picker-panel__hue-thumb"
            style={{ top: `${(hue / 360) * 100}%` }}
          />
        </div>
      </div>

      {type !== "default" ? (
        <div
          ref={alphaRef}
          className="pt-color-picker-panel__alpha"
          {...dragSurface(onAlphaPointer)}
        >
          <div className="pt-color-picker-panel__alpha-checker" aria-hidden />
          <div
            className="pt-color-picker-panel__alpha-gradient"
            style={{ background: alphaGradient }}
          />
          <span
            className="pt-color-picker-panel__alpha-thumb"
            style={{ left: `${alpha * 100}%` }}
          />
        </div>
      ) : null}

      {type === "predefined" ? (
        <div className="pt-color-picker-panel__predefine">
          {predefinedColors.map((item, i) => {
            const c = item.color.startsWith("var(")
              ? "#1677ff"
              : item.color;
            return (
              <button
                key={`${item.color}-${i}`}
                type="button"
                className={cn(
                  "pt-color-picker-panel__swatch",
                  item.checkered && "is-checkered",
                )}
                aria-label={item.color}
                onClick={() => {
                  const parsed = parseColor(c);
                  const hsv = rgbToHsv(parsed.r, parsed.g, parsed.b);
                  updateFromHsv(hsv.h, hsv.s, hsv.v, parsed.a);
                }}
              >
                <span
                  className="pt-color-picker-panel__swatch-inner"
                  style={
                    item.checkered
                      ? { backgroundColor: c }
                      : { background: item.color.startsWith("var(") ? "var(--el-color-primary)" : c }
                  }
                />
              </button>
            );
          })}
        </div>
      ) : null}

      <label className="pt-color-picker-panel__input">
        <input
          className="pt-color-picker-panel__input-field"
          value={displayValue}
          disabled={disabled}
          onChange={(e) => {
            const parsed = parseColor(e.target.value);
            const hsv = rgbToHsv(parsed.r, parsed.g, parsed.b);
            updateFromHsv(hsv.h, hsv.s, hsv.v, parsed.a);
          }}
        />
      </label>
    </div>
  );
}
