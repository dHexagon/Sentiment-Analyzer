import { createBrowserRouter } from "react-router-dom";
import { Landing, Notfound, Login, Signup, Options} from "../pages";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/options", element: <Options /> },
  { path: "*", element: <Notfound /> },
]);

export default router;
