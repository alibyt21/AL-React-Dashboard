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
        <div key={index} onClick={() => handleItemClick(subItem)}>
          <div className="items-center p-2 rounded-md hover:bg-gray-100">
            {subItem.label}
          </div>
          <div>
            {subItem.subs && subItem.subs.length > 0 && (
              <div className="mt-[3px]">
                {subItem.subs.map((sub, idx) => (
                  <p
                    className="items-center p-2 rounded-md hover:bg-gray-100 "
                    key={idx}
                    onClick={() => handleItemClick(sub)}
                  >
                    {sub.label}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* <SidebarHeader /> */}
      <SidebarLinks />
      {/* <SidebarFooter /> */}
    </aside>
  );
}
