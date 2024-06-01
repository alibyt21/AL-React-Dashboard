import React, { useEffect, useRef, useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";

export default function FilterBox({ title, value, children }) {
    const [isSelected, setIsSelected] = useState(false)
    const [filterBoxHeight, setFilterBoxHeight] = useState(false)
    const [filterBoxWidth, setFilterBoxWidth] = useState(false)
    const filterBox = useRef(null)

    useEffect(() => {
        setFilterBoxHeight(filterBox.current.scrollHeight + 10);
        filterBox.current.offsetWidth > 250 ? setFilterBoxWidth(filterBox.current.offsetWidth) : setFilterBoxWidth(250);
    }, [])

    return (

        <div
            className='relative select-none'
            style={{
                width: `${filterBoxWidth}px`,
                height: `50px`
            }}
        >
            <div
                className={`${isSelected ? "shadow-lg border-white" : "border-gray-200"} flex flex-col gap-4 border border-solid z-[1] bg-white dark:bg-black whitespace-nowrap absolute transition-all ease-in-out duration-300 p-3 rounded-xl`}
                onClick={() => { setIsSelected(!isSelected) }}
                ref={filterBox}
                style={{
                    height: isSelected ? `${filterBoxHeight}px` : "50px",
                    width: `${filterBoxWidth}px`
                }}
            >
                <div className='flex items-center justify-between gap-2 select-none'>
                    <div className='flex items-center gap-2'>
                        <span className='text-gray-500 text-sm'>
                            {title ? title + " : " : ""}
                        </span>
                        <span>
                            {value}
                        </span>
                    </div>
                    <span>
                        <FaAngleDown className={`${isSelected ? "rotate-180" : "rotate-0"} transition-all ease-in-out duration-300`} size={16} />
                    </span>
                </div>
                <div className={`${isSelected ? "visible opacity-100" : "invisible opacity-0"} flex flex-col gap-4 transition-all ease-in-out duration-200`}>
                    {children}
                </div>
            </div>
        </div>
    )
}
