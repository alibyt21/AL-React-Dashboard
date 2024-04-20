import React from 'react'
import GistSentence from './GistSentence'

export default function AdvancedFilterPatternSingle({ data, dispatch, index, handleClick }) {
    return (
        <>
            <div
                className='w-full flex flex-col cursor-pointer gap-1 border border-gray-100 border-solid rounded-xl p-2'
                onClick={
                    () => {
                        handleClick(true);
                        dispatch({
                            type: "UPDATEDATA",
                            data,
                        })
                    }
                }
            >
                <span className='text-sm'>
                    الگوی شماره {index}
                </span>
                <div className='p-1 rounded-lg text-sm bg-gray-100 px-2' style={{ direction: "ltr" }}>
                    <GistSentence data={data} dispatch={dispatch} isCompact={true} />
                </div>
            </div>
        </>
    )
}
