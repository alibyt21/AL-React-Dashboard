import { useContext } from "react";
import userPermissionContext from "src/context/userPermissionContext";

export default function PermissionBasedComponent({ permission, children }) {
    let userPermissions = useContext(userPermissionContext)
    return (
        <>
            {userPermissions.find((obj) => {
                return obj === "SUPER_USER_PERMISSION";
            }) ? (
                children
            ) : userPermissions.find((obj) => {
                return obj === permission;
            }) ? (
                children
            ) : (
                <></>
            )}
        </>
    );
}