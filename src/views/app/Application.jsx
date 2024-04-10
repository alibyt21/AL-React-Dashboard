import { Outlet } from "react-router-dom";
import DashboardLayout from "src/Layout/DashboardLayout";

export default function Application() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  )

}
