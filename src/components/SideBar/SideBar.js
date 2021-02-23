import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import GoBackBtn from "./goBackBtn";
import ListItem from "./listItems";
import AddTaskBtn from "./addTaskBtn";
import styles from "../SideBar/sideBar.module.css";
import * as modalAction from "../../redux/modal/modalAction";

//for example

const obj = [
  {
    id: 1,
    name: "Project 1",
    color: "#00FF00",
  },
  {
    id: 2,
    name: "Очень много текста Очень много текста Очень много текста",
    color: "#FF0000",
  },
  {
    id: 3,
    name: "Project 3",
    color: "#00FFFF",
  },
  {
    id: 22,
    name: "Project 4",
    color: "#FFFF00",
  },
  {
    id: 5,
    name: "Project 1",
    color: "#FF00FF",
  },
  {
    id: 6,
    name: "Project 3",
    color: "#00FFFF",
  },
  {
    id: 7,
    name: "Project 4",
    color: "#FFFF00",
  },
  {
    id: 8,
    name: "Project 1",
    color: "#FF00FF",
  },
  {
    id: 435,
    name: "Project 3",
    color: "#00FFFF",
  },
  {
    id: 435,
    name: "Project 4",
    color: "#FFFF00",
  },
  {
    id: 345,
    name: "Project 1",
    color: "#FF00FF",
  },
  {
    id: 346,
    name: "Project 3",
    color: "#00FFFF",
  },
  {
    id: 23,
    name: "Project 4",
    color: "#FFFF00",
  },
  {
    id: 12,
    name: "Project 1",
    color: "#FF00FF",
  },
];

export default function SideBar() {
  const { pathname } = useLocation();
  const history = useHistory();
  const nameArrowBtn = pathname === "/task" ? "спринт" : "проект";
  const [visibleTab, setVisibleTab] = useState(obj[1].id);
  const dispatch = useDispatch();
  const add = () => dispatch(modalAction.setModalCreateProject(true));

  return (
    <aside className={styles.aside}>
      <GoBackBtn props={{ pathname, history, nameArrowBtn }} />
      <ListItem props={{ obj, visibleTab, setVisibleTab }} />
      <AddTaskBtn nameArrowBtn={nameArrowBtn} addNewProject={add} />
    </aside>
  );
}
