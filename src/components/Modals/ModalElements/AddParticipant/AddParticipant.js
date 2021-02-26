import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeAlertNotification } from "../../../../redux/notifications/notificationOperations";
import { currentProjectId } from "../../../../redux/modal/modalSelectors";
import { getAllParticipantsSelector } from "../../../../redux/projects/projectSelectors";

import styles from "./addParticipant.module.css";

import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import { getCurrentProject } from "../../../../utils/taskManagerAPI";

export default function AddParticipant({ onClose }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const projectId = useSelector(currentProjectId);
  const participants = useSelector(getAllParticipantsSelector(projectId));
  const addEmail = (e) => {
    e.preventDefault();
    // TODO: Add validation email
    // if (!isEmailValid(email)) {
    //   retrun dispatch(makeAlertNotification('Введіть коректний e-mail'))
    // }
    const isEmailPresent = (participants, email) => {
      const result = participants.filter((item) => item.email === email);
      return result.length === 0 ? false : true;
    };

    if (isEmailPresent(participants, email)) {
      return dispatch(makeAlertNotification("Цей e-mail вже є у списку"));
    }
    console.log("dispatch", { email });
    onClose();
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={addEmail}>
        <h2 className={styles.title}>Додати людей</h2>
        <div className={styles.inputContainer}>
          <Input
            type="mail"
            placeholder="Введіть e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            inputClassNames={styles.input}
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
            Відміна
          </Button>
        </div>
      </form>
    </div>
  );
}
