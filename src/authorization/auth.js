import { homeURL } from "src/settings/config";
import { notify } from "src/services/Notification/Notification";

export const AuthorizationRequired = (message) => {
    notify(message, "error")
    localStorage.removeItem("access_token");
    setTimeout(() => {
        window.location.replace(`${homeURL}`);
    }, 1000);
};