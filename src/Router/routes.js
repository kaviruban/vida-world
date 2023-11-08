import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "../components/NavigationBar/NavBar";
import UserLogin from "../pages/Auth/LoginPage/UserLogin";
import UserSignUp from "../pages/Auth/RegisterPage/UserSignUp";

import HomePgVida from "../pages/HomePage/HomePgVida";
import FooterComp from "../components/Footer/FooterComp";

// const AppLayout = () => {
//     return(
//         <>
//         <Navbar />
//         <Outlet />
//         <FooterComp />

//         </>
//     );
// }

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePgVida />,
  },

  {
    path: "/login",
    element: <UserLogin />,
  },
  {
    path: "/register",
    element: <UserSignUp />,
  },
]);

export default routes;
