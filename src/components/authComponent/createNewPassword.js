import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import style from "./styles.module.css";

export default function CreaterNewPassword() {
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPasswod] = useState("");
  const dispatch = useDispatch();
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
      </div>
    </section>
  );
}
