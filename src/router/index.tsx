import App from "../App";
import { createBrowserRouter,  } from "react-router-dom";
import Error from "@/views/Errors";
import Home from "@/views/Home";
import About from "@/views/About";
import Contact from "@/views/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/*",
        element: <Error code={404} massage={"Page Not Found"} />,
      },
    ],
  },
]);
export default router;
