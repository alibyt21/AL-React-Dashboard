import React from 'react'

export default function PageHeader({ title, description, btnTitle, handleClick }) {
    return (
        <div className='flex items-center justify-between pb-4 border-b border-solid border-gray-200 mb-4'>
            <div className='flex-1 w-full flex flex-col gap-2'>
                <span className='font-light text-2xl'>{title}</span>
                <p className='text-sm font-light'>{description}</p>
            </div>
            <div>
                {
                    btnTitle
                    &&
                    <button
                        className='flex-1 w-full flex justify-end p-6 py-3 rounded-xl text-white bg-blue-500'
                        onClick={handleClick}
                    >
                        {btnTitle}
                    </button>
                }
            </div>
        </div>
    )
}
