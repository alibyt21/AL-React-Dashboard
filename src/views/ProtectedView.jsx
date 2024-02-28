import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import DashboardLayout from "src/Layout/DashboardLayout";
import { get } from "src/services/HttpClient";

export default function ProtectedView() {
    const accessToken = localStorage.getItem("access_token");

    // useEffect(() => {
    //     checkAuth()
    // }, [])

    // async function checkAuth() {
    //     await get("1/auth")
    // }
    return (
        accessToken
            ?
            <DashboardLayout>
                <Outlet />
            </DashboardLayout>
            :
            <Navigate to="/user/login" />
    )

}
