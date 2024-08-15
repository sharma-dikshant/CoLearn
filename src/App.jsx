import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Projects from "./features/projects/Projects";
import Rooms from "./features/rooms/Rooms";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/rooms",
          element: <Rooms />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
