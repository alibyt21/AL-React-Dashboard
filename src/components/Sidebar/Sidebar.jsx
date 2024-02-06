import React from "react";
import SidebarMain from "./SidebarMain/SidebarMain";
import SidebarSub from "./SidebarSub/SidebarSub";
import { defaultHeaderHeight } from "src/settings/config";

export default function Sidebar() {
  return (
    <div
      className="fixed inset-y-0 z-10 flex lg:!mt-0 flex-shrink-0 max-h-screen overflow-hidden transition-all transform bg-white border-l shadow-lg lg:z-auto lg:static lg:shadow-none"
      style={{ marginTop: `${defaultHeaderHeight + 1}px` }}
    >
      <SidebarMain />
      <SidebarSub />
    </div>
  );
}
