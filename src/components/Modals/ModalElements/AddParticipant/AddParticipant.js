import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { makeAlertNotification } from "../../../../redux/notifications/notificationOperations";
import { currentProjectId } from "../../../../redux/modal/modalSelectors";
import { getAllParticipantsSelector } from "../../../../redux/projects/projectSelectors";

import styles from "./addParticipant.module.css";
import animateItem from "../../../../styles/animateItem.module.css";

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
    if (participants.includes(email)) {
      return dispatch(makeAlertNotification("Цей e-mail вже є у списку"));
    }
    // setList([...participants, email]);
    setEmail("");
  };

  const handleSendInvite = () => {
    if (participants.length !== 0) {
      // TODO: Connect
      console.log("send", participants);
      return onClose();
    }
    dispatch(makeAlertNotification("Додайте e-mail користувачів"));
  };

  const handleRemoveItem = (e) => {
    const removeItem = e.target.dataset.item;
    // setList(participants.filter((item) => item !== removeItem));
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
          <TransitionGroup component="ul" className={styles.list}>
            {participants.map((item) => (
              <CSSTransition
                timeout={250}
                key={item.id}
                classNames={animateItem}
                unmountOnExit
              >
                <li
                  className={styles.item}
                  onClick={handleRemoveItem}
                >
                  {item.email}
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </form>
      <div className={styles.control}>
        <Button buttonCustomClass={styles.submitBtn} onClick={handleSendInvite}>
          Готово
        </Button>
        <Button buttonCustomClass={styles.cancelBtn} onClick={onClose}>
          Відміна
        </Button>
      </div>
    </div>
  );
}
