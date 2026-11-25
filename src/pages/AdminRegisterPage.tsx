import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, FormItem, Input, Link, Password } from "@/components";
import { AdminAuthChrome } from "@/templates/admin-auth/AdminAuthChrome";
import "./admin-login-page.css";

/** Figma 05-后台注册 `8375:24188` */
export function AdminRegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState<string | undefined>();
  const [passwordError, setPasswordError] = useState<string | undefined>();
  const [confirmError, setConfirmError] = useState<string | undefined>();

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

    if (!confirmPassword) {
      setConfirmError("Please confirm your password");
      valid = false;
    } else if (password !== confirmPassword) {
      setConfirmError("Passwords do not match");
      valid = false;
    } else {
      setConfirmError(undefined);
    }

    if (!valid) return;

    navigate("/examples/admin-verification", {
      state: { email: email.trim(), loginFlow: "admin-register" },
    });
  }

  return (
    <AdminAuthChrome viewportNodeId="8375:24188">
      <form
        className="pt-admin-login__card"
        onSubmit={handleSubmit}
        noValidate
        data-node-id="8375:24189"
      >
        <header className="pt-admin-login__intro" data-node-id="8375:24190">
          <h1 className="pt-admin-login__title" data-node-id="8375:24191">
            Create an account.
          </h1>
          <p className="pt-admin-login__subtitle" data-node-id="8375:24192">
            Enter your information below to create your account
          </p>
        </header>

        <div className="pt-admin-login__form" data-node-id="8375:24193">
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
              autoComplete="new-password"
              placeholder="Please enter"
              state={passwordError ? "Error" : "Default"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (passwordError) setPasswordError(undefined);
              }}
            />
          </FormItem>

          <FormItem label="Confirm Password" error={confirmError}>
            <Password
              name="confirmPassword"
              size="Large"
              autoComplete="new-password"
              placeholder="Please enter"
              state={confirmError ? "Error" : "Default"}
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (confirmError) setConfirmError(undefined);
              }}
            />
          </FormItem>
        </div>

        <div className="pt-admin-auth__submit-block" data-node-id="8375:24198">
          <Button buttonType="Primary" size="Default" type="submit" data-node-id="8375:24199">
            Create Account
          </Button>
          <p className="pt-admin-auth__footer-text" data-node-id="8375:24200">
            Already have an account?{" "}
            <Link href="/examples/admin-login" linkType="Primary">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </AdminAuthChrome>
  );
}
