import { useContext } from "react";
import dashboardContext from "src/context/dashboardContext";
import { defaultSidebarMainWidth } from "src/settings/config";
import SidebarMainSingle from "./SidebarMainSingle";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import SidebarLinks from "./SidebarLinks";

export default function SidebarMain() {
  const { sidebarState } = useContext(dashboardContext);

  return (
    <aside
      className="flex flex-col transition-all overflow-hidden text-white bg-primary-color max-h-screen py-1"
      style={
        sidebarState !== 0
          ? { width: `${defaultSidebarMainWidth}px` }
          : { width: `0px` }
      }
    >
      <SidebarHeader />
      <SidebarLinks />
      <SidebarFooter />
    </aside>
  );
}
