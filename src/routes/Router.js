import { lazy } from "react";
import { Navigate } from "react-router-dom";

import Full from "../layouts/Full.js";


import Login from "../pages/Login/Login.js";
import loggedIn from "../user.js";



/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));




/*****Routes******/


const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
    ]
  },
];



const loginRoutes = [
  {
    path: "/",
    element: <Full />,
    children: [
      { path: "/",  element: <Navigate to="/login" /> },
      { path: "/login",  exact: true,  element: <Login /> },
    ],
  },
];

export { ThemeRoutes }

export { loginRoutes }
