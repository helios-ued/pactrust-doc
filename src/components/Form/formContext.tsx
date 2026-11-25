import { createContext, useContext } from "react";

export type FormLayout = "Horizontal" | "Vertical";
export type FormLabelSize = "Default" | "Large" | "Small";
export type FormLabelAlign = "Left" | "Right";

export type FormContextValue = {
  layout: FormLayout;
  labelSize: FormLabelSize;
  labelAlign: FormLabelAlign;
  labelWidth: number;
};

const FormContext = createContext<FormContextValue | null>(null);

export function FormProvider({
  value,
  children,
}: {
  value: FormContextValue;
  children: React.ReactNode;
}) {
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export function useFormContext(): FormContextValue | null {
  return useContext(FormContext);
}
