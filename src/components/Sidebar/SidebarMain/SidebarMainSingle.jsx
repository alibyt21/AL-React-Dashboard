import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import PermissionBasedComponent from 'src/components/PermissionBasedComponent';
import dashboardContext from "src/context/dashboardContext";
import { mainMenuHasPage } from 'src/settings/config';

export default function SidebarMainSingle({ item }) {
    const { sidebarState, handleSidebar, selectedMainMenu, setSelectedMainMenu } = useContext(dashboardContext);
    return (
        <PermissionBasedComponent permission={item.permission}>
            {
                item.subs && !mainMenuHasPage
                    ?
                    <div
                        className={`${item == selectedMainMenu ? "bg-[#cecece58]" : ""} transition-all ease-in-out duration-300 mx-1 flex flex-col items-center gap-1 p-[5px] cursor-pointer select-none rounded-md hover:bg-[#cecece32] text-sm`}
                        onClick={() => {
                            setSelectedMainMenu(item);
                            handleSidebar(2)
                        }}
                    >
                        <span>
                            {item.icon}
                        </span>
                        <span className='text-center'>
                            {item.label}
                        </span>
                    </div>
                    :
                    <Link
                        to={item.path}
                        className={`${item == selectedMainMenu ? "bg-[#cecece58]" : ""} transition-all ease-in-out duration-300 mx-1 flex flex-col items-center gap-1 p-[5px] cursor-pointer select-none rounded-md hover:bg-[#cecece58] text-sm`}
                        onClick={() => {
                            setSelectedMainMenu(item);
                            handleSidebar(2)
                        }}
                    >
                        <span>
                            {item.icon}
                        </span>
                        <span className='text-center'>
                            {item.label}
                        </span>
                    </Link>
            }
        </PermissionBasedComponent>
    )
}
