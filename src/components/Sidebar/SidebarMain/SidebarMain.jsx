import React, { useContext } from "react";
import sidebarContext from "src/context/sidebarContext";
import { defaultSidebarMainWidth } from "src/settings/config";
import SidebarMainSingle from "./SidebarMainSingle";
import menuArray from "src/settings/menu";

export default function SidebarMain({
  handleItemsClick,
}) {
  const { sidebarState } = useContext(sidebarContext);

  return (
    <aside
      className="flex flex-col transition-all overflow-hidden dark:text-white bg-blue-300 dark:bg-blue-800 max-h-screen p-1"
      style={
        sidebarState !== 0
          ? { width: `${defaultSidebarMainWidth}px` }
          : { width: `0px` }
      }
    >
      {menuArray.map((item, index) => (
        <SidebarMainSingle item={item} key={index} handleItemsClick={handleItemsClick} />
      ))}
    </aside>
  );
}
