import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { resetPass } from "../../../redux/auth/authOperations";
import {
  resetPasswordErrorSelector,
  isPasswordChangedSelector,
} from "../../../redux/auth/authSelectors";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";
import classNames from "classnames";
import style from "../styles.module.css";
import { resetPassError } from "../../../redux/auth/authActions";
import Loader from "../../Loaders/LoaderForComponents/LoaderForComponents";
import { isAuthLoadingSelector } from "../../../redux/loading/loadingSelector";

export default function CreaterNewPassword() {
  const qweryParams = useParams();
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [confirmedPasswordError, setConfirmedPasswordError] = useState(null);
  const errorMessage = useSelector(resetPasswordErrorSelector);
  const isPasswordChanged = useSelector(isPasswordChangedSelector);
  const loading = useSelector(isAuthLoadingSelector);
  const dispatch = useDispatch();
  const resetError = () => {
    errorMessage && dispatch(resetPassError(null));
  };
  const resetErrorOnClick = (e) => {
    if (e.target.nodeName !== "INPUT") {
      resetError();
    }
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      return setPasswordError("Мінімум 8 символів");
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
    if (passwordError || confirmedPasswordError) return;
    dispatch(
      resetPass(qweryParams.resetPasswordToken, { password: confirmedPassword })
    );
    resetError();
    setPassword(null);
    setConfirmedPassword(null);
  };
  return (
    <Loader loading={loading}>
      <section className={style.container}>
        <div className={style.formContainer} onClick={resetErrorOnClick}>
          {!isPasswordChanged ? (
            <>
              <p className={style.title}> Відновити доступ </p>
              <form className={style.form} onSubmit={handlerSubmit}>
                <div className={style.inputContainerSingup}>
                  <Input
                    label={"Пароль"}
                    error={passwordError}
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    errorMessage={passwordError}
                    required
                  />
                </div>
                <div className={style.inputContainerSingup}>
                  <Input
                    label={"Повторіть пароль"}
                    error={confirmedPasswordError || errorMessage}
                    type="password"
                    value={confirmedPassword}
                    onChange={onChangeСonfirmedPassword}
                    errorMessage={
                      confirmedPasswordError ||
                      (errorMessage && "Щось пішло не так... Спробуйте ще раз")
                    }
                    id="confirmedPassword"
                    required
                  />
                </div>
                <Button type="submit">Змінити пароль</Button>
              </form>
            </>
          ) : (
            <h3 className={classNames(style.return)}>
              Пароль успішно змінено!&nbsp;
              <NavLink to="/login" className={style.returnToLoginLink}>
                Повернутися на сторінку авторизації
              </NavLink>
            </h3>
          )}
        </div>
      </section>
    </Loader>
  );
}
