import { useContext } from "react";
import dashboardContext from "src/context/dashboardContext";

export default function ToggleSidebarButton() {
  const { sidebarState, handleSidebar } = useContext(dashboardContext);
  return (
    <div
      className="flex gap-1 cursor-pointer"
      onClick={() => {
        handleSidebar(false,true);
      }}
    >
      <svg
        className="main"
        style={{ width: "10px" }}
        fill={`${sidebarState != 0 ? "#000066" : "#cecece"}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 8 17"
      >
        <rect x="0.48" y="0.5" width="7" height="1" />
        <rect x="0.48" y="7.5" width="7" height="1" />
        <rect x="0.48" y="15.5" width="7" height="1" />
      </svg>
      <svg
        className="sub"
        fill={`${sidebarState == 2 ? "#000066" : "#cecece"}`}
        style={{ width: "20px" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 17"
      >
        <rect x="1.56" y="0.5" width="16" height="1" />
        <rect x="1.56" y="7.5" width="16" height="1" />
        <rect x="1.56" y="15.5" width="16" height="1" />
      </svg>
    </div>
  );
}
