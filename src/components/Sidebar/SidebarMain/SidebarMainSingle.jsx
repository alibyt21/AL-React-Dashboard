import React from 'react'
import { Link } from 'react-router-dom';

export default function SidebarMainSingle({ item, handleItemsClick }) {
    return (
        <>
            {
                item.subs
                    ?
                    <div
                        className='mx-1 flex items-center gap-1 p-2 cursor-pointer select-none rounded-md hover:bg-gray-100'
                        onClick={() => handleItemsClick(item)}
                    >
                        <span>
                            {item.icon}
                        </span>
                        <span>
                            {item.label}
                        </span>
                    </div>
                    :
                    <Link
                        to={item.to}
                        className='mx-1 flex items-center gap-1 p-2 cursor-pointer select-none rounded-md hover:bg-gray-100'
                    >
                        <span>
                            {item.icon}
                        </span>
                        <span>
                            {item.label}
                        </span>
                    </Link>
            }
        </>
    )
}
