import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import sidebarContext from "src/context/sidebarContext";

export default function SidebarMainSingle({ item }) {
    const { sidebarState, handleSidebar, selectedMainMenu, setSelectedMainMenu } = useContext(sidebarContext);
    return (
        <>
            {
                item.subs
                    ?
                    <div
                        className={`${item == selectedMainMenu && "bg-[#cecece58]"} transition-all ease-in-out duration-300 mx-1 flex flex-col items-center gap-1 p-[5px] cursor-pointer select-none rounded-md hover:bg-[#cecece32] text-sm`}
                        onClick={() => { setSelectedMainMenu(item); handleSidebar(2) }}
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
                        to={item.to}
                        className='transition-all ease-in-out duration-300 mx-1 flex flex-col items-center gap-1 p-[5px] cursor-pointer select-none rounded-md hover:bg-gray-100 text-sm'
                    >
                        <span>
                            {item.icon}
                        </span>
                        <span className='text-center'>
                            {item.label}
                        </span>
                    </Link>
            }
        </>
    )
}
