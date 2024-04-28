import Loading from "src/components/Loading";
import SidebarBackdrop from "src/components/SidebarBackdrop";
import SettingPanel from "src/components/SettingPanel";
import Main from "src/components/Main";
import Sidebar from "src/components/Sidebar";
import { useEffect, useState } from "react";
import sidebarContext from "src/context/sidebarContext";
import {
  defaultLanguage,
  defaultSidebarState,
  moveBoth,
} from "src/settings/config";
import menuArray from "src/settings/menu";
export default function Dashboard({ children }) {
  // set language and theme
  useEffect(() => {
    document.documentElement.setAttribute("lang", defaultLanguage);
    // theme setting may be go there
  }, []);

  const [sidebarState, setSidebarState] = useState(window.innerWidth < 1024 ? 0 : defaultSidebarState); // 0 == both is close , 1 == main is open, 2 == both is open;
  const [prevSidebarState, setPrevSidebarState] = useState(sidebarState);
  const [selectedMainMenu, setSelectedMainMenu] = useState(menuArray[menuArray.findIndex(single => single.inMenu)]);

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
    <sidebarContext.Provider value={{ sidebarState, handleSidebar, selectedMainMenu, setSelectedMainMenu }}>
      <div className="flex h-screen overflow-y-hidden bg-white text-gray-700 dark:text-white">
        {/* <Loading /> */}
        <SidebarBackdrop state={sidebarState} />
        <Sidebar />
        <Main>{children}</Main>
        <SettingPanel />
      </div>
    </sidebarContext.Provider>
  );
}
