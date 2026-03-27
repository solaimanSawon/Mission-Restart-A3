import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import AppDetailsPage from "../pages/AppDetailsPage";
import AppsPage from "../pages/AppsPage";
import HomePage from "../pages/HomePage";
import InstallationPage from "../pages/InstallationPage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "apps",
        element: <AppsPage />
      },
      {
        path: "apps/:id",
        element: <AppDetailsPage />
      },
      {
        path: "installation",
        element: <InstallationPage />
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ]
  }
]);
