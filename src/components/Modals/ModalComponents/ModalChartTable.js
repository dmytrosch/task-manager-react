import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { isModalChartTable } from "../../../redux/modal/modalSelector";
import { setModalChartTable } from "../../../redux/modal/modalAction";
import ModalPortal from "../../../common/ModalPortal/ModalPortal";
import Charts from "../../ProgressChart/ProgressChart";
import Modal from "../../ProgressChart/ModalWindow";

export default function ChartTable() {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(isModalChartTable);
  const close = () => dispatch(setModalChartTable(false));
  return isOpenModal ? (
    <ModalPortal>
      <Modal onClose={close}>
        <Charts />
      </Modal>
    </ModalPortal>
  ) : null;
}
