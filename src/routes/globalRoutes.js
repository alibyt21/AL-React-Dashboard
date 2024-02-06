import NotFound from "src/views/errors/NotFound";
import Global from "src/views/global/Global";

export const globalRoutes = [
  { path: "/", element: <Global />, errorElement: <NotFound /> },
];
