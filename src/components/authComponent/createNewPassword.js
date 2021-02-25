import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import style from "./styles.module.css";

export default function CreaterNewPassword() {
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPasswod] = useState("");
  const [errMesPassword, setErrMesPassword] = useState(null);
  const [errMesConfirmedPassword, setErrMesConfirmedPassword] = useState(null);
  const dispatch = useDispatch();
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

    setPassword("");
    setConfirmedPasswod("");
  };
  return (
    <section className={style.container}>
      <div className={style.formContainer}>
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
      </div>
    </section>
  );
}
