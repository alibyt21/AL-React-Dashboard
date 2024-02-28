import Login from "src/views/user/Login";
import { Outlet } from "react-router-dom";

// Outlet means it's a public view
export const userRoutes = [
    {
        path: "/user/",
        element: <Outlet />,
        children: [
            {
                path: "login/",
                element: <Login />,
            },
            {
                path: "register/",
                element: <Login />,
            },
        ],
    },
];