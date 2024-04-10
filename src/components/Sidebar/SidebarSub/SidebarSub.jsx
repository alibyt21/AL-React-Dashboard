import { useContext } from "react";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import SidebarLinks from "./SidebarLinks";
import sidebarContext from "src/context/sidebarContext";
import { defaultSidebarSubWidth } from "src/settings/config";

export default function SidebarSub() {
  const { sidebarState } = useContext(sidebarContext);

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
