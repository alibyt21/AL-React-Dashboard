import PublicView from "src/views/PublicView";
import NotFound from "src/views/errors/NotFound";
import Home from "src/views/global/Home";

export const globalRoutes = [
  {
    path: "/",
    element: <PublicView />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ]
  },
];
