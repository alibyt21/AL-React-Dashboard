import { TbFilterSearch } from "react-icons/tb";
import AdvancedFilterPatternSingle from "./AdvancedFilterPatternSingle";
import { useState } from "react";

export default function AdvancedFilterPattern({ setIsCreateNewPattern, ifData, dispatch }) {
    const [patterns, setPatterns] = useState([
        {
            NOT: false,
            childs: [
                // it can repeate the same pattern as it's parent
                {
                    NOT: false,
                    childs: [],
                    nodes: [
                        {
                            NOT: true,
                            isEdit: false,
                            left: "last_name",
                            leftType: "source",
                            operator: "!=",
                            operatorValue: "Attribute value",
                            order: 0,
                            right: "1",
                            rightType: null,
                            sentence: "last_name != \"1\"",
                        },
                        {
                            NOT: false,
                            isEdit: true,
                            left: "last_name",
                            leftType: "source",
                            operator: "!=",
                            operatorValue: "Attribute value",
                            order: 0,
                            right: "1",
                            rightType: null,
                            sentence: "last_name != \"1\"",
                        },
                        {
                            NOT: false,
                            isEdit: false,
                            left: "last_name",
                            leftType: "source",
                            operator: "!=",
                            operatorValue: "Attribute value",
                            order: 0,
                            right: "1",
                            rightType: null,
                            sentence: "last_name != \"1\"",
                        },
                    ],
                    operator: "OR",
                    sentence: "",
                    sequence: ""
                },
                {
                    NOT: false,
                    childs: [],
                    nodes: [
                        {
                            NOT: false,
                            isEdit: false,
                            left: "last_name",
                            leftType: "source",
                            operator: "!=",
                            operatorValue: "Attribute value",
                            order: 0,
                            right: "1",
                            rightType: null,
                            sentence: "last_name != \"1\"",
                        },
                    ],
                    operator: "OR",
                    sentence: "",
                    sequence: ""
                },
            ],
            nodes: [
                {
                    NOT: false,
                    isEdit: false,
                    left: "last_name",
                    leftType: "source",
                    operator: "!=",
                    operatorValue: "Attribute value",
                    order: 0,
                    right: "1",
                    rightType: null,
                    sentence: "last_name != \"1\"",
                },
            ],
            operator: "AND",
            sentence: "",
            sequence: ""
        },
        {
            NOT: false,
            childs: [
                // it can repeate the same pattern as it's parent
                {
                    NOT: false,
                    childs: [],
                    nodes: [
                        {
                            NOT: true,
                            isEdit: false,
                            left: "last_name",
                            leftType: "source",
                            operator: "!=",
                            operatorValue: "Attribute value",
                            order: 0,
                            right: "1",
                            rightType: null,
                            sentence: "last_name != \"1\"",
                        },
                        {
                            NOT: false,
                            isEdit: true,
                            left: "last_name",
                            leftType: "source",
                            operator: "!=",
                            operatorValue: "Attribute value",
                            order: 0,
                            right: "1",
                            rightType: null,
                            sentence: "last_name != \"1\"",
                        },
                        {
                            NOT: false,
                            isEdit: false,
                            left: "last_name",
                            leftType: "source",
                            operator: "!=",
                            operatorValue: "Attribute value",
                            order: 0,
                            right: "1",
                            rightType: null,
                            sentence: "last_name != \"1\"",
                        },
                        {
                            NOT: false,
                            isEdit: false,
                            left: "last_name",
                            leftType: "source",
                            operator: "!=",
                            operatorValue: "Attribute value",
                            order: 0,
                            right: "1",
                            rightType: null,
                            sentence: "last_name != \"1\"",
                        },
                    ],
                    operator: "AND",
                    sentence: "",
                    sequence: ""
                },
                {
                    NOT: false,
                    childs: [],
                    nodes: [
                        {
                            NOT: false,
                            isEdit: false,
                            left: "last_name",
                            leftType: "source",
                            operator: "!=",
                            operatorValue: "Attribute value",
                            order: 0,
                            right: "1",
                            rightType: null,
                            sentence: "last_name != \"1\"",
                        },
                    ],
                    operator: "OR",
                    sentence: "",
                    sequence: ""
                },
            ],
            nodes: [
                {
                    NOT: false,
                    isEdit: false,
                    left: "last_name",
                    leftType: "source",
                    operator: "!=",
                    operatorValue: "Attribute value",
                    order: 0,
                    right: "1",
                    rightType: null,
                    sentence: "last_name != \"1\"",
                },
            ],
            operator: "AND",
            sentence: "",
            sequence: ""
        }
    ])
    return (
        <div className='flex gap-6 w-full p-6 h-[70vh] items-center justify-center'>
            {
                patterns.length > 0
                &&
                <>
                    <div className="flex flex-col w-full gap-3 h-full justify-center">
                        <span className="font-semibold">
                            لیست الگوهای جستجو
                        </span>
                        {
                            patterns.map(function (single, index) {
                                return (
                                    <AdvancedFilterPatternSingle
                                        data={single}
                                        dispatch={dispatch}
                                        key={index}
                                        index={index + 1}
                                        handleClick={setIsCreateNewPattern}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="w-[2px] h-[70vh] bg-gray-200 flex justify-center items-center"></div>
                </>
            }
            <div className="w-full flex flex-col justify-center items-center gap-1">
                <TbFilterSearch size={50} className="text-gray-200 mb-4" />
                {
                    !patterns.length
                    &&
                    <span className="font-semibold">
                        الگوی جستجو یافت نشد
                    </span>
                }
                <span className="text-sm">
                    الگوی جستجو جدیدی بسازید
                </span>
                <button
                    className="bg-primary-color text-white px-4 py-2 rounded-xl mt-2"
                    onClick={() => { setIsCreateNewPattern(true) }}
                >
                    ساخت الگوی جستجو
                </button>
            </div>

        </div>
    )
}
