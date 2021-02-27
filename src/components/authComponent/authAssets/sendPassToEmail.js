import React, { useState, useEffect } from "react";
import validator from "validator";
import style from "../styles.module.css";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";
import { sendMail } from "../../../redux/auth/authOperations";
import { getResultSendingEmail } from "../../../redux/auth/authSelectors";
import { sendEmailSuccess } from "../../../redux/auth/authActions";

export default function SendEmail({ setVissible }) {
  const [emailAdress, setEmailAdress] = useState("");
  const [errMessEmail, setErrMessEmail] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const errorMsg = useSelector(getResultSendingEmail);
  let id = null;
  function clickEvent(e) {
    if (e.target.nodeName !== "INPUT" || emailAdress === "") {
      dispatch(sendEmailSuccess(null));
      setErrMessEmail(null);
    }
  }
  useEffect(() => {
    return () => {
      dispatch(sendEmailSuccess(null));
      dispatch(setErrMessEmail(null));
      clearTimeout(id);
    };
  }, []);
  useEffect(() => {
    errorMsg && dispatch(setErrMessEmail(null));
  }, [emailAdress]);
  function submitFormHeandler(e) {
    e.preventDefault();
    if (errMessEmail) return;
    dispatch(sendMail({ email: emailAdress }));
    setEmailAdress(null);
    setEmailAdress("");
    id = setTimeout(() => {
      history.replace("/login");
    }, 3000);
  }
  function onChangeEmail(e) {
    setEmailAdress(e.target.value);
    if (!validator.isEmail(e.target.value)) {
      return setErrMessEmail("Введіть коректний email");
    }
    setErrMessEmail(null);
    dispatch(sendEmailSuccess(null));
  }
  return (
    <div onClick={(e) => clickEvent(e)} className={style.formContainer}>
      <div className={style.inputContainer}>
        <h2 className={style.title}> Вiдновлення паролю </h2>
        <p className={style.subtitle}>Введіть email адресу користувача. </p>
        <form onSubmit={(e) => submitFormHeandler(e)}>
          <Input
            label={"E-mail"}
            value={emailAdress}
            error={errMessEmail}
            onChange={onChangeEmail}
            type={"text"}
            errorMessage={errMessEmail}
          />
          <label
            className={errorMsg ? style.labelSend : style.visuallyHidden}
            htmlFor="confirmedPassword"
          >
            {errorMsg === 404 && "Користувача з таким e-mail не існує"}
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
  );
}
