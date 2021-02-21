import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";
import Button from "../../common/Button";

import { signup } from "../../redux/auth/authOperations";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPasswod] = useState("");
  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ email, password }));

    setEmail("");
    setPassword("");
    setConfirmedPasswod("");
  };
  return (
    <section className={style.container}>
      <div className={style.formContainer}>
        <p className={style.title}>Реєстрація</p>
        <form className={style.form} onSubmit={handlerSubmit}>
          <input
            className={style.input}
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // error={email.length > 0 && !validator.isEmail(email)}
          />

          <input
            className={style.input}
            placeholder="Пароль"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className={style.input}
            placeholder="Пароль"
            type="password"
            value={confirmedPassword}
            onChange={(e) => setConfirmedPasswod(e.target.value)}
            id="confirmedPassword"
          />
          <label
            className={
              confirmedPassword !== password
                ? style.label
                : style.visuallyHidden
            }
            htmlFor="confirmedPassword"
          >
            Паролі не співпадають
          </label>
          <Button type="submit">Зареєструватися</Button>
        </form>
        <p className={style.subtitle}>
          Маєте акаунт? &nbsp;
          <NavLink to="/login" className={style.NavLink}>
            Увійти
          </NavLink>
        </p>
      </div>
    </section>
  );
}
