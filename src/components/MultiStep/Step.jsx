import React from 'react'

export default function Step({ title, subTitle }) {
  return (
    <>
      <span className='select-none mt-1 font-medium absolute whitespace-nowrap -bottom-7'>
        {title}
      </span>
      <span className='select-none absolute whitespace-nowrap -bottom-12 text-sm'>
        {subTitle}
      </span>
    </>
  )
}
