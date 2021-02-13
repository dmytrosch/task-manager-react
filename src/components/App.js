import React, { useEffect, Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Redirect, BrowserRouter, Router } from 'react-router-dom'
import routes from '../utils/routes'
import MainLayout from '../components/Layouts/MainLayout'
import AuthLayout from '../components/Layouts/AuthLayout'

import { setClientWidth } from '../redux/clientWidth/clientWidthAction'
import { isMobileSelector } from '../redux/clientWidth/clientWidthSelectors'

import Loader from '../components/Loader/Loader'
import LoginView from '../views/LoginView/LoginView'
import SignupView from '../views/SignupView/SignupView'

import Modal from './Modals/Modal'
import ModalPortal from '../common/ModalPortal/ModalPortal'
import SprintCreator from './Modals/ModalComponents/SprintCreator'
import QuestionOfDeletion from './Modals/ModalComponents/QuestionOfDeletion '

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setClientWidth(document.documentElement.clientWidth))
  }, [])
  const isMobileMode = useSelector(isMobileSelector)

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <AuthLayout>
            <LoginView />
          </AuthLayout>

          {/* <ModalPortal>
            <Modal position="modalWindowRemoval">
              <QuestionOfDeletion />
            </Modal>
          </ModalPortal> */}

        </Suspense>
      </BrowserRouter>
    </>
  )
}
