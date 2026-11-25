import { createContext, useContext } from "react";

/** Figma Button Group — segmented (gap 4px) vs attached (fused) */
export type ButtonGroupLayout = "segmented" | "attached";

export type ButtonGroupItemContextValue = {
  layout: ButtonGroupLayout;
  /** Figma Background — segmented pill track */
  background: boolean;
  index: number;
  total: number;
};

export const ButtonGroupItemContext = createContext<ButtonGroupItemContextValue | null>(
  null,
);

export function useButtonGroupItem() {
  return useContext(ButtonGroupItemContext);
}
