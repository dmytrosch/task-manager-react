import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClientWidth } from "../../redux/clientWidth/clientWidthAction";
import { isMobileSelector } from "../../redux/clientWidth/clientWidthSelectors";
import { useLocation, useHistory } from "react-router-dom";
import style from "./TaskView.module.css";

import ModalPortal from "../../common/ModalPortal/ModalPortal";
import Modal from "../../components/Modals/Modal";
import ProjectCreator from "../../components/Modals/ModalComponents/ProjectCreator";
import MainLayout from "../../components/Layouts/MainLayout";
import SideBar from "../../components/SideBar/SideBar";
import GoBackBtn from "../../components/SideBar/goBackBtn";
import Button from "../../common/Button/index";
import IconButton from "../../common/IconButtons";

export default function TaskViews() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prevState) => !prevState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setClientWidth(document.documentElement.clientWidth));
  }, []);
  const isMobileMode = useSelector(isMobileSelector);
  const { pathname } = useLocation();
  const history = useHistory();
  const nameArrowBtn = pathname === "/task" ? "проект" : "спринт";
  return (
    <MainLayout>
      <div className={style.containerSideBar}>
        {!isMobileMode && (
          <section>
            <SideBar />
            <Button onClick={toggleModal}>Click show modal</Button>
            <ModalPortal>
              {showModal && (
                <Modal onClose={toggleModal}>
                  <ProjectCreator onClose={toggleModal} />
                </Modal>
              )}
            </ModalPortal>
          </section>
        )}
        <section className={style.containerTasks}>
          {isMobileMode && (
            <nav className={style.containerGoBack}>
              <GoBackBtn props={{ pathname, history, nameArrowBtn }} />
            </nav>
          )}
          <div className={style.ContainerPaginate}>
            <div className={style.paginate}>
              <button className={style.puginateBth}></button>
              <span className={style.paginateSpan}>2</span>
              <span className={style.paginateSpan}>/</span>
              <span className={style.paginateSpan}>12</span>
              <button className={style.puginateBth}></button>
            </div>
            <p className={style.dateCreation}>2020.02.16</p>
          </div>
          <div className={style.containerInput}>
            <input className={style.input} />
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
