import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error";

const Home = lazy(()=> import('../pages/Home'))
const Contact = lazy(()=> import('../pages/Contact'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;