import { BlueFlutedGlass } from "@/components/blue-fluted-glass";
import "./login-marketing-hero.css";

/** 登录右侧 · Blue Fluted Glass 蓝白棱纹流动背景 */
export function LoginMarketingHero() {
  return (
    <aside className="pt-login-hero">
      <BlueFlutedGlass
        className="pt-login-hero__bfg"
        brandLogo="pacstrust"
      />
    </aside>
  );
}
