import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import SprintList from "./SprintList/SprintList";
import EditableInput from "../../common/EditableInput/EditableInput";
import {
  editProjectName,
  getProjectById,
} from "../../redux/projects/projectOperations";
import { getByIdSelector } from "../../redux/projects/projectSelectors";

import styles from "./Sprints.module.css";
import IconButton from "../../common/IconButtons/IconButtons.js";

import * as modalAction from "../../redux/modal/modalAction";
import { allIdsSelector } from "../../redux/sprints/sprintsSelectors";

export default function Sprint({ projectId }) {
  const dispatch = useDispatch();
  const sprintIds = useSelector(allIdsSelector);
  const currentProject = useSelector(getByIdSelector(projectId));
  const { name, isOwner, description } = currentProject;
  useEffect(() => {
    dispatch(getProjectById(projectId));
  }, [projectId]);
  const addParticipant = () =>
    dispatch(modalAction.setModalAddParticipant(projectId));
  const addSprint = () => dispatch(modalAction.setModalCreateSprint(projectId));
  const changeProjectName = (newName) => {
    dispatch(editProjectName(projectId, newName));
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.infoBox}>
          <h2 className={styles.title}>
            <EditableInput
              disable={!isOwner}
              value={name}
              onSave={changeProjectName}
            />
          </h2>
          <div className={styles.box}>
            <IconButton
              iconButtonCustomClass={styles.button}
              iconName="plus"
              icon="plus"
              onClick={addSprint}
            />
            <p className={styles.text}>Створити спринт</p>
          </div>
        </div>
        <p className={styles.addParticipant} onClick={addParticipant}>
          Додати людей
        </p>
        {sprintIds.length > 0 ? (
          <SprintList sprintIds={sprintIds} isOwner={isOwner} projectId={projectId}/>
        ) : (
          <p className={styles.notSprints}>
            У проєкта відсутні спринт.{" "}
            <span className={styles.addSprintText} onClick={addSprint}>
              Створити спринт
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
