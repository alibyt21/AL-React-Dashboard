import { useContext } from "react";
import userPermissionContext from "src/context/userPermissionContext";
import { Navigate } from "react-router-dom";

export default function PermissionBasedComponent({ permission, children, isFull = false }) {
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
                isFull
                    ?
                    userPermissions.length
                        ?
                        <Navigate to="/user/denied" />
                        :
                        <></>
                    :
                    <></>
            )}
        </>
    );
}