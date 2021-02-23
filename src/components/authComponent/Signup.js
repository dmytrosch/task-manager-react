import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./styles.module.css";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
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
        <p className={style.titleSignup}>Реєстрація</p>
        <form className={style.form} onSubmit={handlerSubmit}>
          <div className={style.inputContainerSingup}>
            <Input
              label={"E-mail"}
              type={"text"}
              error={false}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              errorMessage={"Невірний email"}
              // error={email.length > 0 && !validator.isEmail(email)}
            />
          </div>

          <div className={style.inputContainerSingup}>
            <Input
              label={"Пароль"}
              error={false}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              errorMessage={"Невірний пароль"}
            />
          </div>
          <div className={style.inputContainerSingup}>
            <Input
              label={"Пароль"}
              error={false}
              type="password"
              value={confirmedPassword}
              onChange={(e) => setConfirmedPasswod(e.target.value)}
              errorMessage={"Невірний пароль"}
              id="confirmedPassword"
            />
          </div>

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
