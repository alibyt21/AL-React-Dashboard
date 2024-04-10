import ProtectedView from "src/views/ProtectedView";
import NotFound from "src/views/errors/NotFound";

export const appRoutes = [
  {
    path: "/app/",
    element: <ProtectedView />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <p>salam</p>,
      },
    ],
  },
];