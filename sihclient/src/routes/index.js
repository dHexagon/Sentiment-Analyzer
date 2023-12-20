import { createBrowserRouter } from "react-router-dom";
import { Landing, Notfound, Login, Signup, DashBoard, EmployeeList, CallHistoryList, CallDetails, IssuePage } from "../pages";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/dashboard", element: <DashBoard /> },
  { path: "/employees", element: <EmployeeList /> },
  { path: "/history", element: <CallHistoryList /> },

  { path: "/details/:id", element: <CallDetails /> },

  { path: "/issues", element: <IssuePage /> },
  { path: "*", element: <Notfound /> },
]);

export default router;
