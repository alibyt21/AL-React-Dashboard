import { PiTextColumns } from "react-icons/pi";
import { LuFilter } from "react-icons/lu";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { LuArrowDownAZ } from "react-icons/lu";
import { LuArrowDownZA } from "react-icons/lu";
import { LuArrowDownUp } from "react-icons/lu";

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
    getSortedRowModel
} from '@tanstack/react-table'
import { useReducer, useState } from 'react'
import Offcanvas from "src/components/Offcanvas";
const defaultData = [
    {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
    },
    {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80,
    },
    {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
    },
    {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
    },
    {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80,
    },
    {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
    },
    {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
    },
    {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80,
    },
    {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
    },
    {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
    },
    {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80,
    },
    {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
    },
    {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
    },
    {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80,
    },
    {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
    },
    {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
    },
    {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80,
    },
    {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
    },
    {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
    },
    {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80,
    },
    {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
    },
    {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
    },
    {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80,
    },
    {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
    },
    {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
    },
    {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80,
    },
    {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
    },
    {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
    },
    {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80,
    },
    {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
    },
    {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
    },
    {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80,
    },
    {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
    },
]

const columnHelper = createColumnHelper()

const columns = [
    columnHelper.accessor('firstName', {
        cell: info => info.getValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor(row => row.lastName, {
        id: 'lastName',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Last Name</span>,
        footer: info => info.column.id,
    }),
    columnHelper.accessor('age', {
        header: () => 'Age',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('visits', {
        header: () => <span>Visits</span>,
        footer: info => info.column.id,
    }),
    columnHelper.accessor('status', {
        header: 'Status',
        footer: info => info.column.id,
    }),
    columnHelper.accessor('progress', {
        header: 'Profile Progress',
        footer: info => info.column.id,
    }),
]

export default function Table() {
    const [offcanvasIsActive, setOffcanvasIsActive] = useState(false);
    const [columnHidingIsActive, setColumnHidingIsActive] = useState(false);

    const [data, setData] = useState(() => [...defaultData])
    const rerender = useReducer(() => ({}), {})[1]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(), //provide a sorting row model
    })
    console.log(table.getState().sorting) // access the sorting state from the table instance

    return (
        <>
            <Offcanvas isActive={offcanvasIsActive} setIsActive={setOffcanvasIsActive} title="جستجوی پیشرفته">

            </Offcanvas>
            <div className="relative">
                <div>
                    {

                        <div className={`${columnHidingIsActive ? "scale-100" : "scale-0"} transition-all ease-in-out duration-200 z-[10] absolute left-[52px] top-[45px] inline-flex flex-col rounded-xl bg-white shadow-al select-none`}>
                            <div className="border-b border-gray-200 hover:bg-gray-100 p-2 px-5">
                                <label className="cursor-pointer">
                                    <input
                                        className="cursor-pointer"
                                        {...{
                                            type: 'checkbox',
                                            checked: table.getIsAllColumnsVisible(),
                                            onChange: table.getToggleAllColumnsVisibilityHandler(),
                                        }}
                                    />{' '}
                                    Toggle All
                                </label>
                            </div>
                            {table.getAllLeafColumns().map(column => {
                                return (
                                    <div key={column.id} className="hover:bg-gray-100 p-2 px-5" >
                                        <label className="cursor-pointer">
                                            <input
                                                className="cursor-pointer"
                                                {...{
                                                    type: 'checkbox',
                                                    checked: column.getIsVisible(),
                                                    onChange: column.getToggleVisibilityHandler(),
                                                }}
                                            />{' '}
                                            {column.id}
                                        </label>
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div>
                <div className='w-full flex items-center justify-between bg-white shadow-al rounded-2xl my-2 p-2 px-3'>
                    <div className="flex items-center border border-solid border-gray-300 p-1 rounded-xl">
                        <HiMagnifyingGlass className="text-gray-300" size={20} />

                        <input type="text" placeholder="جستجو..." className="focus:!border-none focus:!outline-none px-2" />
                    </div>
                    <div className="flex gap-1 justify-center items-center">
                        <div
                            onClick={() => { setColumnHidingIsActive(!columnHidingIsActive) }}
                            className="cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-100 p-2 rounded-xl"
                        >
                            <PiTextColumns size={20} />
                        </div>
                        <div
                            className="cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-100 p-2 rounded-xl"
                            onClick={() => { setOffcanvasIsActive(true) }}
                        >
                            <LuFilter size={20} />
                        </div>
                    </div>

                </div>
                <div className='table w-full'>
                    <div className='thead w-full bg-blue-500 text-white rounded-t-2xl shadow-al'>
                        {table.getHeaderGroups().map(headerGroup => (
                            <div key={headerGroup.id} className='tr w-full flex'>
                                {headerGroup.headers.map(header => (
                                    <div key={header.id} className='th w-full p-3' colSpan={header.colSpan}>
                                        {header.isPlaceholder
                                            ? null
                                            : (<div
                                                className={
                                                    header.column.getCanSort()
                                                        ? 'flex gap-1 cursor-pointer select-none'
                                                        : ''
                                                }
                                                onClick={header.column.getToggleSortingHandler()}
                                                title={
                                                    header.column.getCanSort()
                                                        ? header.column.getNextSortingOrder() === 'asc'
                                                            ? 'Sort ascending'
                                                            : header.column.getNextSortingOrder() === 'desc'
                                                                ? 'Sort descending'
                                                                : 'Clear sort'
                                                        : undefined
                                                }
                                            >


                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                                {{
                                                    asc: <LuArrowDownAZ size={18} />,
                                                    desc: <LuArrowDownZA size={18} />,
                                                }[header.column.getIsSorted().toString()] || <LuArrowDownUp size={18} className="opacity-30" />}
                                            </div>)}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className='tbody bg-white shadow-al rounded-b-2xl'>
                        {table.getRowModel().rows.map(row => (
                            <div key={row.id} className='tr w-full flex last:border-none border-b border-solid border-gray-200 hover:bg-blue-50'>
                                {row.getVisibleCells().map(cell => (
                                    <div key={cell.id} className='td w-full p-3'>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    {/* <div className='tfoot'>
                        {table.getFooterGroups().map(footerGroup => (
                            <div className='tr w-full flex' key={footerGroup.id}>
                                {footerGroup.headers.map(header => (
                                    <div key={header.id} className='th w-full p-3'>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.footer,
                                                header.getContext()
                                            )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
            <div className='w-full flex justify-between bg-white p-1 rounded-xl my-2 shadow-al px-5'>
                <div className='flex gap-2 items-center justify-center'>
                    <span className="flex items-center gap-1 text-sm">
                        برو به صفحه:
                        <input
                            min={1}
                            max={table.getPageCount().toLocaleString()}
                            type="number"
                            defaultValue={table.getState().pagination.pageIndex + 1}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                table.setPageIndex(page)
                            }}
                            className='bg-white rounded border border-solid border-gray-200 p-1 w-[45px]'

                        />
                    </span>
                </div>
                <div className='flex gap-1 items-center justify-center'>
                    <button
                        className={`${table.getCanPreviousPage() ? "opacity-100" : "opacity-20"} cursor-pointer transition-all ease-in-out duration-300 w-[40px] py-2 rounded-xl hover:bg-gray-100`}
                        onClick={() => table.firstPage()}
                    >
                        {'<<'}
                    </button>
                    <button
                        className={`${table.getCanPreviousPage() ? "opacity-100" : "opacity-20"} cursor-pointer transition-all ease-in-out duration-300 w-[40px] py-2 rounded-xl hover:bg-gray-100`}
                        onClick={() => table.previousPage()}
                    >
                        {'<'}
                    </button>
                    <div className="flex gap-2 items-center justify-center w-[110px]">
                        <span className="flex items-center gap-1 text-sm">
                            <div>صفحه</div>
                            <span>
                                {table.getState().pagination.pageIndex + 1} از{' '}
                                {table.getPageCount().toLocaleString()}
                            </span>
                        </span>
                    </div>
                    <button
                        className={`${table.getCanNextPage() ? "opacity-100" : "opacity-20"} cursor-pointer transition-all ease-in-out duration-300 w-[40px] py-2 rounded-xl hover:bg-gray-100`}
                        onClick={() => table.nextPage()}
                    >
                        {'>'}
                    </button>
                    <button
                        className={`${table.getCanNextPage() ? "opacity-100" : "opacity-20"} cursor-pointer transition-all ease-in-out duration-300 w-[40px] py-2 rounded-xl hover:bg-gray-100`}
                        onClick={() => table.lastPage()}
                    >
                        {'>>'}
                    </button>

                </div>
                <div className="flex gap-2 items-center justify-center">
                    <select
                        className='bg-white rounded border border-solid border-gray-200'
                        value={table.getState().pagination.pageSize}
                        onChange={e => {
                            table.setPageSize(Number(e.target.value))
                        }}
                    >
                        {[10, 20, 30, 40, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>
                    <span className='text-sm'>رکورد در صفحه</span>
                </div>

            </div>
            <button onClick={() => rerender()} className="border p-2">
                Rerender
            </button>
        </>
    )
}
