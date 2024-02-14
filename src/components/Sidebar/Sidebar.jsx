import React,{useState} from "react";
import SidebarMain from "./SidebarMain/SidebarMain";
import SidebarSub from "./SidebarSub/SidebarSub";
import { defaultHeaderHeight } from "src/settings/config";
import menuArray from "src/settings/menu";

export default function Sidebar() {
  const [mainItems, setMainItems] = useState(menuArray);
  const [selectedMainItem, setSelectedMainItem] = useState(null);
 

  const handleItemsClick = (item) => {
    setSelectedMainItem(item);
  };

  

  return (
    <div
      className="fixed inset-y-0 z-10 flex lg:!mt-0 flex-shrink-0 max-h-screen overflow-hidden transition-all transform bg-white border-l shadow-lg lg:z-auto lg:static lg:shadow-none"
      style={{ marginTop: `${defaultHeaderHeight + 1}px` }}
    >
      <SidebarMain
        mainItems={mainItems}
        selectedMainItem={selectedMainItem}
        handleItemsClick={handleItemsClick}
      />
      <SidebarSub />
    </div>
  );
}
