import React from 'react'

export default function Divider({ width = 100, space = 20, height = 2 }) {
    return (
        <div
            className={`m-auto rounded-xl my-2 bg-gray-200`}
            style={{ margin: `${space}px auto`, width: `${width}%`, height: `${height}px` }}
        ></div>
    )
}
