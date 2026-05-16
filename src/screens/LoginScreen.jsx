import React, { useState } from "react";
import { Button } from "../components/Button/Button";
import { Input } from "../components/Input/Input";
import "./LoginScreen.css";

export const LoginScreen = () => {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-screen">
      <div className="login-screen__card">

        <header className="login-screen__header">
          <span className="ts-body-sm-strong login-screen__brand">NOCT</span>
          <h1 className="ts-heading-xl login-screen__title">Sign in</h1>
          <p className="ts-body-base-multi login-screen__subtitle">
            Enter your credentials to access your account.
          </p>
        </header>

        <form className="login-screen__form" onSubmit={e => e.preventDefault()}>
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <div className="login-screen__actions">
            <Button label="Sign in"          variant="primary" size="md" />
            <Button label="Forgot password?" variant="danger"  size="md" />
          </div>
        </form>

      </div>
    </div>
  );
};

export default LoginScreen;
