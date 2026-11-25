import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import "./login-page.css";

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
  const navigate = useNavigate();
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

    navigate("/examples/verification-code", {
      state: { email: email.trim() },
    });
  }

  return (
    <div className="pt-login-viewport">
      <div className="pt-login-page">
        <div className="pt-login-page__panel">
          <header className="pt-login-page__header flex h-pt-8xl shrink-0 items-center gap-pt-8">
            <div className="pt-login-page__logo-slot">
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

          <main className="pt-login-page__main">
            <div className="pt-login-page__form-wrap">
              <header className="flex flex-col gap-pt-8">
                <h1 className="font-[family-name:var(--el-font-family)] text-el-xl leading-el-xl font-[var(--el-font-weight-bold)] text-el-text-primary">
                  Welcome to PacsTrust.
                </h1>
                <p className="font-[family-name:var(--el-font-family)] text-el-base leading-el-base font-[var(--el-font-weight-regular)] text-el-text-placeholder">
                  One Platform, Boundless Finance
                </p>
              </header>

              <form onSubmit={handleSubmit} noValidate>
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

                <div className="pt-login-page__actions">
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
    </div>
  );
}
