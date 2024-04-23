import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Accordion from "src/components/Accordion";
import PermissionBasedComponent from "src/components/PermissionBasedComponent/PermissionBasedComponent";
import sidebarContext from "src/context/sidebarContext";

export default function SubItem({ item }) {
  const [isCurrentPage, setIsCurrentPage] = useState(false)
  const location = useLocation();
  const { selectedMainMenu } = useContext(sidebarContext)


  useEffect(() => {
    setIsCurrentPage(window.location.href == window.origin + item.to)
  }, [location, selectedMainMenu]);


  return (
    <PermissionBasedComponent permission={item.permission}>
      <ul className={` ${isCurrentPage ? "bg-gray-100 dark:bg-gray-700" : ""} rounded-md overflow-hidden`} >
        <li>
          {
            !item.subs &&
            (
              <Link to={item.to}>
                <div className="flex gap-1 w-full cursor-pointer select-none items-center p-2 rounded-md hover:bg-gray-100 hover:dark:bg-gray-800 text-sm">
                  <span>
                    {item.icon}
                  </span>
                  <span>
                    {item.label}
                  </span>
                </div>
              </Link>
            )
          }
          {
            item.subs && item.subs.length > 0 &&
            (
              <Accordion title={item.label} icon={item.icon}>
                <div className="flex flex-col gap-1">
                  {item.subs.map((sub, idx) => (
                    <SubItem item={sub} key={idx} />
                  ))}
                </div>
              </Accordion>
            )
          }
        </li>
      </ul>
    </PermissionBasedComponent>

  );
}
