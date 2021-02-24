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
  const dispatch = useDispatch();
  const updatePass = useSelector(getUpdatePasswordResult);
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPass(qweryParams.resetPasswordToken, confirmedPassword));
    setPassword("");
    setConfirmedPasswod("");
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
