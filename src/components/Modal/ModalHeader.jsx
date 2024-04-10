import React from 'react'

export default function ModalHeader({ children, toggle }) {
    return (
        <div className="flex justify-between items-center p-7 py-4 border-b border-gray-200 border-solid">
            <div>{children}</div>

            {
                toggle
                    ?
                    <div
                        className="text-black cursor-pointer w-6 h-6"
                        onClick={toggle}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </div>
                    :
                    null
            }

        </div>
    )
}
