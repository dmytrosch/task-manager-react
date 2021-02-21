import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import style from "./QuestionOfDeletion.module.css";

export default function AskToDelete({ item, onClose }) {
  const dispatch = useDispatch();
  return (
    <section className={style.container}>
      <h2 className={style.title}>Ви дійсно хочете видалити {item}</h2>
      <div className={style.cotainerButtons}>
        <button onClick={dispatch} className={style.button}>
          Так
        </button>
        <button onClick={onClose} className={style.button}>
          Відміна
        </button>
      </div>
    </section>
  );
}
AskToDelete.proprTypes = {
  item: PropTypes.string,
};

AskToDelete.defaultProps = {
  item: "проект?",
};
