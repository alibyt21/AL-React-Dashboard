import React, { useContext } from "react";
import sidebarContext from "src/context/sidebarContext";
import { defaultSidebarMainWidth } from "src/settings/config";

export default function SidebarMain({
  mainItems,
  selectedMainItem,
  handleItemsClick,
}) {
 

  const { sidebarState } = useContext(sidebarContext);

  function isItemSelected(itemId) {
    return selectedMainItem && selectedMainItem.id === itemId;
  }
  
  return (
    <aside
      className={
        "flex flex-col transition-all overflow-hidden dark:text-white bg-blue-300 dark:bg-blue-800 max-h-screen"
      }
      style={
        sidebarState !== 0
          ? { width: `${defaultSidebarMainWidth}px` }
          : { width: `0px` }
      }
    >
      {mainItems.map((item, index) => (
        <div
          key={index}
          onClick={() => handleItemsClick(item)}
          className={`flex items-center p-2 ${
            isItemSelected(item.id) ? " rounded-md hover:bg-gray-100" : ""
          }`}
        >
          {item.label}
          {console.log("clicked")}
        </div>
      ))}
    </aside>
  );
}
