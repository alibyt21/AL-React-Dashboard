import { appRoutes } from "./appRoutes";
import { globalRoutes } from "./globalRoutes";

export const routes = [...globalRoutes, ...appRoutes];
