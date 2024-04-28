import React from 'react'
import SidebarMainSingle from './SidebarMainSingle'
import menuArray from "src/settings/menu";

export default function SidebarLinks() {

    return (
        <nav className="flex justify-center flex-col gap-3 p-1 flex-1 overflow-hidden hover:overflow-y-auto">
            {menuArray.map((item, index) => (
                item.inMenu === true && <SidebarMainSingle item={item} key={index} />
            ))}
        </nav>
    )
}
