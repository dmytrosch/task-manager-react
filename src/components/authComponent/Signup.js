import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./styles.module.css";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import Loader from "../Loaders/LoaderForComponents/LoaderForComponents";
import { signup } from "../../redux/auth/authOperations";
import validator from "validator";
import { signupErrorSelector } from "../../redux/auth/authSelectors";
import { signupError } from "../../redux/auth/authActions";
import { isAuthLoadingSelector } from "../../redux/loading/loadingSelector";

export default function Signup({ setVissible }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmedPasswordError, setConfirmedPasswordError] = useState(null);
  const errorMessage = useSelector(signupErrorSelector);
  const isLoading = useSelector(isAuthLoadingSelector);
  const dispatch = useDispatch();
  const resetError = () => {
    errorMessage && dispatch(signupError(null));
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
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      return setPasswordError("Пароль повинен містити не менше 8 символів");
    }
    setPasswordError(null);
  };

  const onChangeСonfirmedPassword = (e) => {
    setConfirmedPassword(e.target.value);
    if (password !== e.target.value) {
      return setConfirmedPasswordError("Паролі не співпадають");
    }
    setConfirmedPasswordError(null);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmedPassword) {
      return setConfirmedPasswordError("Паролі не співпадають");
    }
    if (emailError || passwordError || confirmedPasswordError) return;
    dispatch(signup(email, password));
    setEmail("");
    setPassword("");
    setConfirmedPassword("");
  };

  return (
    <Loader loading={isLoading}>
      <div onClick={resetErrorOnClick} className={style.formContainer}>
        <p className={style.title}>Реєстрація</p>
        <form
          className={style.form}
          onSubmit={handlerSubmit}
          onChange={() => resetError()}
        >
          <div className={style.inputContainerSingup}>
            <Input
              onChange={onChangeEmail}
              type="text"
              error={emailError}
              errorMessage={emailError}
              label="E-mail"
              value={email}
              required
            />
          </div>

          <div className={style.inputContainerSingup}>
            <Input
              onChange={onChangePassword}
              type="password"
              error={passwordError}
              errorMessage={passwordError}
              label="Пароль"
              value={password}
              required
            />
          </div>
          <div className={style.inputContainerSingup}>
            <Input
              onChange={onChangeСonfirmedPassword}
              type="password"
              error={confirmedPasswordError || errorMessage}
              errorMessage={confirmedPasswordError || errorMessage}
              label="Повторіть пароль"
              value={confirmedPassword}
              id="confirmedPassword"
              required
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
    </Loader>
  );
}
