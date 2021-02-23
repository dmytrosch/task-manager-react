import React from "react";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../../redux/projects/projectOperations";
import { deleteProjectAction } from "../../../redux/projects/projectActions";
import { NavLink } from "react-router-dom";
import styles from "./ProjectCard.module.css";
import IconButton from "../../../common/IconButtons/IconButtons";

export default function ProjectCard({ name, description, id, isOwner }) {
  const dispatch = useDispatch();
  const deleteCard = (e) => {
    e.preventDefault();
    dispatch(deleteProject(id)); //на АПИ
    dispatch(deleteProjectAction(id)); //на редьюсер
  };

  return (
    <div className={styles.container}>
      <NavLink to={`/projects/${id}/sprints`} className={styles.navLink}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>{description}</p>
        {isOwner && (
          <IconButton
            iconButtonCustomClass={styles.button}
            iconName="coloredBin"
            icon="coloredBin"
            onClick={deleteCard}
          />
        )}
      </NavLink>
    </div>
  );
}
