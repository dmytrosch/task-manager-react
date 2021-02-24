import React, { useState } from "react";
import style from "../styles.module.css";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";
import { sendMail } from "../../../redux/auth/authOperations";
import { getResultSendingEmail } from "../../../redux/auth/authSelectors";

export default function SendEmail({ setVissible }) {
  const [emailAdress, setEmailAdress] = useState("");
  const [sendedEmail, setSendedEmail] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const sendEmail = useSelector(getResultSendingEmail);
  function submitFormHeandler(e) {
    e.preventDefault();
    dispatch(sendMail(emailAdress));
    setSendedEmail(true);
  }
  return (
    <div className={style.formContainer}>
      {sendEmail && (
        <h2 className={style.sendTitle}>
          {" "}
          Підтвердіть відновлення паролю у вашій поштовій скринці
        </h2>
      )}
      {!sendEmail && (
        <div className={style.inputContainer}>
          <h2 className={style.headTitle}> Вiдновлення паролю </h2>
          <p className={style.title}>Введіть email адресу користувача. </p>
          <form onSubmit={(e) => submitFormHeandler(e)}>
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
              {location.pathname === "/login" ? (
                <p className={style.subtitle}>
                  Маєте акаунт?&nbsp;
                  <NavLink
                    onClick={setVissible}
                    to="/login"
                    className={style.NavLink}
                  >
                    Увійти
                  </NavLink>{" "}
                </p>
              ) : (
                <p className={style.subtitle}>
                  Немає акаунту?&nbsp;
                  <NavLink
                    onClick={setVissible}
                    to="/signup"
                    className={style.NavLink}
                  >
                    Зареєструватись
                  </NavLink>{" "}
                </p>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
