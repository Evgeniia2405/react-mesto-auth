import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PageWithForm from "./PageWithForm";
import * as mestoAuth from "../utils/mestoAuth.js";

function Register({onRegistr}) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { email, password } = data;
    onRegistr(email, password)
  };

  return (
    <>
      <div className="content  content__page">
        <PageWithForm
          title="Регистрация"
          name="register"
          btnName={"Зарегистрироваться"}
          onSubmit={handleSubmit}
          children={
            <>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
                className="form__input form__input_place_page"
                value={data.email}
                onChange={handleChange}
              />
              <span id="username-error" className="form__error">
                Вы пропустили это поле.
              </span>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Пароль"
                className="form__input form__input_place_page"
                required
                value={data.password}
                onChange={handleChange}
              />
              <span id="password-error" className="popup__error">
                Вы пропустили это поле.
              </span>
            </>
          }
        />
        <div className="register__signin">
          <p>Уже зарегистрированы? </p>
          <Link to="/sign-in" className="register__login-link">
            Войти
          </Link>
        </div>
      </div>
    </>
  );
}

export default Register;
