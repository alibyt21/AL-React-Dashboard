import React, { useContext } from "react";
import sidebarContext from "src/context/sidebarContext";
import { defaultSidebarMainWidth } from "src/settings/config";

export default function SidebarMain() {
  const { sidebarState } = useContext(sidebarContext);
  return (
    <aside
      className={
        "flex flex-col transition-all overflow-hidden dark:text-white dark:bg-blue-300 max-h-screen"
      }
      style={
        sidebarState != 0
          ? { width: `${defaultSidebarMainWidth}px` }
          : { width: `0px` }
      }
    >
      dashboard
    </aside>
  );
}
