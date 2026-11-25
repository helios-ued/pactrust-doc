import { Button } from "@/components/Button/Button";
import { Form } from "@/components/Form/Form";
import { FormItem } from "@/components/Form/FormItem";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { Link } from "@/components/Link/Link";
import { Select } from "@/components/Select/Select";
import { RemittanceAmountCard } from "./RemittanceAmountCard";
import { RemittanceTypeSegmented, type RemittanceVariant } from "./RemittanceTypeSegmented";
import { Textarea } from "@/components/Textarea/Textarea";
import { Upload } from "@/components/Upload/Upload";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../module-screens/module-screen-layout.css";
import "./remittance.css";

export type { RemittanceVariant };

export type RemittanceFormPanelProps = {
  variant: RemittanceVariant;
};

const PAYABLE_AVAILABLE_NUM = 4647.31;
const PAYABLE_AVAILABLE_INPUT = PAYABLE_AVAILABLE_NUM.toFixed(2);
const PAYABLE_AVAILABLE_LABEL = PAYABLE_AVAILABLE_NUM.toLocaleString("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function formatRateUpdated(date: Date): string {
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const mi = String(date.getMinutes()).padStart(2, "0");
  return `${mm}-${dd} ${hh}:${mi} 更新`;
}

export function RemittanceFormPanel({ variant }: RemittanceFormPanelProps) {
  const navigate = useNavigate();
  const switchVariant = (next: RemittanceVariant) => {
    navigate(next === "regular" ? "/examples/remittance-regular" : "/examples/remittance-pobo");
  };

  const [payableAmount, setPayableAmount] = useState("0.00");
  const [payableFillFlash, setPayableFillFlash] = useState(false);
  const [rateUsdt, setRateUsdt] = useState("1.00002");
  const [rateUpdatedLabel, setRateUpdatedLabel] = useState(() =>
    formatRateUpdated(new Date(2024, 7, 29, 8, 41)),
  );
  const [rateRefreshing, setRateRefreshing] = useState(false);

  const fillPayableAll = useCallback(() => {
    setPayableAmount(PAYABLE_AVAILABLE_INPUT);
    setPayableFillFlash(true);
    window.setTimeout(() => setPayableFillFlash(false), 480);
  }, []);

  const refreshRate = useCallback(() => {
    if (rateRefreshing) return;
    setRateRefreshing(true);
    window.setTimeout(() => {
      const base = Number.parseFloat(rateUsdt) || 1.00002;
      const jitter = (Math.random() - 0.5) * 0.00008;
      const next = Math.max(0.9999, base + jitter);
      setRateUsdt(next.toFixed(5));
      setRateUpdatedLabel(formatRateUpdated(new Date()));
      setRateRefreshing(false);
    }, 720);
  }, [rateRefreshing, rateUsdt]);

  const payerLabel = variant === "regular" ? "选择默认付款方" : "选择POBO付款方";
  const payerDefault = variant === "regular" ? "ceshi 1.5" : undefined;

  return (
    <div className="pt-module-screen__body pt-remittance" data-node-id="remittance-form">
      <div className="pt-module-screen__content pt-remittance__content">
        <RemittanceTypeSegmented value={variant} onChange={switchVariant} />

        <Form layout="Vertical" labelSize="Default" className="pt-remittance__form">
          <FormItem label="汇出金额" className="pt-remittance__amount-item">
            <RemittanceAmountCard
              label="汇出金额"
              defaultCurrency="USD"
              currencyOptions={[
                { value: "USD", label: "USD", dot: "usd" },
                { value: "EUR", label: "EUR", dot: "default" },
                { value: "GBP", label: "GBP", dot: "default" },
              ]}
            />
          </FormItem>

          <FormItem label="应付金额" className="pt-remittance__amount-item">
            <RemittanceAmountCard
              label="应付金额"
              defaultCurrency="USDT"
              amount={payableAmount}
              onAmountChange={setPayableAmount}
              className={payableFillFlash ? "pt-remittance__amount-card--fill-flash" : undefined}
              currencyOptions={[
                { value: "USDT", label: "USDT", dot: "usdt" },
                { value: "USDC", label: "USDC", dot: "usdt" },
              ]}
              hint={
                <span className="pt-remittance__hint">
                  账户可用：
                  <strong>{PAYABLE_AVAILABLE_LABEL} USDT</strong>
                  <Link
                    href="#"
                    linkType="Primary"
                    className="pt-remittance__all"
                    role="button"
                    onClick={(e) => {
                      e.preventDefault();
                      fillPayableAll();
                    }}
                  >
                    全部
                  </Link>
                </span>
              }
            />
          </FormItem>

          <div className="pt-remittance__rate-row">
            <span>
              汇率: 1 USD ≈ {rateUsdt} USDT
            </span>
            <span className="pt-remittance__rate-meta">
              <span className={rateRefreshing ? "pt-remittance__rate-time is-updating" : "pt-remittance__rate-time"}>
                {rateUpdatedLabel}
              </span>
              <button
                type="button"
                className={rateRefreshing ? "pt-remittance__refresh is-loading" : "pt-remittance__refresh"}
                disabled={rateRefreshing}
                aria-busy={rateRefreshing}
                onClick={refreshRate}
              >
                <EpIconByName name="Refresh" size={14} className="pt-remittance__refresh-icon" />
                {rateRefreshing ? "刷新中…" : "刷新"}
              </button>
            </span>
          </div>

          <div className="pt-remittance__summary">
            <dl className="pt-remittance__summary-list">
              <div>
                <dt>汇款手续费</dt>
                <dd>0.00 USDT</dd>
              </div>
              <div>
                <dt>换算金额</dt>
                <dd>0.00 USDT</dd>
              </div>
              <div>
                <dt>手续费率</dt>
                <dd>
                  22.22 USDT ≈ <span className="pt-remittance__fee-pct">11.11%</span>
                </dd>
              </div>
            </dl>
            <p className="pt-remittance__warn">* 由于国际汇款涉及多方因素，实际到账金额可能会有所变化。</p>
          </div>

          <FormItem label={payerLabel}>
            <Select
              size="Large"
              className="pt-remittance__field"
              options={
                payerDefault
                  ? [{ label: payerDefault, value: "ceshi" }]
                  : [{ label: "请选择", value: "" }]
              }
              defaultValue={payerDefault ? "ceshi" : ""}
              placeholder="请选择"
            />
            <Link href="#" linkType="Primary" className="pt-remittance__sub-link">
              查看付款方 &gt;
            </Link>
          </FormItem>

          <FormItem label="选择收款方">
            <Select
              size="Large"
              className="pt-remittance__field"
              options={[{ label: "请选择", value: "" }]}
              placeholder="请选择"
            />
            <Link href="#" linkType="Primary" className="pt-remittance__sub-link pt-remittance__sub-link--add">
              + 添加收款方
            </Link>
          </FormItem>

          <FormItem label="打款附言">
            <Textarea placeholder="请输入，500字以内" rows={5} className="pt-remittance__textarea" />
          </FormItem>

          <FormItem label="证明材料">
            <Upload type="dragAndDrop" multiple className="pt-remittance__upload" />
            <p className="pt-remittance__warn pt-remittance__warn--submit">
              * 提交申请后不可撤回，请仔细填写。
            </p>
          </FormItem>

          <div className="pt-remittance__actions">
            <Button buttonType="Default" size="Default" type="button">
              取消
            </Button>
            <Button buttonType="Primary" size="Default" type="button">
              保存
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
