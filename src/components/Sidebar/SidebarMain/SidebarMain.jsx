import React, { useContext } from "react";
import sidebarContext from "src/context/sidebarContext";
import { defaultSidebarMainWidth } from "src/settings/config";

export default function SidebarMain({
  mainItems,
  selectedMainItem,
  handleItemsClick,
}) {
  const { sidebarState } = useContext(sidebarContext);

  // function isItemSelected() {
  //   if (selectedMainItem.id === mainItems.id) {
  //     return true;
  //   }
  // }

  // console.log("Is item selected:", isItemSelected());

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
        <div key={index} onClick={() => handleItemsClick(item)}>
          {item.label}
         { console.log("clicked")}
        </div>
      ))}
    </aside>
  );
}
