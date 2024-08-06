import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Contests } from "../pages/contests/Contests";
import { Profile } from "../pages/profile/Profile";
import { News } from "../pages/news/News";
import { Competitions } from "../pages/competitions/Competitions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contests",
    element: <Contests />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/contests/competitions",
    element: <Competitions />,
  },
]);
