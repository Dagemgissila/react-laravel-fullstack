import { createBrowserRouter, Navigate } from "react-router-dom";
import Signup from "./views/Signup";
import Login from "./views/Login";
import { Users } from "./views/Users";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/layouts/DefaultLayout";
import { GuestLayout } from "./components/layouts/GuestLayout";
import Dashboard from "./views/Dashboard";
import UserForm from "./views/UserForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            { path: "/", element: <Navigate to="/users" /> },
            { path: "/users", element: <Users /> },
            { path: "/users/new", element: <UserForm key="UserCreate" /> },
            { path: "/users/:id", element: <UserForm key="UserUpdate" /> },

            { path: "/dashboard", element: <Dashboard /> },
        ],
    },

    {
        path: "/",
        element: <GuestLayout />,
        children: [
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <Signup /> },
        ],
    },

    { path: "/*", element: <NotFound /> },
]);

export default router;
