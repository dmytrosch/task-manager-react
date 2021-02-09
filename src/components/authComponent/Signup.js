import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
  };
  return (
    <section className={style.container}>
      <div className={style.formContainer}>
        <p>Вхід</p>
        <form onSubmit={handlerSubmit}>
          <input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          Пароль
          <input
            placeholder="Пароль"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Пароль"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Зареєструватися</button>
        </form>
        <p className={style.subtitle}>
          Маєте акаунт?{" "}
          <NavLink to="/login" className={style.NavLink}>
            Увійти
          </NavLink>
        </p>
      </div>
    </section>
  );
}
