import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import { useReducer, useState } from 'react'
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
    }
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

export default function BasicTable() {

    const [data, setData] = useState(() => [...defaultData])
    const rerender = useReducer(() => ({}), {})[1]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <>
            <div className="bg-white shadow-al rounded-xl p-6">
                <div className='table w-full'>
                    <div className='thead w-full bg-blue-50 rounded-xl'>
                        {table.getHeaderGroups().map(headerGroup => (
                            <div key={headerGroup.id} className='tr w-full flex'>
                                {headerGroup.headers.map(header => (
                                    <div key={header.id} className='th w-full p-3'>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className='tbody'>
                        {table.getRowModel().rows.map(row => (
                            <div key={row.id} className='tr w-full flex border-b border-solid border-gray-200'>
                                {row.getVisibleCells().map(cell => (
                                    <div key={cell.id} className='td w-full p-3'>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className='tfoot'>
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
                    </div>
                </div>
            </div>
            <button onClick={() => rerender()} className="border p-2">
                Rerender
            </button>
        </>
    )
}
