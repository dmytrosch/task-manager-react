import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { isModalApproveDeleteProjectSelector } from "../../../redux/modal/modalSelectors";
import { setModalApproveDeleteProject } from "../../../redux/modal/modalAction";

import ModalPortal from "../../../common/ModalPortal/ModalPortal";
import Modal from "../Modal";
import ApproveDeleteProject from "../ModalElements/ApproveDeleteProject/ApproveDeleteProject";

export default function ModalApproveDeleteProject() {
  const dispatch = useDispatch();
  const isOpen = useSelector(isModalApproveDeleteProjectSelector);
  const closeModal = () => dispatch(setModalApproveDeleteProject(null));

  return isOpen ? (
    <ModalPortal>
      <Modal
        onClose={closeModal}
        position="center"
      >
        <ApproveDeleteProject onClose={closeModal} />
      </Modal>
    </ModalPortal>
  ) : null;
}
