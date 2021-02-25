import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByIdSelector } from "../../../redux/projects/projectSelectors";
import { NavLink } from "react-router-dom";
import styles from "./ProjectCard.module.css";
import IconButton from "../../../common/IconButtons/IconButtons";

import {setModalApproveDeleteProject} from '../../../redux/modal/modalAction' 

export default function ProjectCard({ id }) {
  const dispatch = useDispatch();
  const { name, description, isOwner } = useSelector(getByIdSelector(id));
  const deleteCard = (e) => {
    e.preventDefault();
    dispatch(setModalApproveDeleteProject(id));
  };
  return (
    <NavLink to={`/projects/${id}/sprints`} className={styles.container}>
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
  );
}
