import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { resetPass } from "../../../redux/auth/authOperations";
import { getUpdatePasswordResult } from "../../../redux/auth/authSelectors";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";
import classNames from "classnames";
import style from "../styles.module.css";

export default function CreaterNewPassword() {
  const qweryParams = useParams();
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPasswod] = useState("");
  const [errMesPassword, setErrMesPassword] = useState(null);
  const [errMesConfirmedPassword, setErrMesConfirmedPassword] = useState(null);
  const dispatch = useDispatch();
  const updatePass = useSelector(getUpdatePasswordResult);
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      return setErrMesPassword("Мінімум 8 символів");
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
    dispatch(resetPass(qweryParams.resetPasswordToken, confirmedPassword));
    setPassword(null);
    setConfirmedPasswod(null);
  };
  return (
    <section className={style.container}>
      <div className={style.formContainer}>
        {true ? (
          <>
            {" "}
            <p className={style.title}> Відновити пароль </p>
            <form className={style.form} onSubmit={handlerSubmit}>
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
                  label={"Пароль"}
                  error={errMesConfirmedPassword}
                  type="password"
                  value={confirmedPassword}
                  onChange={onChangeСonfirmedPassword}
                  errorMessage={errMesConfirmedPassword}
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
              <Button type="submit">Змінити пароль</Button>
            </form>
          </>
        ) : (
          <>
            <h3 className={classNames(style.return)}>
              Пароль успішно змінено!&nbsp;
              <NavLink to="/login" className={style.forgotPassLink}>
                Повернутися на сторінку авторизації
              </NavLink>
            </h3>
          </>
        )}
      </div>
    </section>
  );
}
