import React, { useState, useEffect } from "react";
import ModalPortal from "../../common/ModalPortal/ModalPortal";
// import Button from "../../common/Button/index";
import styles from "./progressChart.module.css";
import ModalWindow from "./ModalWindow";
// import analyticsIcon from "../../assest/icons/analytics.svg";
import ChartTable from "./ChartTableOptions";
import IconButton from "../../common/IconButtons/index.js";

export default function ProgressChart() {
  const [isOn, setOn] = useState(false);

  function downHandler({ key }) {
    if (key === "Escape") {
      setOn(false);
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", downHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, []);

  return (
    <>
      {/* <Button
        buttonCustomClass={styles.button}
        shape="circle"
        children={<img src={analyticsIcon} alt="img" img />}
        onClick={() => setOn(!isOn)}
      ></Button> */}
      <IconButton
      buttonCustomClass={styles.button}
      iconName="analytica" icon="analytica"           
      onClick={() => setOn(!isOn)} />
      {isOn && (
        <ModalPortal>
          <ModalWindow setOn={setOn}>
            <ChartTable />
          </ModalWindow>
        </ModalPortal>
      )}
    </>
  );
}
