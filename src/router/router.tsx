import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home/Home";
import { ContestsPage } from "../pages/contests/Contests";
import { ProfilePage } from "../pages/profile/Profile";
import { NewsPage } from "../pages/news/News";
import { CompetitionsPage } from "../pages/competitions/Competitions";
import { LoginPage } from "../pages/login/Login";
import { CompetitionRegistrationPage } from "../pages/competation-registration/CompetationRegistration";
import { getAccessToken } from "../services/auth-token.service";
import { ProtectedRoute } from "./ProtectedRoute";

const token = getAccessToken();

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/news",
    element: <NewsPage />,
  },
  {
    path: "/contests",
    element: <ContestsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/contests/competitions",
    element: <CompetitionsPage />,
  },
  {
    element: <ProtectedRoute isAuthenticated={!!token} />,
    children: [
      {
        path: "/contests/competitions/:id",
        element: <CompetitionRegistrationPage />,
      },
    ]
  }
]);
