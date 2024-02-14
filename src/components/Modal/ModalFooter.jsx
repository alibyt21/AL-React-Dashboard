import React from 'react'

export default function ModalFooter({ children }) {
    return (
        <div className="flex flex-row items-center justify-between p-7 py-4 border-t border-gray-200 border-solid">
            {children}
        </div>
    )
}
