import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Accordion from "src/components/Accordion";
import PermissionBasedComponent from "src/components/PermissionBasedComponent/PermissionBasedComponent";
import dashboardContext from "src/context/dashboardContext";

export default function SubItem({ item }) {
  const [isCurrentPage, setIsCurrentPage] = useState(false)
  const location = useLocation();
  const { selectedMainMenu } = useContext(dashboardContext)


  useEffect(() => {
    setIsCurrentPage(window.location.href == window.origin + item.path)
  }, [location, selectedMainMenu]);

  return (
    <PermissionBasedComponent permission={item.permission}>
      <ul className={` ${isCurrentPage ? "bg-gray-100 dark:bg-gray-700" : ""} rounded-md`} >
        <li>
          {
            !item.subs || (item.subs && !item.subs.some(single => single.inMenu))
              ?
              (
                <Link to={item.path}>
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
              :
              (
                <Accordion title={item.label} icon={item.icon} isOpen={true} hasVerticalLine={true} key={Math.floor(Math.random() * 1000)}>
                  <div className="flex flex-col gap-1">
                    {item.subs.map((sub, idx) => {
                      if (sub.inMenu !== false) {
                        return (<SubItem item={sub} key={idx} />)
                      }
                    }
                    )}
                  </div>
                </Accordion>
              )
          }
        </li>
      </ul>
    </PermissionBasedComponent>

  );
}
