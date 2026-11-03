import { FormEvent, useState } from "react";
import {
  Button,
  Checkbox,
  FormItem,
  Input,
  Link,
  Password,
  TextButton,
} from "@/components";
import { PacsTrustLogo } from "@/components/brand/PacsTrustLogo";
import { LoginMarketingHero } from "@/components/login/LoginMarketingHero";

function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M1.5 7h11M7 1.5c1.5 1.8 2.3 3.8 2.3 5.5S8.5 10.7 7 12.5M7 1.5C5.5 3.3 4.7 5.3 4.7 7s.8 3.7 2.3 5.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3.5 5.25 7 8.75l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string | undefined>();
  const [passwordError, setPasswordError] = useState<string | undefined>();
  const [rememberMe, setRememberMe] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    let valid = true;

    if (!email.trim()) {
      setEmailError("Please enter your email");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEmailError("Please enter a valid email address");
      valid = false;
    } else {
      setEmailError(undefined);
    }

    if (!password) {
      setPasswordError("Please enter your password");
      valid = false;
    } else {
      setPasswordError(undefined);
    }

    if (!valid) return;
  }

  return (
    <div className="flex min-h-[var(--pt-login-hero-min-height)] w-full items-stretch bg-el-bg">
      <div className="flex w-full min-w-0 flex-1 flex-col lg:max-w-[var(--pt-login-panel-width)]">
        <header className="flex h-pt-8xl shrink-0 items-center gap-pt-8 px-pt-3xl">
          <div className="min-w-0 flex-1">
            <PacsTrustLogo />
          </div>
          <TextButton
            buttonType="Default"
            size="Default"
            leftIcon={<GlobeIcon />}
            rightIcon={<ChevronDownIcon />}
            aria-haspopup="listbox"
            aria-label="Language"
          >
            English
          </TextButton>
        </header>

        <main className="flex flex-1 flex-col items-center py-[var(--pt-login-main-padding-y)]">
          <div className="flex w-full max-w-[var(--pt-login-form-width)] flex-col gap-[calc(var(--pt-spacing-3xl)+var(--pt-spacing-xl))] px-pt-3xl lg:px-pt-0">
            <header className="flex flex-col gap-pt-8">
              <h1 className="font-[family-name:var(--el-font-family)] text-el-xl leading-el-xl font-[var(--el-font-weight-bold)] text-el-text-primary">
                Welcome to PacsTrust.
              </h1>
              <p className="font-[family-name:var(--el-font-family)] text-el-base leading-el-base font-[var(--el-font-weight-regular)] text-el-text-placeholder">
                One Platform, Boundless Finance
              </p>
            </header>

            <form
              className="flex flex-col gap-pt-3xl"
              onSubmit={handleSubmit}
              noValidate
            >
              <FormItem label="Email" error={emailError}>
                <Input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="m@example.com"
                  state={emailError ? "Error" : "Default"}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError(undefined);
                  }}
                />
              </FormItem>

              <FormItem label="Password" error={passwordError}>
                <Password
                  name="password"
                  autoComplete="current-password"
                  placeholder="Please enter"
                  state={passwordError ? "Error" : "Default"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (passwordError) setPasswordError(undefined);
                  }}
                />
              </FormItem>

              <Checkbox
                name="remember"
                label="Remember me"
                size="Default"
                border={false}
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />

              <div className="flex flex-col items-center gap-pt-3xl pt-pt-xl">
                <Button buttonType="Primary" size="Default" type="submit">
                  Login
                </Button>
                <p className="text-center font-[family-name:var(--el-font-family)] text-el-base leading-el-base font-[var(--el-font-weight-regular)] text-el-text-placeholder">
                  Don&apos;t have an account?{" "}
                  <Link href="#sign-up">Sign up</Link>
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>

      <LoginMarketingHero />
    </div>
  );
}
