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
  },
  {
    id: 2,
    name: "Очень много текста Очень много текста Очень много текста",
  },
  {
    id: 3,
    name: "Project 3",
  },
  {
    id: 4,
    name: "Project 4",
  },
  {
    id: 5,
    name: "Project 5",
  },
  {
    id: 7,
    name: "Project 5",
  },
  {
    id: 8,
    name: "Project 5",
  },
  {
    id: 9,
    name: "Project 5",
  },
  {
    id: 10,
    name: "Project 5",
  },
  {
    id: 11,
    name: "Project 5",
  },{
    id: 12,
    name: "Project 5",
  },{
    id: 13,
    name: "Project 5",
  },{
    id: 15,
    name: "Project 5",
  },{
    id: 16,
    name: "Project 5",
  },{
    id: 17,
    name: "Project 5",
  },{
    id: 18,
    name: "Project 5",
  },{
    id: 19,
    name: "Project 5",
  },
];

export default function SideBar({ addNewProject }) {
  const { pathname } = useLocation();
  const history = useHistory();
  const nameArrowBtn = pathname === "/task" ? "проект" : "спринт";
  const [visibleTab, setVisibleTab] = useState(obj[1].id);

  return (
    <aside className={styles.aside}>
      <GoBackBtn props={{ pathname, history, nameArrowBtn }} />
      <ListItem props={{ obj, visibleTab, setVisibleTab }} />
      <AddTaskBtn nameArrowBtn={nameArrowBtn} addNewProject={addNewProject} />
    </aside>
  );
}
