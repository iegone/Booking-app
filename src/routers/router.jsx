import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/landing";
import App from "../App";
import Error404 from "../pages/Errors/Error404";
import Booking from "../pages/Booking";
import MyBooking from "../auth/MyBooking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/Booking",
        element: <Booking />,
      },
      {
        path: "/MyBooking",
        element: <MyBooking />,
      },
      {
        path: "/*",
        element: <Error404 />,
      },
    ],
  },
]);

export default router;
