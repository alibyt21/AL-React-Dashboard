import { toast } from "react-toastify";

export async function notify(message, type = "success", options) {
    // type can be success - error - warning - info
    switch (type) {
        case "success":
            toast.success(message, options)
            break;
        case "error":
            toast.error(message, options)
            break;
        case "warning":
            toast.warn(message, options);
            break
        case "info":
            toast.info(message, options)
            break
        default:
            toast(message, options)
            break;
    }
}