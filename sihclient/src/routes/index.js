import { createBrowserRouter } from "react-router-dom";
import { Landing, Notfound, Login, Signup, Options, DashBoard } from "../pages";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/options", element: <Options /> },
  { path: "/dashboard", element: <DashBoard /> },
  { path: "*", element: <Notfound /> },
]);

export default router;
