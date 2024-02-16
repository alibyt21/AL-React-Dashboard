import { useContext } from "react";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import SidebarLinks from "./SidebarLinks";
import sidebarContext from "src/context/sidebarContext";
import { defaultSidebarSubWidth } from "src/settings/config";

export default function SidebarSub({ mainItem, handleItemsClick }) {
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
      {mainItem.subs.map((subItem, index) => (
        <a
          key={index}
          className="flex items-center p-2 rounded-md hover:bg-gray-100"
          href="#"
        >
          {subItem.label}
        </a>
      ))}
      {/* <SidebarHeader /> */}
      <SidebarLinks />
      {/* <SidebarFooter /> */}
    </aside>
  );
}
