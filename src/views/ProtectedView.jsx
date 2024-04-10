import { Outlet, Navigate } from "react-router-dom";
import DashboardLayout from "src/Layout/DashboardLayout";

export default function ProtectedView() {
    const accessToken = localStorage.getItem("access_token");

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
