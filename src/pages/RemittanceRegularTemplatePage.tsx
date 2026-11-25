import { RemittanceFormPanel } from "@/templates/remittance/RemittanceFormPanel";
import { RemittancePageBar } from "@/templates/remittance/RemittancePageBar";
import { RemittanceShell } from "@/templates/remittance/RemittanceShell";
import "./template-viewport.css";

/** 原型 · 普通汇款（A3 Page Layout + 居中表单） */
export function RemittanceRegularTemplatePage() {
  return (
    <div className="pt-template-viewport pt-template-viewport--module-screen pt-template-viewport--remittance">
      <RemittanceShell pageBar={<RemittancePageBar title="全球汇款" />}>
        <RemittanceFormPanel variant="regular" />
      </RemittanceShell>
    </div>
  );
}
