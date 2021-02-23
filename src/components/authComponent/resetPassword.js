import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./styles.module.css";
import classNames from "classnames";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";

export default function ForgetPass({ children, vissibleBack, setVissible }) {
  const [emailAdress, setEmailAdress] = useState("");
  const [sendedEmail, setSendedEmail] = useState(false);
  const dispatch = useDispatch();
  function submitFormHeandler(e) {
    e.preventDefault();
    setSendedEmail(true);
  }
  return (
    <div
      className={classNames(
        vissibleBack ? style.flipperRotate : null,
        style.flipper
      )}
    >
      <div className={style.front}>{children}</div>
      <div className={style.back}>
        <div className={style.inner}>
          <div className={style.inputContainer}>
            <h2 className={style.headTitle}> Вiдновлення паролю </h2>
            <p className={style.title}>Введіть email адресу користувача. </p>
            <form onClick={(e) => submitFormHeandler(e)}>
              <Input
                label={"E-mail"}
                value={emailAdress}
                error={false}
                onChange={(e) => setEmailAdress(e.target.value)}
                type={"text"}
                errorMessage={"Невірний email"}
              />
              <div className={style.btnSubmit}>
                <Button shape="oval" type="submit">
                  Відправити
                </Button>
              </div>
              <div className={style.btnWrapper}>
                <p className={style.subtitle}>Маєте акаунт?&nbsp;</p>
                <NavLink
                  onClick={setVissible}
                  to="/login"
                  className={style.NavLink}
                >
                  Увійти
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
