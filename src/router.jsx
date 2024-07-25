import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/layout/RootLayout";
import TodoPage from "./pages/TodoPage";
import LoginLayout from "./pages/layout/LoginLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RedirectPage from "./pages/RedirectPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <TodoPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout />,
    children: [
      {
        path: "",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/redirect",
    element: <RedirectPage />,
  },
]);
