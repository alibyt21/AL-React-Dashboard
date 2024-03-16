import { PiTextColumns } from "react-icons/pi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { LuArrowDownAZ } from "react-icons/lu";
import { LuArrowDownZA } from "react-icons/lu";
import { LuArrowDownUp } from "react-icons/lu";
import { PiRows } from "react-icons/pi";
import { PiFunnelSimple } from "react-icons/pi";
import { PiListMagnifyingGlass } from "react-icons/pi";

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
    getSortedRowModel,
    getFilteredRowModel,
} from '@tanstack/react-table'

import {
    rankItem,
} from '@tanstack/match-sorter-utils';


import { useEffect, useMemo, useReducer, useState } from 'react'
import Offcanvas from "src/components/Offcanvas";
import BottomSheet from "../BottomSheet";
// import AdvancedSearch from "./AdvancedSearch";
import Spinner from "../Spinner";

const columnHelper = createColumnHelper()


export default function Table({ data, columns }) {
    const [advancedSearchActive, setAdvancedSearchActive] = useState(false);
    const [columnHidingIsActive, setColumnHidingIsActive] = useState(false);
    const [globalFilter, setGlobalFilter] = useState('')
    const [padding, setPadding] = useState(4);
    const [isFiltersActive, setIsFiltersActive] = useState(false)

    // init columns
    let tableColumns = []
    if (!columns) {
        data.map((object) => {
            Object.keys(object).forEach(key => {
                if (!tableColumns.includes(key)) {
                    tableColumns.push(key)
                }
            });
        })
        tableColumns = tableColumns.map((single) => {
            return columnHelper.accessor(single, {
                header: () => single,
                cell: info => info.getValue(),
                footer: info => info.column.id,
            })
        })
    } else {
        tableColumns = columns.map((column) => {
            return columnHelper.accessor(column.id, column)
        })
    }

    const fuzzyFilter = (row, columnId, value, addMeta) => {
        // Rank the item
        const itemRank = rankItem(row.getValue(columnId), value)

        // Store the itemRank info
        addMeta({
            itemRank,
        })

        // Return if the item should be filtered in/out
        return itemRank.passed
    }

    const rerender = useReducer(() => ({}), {})[1]

    const table = useReactTable({
        data: data,
        columns: tableColumns,
        filterFns: {
            fuzzy: fuzzyFilter,
        },
        state: {
            globalFilter,
        },
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: fuzzyFilter,
        getFilteredRowModel: getFilteredRowModel(),
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(), //provide a sorting row model
    })


    const handlePadding = () => {
        if (padding >= 6) {
            setPadding(2);
        } else {
            setPadding(padding => padding + 2)
        }
    }




    return (
        <>
            {/* <Offcanvas isActive={advancedSearchActive} setIsActive={setAdvancedSearchActive} title="جستجوی پیشرفته">
            </Offcanvas> */}

            {/* <BottomSheet title="جستجو و فیلتر پیشرفته" subTitle="با اعمال قوانین، نحوه نمایش را شخصی سازی کنید" hasClose={true} isActive={advancedSearchActive} handleIsActive={setAdvancedSearchActive}>
                <AdvancedSearch />
            </BottomSheet> */}
            <div className="relative">
                <div className={`${columnHidingIsActive ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-6"} transition-all ease-in-out duration-200 z-[10] absolute lg:left-[255px] left-[105px] top-[50px] inline-flex flex-col rounded-xl bg-white dark:bg-black shadow-al select-none`}>
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
                            همه
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
                                    {typeof (column.columnDef.header) == "function" ? column.id : column.columnDef.header}
                                </label>
                            </div>
                        )
                    })}
                </div>
                <div className='select-none w-full flex items-center justify-between bg-white dark:bg-black shadow-al rounded-xl my-2 p-2 px-3'>
                    <div className="flex items-center border border-solid border-gray-200 p-1 rounded-lg w-[150px] md:w-[200px] lg:w-[300px]">
                        <HiMagnifyingGlass className="text-gray-300" size={20} />

                        <input
                            type="text"
                            placeholder="جستجو..."
                            className="focus:!border-none focus:!outline-none px-2"
                            value={globalFilter || ''}
                            onChange={e => setGlobalFilter(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                        <div
                            onClick={() => { handlePadding() }}
                            className="flex gap-1 border border-gray-100 border-solid cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-100 p-2 rounded-xl"
                        >
                            <PiRows size={20} />
                            <span className="hidden lg:flex text-sm">
                                فاصله ردیف‌ها
                            </span>
                        </div>
                        <div
                            onClick={() => { setColumnHidingIsActive(!columnHidingIsActive) }}
                            className="flex gap-1 border border-gray-100 border-solid cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-100 p-2 rounded-xl"
                        >
                            <PiTextColumns size={20} />
                            <span className="hidden lg:flex text-sm">
                                فیلتر ستون
                            </span>
                        </div>
                        <div
                            onClick={() => { setIsFiltersActive(!isFiltersActive) }}
                            className="flex gap-1 border border-gray-100 border-solid cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-100 p-2 rounded-xl"
                        >
                            <PiFunnelSimple size={20} />
                            <span className="hidden lg:flex text-sm">
                                فیلتر رکود
                            </span>
                        </div>
                        <div
                            className="flex gap-1 border border-gray-100 border-solid cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-100 p-2 rounded-xl"
                            onClick={() => { setAdvancedSearchActive(true) }}
                        >
                            <PiListMagnifyingGlass size={20} />
                            <span className="hidden lg:flex text-sm">
                                جستجو پیشرفته
                            </span>
                        </div>

                    </div>

                </div>
                <div className="overflow-x-auto rounded-xl">
                    <table className='table w-full bg-white dark:bg-black shadow-al rounded-xl overflow-x-auto'>

                        <tbody className='tbody w-full bg-white dark:bg-black rounded-b-xl'>
                            {table.getHeaderGroups().map(headerGroup => (
                                <tr key={headerGroup.id} className='tr border-b border-solid border-gray-300 w-full'>
                                    {headerGroup.headers.map(header => (
                                        <th key={header.id} className={`th transition-all ease-in-out duration-200 p-${padding}`} colSpan={header.colSpan}>
                                            {header.isPlaceholder
                                                ? null
                                                : (
                                                    <>
                                                        <div
                                                            className={
                                                                header.column.getCanSort()
                                                                    ? 'flex gap-1 whitespace-nowrap cursor-pointer select-none py-3'
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
                                                            }[header.column.getIsSorted().toString()] || <LuArrowDownUp size={18} className="opacity-20" />}
                                                        </div>
                                                        {header.column.getCanFilter() ? (
                                                            <div className={`${isFiltersActive ? "visible h-[40px] opacity-100" : "invisible h-0 opacity-0"} transition-all ease-in-out duration-300`}>
                                                                <Filter column={header.column} table={table} />
                                                            </div>
                                                        ) : null}
                                                    </>
                                                )}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                            {
                                (
                                    table.getRowModel().rows.map(row => (
                                        <tr key={row.id} className='tr last:border-none border-b border-solid border-gray-100 hover:bg-blue-50 dark:hover:bg-gray-800'>
                                            {row.getVisibleCells().map(cell => (
                                                <td key={cell.id} className={`td transition-all ease-in-out duration-200 p-${padding}`}>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </td>
                                            ))}
                                        </tr>
                                    ))
                                )
                            }
                        </tbody>

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
                    </table>
                    {

                        !data.length
                            ?
                            <div className="flex w-full bg-white dark:bg-black">
                                <Spinner text="در حال بارگیری ..." />
                            </div>
                            :
                            !table.getRowModel().rows.length
                            &&
                            <div className="bg-white dark:bg-black flex justify-center p-4 text-sm">
                                هیچ داده‌ای یافت نشد
                            </div>
                    }
                </div>
            </div>
            <div className='w-full bg-white dark:bg-black shadow-al rounded-xl flex justify-center md:justify-between p-1  my-2  px-5'>
                <div className='hidden md:flex gap-2 items-center justify-center'>
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
                            className='rounded-lg border border-solid border-gray-200 p-1 w-[45px]'

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
                <div className="hidden md:flex gap-2 items-center justify-center">
                    <select
                        className='bg-white dark:bg-black rounded-lg border border-solid border-gray-200'
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
        </>
    )
}


function Filter({
    column,
    table,
}) {
    const firstValue = table
        .getPreFilteredRowModel()
        .flatRows[0]?.getValue(column.id)

    const columnFilterValue = column.getFilterValue()

    const sortedUniqueValues = useMemo(
        () =>
            typeof firstValue === 'number'
                ? []
                : Array.from(column.getFacetedUniqueValues().keys()).sort(),
        [column.getFacetedUniqueValues()]
    )

    return typeof firstValue === 'number' ? (
        <div>
            <div className="flex gap-3">
                <DebouncedInput
                    type="number"
                    min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
                    max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
                    value={(columnFilterValue)?.[0] ?? ''}
                    onChange={value =>
                        column.setFilterValue((old) => [value, old?.[1]])
                    }
                    placeholder={`حداقل ${column.getFacetedMinMaxValues()?.[0]
                        ? `(${column.getFacetedMinMaxValues()?.[0]})`
                        : ''
                        }`}
                    className="w-full border-b border-solid border-gray-200 focus:border-gray-400 py-2"
                />
                <DebouncedInput
                    type="number"
                    min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
                    max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
                    value={(columnFilterValue)?.[1] ?? ''}
                    onChange={value =>
                        column.setFilterValue((old) => [old?.[0], value])
                    }
                    placeholder={`حداکثر ${column.getFacetedMinMaxValues()?.[1]
                        ? `(${column.getFacetedMinMaxValues()?.[1]})`
                        : ''
                        }`}
                    className="w-full border-b border-solid border-gray-200 focus:border-gray-400 py-2"
                />
            </div>
            <div className="h-1" />
        </div>
    ) : (
        <>

            <DebouncedInput
                type="text"
                value={(columnFilterValue ?? '')}
                onChange={value => column.setFilterValue(value)}
                placeholder={`فیلتر با ...`}
                className="w-full border-b border-solid border-gray-200 focus:border-gray-400 py-2"
                list={column.id + 'list'}
            />
            <div className="h-1" />
        </>
    )
}


// A debounced input react component
function DebouncedInput({
    value: initialValue,
    onChange,
    debounce = 0,
    ...props
}) {
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value)
        }, debounce)

        return () => clearTimeout(timeout)
    }, [value])

    return (
        <input {...props} value={value} onChange={e => setValue(e.target.value)} />
    )
}