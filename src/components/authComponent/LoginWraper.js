import React, { useState } from "react";
import style from "./styles.module.css";
import classNames from "classnames";
import Login from "./Login";
import ResetPasswordRequest from "./authAssets/ResetPasswordRequest";

export default function Auth() {
  const [visibleBack, setVisibleBack] = useState(false);
  function setVisible() {
    setVisibleBack((prev) => !prev);
  }

  return (
    <section className={style.container}>
      <div
        className={classNames(
          visibleBack ? style.flipperRotate : null,
          style.flipper
        )}
      >
        <div className={style.front}>
          <Login setVissible={setVisible} />
        </div>
        <div className={style.back}>
          <div className={style.inner}>
            <ResetPasswordRequest setVissible={setVisible} />
          </div>
        </div>
      </div>
    </section>
  );
}
