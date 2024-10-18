import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./pages/Loading.jsx";
import SetTimer from "./pages/SetTimer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loading />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/setTimer",
    element: <SetTimer />,
    errorElement: <h1>Error</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
