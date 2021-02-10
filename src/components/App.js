import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Redirect, BrowserRouter, Router } from "react-router-dom";
import routes from "../utils/routes";
import MainLayout from "../components/Layouts/MainLayout";

import { setClientWidth } from "../redux/clientWidth/clientWidthAction";
import { isMobile } from "../redux/clientWidth/clientWidthSelectors";

import Loader from "../components/Loader/Loader";
import LoginView from "../views/LoginView/LoginView";
// export default function App() {
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(setClientWidth(document.documentElement.clientWidth));
//     }, []);
//     const isMobileMode = useSelector(isMobile);

//     return (
//         <>
//             <BrowserRouter>
//                 <Suspense fallback={<Loader />}>
//                     <LoginView />
//                 </Suspense>
//             </BrowserRouter>
//         </>
//     );
// }
export default function AppForTest (){
  return (
    <MainLayout/>
  )
}
