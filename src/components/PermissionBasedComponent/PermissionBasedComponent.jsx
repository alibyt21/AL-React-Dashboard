import { useContext } from "react";
import { Navigate } from "react-router-dom";
import userContext from "src/context/userContext";

export default function PermissionBasedComponent({ permission, children, isFull = false }) {
    let { user } = useContext(userContext)
    
    let userPermissions = user?.role?.permissions ? user?.role?.permissions : [];
    return (
        <>
            {userPermissions && userPermissions.find((obj) => {
                return obj === "SUPER_USER_PERMISSIONS" && permission !== "NOT_SUPER_USER_PERMISSIONS";
            }) ? (
                children
            ) : userPermissions && userPermissions.find((obj) => {
                return obj === permission || permission === undefined || (permission === "NOT_SUPER_USER_PERMISSIONS" && obj !== "SUPER_USER_PERMISSIONS");
            }) ? (
                children
            ) : (
                isFull
                    ?
                    userPermissions?.length
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