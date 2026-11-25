import { Button } from "@/components/Button/Button";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { Link } from "@/components/Link/Link";
import { Pagination } from "@/components/Pagination/Pagination";
import "@/components/Table/table.css";
import { useMemo, useState } from "react";
import {
  MOCK_MERCHANT_ID,
  MOCK_SIGN_KEY,
  MOCK_WHITELIST_IPS,
} from "./api-management-data";
import "./api-management.css";

export function ApiManagementPanel() {
  const [signKeyVisible, setSignKeyVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(2);
  const [whitelist, setWhitelist] = useState(MOCK_WHITELIST_IPS);

  const maskedSignKey = useMemo(() => "•".repeat(32), []);

  const removeIp = (index: number) => {
    setWhitelist((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="pt-api-mgmt">
      <section className="pt-api-mgmt__section" aria-labelledby="api-info-title">
        <header className="pt-api-mgmt__section-head">
          <h2 id="api-info-title" className="pt-api-mgmt__section-title">
            API信息
          </h2>
          <div className="pt-api-mgmt__section-actions">
            <Button buttonType="Danger" size="Small" type="button" className="pt-api-mgmt__btn">
              重置API
            </Button>
            <Button buttonType="Primary" size="Small" type="button" className="pt-api-mgmt__btn">
              设置
            </Button>
          </div>
        </header>

        <dl className="pt-api-mgmt__descriptions">
          <dt className="pt-api-mgmt__term">商户ID</dt>
          <dd className="pt-api-mgmt__detail">
            <span className="pt-api-mgmt__mono">{MOCK_MERCHANT_ID}</span>
            <button type="button" className="pt-api-mgmt__icon-btn" aria-label="复制商户ID">
              <EpIconByName name="CopyDocument" size={16} />
            </button>
          </dd>
          <dt className="pt-api-mgmt__term">Signkey</dt>
          <dd className="pt-api-mgmt__detail">
            <span className="pt-api-mgmt__mono">
              {signKeyVisible ? MOCK_SIGN_KEY : maskedSignKey}
            </span>
            <button
              type="button"
              className="pt-api-mgmt__icon-btn"
              aria-label={signKeyVisible ? "隐藏 Signkey" : "显示 Signkey"}
              onClick={() => setSignKeyVisible((v) => !v)}
            >
              <EpIconByName name={signKeyVisible ? "Hide" : "View"} size={16} />
            </button>
            <button type="button" className="pt-api-mgmt__icon-btn" aria-label="复制 Signkey">
              <EpIconByName name="CopyDocument" size={16} />
            </button>
          </dd>
          <dt className="pt-api-mgmt__term pt-api-mgmt__term--top">回调地址</dt>
          <dd className="pt-api-mgmt__detail">
            <span className="pt-api-mgmt__muted">您还未设置回调地址</span>
          </dd>
        </dl>
      </section>

      <section className="pt-api-mgmt__section" aria-labelledby="whitelist-title">
        <header className="pt-api-mgmt__section-head pt-api-mgmt__section-head--stack">
          <div>
            <h2 id="whitelist-title" className="pt-api-mgmt__section-title">
              白名单列表
            </h2>
            <p className="pt-api-mgmt__section-desc">
              白名单列表最多支持20条，如需扩充，可联系我们的商务人员
            </p>
          </div>
          <Button
            buttonType="Primary"
            size="Small"
            type="button"
            className="pt-api-mgmt__btn pt-api-mgmt__section-action"
          >
            添加白名单
          </Button>
        </header>

        <div className="pt-table-wrap pt-api-mgmt__table-wrap">
          <table className="pt-table pt-table--size-default pt-api-mgmt__table">
            <thead>
              <tr>
                <th className="pt-table__th">白名单IP</th>
                <th className="pt-table__th pt-api-mgmt__col-actions">操作</th>
              </tr>
            </thead>
            <tbody>
              {whitelist.map((ip, index) => (
                <tr key={`${ip}-${index}`}>
                  <td className="pt-table__td">{ip}</td>
                  <td className="pt-table__td pt-api-mgmt__col-actions">
                    <Link
                      href="#"
                      linkType="Primary"
                      onClick={(e) => {
                        e.preventDefault();
                        removeIp(index);
                      }}
                    >
                      删除
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pt-api-mgmt__pagination">
          <Pagination
            layoutType="lt5"
            paginationStyle="Default"
            totalPages={5}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
    </div>
  );
}
