import { appRoutes } from "./appRoutes";
import { globalRoutes } from "./globalRoutes";
import { userRoutes } from "./userRoutes";

export const routes = [...globalRoutes, ...appRoutes, ...userRoutes];
