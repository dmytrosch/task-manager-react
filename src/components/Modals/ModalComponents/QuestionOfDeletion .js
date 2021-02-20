import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import style from "./QuestionOfDeletion.module.css";

export default function QuestionOfDeletion({ item, onClose }) {
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
QuestionOfDeletion.proprTypes = {
  item: PropTypes.string,
};

QuestionOfDeletion.defaultProps = {
  item: "проект?",
};
