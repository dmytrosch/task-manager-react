import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { currentProjectIdSelector } from "../../../../redux/modal/modalSelectors";
import { getParticipantsWithoutCurrentUserSelector } from "../../../../redux/projects/projectSelectors";
import { addParticipant } from "../../../../redux/projects/projectOperations";
import { getUsersEmailSelector } from "../../../../redux/auth/authSelectors";
import styles from "./addParticipant.module.css";

import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";

export default function AddParticipant({ onClose }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const projectId = useSelector(currentProjectIdSelector);
  const participants = useSelector(
    getParticipantsWithoutCurrentUserSelector(projectId)
  );
  const userEmail = useSelector(getUsersEmailSelector);
  const addEmail = (e) => {
    e.preventDefault();
    if (!validator.isEmail(email)) {
      setEmailError("Направильний e-mail");
      return;
    }
    if (userEmail === email) {
      setEmailError("Користувач вже є учасником проєкту");
      return;
    }
    dispatch(addParticipant(projectId, { email }));
    onClose();
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={addEmail}
        onChange={() => {
          setEmailError(null);
        }}
      >
        <h2 className={styles.title}>Додати людей</h2>
        <div className={styles.inputContainer}>
          <Input
            type="mail"
            label="Введіть e-mail"
            value={email}
            error={emailError}
            errorMessage={emailError}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button
            shape="square"
            type="submit"
            buttonCustomClass={styles.addBtn}
          >
            Додати
          </Button>
        </div>

        <p className={styles.listTitle}>Додані користувачі:</p>
        {participants.length === 0 ? (
          <p className={styles.message}>Ви ще не додали жодного користувача</p>
        ) : (
          <ul className={styles.list}>
            {participants.map((item) => (
              <li key={item.id} className={styles.item}>
                {item.email}
              </li>
            ))}
          </ul>
        )}
        <div className={styles.control}>
          <Button buttonCustomClass={styles.submitBtn} type="submit">
            Готово
          </Button>
          <Button buttonCustomClass={styles.cancelBtn} onClick={onClose}>
            Скасувати
          </Button>
        </div>
      </form>
    </div>
  );
}
