import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./styles.module.css";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import { signup } from "../../redux/auth/authOperations";
import validator from "validator";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPasswod] = useState("");
  const [errMesEmail, setErrMesEmail] = useState(null);
  const [errMesPassword, setErrMesPassword] = useState(null);
  const [errMesConfirmedPassword, setErrMesConfirmedPassword] = useState(null);
  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    if (!validator.isEmail(e.target.value)) {
      return setErrMesEmail("Введіть коректний email");
    }
    setErrMesEmail(null);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      return setErrMesPassword("Пароль повинен містити не менше 8 символів");
    }
    setErrMesPassword(null);
  };

  const onChangeСonfirmedPassword = (e) => {
    setConfirmedPasswod(e.target.value);
    if (password !== e.target.value) {
      return setErrMesConfirmedPassword("Паролі не співпадають");
    }
    setErrMesConfirmedPassword(null);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (errMesEmail && errMesPassword && errMesConfirmedPassword) return;
    dispatch(signup(email, password));
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
              error={errMesEmail}
              value={email}
              onChange={onChangeEmail}
              errorMessage={errMesEmail}
            />
          </div>

          <div className={style.inputContainerSingup}>
            <Input
              label={"Пароль"}
              error={errMesPassword}
              type="password"
              value={password}
              onChange={onChangePassword}
              errorMessage={errMesPassword}
            />
          </div>
          <div className={style.inputContainerSingup}>
            <Input
              label={"Повторіть пароль"}
              error={errMesConfirmedPassword}
              type="password"
              value={confirmedPassword}
              onChange={onChangeСonfirmedPassword}
              errorMessage={errMesConfirmedPassword}
              id="confirmedPassword"
            />
          </div>

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
