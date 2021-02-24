import React, { useState } from "react";
import style from "./styles.module.css";
import classNames from "classnames";
import Login from "./Login";
import Signup from "./Signup";
import SendEmail from "./authAssets/sendPassToEmail";
import { useLocation } from "react-router-dom";

export default function Auth() {
  const [vissibleBack, setVissibleBack] = useState(false);
  function setVissible() {
    setVissibleBack((prev) => !prev);
  }
  const location = useLocation();

  return (
    <section className={style.container}>
      <div
        className={classNames(
          vissibleBack ? style.flipperRotate : null,
          style.flipper
        )}
      >
        <div className={style.front}>
          {location.pathname === "/login" ? (
            <Login setVissible={setVissible} />
          ) : (
            <Signup setVissible={setVissible} />
          )}
        </div>
        <div className={style.back}>
          <div className={style.inner}>
            <SendEmail setVissible={setVissible} />
          </div>
        </div>
      </div>
    </section>
  );
}
