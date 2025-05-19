import React, { useEffect, useState } from 'react'

export default function Modal({ isOpen, toggle = () => { }, children, width = 800, top = 0, left, right }) {

    return (
        <>
            <div
                className={`${isOpen ? "opacity-100 visible z-50" : "opacity-0 invisible z-0"} bg-[#00000055] overflow-auto transition-all duration-300 ease-in-out flex fixed top-0 right-0 left-0 bottom-0 h-screen w-full p-2`}
                onClick={() => toggle(!isOpen)}
            >
                <div
                    onClick={e => e.stopPropagation()}
                    className={`${isOpen ? "" : "translate-y-20"} ${(top && left) || (top && right) ? "absolute" : ""} bg-white dark:bg-black transition-all duration-300 ease-in-out m-auto w-full shadow-lg rounded`}
                    style={{
                        maxWidth: `${width}px`,
                        top: `${top}px`,
                        ...(left ? { left: `${left}px` } : {}),
                        ...(right ? { right: `${right}px` } : {}),
                    }}
                >
                    {children}
                </div>
            </div>
        </>
    )
}