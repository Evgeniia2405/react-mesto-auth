import React, { useState } from "react";
import PageWithForm from "./PageWithForm";
import { useInput } from "../hooks/useForm";

function Login({ onLogin }) {
  const email = useInput("", { isEmpty: true, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 8 });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email.value, password.value);
  };

  return (
    <>
      <div className="content content__page">
        <PageWithForm
          title="Вход"
          name="enter"
          btnName={"Войти"}
          onSubmit={handleSubmit}
          formValid={email.inputValid && password.inputValid}
          children={
            <>
              <input
                id="email"
                type={"text"}
                name="email"
                placeholder="Email"
                required
                minLength="2"
                maxLength="40"
                className="form__input form__input_place_page"
                value={email.value}
                onChange={(e) => email.onChange(e)}
                onBlur={(e) => email.onBlur(e)}
                dirty={email.isDirty}
                error={
                  (email.isDirty && email.isEmpty.state
                    ? email.isEmpty.textError
                    : "") ||
                  (email.isDirty && email.emailError.state
                    ? email.emailError.textError
                    : "")
                }
              />
              <span
                id="username-error"
                className={
                  (email.isDirty
                    ? "form__error form__error_visible"
                    : "form__error") ||
                  (email.isDirty
                    ? "form__error form__error_visible"
                    : "form__error")
                }
              >
                {email.isEmpty.textError || email.emailError.textError}
              </span>
              <input
                id="password"
                // type="password"
                name="password"
                placeholder="Пароль"
                className="form__input form__input_place_page"
                // required
                // minLength="2"
                // maxLength="40"
                value={password.value}
                onChange={(e) => password.onChange(e)}
                onBlur={(e) => password.onBlur(e)}
                dirty={password.isDirty}
                error={
                  (password.isDirty && password.isEmpty.state
                    ? email.isEmpty.textError
                    : "") ||
                  (password.isDirty && password.minLengthError.state
                    ? password.minLengthError.textError
                    : "")
                }
                type={"password"}
              />
              <span
                id="password-error"
                className={
                  (password.isDirty
                    ? "form__error form__error_visible"
                    : "form__error") ||
                  (password.isDirty
                    ? "form__error form__error_visible"
                    : "form__error")
                }
              >
                {password.isEmpty.textError ||
                  password.minLengthError.textError}
              </span>
            </>
          }
        />
      </div>
    </>
  );
}

export default Login;
