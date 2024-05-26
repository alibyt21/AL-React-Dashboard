import { useContext } from "react";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import SidebarLinks from "./SidebarLinks";
import dashboardContext from "src/context/dashboardContext";
import { defaultSidebarSubWidth } from "src/settings/config";

export default function SidebarSub() {
  const { sidebarState } = useContext(dashboardContext);

  return (
    <aside
      className="flex flex-col overflow-hidden max-h-screen transition-all"
      style={
        sidebarState === 2
          ? { width: `${defaultSidebarSubWidth}px` }
          : { width: `0px` }
      }
    >
      <SidebarHeader />
      <SidebarLinks />
      {/* <SidebarFooter /> */}
    </aside>
  );
}
