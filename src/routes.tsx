import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      // localhost:xxxx/
      { index: true, element: <HomePage /> },
      // localhost:xxxx/about
      { path: "About", element: <AboutPage /> },
    ],
  },
]);
