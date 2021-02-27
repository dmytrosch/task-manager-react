import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./styles.module.css";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import { login } from "../../redux/auth/authOperations";
import { errorMessageSelector } from "../../redux/auth/authSelectors";
import { loginError } from "../../redux/auth/authActions";

export default function Login({ setVissible }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errorMessage = useSelector(errorMessageSelector);
  function ClickEvent(e) {
    if (e.target.nodeName !== "INPUT" || email === "" || password === "") {
      dispatch(loginError(null));
    }
  }
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(loginError(null));
    };
  }, []);
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
    dispatch(loginError(null));
  };
  return (
    <div onClick={(e) => ClickEvent(e)} className={style.formContainer}>
      <p className={style.title}>Вхід</p>
      <form className={style.form} onSubmit={handlerSubmit}>
        <div className={style.inputContainer}>
          <Input
            label={"E-mail"}
            value={email}
            error={errorMessage}
            onChange={(e) => setEmail(e.target.value)}
            type={"text"}
            // errorMessage={errorMessage}
          />
        </div>
        <div className={style.inputContainer}>
          <Input
            label={"Пароль"}
            error={errorMessage}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            // errorMessage={"Невірний пароль"}
          />
        </div>

        <label
          className={errorMessage ? style.label : style.visuallyHidden}
          htmlFor="confirmedPassword"
        >
          {errorMessage}
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
          onClick={setVissible}
          className={style.forgotPassLink}
        >
          Забули пароль?
        </NavLink>
      </p>
    </div>
  );
}
