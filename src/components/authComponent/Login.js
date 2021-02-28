import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Loader from "../Loaders/LoaderForComponents/LoaderForComponents";
import style from "./styles.module.css";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import { login } from "../../redux/auth/authOperations";
import { loginErrorSelector } from "../../redux/auth/authSelectors";
import { loginError } from "../../redux/auth/authActions";
import validator from "validator";
import { isAuthLoading } from "../../redux/loading/loadingSelector";

export default function Login({ setVissible }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const errorMessage = useSelector(loginErrorSelector);
  const loading = useSelector(isAuthLoading)
  const dispatch = useDispatch();
  const resetError = () => {
    errorMessage && dispatch(loginError(null));
  };
  const resetErrorOnClick = (e) => {
    if (e.target.nodeName !== "INPUT") {
      resetError();
    }
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    if (!validator.isEmail(e.target.value)) {
      return setEmailError("Введіть коректний email");
    }
    setEmailError(null);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (emailError) return;
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
    resetError();
  };
  return (
    <Loader loading={loading}>
      <div onClick={resetErrorOnClick} className={style.formContainer}>
        <p className={style.title}>Вхід</p>
        <form
          className={style.form}
          onSubmit={handlerSubmit}
          onChange={() => resetError()}
        >
          <div className={style.inputContainer}>
            <Input
              label={"E-mail"}
              value={email}
              error={emailError || errorMessage}
              onChange={onChangeEmail}
              type={"text"}
              errorMessage={emailError}
            />
          </div>
          <div className={style.inputContainer}>
            <Input
              label={"Пароль"}
              type={"password"}
              error={errorMessage}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
    </Loader>
  );
}
