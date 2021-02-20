import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import styles from "./addParticipant.module.css";
import animateItem from "../../utils/animateItem.module.css";

import Input from "../../common/Input/index";
import Button from "../../common/Button/index";

/** TODO:
 * С макета не понятно по какому событию добавлять email в список...
 * Сейчас реализовано на Submit, а отправка созданного списка по клику
 * Но этот способ не годится для мобилки,
 * т.к. submit выполняется по клавише "enter"...
 */

export default function AddParticipant({ onClose }) {
  const [email, setEmail] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmailValid(email, list)) {
      setList([...list, email]);
    } else {
      // TODO: Notification
    }
    setEmail("");
  };

  const handleSendInvite = () => {
    console.log("send", list);
    onClose();
  };

  const handleRemoveItem = (e) => {
    const removeItem = e.target.dataset.item;
    setList(list.filter((item) => item !== removeItem));
  };

  return (
    <div className={styles.containet}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Додати людей</h2>
        <Input
          type="mail"
          placeholder="Введіть e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputClassNames={styles.input}
        />
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

function isEmailValid(email, list) {
  // TODO: add regex email validation
  let status = false;
  if (!list.includes(email)) {
    status = true;
  }

  return status;
}
