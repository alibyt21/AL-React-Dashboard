import { useEffect, useState } from 'react';
import Table from 'src/components/Table'
import { get } from 'src/services/HttpClient';
import { PiEyeDuotone } from "react-icons/pi";
import { PiTrashDuotone } from "react-icons/pi";
import { PiPencilDuotone } from "react-icons/pi";

const columns = [
    // {
    //     id: "id",
    //     cell: info => info.getValue(),
    //     footer: info => info.column.id,
    // },
    {
        id: "title",
        cell: info => info.getValue(),
        header: <span>نام موجودیت</span>,
        footer: info => info.column.id,
    },
    {
        id: "code",
        cell: info => info.getValue(),
        header: "نام مدل",
        footer: info => info.column.id,
    },
    {
        id: "is_active",
        cell: info => info.getValue() != null ? <div className='bg-green-50 p-2 py-1 rounded-lg inline-flex text-green-600'>فعال</div> : <div className='bg-red-50 p-2 py-1 rounded-lg inline-flex text-red-600'>غیرفعال</div>,
        header: () => <span>فعال</span>,
        footer: info => info.column.id,
    },
    {
        id: "id",
        cell: info => (
            <div className='flex gap-2'>
                <div className='cursor-pointer hover:bg-gray-100 hover:text-gray-600 transition-all ease-in-out duration-300 bg-gray-50 text-gray-400 p-2 rounded-lg'>
                    <PiEyeDuotone className='' />
                </div>
                <div className='cursor-pointer hover:bg-gray-100 hover:text-gray-600 transition-all ease-in-out duration-300 bg-gray-50 text-gray-400 p-2 rounded-lg'>
                    <PiPencilDuotone className='' />
                </div>
                <div className='cursor-pointer hover:bg-gray-100 hover:text-gray-600 transition-all ease-in-out duration-300 bg-gray-50 text-gray-400 p-2 rounded-lg'>
                    <PiTrashDuotone className='' />
                </div>

            </div>
        ),
        header: "عملیات",
        footer: info => info.column.id,
        enableColumnFilter: false
    },
];
export default function EntityTable() {
    const [data, setData] = useState([])

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const result = await get("http://localhost:8000/api/v1/test");
        if (result && result.data) {
            setData(result.data)
        }
    }

    return (
        <>
            <Table data={data} columns={columns} />
        </>
    )
}
