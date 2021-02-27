import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./styles.module.css";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import { signup } from "../../redux/auth/authOperations";
import validator from "validator";
import { errorMessageSelector } from "../../redux/auth/authSelectors";
import { signupError } from "../../redux/auth/authActions";

export default function Signup({ setVissible }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [errMesEmail, setErrMesEmail] = useState(null);
  const [errMesPassword, setErrMesPassword] = useState(null);
  const [errMesConfirmedPassword, setErrMesConfirmedPassword] = useState(null);
  const errorMessage = useSelector(errorMessageSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(signupError(null));
    };
  }, []);
  const clickEvent = (e) => {
    if (e.target.nodeName !== "INPUT") {
      dispatch(signupError(null));
      setErrMesEmail(null);
      setErrMesPassword(null);
      setErrMesConfirmedPassword(null);
    }
  };

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
    setConfirmedPassword(e.target.value);
    if (password !== e.target.value) {
      return setErrMesConfirmedPassword("Паролі не співпадають");
    }
    setErrMesConfirmedPassword(null);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmedPassword) {
      return setErrMesConfirmedPassword("Паролі не співпадають");
    }
    if (errMesEmail || errMesPassword || errMesConfirmedPassword) return;
    dispatch(signup(email, password));
    setEmail("");
    setPassword("");
    setConfirmedPassword("");
  };

  return (
    <div onClick={(e) => clickEvent(e)} className={style.formContainer}>
      <p className={style.title}>Реєстрація</p>
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
        <label
          className={errorMessage ? style.label : style.visuallyHidden}
          htmlFor="confirmedPassword"
        >
          {errorMessage}
        </label>

        <Button type="submit">Зареєструватися</Button>
      </form>
      <p className={style.subtitle}>
        Маєте акаунт? &nbsp;
        <NavLink to="/login" className={style.NavLink}>
          Увійти
        </NavLink>
      </p>
      <NavLink
        to="/signup"
        onClick={setVissible}
        className={style.forgotPassLink}
      >
        Забули пароль?
      </NavLink>
    </div>
  );
}
