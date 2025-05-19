import { useContext } from "react";
import userContext from "src/context/userContext";

export default function HasPermission(permission) {
    let { user } = useContext(userContext);
    let userPermissions = user.role?.permissions ? JSON.parse(user.role.permissions) : [];

    if (userPermissions) {
        // Check for SUPER_USER_PERMISSIONS
        const isSuperUser = userPermissions.find((obj) => {
            return obj === "SUPER_USER_PERMISSIONS" && permission !== "NOT_SUPER_USER_PERMISSIONS";
        });

        if (isSuperUser) {
            return true;
        } else {
            // Check for specific permission or other conditions
            const hasPermission = userPermissions.find((obj) => {
                return obj === permission || permission === undefined || (permission === "NOT_SUPER_USER_PERMISSIONS" && obj !== "SUPER_USER_PERMISSIONS");
            });

            if (hasPermission) {
                return true;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}