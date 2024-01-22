import { RouterProvider } from "react-router-dom";
import { LevelProvider } from "./utils/context";
import { ToastContainer } from "react-toastify";

import router from "./routes";

function App() {
  return (
    <>
      <LevelProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </LevelProvider>
    </>
  );
}

export default App;
