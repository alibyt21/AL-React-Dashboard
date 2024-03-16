import { useEffect, useRef, useState } from "react";
import { PiX } from "react-icons/pi";

export default function ModalBottom({ children, title, isActive, handleIsActive, hasClose }) {
    // ref
    const optionMenu = useRef(null);

    // this state hold the initial height of optionMenu to prevent collapsing menu when user use searchInput
    const [optionMenuHeight, setOptionMenuHeight] = useState(false);

    useEffect(() => {
        setOptionMenuHeight(optionMenu.current.scrollHeight);
    }, [])

    return (
        <>
            <div
                className={`${isActive ? "visible opacity-100" : "invisible opacity-0"} transition-all ease-in-out duration-200 fixed z-20 bottom-0 right-0 left-0 h-full w-full bg-[#00000046]`}
                onClick={() => handleIsActive()}
            ></div>
            <div
                className={`${isActive ? "bottom-0" : "-bottom-[1000px]"} transition-all ease-in-out duration-300 fixed  overflow-y-auto overflow-x-hidden z-30 right-0 left-0 max-w-5xl w-full m-auto space-y-7 bg-white rounded-t-xl`}
                onClick={e => e.stopPropagation()}
                style={{ height: `${optionMenuHeight}px`, maxHeight: "calc(100% - 56px)" }}
                ref={optionMenu}
            >
                <div className="overflow-auto rounded-t-xl h-full">
                    <div className="sticky top-0 block w-full bg-white">
                        <div className="flex justify-between items-center h-16 px-6">
                            <h3 className="font-semibold">{title}</h3>
                            {hasClose
                                ?
                                <div
                                    onClick={() => handleIsActive()}
                                    className="cursor-pointer hover:bg-gray-100 -mx-3 rounded-xl p-2 transition-all ease-in-out duration-300"
                                >
                                    <PiX />

                                </div>
                                :
                                null
                            }
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}