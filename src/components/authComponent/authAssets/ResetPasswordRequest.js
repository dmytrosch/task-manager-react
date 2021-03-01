import React, { useState, useEffect } from "react";
import validator from "validator";
import style from "../styles.module.css";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";
import { sendMail } from "../../../redux/auth/authOperations";
import { resetPasswordRequestErrorSelector } from "../../../redux/auth/authSelectors";
import { isAuthLoading } from "../../../redux/loading/loadingSelector";
import { sendEmailToResetPasswordError } from "../../../redux/auth/authActions";
import Loader from "../../Loaders/LoaderForComponents/LoaderForComponents";

export default function ResetPasswordRequest({ setVissible }) {
  const [emailAdress, setEmailAdress] = useState("");
  const [emailError, setEmailError] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const errorMessage = useSelector(resetPasswordRequestErrorSelector);
  const loading = useSelector(isAuthLoading);
  function resetError() {
    errorMessage && dispatch(sendEmailToResetPasswordError(null));
  }
  function resetErrorOnClick(e) {
    if (e.target.nodeName !== "INPUT") {
      resetError();
    }
  }
  function submitHandler(e) {
    e.preventDefault();
    if (emailError) return;
    dispatch(sendMail({ email: emailAdress }));
    setEmailAdress("");
  }
  function onChangeEmail(e) {
    setEmailAdress(e.target.value);
    if (!validator.isEmail(e.target.value)) {
      return setEmailError("Введіть коректний email");
    }
    setEmailError(null);
  }
  return (
    <Loader loading={loading}>
      <div onClick={resetErrorOnClick} className={style.formContainer}>
        <div className={style.inputContainer}>
          <h2 className={style.title}> Вiдновлення паролю </h2>
          {/* <p className={style.subtitle}>Введіть email адресу користувача. </p> */}
          <form onSubmit={submitHandler} onChange={() => resetError()}>
            <Input
              label={"Введіть Ваш e-mail"}
              value={emailAdress}
              error={emailError || errorMessage}
              onChange={onChangeEmail}
              type={"text"}
              errorMessage={emailError}
            />
            <label
              className={errorMessage ? style.labelSend : style.visuallyHidden}
              htmlFor="confirmedPassword"
            >
              {errorMessage}
            </label>

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
      </div>
    </Loader>
  );
}
