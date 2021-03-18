import React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
// import AddParticipant from '../components/Modals/ModalElements/AddParticipant/AddParticipant';
import { isAnyModalOpenSelector } from "../redux/modal/modalSelectors";
import useIsMobile from "../hooks/useIsMobile";

import styles from "./Layout.module.css";

const MainLayout = ({ children }) => {
  const isMobile = useIsMobile();
  const isAnyModalOpen = useSelector(isAnyModalOpenSelector);
  const scrollY = useRef(window.scrollY);
  const shouldToChangeLayout = isMobile && isAnyModalOpen;
  const styleWhenModalIsOpened = useRef({
    position: "fixed",
    top: `-${scrollY.current}px`,
  });
  isAnyModalOpen && window.scrollTo(0, parseInt(scrollY || "0") * -1);
  return (
    <div
      className={styles.wrapper}
      style={shouldToChangeLayout ? styleWhenModalIsOpened.current : {}}
    >
      <Header className={styles.header} />
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default MainLayout;
