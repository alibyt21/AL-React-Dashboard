import React from 'react'
import PageHeader from 'src/components/PageHeader';
import { TbCircleCheck } from "react-icons/tb";
import { TbCircleLetterX } from "react-icons/tb";
import EntityTable from './EntityTable';

export default function EditEntity() {
    const InfoComponent = ({ title, value }) => {
        return (
            <div className='flex gap-2'>
                <div className='h-auto w-[2px] bg-gray-200 my-1'></div>
                <div className='flex flex-col gap-1'>
                    <span className='text-sm opacity-70'>{title}</span>
                    <span>{value}</span>
                </div>
            </div>
        )
    }
    return (
        <>
            <PageHeader title="جزئیات موجودیت" />
            <div className='flex flex-col gap-8 bg-white rounded-lg p-5'>
                <div className='border border-solid border-gray-200 rounded-lg p-5'>
                    <div className='bg-gray-100 rounded-lg grid grid-cols-2 lg:grid-cols-4 gap-5 p-3'>
                        <InfoComponent title="فعال است؟" value={<div className='flex gap-1 text-green-600'><TbCircleCheck />فعال است</div>} />
                        <InfoComponent title="اعتبارسنجی:" value={<div className='flex gap-1 text-red-600'><TbCircleLetterX />غیرفعال</div>} />
                        <InfoComponent title="فعال است؟" value="بله" />
                        <InfoComponent title="فعال است؟" value="بله" />
                        <InfoComponent title="فعال است؟" value="بله" />
                        <InfoComponent title="فعال است؟" value="بله" />
                        <InfoComponent title="فعال است؟" value="بله" />
                        <InfoComponent title="فعال است؟" value="بله" />
                    </div>
                </div>
                {/* Ahi component */}
                <div className='flex flex-col gap-2'>
                    <span>
                        انتخاب ساختار داده موجودیت
                    </span>
                    <EntityTable />
                </div>

            </div>
        </>
    )
}
