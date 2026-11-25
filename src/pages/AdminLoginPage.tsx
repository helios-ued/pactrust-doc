import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, FormItem, Input, Link, Password } from "@/components";
import { AdminAuthChrome } from "@/templates/admin-auth/AdminAuthChrome";
import "./admin-login-page.css";

/** Figma moduleScreens 04-后台登录 `8375:24178` */
export function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string | undefined>();
  const [passwordError, setPasswordError] = useState<string | undefined>();

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

    navigate("/examples/admin-verification", {
      state: { email: email.trim(), loginFlow: "admin" },
    });
  }

  return (
    <AdminAuthChrome viewportNodeId="8375:24178">
      <form
        className="pt-admin-login__card"
        onSubmit={handleSubmit}
        noValidate
        data-node-id="8375:24179"
      >
        <header className="pt-admin-login__intro" data-node-id="8375:24180">
          <h1 className="pt-admin-login__title" data-node-id="8375:24181">
            Welcome to PacsTrust.
          </h1>
          <p className="pt-admin-login__subtitle" data-node-id="8375:24182">
            One Platform, Boundless Finance
          </p>
        </header>

        <div className="pt-admin-login__form" data-node-id="8375:24183">
          <FormItem label="Email" error={emailError}>
            <Input
              name="email"
              type="email"
              size="Large"
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
              size="Large"
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
        </div>

        <div className="pt-admin-auth__submit-block">
          <Button
            buttonType="Primary"
            size="Default"
            type="submit"
            data-node-id="8375:24187"
          >
            Login
          </Button>
          <p className="pt-admin-auth__footer-text">
            Don&apos;t have an account?{" "}
            <Link href="/examples/admin-register" linkType="Primary">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </AdminAuthChrome>
  );
}
