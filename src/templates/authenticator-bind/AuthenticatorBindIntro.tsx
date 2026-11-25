import { EpIconByName } from "@/components/Icon/EpIconByName";

/** Figma A3 header · `8370:5795` / `8370:10277` / `8370:11372` */
export function AuthenticatorBindIntro() {
  return (
    <div className="pt-auth-bind__intro">
      <h1 className="pt-auth-bind__heading" data-node-id="8370:5796">
        绑定身份验证器
      </h1>
      <div className="pt-auth-bind__message" data-node-id="8370:10260" role="status">
        <EpIconByName name="InfoFilled" size={16} className="pt-auth-bind__message-icon" />
        <p className="pt-auth-bind__message-text">
          请务必妥善保管身份验证 App 密钥，以免更换或丢失邮箱导致无法换绑。
        </p>
      </div>
    </div>
  );
}
