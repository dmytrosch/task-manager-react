import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { makeAlertNotification } from "../../redux/notifications/notificationOperations";

import styles from "./addParticipant.module.css";
import animateItem from "../../utils/animateItem.module.css";

import Input from "../../common/Input/index";
import Button from "../../common/Button/index";

export default function AddParticipant({ onClose }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [list, setList] = useState([]);

  const addEmail = (e) => {
    e.preventDefault();
    // TODO: Add validation email
    // if (!isEmailValid(email)) {
    //   retrun dispatch(makeAlertNotification('Введіть коректний e-mail'))
    // }
    if (list.includes(email)) {
      return dispatch(makeAlertNotification("Цей e-mail вже є у списку"));
    }
    setList([...list, email]);
    setEmail("");
  };

  const handleSendInvite = () => {
    if (list.length !== 0) {
      // TODO: Connect
      console.log("send", list);
      return onClose();
    }
    dispatch(makeAlertNotification("Додайте e-mail користувачів"));
  };

  const handleRemoveItem = (e) => {
    const removeItem = e.target.dataset.item;
    setList(list.filter((item) => item !== removeItem));
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
        {list.length === 0 ? (
          <p className={styles.message}>Ви ще не додали жодного користувача</p>
        ) : (
          <TransitionGroup component="ul" className={styles.list}>
            {list.map((item) => (
              <CSSTransition
                timeout={250}
                key={item}
                classNames={animateItem}
                unmountOnExit
              >
                <li
                  className={styles.item}
                  data-item={item}
                  onClick={handleRemoveItem}
                >
                  {item}
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
