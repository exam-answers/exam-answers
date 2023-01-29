import { createBrowserRouter, Outlet } from "react-router-dom";
import IoDashboard from "../components/ioSubject/IoDashboard";
import Navbar from "../components/navbar/Navbar";
// import Subjects from "../components/subjects/Subjects";

const RouterApp = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {/* <Navbar /> */}
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/',
        element: <IoDashboard />
      }
    ]
  },
]);

export default RouterApp;
