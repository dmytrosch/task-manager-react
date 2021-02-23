import React, { useState } from "react";
import { useDispatch } from "react-redux";

import IconButton from "../../common/IconButtons/IconButtons";
import Slider from "../../common/Slider/Slider";
import SearchInput from "../../common/SearchInput/SearchInput";
import EditableInput from "../../common/EditableInput/EditableInput";

import * as modalAction from "../../redux/modal/modalAction";
import * as sprintSelector from "../../redux/sprints/sprintsSelectors";

import styles from "./Tasks.module.css";

export default function Task({ sprintId }) {
  const dispatch = useDispatch();
  const [sprintName, setSprintName] = useState(
    sprintSelector.nameById(sprintId)
  );
  const handleSearchInput = (searchRequest) => {
    // TODO: Connect dispatch
    console.log("dispatch", searchRequest);
  };

  const handleSlider = (current) => {
    // TODO: Connect dispatch
    console.log("dispatch", current);
  };

  const onSave = (newSprintName) => setSprintName(newSprintName);

  const openModalTask = () => dispatch(modalAction.setModalCreateTask());

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <Slider initialCurrent={1} total={12} callback={handleSlider} />
          <span className={styles.date}>2020.02.16</span>
        </div>
        <SearchInput
          customContainerStyles={styles.mobileSearchInp}
          callback={handleSearchInput}
        />
      </div>
      <p className={styles.sprintNames}>
        <EditableInput onSave value={sprintName} />
      </p>
      <div onClick={openModalTask} className={styles.containerButton}>
        <IconButton
          iconButtonCustomClass={styles.buttonAdd}
          iconName="plus"
          icon="plus"
        />
        <p className={styles.titleButton}>Створити задачу</p>
      </div>
    </div>
  );
}
