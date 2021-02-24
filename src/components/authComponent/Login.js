import React, { useState } from "react";
import { useDispatch, useSelector, useEffect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import style from "./styles.module.css";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import PassForgot from "./resetPassword";
import { login } from "../../redux/auth/authOperations";
import { errorMessageSelector } from "../../redux/auth/authSelectors";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vissibleBack, setVissibleBack] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const errorStatus = useSelector(errorMessageSelector);



  function setVissibleForgetPass() {
    setVissibleBack((prev) => !prev);
  }
  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    setErrorMessage(errorStatus);
    e.preventDefault();
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
  };
  return (
    <section className={style.container}>
      <PassForgot
        vissibleBack={vissibleBack}
        setVissible={setVissibleForgetPass}
      >
        <div className={style.formContainer}>
          <p className={style.title}>Вхід</p>
          <form className={style.form} onSubmit={handlerSubmit}>
            <div className={style.inputContainer}>
              <Input
                label={"E-mail"}
                value={email}
                error={errorStatus}
                onChange={(e) => setEmail(e.target.value)}
                type={"text"}
                // errorMessage={errorStatus}
              />
            </div>
            <div className={style.inputContainer}>
              <Input
                label={"Пароль"}
                error={errorStatus}
                type={"password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                // errorMessage={"Невірний пароль"}
              />
            </div>

            <label
              className={errorStatus ? style.label : style.visuallyHidden}
              htmlFor="confirmedPassword"
            >
              {errorStatus}
            </label>

            <Button shape="oval" type="submit">
              Увійти
            </Button>
          </form>
          <p className={style.subtitle}>
            Немає акаунту?&nbsp;
            <NavLink to="/signup" className={style.NavLink}>
              Зареєструватись
            </NavLink>
            <NavLink
              to="/login"
              onClick={setVissibleForgetPass}
              className={style.forgotPassLink}
            >
              Забули пароль?
            </NavLink>
          </p>
        </div>
      </PassForgot>
    </section>
  );
}
