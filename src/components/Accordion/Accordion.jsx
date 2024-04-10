import { useEffect, useRef, useState } from "react";
import useToggleActive from "src/utils/useToggleActive";
import { HiChevronDown } from "react-icons/hi";

export default function Accordion({ title, children, isOpen, icon }) {

    const { isActive, handleToggle } = useToggleActive(isOpen);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef();

    useEffect(() => {
        setContentHeight(contentRef.current.offsetHeight);
    }, [isActive, contentHeight])

    return (
        <div
            className="select-none w-full cursor-pointer overflow-hidden"
        >
            <div
                onClick={handleToggle}
                className="flex justify-between items-center p-2 hover:bg-gray-100 rounded-md text-sm"
            >
                <div className="flex items-center gap-1">
                    {icon}
                    <span>{title}</span>
                </div>
                <HiChevronDown className={`transition-all ease-in-out duration-300 ${isActive ? "rotate-180" : ""}`} />
            </div>
            <div
                className="transition-all ease-in-out duration-300"
                style={{ maxHeight: `${isActive ? `${contentHeight ? contentHeight : 9999999}px` : "0px"}` }}
            >
                <div
                    className={`${isActive ? "visible opacity-100" : "invisible opacity-0"} py-1 transition-all duration-200 select-none cursor-default text-gray-700 font-light`}
                    ref={contentRef}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}