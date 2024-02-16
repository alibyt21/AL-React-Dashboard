import { useContext } from "react";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import SidebarLinks from "./SidebarLinks";
import sidebarContext from "src/context/sidebarContext";
import { defaultSidebarSubWidth } from "src/settings/config";

export default function SidebarSub({ items }) {
  const { sidebarState } = useContext(sidebarContext);

  const handleItemClick = (item) => {
    if (item.newWindow) {
      console.log("newWindow");
    } else {
     console.log("page");
    }
  };

  return (
    <aside
      className="flex flex-col overflow-hidden max-h-screen transition-all"
      style={
        sidebarState === 2
          ? { width: `${defaultSidebarSubWidth}px` }
          : { width: `0px` }
      }
    >
      {items.map((subItem, index) => (
        <div
          key={index}
          className="flex items-center p-2 rounded-md hover:bg-gray-100"
          onClick={() => handleItemClick(subItem)}
        >
          {subItem.label}
        </div>
      ))}
      {/* <SidebarHeader /> */}
      <SidebarLinks />
      {/* <SidebarFooter /> */}
    </aside>
  );
}


