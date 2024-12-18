import { PiTextColumns } from "react-icons/pi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { LuArrowDownAZ } from "react-icons/lu";
import { LuArrowDownZA } from "react-icons/lu";
import { LuArrowDownUp } from "react-icons/lu";
import { PiRows } from "react-icons/pi";
import { PiFunnelSimple } from "react-icons/pi";
import { AiOutlineFontSize } from "react-icons/ai";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import { rankItem } from "@tanstack/match-sorter-utils";

import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import Spinner from "../Spinner";

const columnHelper = createColumnHelper();

export default function Table({
  data,
  columns,
  globalBackendSearch = null,
  isSelective = false,
  setSelected = () => { },
  isLiveGlobalSearch = false,
  setGlobalBackendSearch = () => { },
  isBackendGlobalSearch = false,
}) {


  const [columnHidingIsActive, setColumnHidingIsActive] = useState(false);
  const [fontSizeIsActive, setFontSizeIsActive] = useState(false)
  const [tableFontSize, setTableFontSize] = useState(12);
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState("");
  const [tempGlobalFilter, setTempGlobalFilter] = useState(globalBackendSearch)
  const [padding, setPadding] = useState(4);
  const [isFiltersActive, setIsFiltersActive] = useState(false);

  // this means data hasn't been loaded yet
  if (!Array.isArray(data)) {
    data = false;
  }

  // init columns
  let tableColumns = [];
  if (!columns) {
    data.map((object) => {
      Object.keys(object).forEach((key) => {
        if (!tableColumns.includes(key)) {
          tableColumns.push(key);
        }
      });
    });
    tableColumns = tableColumns.map((single) => {
      return columnHelper.accessor(single, {
        header: () => single,
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      });
    });
  } else {
    tableColumns = columns.map((column) => {
      return columnHelper.accessor(column.id, column);
    });
  }


  if (isSelective) {
    tableColumns.unshift({
      id: 'select',
      header: ({ table }) => (
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      ),
      enableSorting: false, // disable sorting for this column
      cell: ({ row }) => (
        <div className="px-1 text-center">
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        </div>
      ),
    },)
  }


  const fuzzyFilter = (row, columnId, value, addMeta) => {
    // Rank the item
    const itemRank = rankItem(row.getValue(columnId), value);

    // Store the itemRank info
    addMeta({
      itemRank,
    });

    // Return if the item should be filtered in/out
    return itemRank.passed;
  };

  const rerender = useReducer(() => ({}), {})[1];


  const handlePadding = () => {
    if (padding >= 6) {
      setPadding(2);
    } else {
      setPadding((padding) => padding + 2);
    }
  };

  const table = useReactTable({
    data: data,
    columns: tableColumns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      globalFilter,
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(), //provide a sorting row model
  })

  useEffect(() => {
    setSelected(table.getSelectedRowModel())
  }, [rowSelection])


  return (
    <>
      <div className="relative">
        <div
          className="w-full h-full fixed top-0 left-0 opacity-0 z-[2]"
          onClick={() => {
            setColumnHidingIsActive(false);
          }}
          style={{
            visibility: columnHidingIsActive ? "visible" : "hidden",
          }}
        ></div>
        <div
          className={`${columnHidingIsActive
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 translate-y-6"
            } transition-all ease-in-out duration-200 z-[10] absolute lg:left-[140px] left-[58px] top-[50px] inline-flex flex-col rounded-xl bg-white dark:bg-black shadow-al select-none`}
        >
          <div className="border-b border-gray-200 hover:bg-gray-100 p-2 px-5">
            <label className="cursor-pointer">
              <input
                className="cursor-pointer"
                {...{
                  type: "checkbox",
                  checked: table.getIsAllColumnsVisible(),
                  onChange: table.getToggleAllColumnsVisibilityHandler(),
                }}
              />{" "}
              همه
            </label>
          </div>
          {table.getAllLeafColumns().filter(el => {
            if (el.id != "select") {
              return el;
            }
          }).map((column) => {
            return (
              <div key={column.id} className="hover:bg-gray-100 p-2 px-5">
                <label className="cursor-pointer">
                  <input
                    className="cursor-pointer"
                    {...{
                      type: "checkbox",
                      checked: column.getIsVisible(),
                      onChange: column.getToggleVisibilityHandler(),
                    }}
                  />{" "}
                  {typeof column.columnDef.header == "function"
                    ? column.id
                    : column.columnDef.header}
                </label>
              </div>
            );


          })}
        </div>
        <div
          className="w-full h-full fixed top-0 left-0 opacity-0 z-[2]"
          onClick={() => {
            setFontSizeIsActive(false);
          }}
          style={{
            visibility: fontSizeIsActive ? "visible" : "hidden",
          }}
        ></div>
        <div
          className={`${fontSizeIsActive
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 translate-y-6"
            } transition-all ease-in-out duration-200 z-[10] absolute lg:left-[355px] left-[150px] top-[50px] inline-flex flex-col rounded-xl bg-white dark:bg-black shadow-al select-none`}
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-2 hover:bg-gray-100 p-2 px-5">
              <input
                type="radio"
                id="8"
                name="font-size"
                value="8"
                onChange={() => setTableFontSize(8)}
              />
              <label for="8">
                8
              </label>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-100 p-2 px-5">
              <input type="radio" id="10" name="font-size" value="10"
                onChange={() => setTableFontSize(10)}
              />
              <label for="10">
                10
              </label>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-100 p-2 px-5">
              <input type="radio" id="12" name="font-size" value="12"
                onChange={() => setTableFontSize(12)}
              />
              <label for="12">
                12
              </label>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-100 p-2 px-5">
              <input type="radio" id="14" name="font-size" value="14"
                onChange={() => setTableFontSize(14)}
              />
              <label for="14">
                14
              </label>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-100 p-2 px-5">
              <input type="radio" id="16" name="font-size" value="16"
                onChange={() => setTableFontSize(16)}
              />
              <label for="16">
                16
              </label>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-100 p-2 px-5">
              <input type="radio" id="18" name="font-size" value="18"
                onChange={() => setTableFontSize(18)}
              />
              <label for="18">
                18
              </label>
            </div>
          </div>

        </div>
        <div className="select-none w-full flex flex-wrap gap-2 items-center justify-between bg-white dark:bg-black shadow-al rounded-xl my-2 p-2 px-3">

          {
            isBackendGlobalSearch
              ?
              (
                isLiveGlobalSearch
                  ?
                  <div className="flex items-center border border-solid border-gray-200 p-1 rounded-lg w-[150px] md:w-[200px] lg:w-[300px] bg-[#f5f8fa] dark:bg-black">
                    <HiMagnifyingGlass className="text-gray-300" size={20} />
                    <input
                      type="text"
                      placeholder="جستجو ..."
                      className="focus:!border-none focus:!outline-none px-2 w-[140px] md:w-[190px] lg:w-[290px]"
                      value={globalBackendSearch || ""}
                      onChange={(e) => setGlobalBackendSearch(e.target.value)}
                    />
                  </div>
                  :
                  <div className="flex gap-2 ">
                    <div className="flex items-center border border-solid border-gray-200 p-1 rounded-lg w-[150px] md:w-[200px] lg:w-[300px] bg-[#f5f8fa] dark:bg-black">
                      <HiMagnifyingGlass className="text-gray-300" size={20} />
                      <input
                        type="text"
                        placeholder="جستجو خود را وارد کنید ..."
                        className="focus:!border-none focus:!outline-none px-2 w-[140px] md:w-[190px] lg:w-[290px]"
                        value={tempGlobalFilter || ""}
                        onChange={(e) => setTempGlobalFilter(e.target.value)}
                      />
                    </div>
                    <button
                      className="border border-solid border-gray-200 px-3 rounded-lg"
                      onClick={() => { setGlobalBackendSearch(tempGlobalFilter) }}
                    >
                      جستجو
                    </button>
                  </div>
              )
              :
              <div className="flex items-center border border-solid border-gray-200 p-1 rounded-lg w-[150px] md:w-[200px] lg:w-[300px] bg-[#f5f8fa] dark:bg-black">
                <HiMagnifyingGlass className="text-gray-300" size={20} />
                <input
                  type="text"
                  placeholder="جستجو ..."
                  className="focus:!border-none focus:!outline-none px-2 w-[140px] md:w-[190px] lg:w-[290px]"
                  value={globalFilter || ""}
                  onChange={(e) => setGlobalFilter(e.target.value)}
                />
              </div>
          }
          <div className="flex gap-2 justify-center items-center">
            <div
              onClick={() => {
                setFontSizeIsActive(!fontSizeIsActive);
              }}
              className="flex gap-1 border border-gray-100 border-solid cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-100 p-2 rounded-xl"
            >
              <AiOutlineFontSize size={20} />
              <span className="hidden lg:flex text-sm">اندازه فونت</span>
            </div>
            <div
              onClick={() => {
                setIsFiltersActive(!isFiltersActive);
              }}
              className="flex gap-1 border border-gray-100 border-solid cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-100 p-2 rounded-xl"
            >
              <PiFunnelSimple size={20} />
              <span className="hidden lg:flex text-sm">فیلتر رکورد</span>
            </div>
            <div
              onClick={() => {
                setColumnHidingIsActive(!columnHidingIsActive);
              }}
              className="flex gap-1 border border-gray-100 border-solid cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-100 p-2 rounded-xl"
            >
              <PiTextColumns size={20} />
              <span className="hidden lg:flex text-sm">فیلتر ستون</span>
            </div>
            <div
              onClick={() => {
                handlePadding();
              }}
              className="flex gap-1 border border-gray-100 border-solid cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-100 p-2 rounded-xl"
            >
              <PiRows size={20} />
              <span className="hidden lg:flex text-sm">فاصله ردیف‌ها</span>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto rounded-xl">
          <table className="table w-full bg-white dark:bg-black shadow-al rounded-xl overflow-x-auto">
            <tbody
              className="tbody w-full bg-white dark:bg-black rounded-b-xl"
              style={{ fontSize: `${tableFontSize}px` }}
            >
              {table.getHeaderGroups().map((headerGroup) => (

                <tr
                  key={headerGroup.id}
                  className="tr border-b border-solid border-gray-300 w-full"
                >

                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className={`th text-center transition-all ease-in-out duration-200 p-${padding}`}
                      colSpan={header.colSpan}
                    >
                      {header.isPlaceholder ? null : (
                        <>


                          <div
                            className={
                              header.column.getCanSort()
                                ? "flex gap-1 whitespace-nowrap cursor-pointer select-none py-3"
                                : ""
                            }
                            onClick={header.column.getToggleSortingHandler()}
                            title={
                              header.column.getCanSort()
                                ? header.column.getNextSortingOrder() === "asc"
                                  ? "Sort ascending"
                                  : header.column.getNextSortingOrder() ===
                                    "desc"
                                    ? "Sort descending"
                                    : "Clear sort"
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
                            }[header.column.getIsSorted().toString()] || (
                                header.column.getCanSort()
                                &&
                                <LuArrowDownUp
                                  size={18}
                                  className="opacity-15 hover:opacity-40 transition-all ease-in-out duration-300"
                                />

                              )}
                          </div>

                          {header.column.getCanFilter() ? (
                            <div
                              className={`${isFiltersActive
                                ? "visible h-[40px] opacity-100"
                                : "invisible h-0 opacity-0"
                                } transition-all ease-in-out duration-300`}
                            >
                              <Filter column={header.column} table={table} />
                            </div>
                          ) : null}
                        </>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
              {table.getRowModel().rows.map((row) => (
                <>

                  <tr
                    key={row.id}
                    className="tr last:border-none border-b border-solid border-gray-100 hover:bg-blue-50 dark:hover:bg-gray-800"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className={`td transition-all ease-in-out duration-200 p-${padding}`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                </>
              ))}
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
          {!Array.isArray(data) ? (
            <div className="flex w-full bg-white dark:bg-black">
              <Spinner text="در حال بارگیری ..." />
            </div>
          ) : (
            !table.getRowModel().rows.length && (
              <div className="bg-white dark:bg-black flex justify-center p-4 text-sm">
                هیچ داده‌ای یافت نشد
              </div>
            )
          )}
        </div>
      </div >
      <div className="w-full bg-white dark:bg-black shadow-al rounded-xl flex justify-center md:justify-between p-1  my-2  px-5">

        <div className="hidden md:flex gap-2 items-center justify-center">
          {
            isSelective
            &&
            <>
              <IndeterminateCheckbox
                {...{
                  checked: table.getIsAllPageRowsSelected(),
                  indeterminate: table.getIsSomePageRowsSelected(),
                  onChange: table.getToggleAllPageRowsSelectedHandler(),
                }}
              />
              <div className="text-sm">
                تعداد موارد انتخابی: ‌
                {Object.keys(rowSelection).length} از{' '}
                {table.getFilteredRowModel().rows.length}
              </div>
              |
            </>
          }
          <div className="text-sm">
            تعداد کل موارد: ‌
            {table.getFilteredRowModel().rows.length}
          </div>
          {/* <td colSpan={20}>Page Rows ({table.getRowModel().rows.length})</td> */}

        </div>
        <div className="flex gap-1 items-center justify-center">
          <button
            className={`${table.getCanPreviousPage() ? "opacity-100" : "opacity-20"
              } cursor-pointer transition-all ease-in-out duration-300 w-[40px] py-2 rounded-xl hover:bg-gray-100`}
            onClick={() => table.firstPage()}
          >
            {"<<"}
          </button>
          <button
            className={`${table.getCanPreviousPage() ? "opacity-100" : "opacity-20"
              } cursor-pointer transition-all ease-in-out duration-300 w-[40px] py-2 rounded-xl hover:bg-gray-100`}
            onClick={() => table.previousPage()}
          >
            {"<"}
          </button>
          <div className="flex gap-2 items-center justify-center w-[110px]">
            <span className="flex items-center gap-1 text-sm">
              <div>صفحه</div>
              <span>
                {table.getState().pagination.pageIndex + 1} از{" "}
                {table.getPageCount().toLocaleString()}
              </span>
            </span>
          </div>
          <button
            className={`${table.getCanNextPage() ? "opacity-100" : "opacity-20"
              } cursor-pointer transition-all ease-in-out duration-300 w-[40px] py-2 rounded-xl hover:bg-gray-100`}
            onClick={() => table.nextPage()}
          >
            {">"}
          </button>
          <button
            className={`${table.getCanNextPage() ? "opacity-100" : "opacity-20"
              } cursor-pointer transition-all ease-in-out duration-300 w-[40px] py-2 rounded-xl hover:bg-gray-100`}
            onClick={() => table.lastPage()}
          >
            {">>"}
          </button>
        </div>
        <div className="hidden md:flex gap-2 items-center justify-center">
          <span className="flex items-center gap-1 text-sm">
            برو به صفحه:
            <input
              min={1}
              max={table.getPageCount().toLocaleString()}
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="rounded-lg text-base py-[2px] px-[6px] border border-solid border-gray-200 p-1 w-[40px] !bg-white dark:!bg-black"
            />
          </span>
          <span className="text-sm">تعداد رکورد در صفحه</span>
          <select
            className="bg-white dark:bg-black rounded-lg border border-solid border-gray-200"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>

      </div>
    </>
  );
}

function Filter({ column, table }) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  const sortedUniqueValues = useMemo(
    () =>
      typeof firstValue === "number"
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()]
  );

  return typeof firstValue === "number" ? (
    <div>
      <div className="flex gap-3">
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
          value={columnFilterValue?.[0] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old) => [value, old?.[1]])
          }
          placeholder={`حداقل ${column.getFacetedMinMaxValues()?.[0]
            ? `(${column.getFacetedMinMaxValues()?.[0]})`
            : ""
            }`}
          className="w-full border-b border-solid border-gray-200 focus:border-gray-400 py-2"
        />
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
          value={columnFilterValue?.[1] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old) => [old?.[0], value])
          }
          placeholder={`حداکثر ${column.getFacetedMinMaxValues()?.[1]
            ? `(${column.getFacetedMinMaxValues()?.[1]})`
            : ""
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
        value={columnFilterValue ?? ""}
        onChange={(value) => column.setFilterValue(value)}
        placeholder={`فیلتر با ...`}
        className="w-full border-b border-solid border-gray-200 focus:border-gray-400 py-2"
        list={column.id + "list"}
      />
      <div className="h-1" />
    </>
  );
}

function IndeterminateCheckbox({
  indeterminate,
  className = '',
  ...rest
}) {
  const ref = useRef()

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
  }, [ref, indeterminate])

  return (
    <input
      type="checkbox"
      ref={ref}
      className={className + ' cursor-pointer'}
      {...rest}
    />
  )
}

// A debounced input react component
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 0,
  ...props
}) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
