import { useContext } from "react";
import SubItem from "./SubItem";
import dashboardContext from "src/context/dashboardContext";

export default function SidebarLinks() {
  const { selectedMainMenu } = useContext(dashboardContext);

  return (
    <nav className="flex flex-col gap-1 p-2 flex-1 overflow-hidden hover:overflow-y-auto font-normal">
      {selectedMainMenu.subs.map((item, index) => (
        item.inMenu === true && <SubItem item={item} key={index} />
      ))}
    </nav>
  );
}
