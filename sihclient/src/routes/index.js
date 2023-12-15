import { createBrowserRouter } from "react-router-dom";
import { Landing, Notfound } from "../pages";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "*", element: <Notfound /> },
]);

export default router;
