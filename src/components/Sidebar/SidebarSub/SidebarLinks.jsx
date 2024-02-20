import { useContext } from "react";
import SubItem from "./SubItem";
import sidebarContext from "src/context/sidebarContext";

export default function SidebarLinks() {
  const { selectedMainMenu } = useContext(sidebarContext);

  return (
    <nav className="flex flex-col gap-1 p-2 flex-1 overflow-hidden hover:overflow-y-auto font-normal">
      {selectedMainMenu.subs.map((item, index) => (
        <SubItem item={item} key={index} />
      ))}
    </nav>
  );
}
