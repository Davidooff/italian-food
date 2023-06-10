import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Main from "./View/Pages/Main";
import Header from "./View/Sections/Header";
import Footer from "./View/Sections/Footer";
import Menu from "./View/Pages/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/menu",
    element: <Menu />,
    // errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
