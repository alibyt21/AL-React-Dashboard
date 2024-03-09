import React, { useEffect, useState } from 'react'
import { CgClose } from "react-icons/cg";

export default function Offcanvas({ children, title, setIsActive, isActive = false }) {

    return (
        <>
            <div className={`${isActive ? "opacity-100 visible" : "opacity-0 invisible"} transition-all ease-in-out duration-500 delay-200 w-full h-screen bg-black bg-opacity-30 fixed right-0 left-0 top-0 bottom-0 z-50`}></div>
            <div
                className='p-5 left-0 transition-all ease-in-out duration-700 fixed inset-y-0 flex flex-col bg-white shadow-lg w-[400px] z-[51]'
                style={{
                    transform: `translateX(${isActive == true ? "0" : "-500"}px)`
                }}
            >
                <div className='flex justify-between items-center'>
                    <span>{title}</span>
                    <CgClose className='cursor-pointer' onClick={() => { setIsActive(false) }} />
                </div>
                <div className='w-full h-[1px] bg-gray-100 mt-5'></div>
                <div className='py-5'>
                    {children}
                </div>
            </div>
        </>
    )
}
