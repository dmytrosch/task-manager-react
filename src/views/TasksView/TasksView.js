<<<<<<< HEAD
import React, {useState} from 'react'

import ModalPortal from '../../common/ModalPortal/ModalPortal'
import Modal from '../../components/Modals/Modal'
import ProjectCreator from '../../components/Modals/ModalComponents/ProjectCreator'

export default function TaskViews() {
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => setShowModal((prevState) => !prevState)
  return (
    <div>
      <button onClick={toggleModal}>Click show modal</button>
      <ModalPortal>
        {showModal && (
          <Modal onClose={toggleModal}>
            <ProjectCreator onClose={toggleModal} />
          </Modal>
        )}
      </ModalPortal>
    </div>
  )
=======
import React from "react";
import MainLayout from "../../components/Layouts/MainLayout";

export default function TasksView() {
  return <MainLayout></MainLayout>;
>>>>>>> 0f1c8dbf68d143ce033ba56b409c742ec628c193
}
