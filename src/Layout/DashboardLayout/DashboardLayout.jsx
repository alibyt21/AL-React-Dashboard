import Loading from "src/components/Loading";
import SidebarBackdrop from "src/components/SidebarBackdrop";
import SettingPanel from "src/components/SettingPanel";
import Main from "src/components/Main";
import Sidebar from "src/components/Sidebar";
import { useEffect, useRef, useState } from "react";
import sidebarContext from "src/context/sidebarContext";
import {
  defaultDirection,
  defaultLanguage,
  defaultSidebarState,
  moveBoth,
} from "src/settings/config";
export default function Dashboard({ children }) {
  // set direction language and theme
  useEffect(() => {
    document.documentElement.setAttribute("dir", defaultDirection);
    document.documentElement.setAttribute("lang", defaultLanguage);
  }, []);

  const [sidebarState, setSidebarState] = useState(defaultSidebarState); // 0 == both is close , 1 == main is open, 2 == both is open;
  const [prevSidebarState, setPrevSidebarState] = useState(sidebarState);

  const handleSidebar = (newSidebarState = false) => {
    let newValue;
    if (newSidebarState) {
      newValue = newSidebarState;
    } else {
      if (moveBoth) {
        // {0->2}, {2->0}
        switch (sidebarState) {
          case 0:
          case 1:
            newValue = 2;
            break;
          case 2:
            newValue = 0;
            break;
        }
      } else {
        // {0->1} , {1->2 , 1->0} , {2->1}
        switch (sidebarState) {
          case 0:
          case 2:
            newValue = 1;
            break;
          case 1:
            prevSidebarState == 0 || prevSidebarState == 1
              ? (newValue = 2)
              : (newValue = 0);
            break;
        }
      }
    }
    setPrevSidebarState(sidebarState);
    setSidebarState(newValue);
  };

  return (
    <sidebarContext.Provider value={{ sidebarState, handleSidebar }}>
      <div className="flex h-screen overflow-y-hidden bg-white">
        {/* <Loading /> */}
        {/* <SidebarBackdrop /> */}
        <Sidebar />
        <Main>{children}</Main>
        <SettingPanel />
      </div>
    </sidebarContext.Provider>
  );
}
