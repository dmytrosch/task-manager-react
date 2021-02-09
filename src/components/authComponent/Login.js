import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";
import routes from "../../utils/routes";

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
          <input
            placeholder="Пароль"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Увійти</button>
        </form>
        <p className={style.subtitle}>
          Немає акаунту?
          <NavLink to="/signup" className={style.NavLink}>
            Зареєструватись
          </NavLink>
        </p>
      </div>
    </section>
  );
}
