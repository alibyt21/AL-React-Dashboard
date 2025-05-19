import { PiTextColumns } from "react-icons/pi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { LuArrowDownAZ } from "react-icons/lu";
import { LuArrowDownZA } from "react-icons/lu";
import { LuArrowDownUp } from "react-icons/lu";
import { PiRows } from "react-icons/pi";
import { PiFunnelSimple } from "react-icons/pi";
import { AiOutlineFontSize } from "react-icons/ai";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { mkConfig, generateCsv, download } from 'export-to-csv'


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

import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
import Spinner from "../Spinner";
import PermissionBasedComponent from "../PermissionBasedComponent";
import HasPermission from "../PermissionBasedComponent/HasPermission";
import { get } from "src/services/HttpClient";

var moment = require("jalali-moment");

const columnHelper = createColumnHelper();

export default function Table({
  data,
  columns,
  requestPath = false,
  // for getting requestData outer of table component
  setRequestData = () => { },
  isSelective = false,
  setSelected = () => { },
  isLiveGlobalSearch = false,
  CSVExportPermission = false,
  tableName = ""
}) {

  const [columnHidingIsActive, setColumnHidingIsActive] = useState(false);
  const [fontSizeIsActive, setFontSizeIsActive] = useState(false)
  const [tableFontSize, setTableFontSize] = useState(12);
  const [rowSelection, setRowSelection] = useState({});
  const [globalFrontFilter, setGlobalFrontFilter] = useState("");
  const [globalBackendFilter, setGlobalBackendFilter] = useState(null);
  const [tempGlobalBackendFilter, setTempGlobalBackendFilter] = useState(globalBackendFilter)
  const [padding, setPadding] = useState(4);
  const [isFiltersActive, setIsFiltersActive] = useState(false);


  // server side management
  const [serverResponse, setServerResponse] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [loading, setLoading] = useState(!serverResponse?.body && !data);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [backendFilters, setBackendFilters] = useState([])





  useEffect(() => {
    const getTableData = async () => {
      setLoading(true);
      setServerResponse(null);

      if (totalItems !== 0) {
        setTotalPages(Math.ceil(totalItems / perPage));
      }

      const result = await get(requestPath, {
        params: {
          page: currentPage,
          perPage,
          search: globalBackendFilter ? globalBackendFilter : null
        }
      });

      if (result?.success) {
        setServerResponse(result);
        setRequestData(result?.body)
        if (totalItems === 0 || totalItems !== result.totalItems) {
          setTotalItems(result.totalItems);
          setTotalPages(Math.ceil(result.totalItems / perPage));
        }
      }

      setLoading(false);
    }

    if (requestPath) {
      getTableData();
    }
  }, [requestPath, currentPage, perPage, globalBackendFilter])
  // end server side management






  // this means data hasn't been loaded yet
  if (!Array.isArray(data)) {
    data = false;
  }

  // init columns
  let tableColumns = [];
  if (!columns) {
    data?.map((object) => {
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
      if (!column.permission || HasPermission(column.permission)) {
        return columnHelper.accessor(column.id, column);
      } else {
        return false
      }
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


  const handlePadding = () => {
    if (padding >= 6) {
      setPadding(2);
    } else {
      setPadding((padding) => padding + 2);
    }
  };

  const table = useReactTable({
    data: serverResponse?.body ? serverResponse?.body : data,
    columns: tableColumns.filter(function (column) {
      if (column.inTable !== false) {
        return column
      }
    }),
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      globalFilter: globalFrontFilter,
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFrontFilter,
    globalFilterFn: fuzzyFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(), //provide a sorting row model
  })

  useEffect(() => {
    setSelected(table.getSelectedRowModel())
  }, [rowSelection])




  // START generating CSV base on filtered rows
  const csvConfig = mkConfig({
    fieldSeparator: ',',
    filename: `Export ${tableName} - ${moment().locale("fa")
      .format("jYYYY-jMM-jDD HH-mm")}`, // export file name (without .csv)
    decimalSeparator: '.',
    useKeysAsHeaders: true,
  })

  // export function
  const exportExcel = (rows) => {
    const rowData = rows.map((row) => {
      return tableColumns.reduce((acc, item) => {
        if (item.inExport !== false) {
          acc[item.header] = typeof (row.original[item.accessorKey]) == "object" ? JSON.stringify(row.original[item.accessorKey]) : row.original[item.accessorKey];
        }
        return acc;
      }, {})
    })
    const csv = generateCsv(csvConfig)(rowData)
    download(csvConfig)(csv)
  }
  // END generating CSV base on filtered rows


  const Filter = useCallback(({ column, table }) => {
    const firstValue = table
      .getPreFilteredRowModel()
      .flatRows[0]?.getValue(column.id);

    const columnFilterValue = column.getFilterValue();

    switch (typeof firstValue) {
      case "number":
        return (
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
        )
      case "string":
        return (
          <DebouncedInput
            type="text"
            value={columnFilterValue ?? ""}
            onChange={(value) => {
              if (!requestPath) {
                column.setFilterValue(value)
              } else {
                addOrUpdateBackendFilters(column.id, value)
                const params = backendFilters.reduce((acc, { key, value }) => {
                  if (value !== '') {
                    acc[key] = value;
                  }
                  return acc;
                }, {});
                params.currentPage = currentPage;
                params.perPage = perPage;
                if (globalBackendFilter) {
                  params.globalBackendFilter = globalBackendFilter
                }
              }
            }}
            placeholder={`فیلتر با ...`}
            className="w-full border-b border-solid border-gray-200 focus:border-gray-400 py-2"
            list={column.id + "list"}
          />
        )
    }
  }, [])


  function addOrUpdateBackendFilters(key, value) {
    let temp = backendFilters;
    // check if key is exist or not
    let index = temp.map(filter => filter.key).indexOf(key)
    if (index >= 0) {
      // update
      temp[index] = {
        key,
        value
      };
    } else {
      // add
      temp.push({
        key,
        value
      })
    }
    // console.log("backendFilters",backendFilters);

    setBackendFilters(temp)
  }



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
              <label htmlFor="8">
                8
              </label>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-100 p-2 px-5">
              <input type="radio" id="10" name="font-size" value="10"
                onChange={() => setTableFontSize(10)}
              />
              <label htmlFor="10">
                10
              </label>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-100 p-2 px-5">
              <input type="radio" id="12" name="font-size" value="12"
                onChange={() => setTableFontSize(12)}
              />
              <label htmlFor="12">
                12
              </label>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-100 p-2 px-5">
              <input type="radio" id="14" name="font-size" value="14"
                onChange={() => setTableFontSize(14)}
              />
              <label htmlFor="14">
                14
              </label>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-100 p-2 px-5">
              <input type="radio" id="16" name="font-size" value="16"
                onChange={() => setTableFontSize(16)}
              />
              <label htmlFor="16">
                16
              </label>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-100 p-2 px-5">
              <input type="radio" id="18" name="font-size" value="18"
                onChange={() => setTableFontSize(18)}
              />
              <label htmlFor="18">
                18
              </label>
            </div>
          </div>

        </div>
        <div className="select-none w-full flex flex-wrap gap-2 items-center justify-between bg-white dark:bg-black shadow-al rounded-xl mb-2 p-2 px-3">

          {
            requestPath
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
                      value={globalBackendFilter || ""}
                      onChange={(e) => setGlobalBackendFilter(e.target.value)}
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
                        value={tempGlobalBackendFilter || ""}
                        onChange={(e) => setTempGlobalBackendFilter(e.target.value)}
                      />
                    </div>
                    <button
                      className="border border-solid border-gray-200 px-3 rounded-lg"
                      onClick={() => { setGlobalBackendFilter(tempGlobalBackendFilter) }}
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
                  value={globalFrontFilter || ""}
                  onChange={(e) => setGlobalFrontFilter(e.target.value)}
                />
              </div>
          }
          <div className="flex gap-2 justify-center items-center">
            <PermissionBasedComponent permission={CSVExportPermission}>
              <div
                onClick={() => {
                  exportExcel(table.getFilteredRowModel().rows)
                }}
                className="flex gap-1 border border-gray-100 border-solid cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-100 p-2 rounded-xl"
              >
                <PiMicrosoftExcelLogo size={20} />
                <span className="hidden lg:flex text-sm">خروجی CSV</span>
              </div>
            </PermissionBasedComponent>
            <div
              onClick={() => {
                setFontSizeIsActive(!fontSizeIsActive);
              }}
              className="hidden md:flex gap-1 border border-gray-100 border-solid cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-100 p-2 rounded-xl"
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
              className="hidden md:flex gap-1 border border-gray-100 border-solid cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-100 p-2 rounded-xl"
            >
              <PiRows size={20} />
              <span className="hidden lg:flex text-sm">فاصله ردیف‌ها</span>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto rounded-xl max-h-[700px]">
          <table className="table w-full bg-white dark:bg-black shadow-al rounded-xl overflow-x-auto">
            <tbody
              className="tbody w-full bg-white dark:bg-black rounded-b-xl"
              style={{ fontSize: `${tableFontSize}px` }}
            >
              {table.getHeaderGroups().map((headerGroup) => (

                <tr
                  key={headerGroup.id}
                  className="tr border-b border-solid border-gray-300 w-full sticky top-0 bg-white dark:bg-black shadow-al z-[1]"
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
                              {header.column.columnDef?.meta?.filterComponent &&
                                header.column.columnDef?.meta?.filterComponent(
                                  header.column.setFilterValue, header.column, table, backendFilters, setBackendFilters
                                ) ? (
                                header.column.columnDef?.meta?.filterComponent(
                                  header.column.setFilterValue, header.column, table, backendFilters, setBackendFilters
                                )
                              ) : (
                                <Filter column={header.column} table={table} />
                              )}
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
          {!data && loading ? (
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
            {!requestPath ? table.getFilteredRowModel().rows.length : totalItems}
          </div>
          {/* <td colSpan={20}>Page Rows ({table.getRowModel().rows.length})</td> */}

        </div>
        <div className="flex gap-1 items-center justify-center">
          <button
            className={`${requestPath ? currentPage > 1 ? "opacity-100" : "opacity-20" : table.getCanPreviousPage() ? "opacity-100" : "opacity-20"
              } cursor-pointer transition-all ease-in-out duration-300 w-[40px] py-2 rounded-xl hover:bg-gray-100`}
            onClick={() => {
              if (requestPath && currentPage > 1) {
                setCurrentPage(1);
              } else {
                table.firstPage();
              }
            }}
          >
            {"<<"}
          </button>
          <button
            className={`${requestPath ? currentPage > 1 ? "opacity-100" : "opacity-20" : table.getCanPreviousPage() ? "opacity-100" : "opacity-20"
              } cursor-pointer transition-all ease-in-out duration-300 w-[40px] py-2 rounded-xl hover:bg-gray-100`}
            onClick={() => {
              if (requestPath && currentPage > 1) {
                setCurrentPage(currentPage - 1);
              } else {
                table.previousPage();
              }
            }}
          >
            {"<"}
          </button>
          <div className="flex gap-2 items-center justify-center w-[110px]">
            <span className="flex items-center gap-1 text-sm">
              <div>صفحه</div>
              <span>
                {!requestPath ? table.getState().pagination.pageIndex + 1 : currentPage} از{" "}
                {!requestPath ? table.getPageCount().toLocaleString() : totalPages}
              </span>
            </span>
          </div>
          <button
            className={`${requestPath ? currentPage < totalPages ? "opacity-100" : "opacity-20" : table.getCanNextPage() ? "opacity-100" : "opacity-20"
              } cursor-pointer transition-all ease-in-out duration-300 w-[40px] py-2 rounded-xl hover:bg-gray-100`}
            onClick={() => {
              if (requestPath && currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
              } else {
                table.nextPage();
              }
            }}
          >
            {">"}
          </button>
          <button
            className={`${requestPath ? currentPage < totalPages ? "opacity-100" : "opacity-20" : table.getCanNextPage() ? "opacity-100" : "opacity-20"
              } cursor-pointer transition-all ease-in-out duration-300 w-[40px] py-2 rounded-xl hover:bg-gray-100`}
            onClick={() => {
              if (requestPath && currentPage < totalPages) {
                setCurrentPage(totalPages);
              } else {
                table.lastPage();
              }
            }}
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
                if (requestPath) {
                  setCurrentPage(page + 1);
                } else {
                  table.setPageIndex(page);
                }
              }}
              className="rounded-lg text-base py-[2px] px-[6px] border border-solid border-gray-200 p-1 w-[40px] !bg-white dark:!bg-black"
            />
          </span>
          <span className="text-sm">تعداد رکورد در صفحه</span>
          <select
            className="bg-white dark:bg-black rounded-lg border border-solid border-gray-200"
            value={requestPath ? perPage : table.getState().pagination.pageSize}
            onChange={(e) => {
              setPerPage(Number(e.target.value));
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50, 100].map((pageSize) => (
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
  debounce = 500,
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
      onChange={(e) => {
        setValue(e.target.value)
      }}
    />
  );
}

function isDateString(str) {
  // Check if the input is a string
  if (typeof str !== 'string') return false;

  // Try parsing the string with Date.parse (supports many formats)
  const timestamp = Date.parse(str);

  // Check if the parsing was successful and the result is a finite number
  if (isNaN(timestamp)) {
    // For some formats (like MM/DD/YYYY), Date.parse may fail in some browsers
    // So we'll try an alternative approach with the Date constructor
    const date = new Date(str);
    return date.toString() !== 'Invalid Date' && !isNaN(date);
  }

  return true;
}