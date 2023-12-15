import { createBrowserRouter } from "react-router-dom";
import { Landing, Notfound, Login, Signup} from "../pages";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "*", element: <Notfound /> },
]);

export default router;
