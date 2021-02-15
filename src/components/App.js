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
import SprintsView from '../views/SprintsView/SprintsView'
import TasksView from '../views/TasksView/TasksView'

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
          <TasksView />
          {/* <AuthLayout>
            <LoginView />
          </AuthLayout> */}
        </Suspense>
      </BrowserRouter>
    </>
  )
}
