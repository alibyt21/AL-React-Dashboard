import { Outlet, Navigate } from "react-router-dom";
import DashboardLayout from "src/Layout/DashboardLayout";

export default function PublicView() {
    return (
        <DashboardLayout>
            <Outlet />
        </DashboardLayout>
    )

}
