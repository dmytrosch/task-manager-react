import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { isModalChartTableSelector } from "../../../redux/modal/modalSelectors";
import { setModalChartTable } from "../../../redux/modal/modalAction";
import ModalPortal from "../../../common/ModalPortal/ModalPortal";
import Charts from "../ModalElements/ProgressChart/ProgressChart";
import Modal from "../ModalElements/ProgressChart/ModalWindow";
// import Modal from '../Modal';

export default function ChartTable() {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(isModalChartTableSelector);
  const close = () => dispatch(setModalChartTable(false));
  return isOpenModal ? (
    <ModalPortal>
      <Modal onClose={close}>
        <Charts />
      </Modal>
    </ModalPortal>
  ) : null;
}
