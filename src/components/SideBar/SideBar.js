import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import GoBackBtn from "./goBackBtn";
import ListItem from "./listItems";
import AddTaskBtn from "./addTaskBtn";
import styles from "../SideBar/sideBar.module.css";

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
    id: 4,
    name: "Project 4",
    color: "#FFFF00",
  },
  {
    id: 1,
    name: "Project 1",
    color: "#FF00FF",
  },
];

export default function SideBar({ add }) {
  const { pathname } = useLocation();
  const history = useHistory();
  const nameArrowBtn = pathname === "/task" ? "спринт" : "проект";
  const [visibleTab, setVisibleTab] = useState(obj[1].id);

  return (
    <aside className={styles.aside}>
      <GoBackBtn props={{ pathname, history, nameArrowBtn }} />
      <ListItem props={{ obj, visibleTab, setVisibleTab }} />
      <AddTaskBtn nameArrowBtn={nameArrowBtn} addNewProject={add} />
    </aside>
  );
}
