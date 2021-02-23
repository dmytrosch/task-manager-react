import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import style from "./styles.module.css";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
<<<<<<< HEAD

=======
import circlesStyles from "../Layouts/circles.module.css";
import PassForgot from "./resetPassword";
>>>>>>> origin/authLayout
import { login } from "../../redux/auth/authOperations";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vissibleBack, setVissibleBack] = useState(false);

  function setVissibleForgetPass() {
    setVissibleBack((prev) => !prev);
  }
  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
  };
  return (
    <section className={style.container}>
      <PassForgot
        vissibleBack={vissibleBack}
        setVissible={setVissibleForgetPass}
      >
        <div className={style.formContainer}>
          <p className={style.title}>Вхід</p>
          <form className={style.form} onSubmit={handlerSubmit}>
            <div className={style.inputContainer}>
              <Input
                label={"E-mail"}
                value={email}
                error={false}
                onChange={(e) => setEmail(e.target.value)}
                type={"text"}
                errorMessage={"Невірний email"}
              />
            </div>
            <div className={style.inputContainer}>
              <Input
                label={"Пароль"}
                error={false}
                type={"password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                errorMessage={"Невірний пароль"}
              />
            </div>

<<<<<<< HEAD
          <Button shape="oval" type="submit">
            Увійти
          </Button>
        </form>
        <p className={style.subtitle}>
          Немає акаунту?&nbsp;
          <NavLink to="/signup" className={style.NavLink}>
            Зареєструватись
          </NavLink>
        </p>
      </div>
=======
            <Button shape="oval" type="submit">
              Увійти
            </Button>
          </form>
          <p className={style.subtitle}>
            Немає акаунту?&nbsp;
            <NavLink to="/signup" className={style.NavLink}>
              Зареєструватись
            </NavLink>
            <NavLink
              to="/login"
              onClick={setVissibleForgetPass}
              className={style.forgotPassLink}
            >
              Забули пароль?
            </NavLink>
          </p>
        </div>
      </PassForgot>
      <div className={circlesStyles.thirdNew}></div>
>>>>>>> origin/authLayout
    </section>
  );
}
