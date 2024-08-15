import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Projects from "./features/projects/Projects";
import Rooms from "./features/rooms/Rooms";
import About from "./ui/About";
import { useSelector } from "react-redux";

function App() {
  // const x = useSelector((state) => state);
  // console.log(x);

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
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
