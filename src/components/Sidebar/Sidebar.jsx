import React, { useState } from "react";
import SidebarMain from "./SidebarMain/SidebarMain";
import SidebarSub from "./SidebarSub/SidebarSub";
import { defaultHeaderHeight } from "src/settings/config";
import menuArray from "src/settings/menu";

export default function Sidebar() {
  const [selectedMainItem, setSelectedMainItem] = useState(menuArray[0]);

  return (
    <div
      className="fixed inset-y-0 z-10 flex lg:!mt-0 flex-shrink-0 max-h-screen overflow-hidden transition-all transform bg-white dark:bg-black border-l border-r shadow-lg lg:z-auto lg:static lg:shadow-none"
      style={{ marginTop: `${defaultHeaderHeight}px` }}
    >
      <SidebarMain handleItemsClick={setSelectedMainItem} />
      <SidebarSub items={selectedMainItem.subs} />
    </div>
  );
}
