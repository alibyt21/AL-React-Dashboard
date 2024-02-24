import User from "src/views/user/User";
import Login from "src/views/user/Login";

export const userRoutes = [
    {
        path: "/user",
        element: <User />,
        children: [
            {
                path: "login/",
                element: <Login />,
            },
        ],
    },
];