import { Outlet } from "react-router-dom";
import ProtectedView from "src/views/ProtectedView";
import PublicView from "src/views/PublicView";
import Temp from "src/views/app/Temp";
import NotFound from "src/views/errors/NotFound";

export const appRoutes = [
  {
    path: "/app/",
    element: <PublicView />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <p>app root</p>,
      },
      {
        path: "entity/",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <Temp />
          },
          {
            path: "add",
            element: <p>/add of entity path</p>
          }
        ]
      },
    ],
  },
];