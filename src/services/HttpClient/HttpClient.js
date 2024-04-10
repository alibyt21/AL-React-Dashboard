import axios from "axios";
import { AuthorizationRequired } from "src/authorization/auth";
import { notify } from "../Notification/Notification";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
const AUTH_TOKEN = localStorage.getItem("access_token") || null;
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

export async function get(url, config = {}) {
    return axios
        .get(url, config)
        .then((response) => response.data)
        .catch(function (error) {
            if (error.response) {
                const { status } = error?.response;
                const { message } = error?.response?.data;
                if (status === 400) {
                    // Notifications("warning", "filled", "پارامتر های ارسالی را بررسی نمایید.");
                } else if (status === 401) {
                    AuthorizationRequired(message);
                } else if (status === 403) {
                    // PermissionRequired();
                } else {
                    // Notifications("error", "filled", err?.response.data.detail);
                }
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                notify(error.message, "error");
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
        });
}

export async function post(url, data = {}, config = {}) {
    return await axios
        .post(url, data, config)
        .then((response) => response.data)
        .catch(function (error) {
            if (error.response) {
                const { status } = error?.response;
                const { message } = error?.response?.data;
                if (status === 400) {
                    // Notifications("warning", "filled", "پارامتر های ارسالی را بررسی نمایید.");
                } else if (status === 401) {
                    AuthorizationRequired(message);
                } else if (status === 403) {
                    // PermissionRequired();
                } else {
                    // Notifications("error", "filled", err?.response.data.detail);
                }
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                notify(error.message, "error");
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
        });
}
