import { useState } from "react";
import { PiTrash } from "react-icons/pi";
import { PiCircleFill } from "react-icons/pi";
import { PiCheckBold } from "react-icons/pi";
import { PiDotsSixVertical } from "react-icons/pi";

export default function Sentence({ data, selectedNodes, setSelectedNodes, parentData, index, dispatch, indexString }) {
    const attributeData = [
        {
            "code": 1,
            "entity__code": 1112,
            "column_name": "name",
            "is_active": true,
            "comment": null,
            "datatype__comment": "VARCHAR",
            "catalog__code": null,
            "fk_entity__code": null,
            "is_null": true,
            "is_pk": false,
            "is_uk": false,
            "specific_attribute": false,
            "map__code": 8
        },
        {
            "code": 2,
            "entity__code": 1112,
            "column_name": "last_name",
            "is_active": true,
            "comment": null,
            "datatype__comment": "VARCHAR",
            "catalog__code": null,
            "fk_entity__code": null,
            "is_null": true,
            "is_pk": false,
            "is_uk": false,
            "specific_attribute": false,
            "map__code": 9
        },
        {
            "code": 3,
            "entity__code": 1112,
            "column_name": "gender",
            "is_active": true,
            "comment": null,
            "datatype__comment": "INTEGER",
            "catalog__code": 119,
            "fk_entity__code": null,
            "is_null": true,
            "is_pk": false,
            "is_uk": false,
            "specific_attribute": false,
            "map__code": 10
        },
        {
            "code": 4,
            "entity__code": 1112,
            "column_name": "national_code",
            "is_active": true,
            "comment": "",
            "datatype__comment": "VARCHAR",
            "catalog__code": null,
            "fk_entity__code": null,
            "is_null": false,
            "is_pk": false,
            "is_uk": true,
            "specific_attribute": false,
            "map__code": 11
        },
        {
            "code": 5,
            "entity__code": 1112,
            "column_name": "birth_date",
            "is_active": true,
            "comment": null,
            "datatype__comment": "DATE",
            "catalog__code": null,
            "fk_entity__code": null,
            "is_null": true,
            "is_pk": false,
            "is_uk": false,
            "specific_attribute": false,
            "map__code": 12
        },
        {
            "code": 6,
            "entity__code": 1112,
            "column_name": "father",
            "is_active": true,
            "comment": null,
            "datatype__comment": "VARCHAR",
            "catalog__code": null,
            "fk_entity__code": null,
            "is_null": true,
            "is_pk": false,
            "is_uk": false,
            "specific_attribute": false,
            "map__code": 14
        },
        {
            "code": 7,
            "entity__code": 1112,
            "column_name": "birth_place",
            "is_active": true,
            "comment": null,
            "datatype__comment": "INTEGER",
            "catalog__code": 3030,
            "fk_entity__code": null,
            "is_null": true,
            "is_pk": false,
            "is_uk": false,
            "specific_attribute": false,
            "map__code": 15
        },
        {
            "code": 8,
            "entity__code": 1112,
            "column_name": "is_verified_civil_registration",
            "is_active": true,
            "comment": null,
            "datatype__comment": "BOOL",
            "catalog__code": null,
            "fk_entity__code": null,
            "is_null": true,
            "is_pk": false,
            "is_uk": false,
            "specific_attribute": false,
            "map__code": 21
        },
        {
            "code": 9,
            "entity__code": 1112,
            "column_name": "primary_affiliation",
            "is_active": true,
            "comment": null,
            "datatype__comment": "INTEGER",
            "catalog__code": 3007,
            "fk_entity__code": null,
            "is_null": true,
            "is_pk": false,
            "is_uk": false,
            "specific_attribute": false,
            "map__code": 22
        },
        {
            "code": 10,
            "entity__code": 1112,
            "column_name": "main_org",
            "is_active": true,
            "comment": null,
            "datatype__comment": "INTEGER",
            "catalog__code": 3042,
            "fk_entity__code": null,
            "is_null": true,
            "is_pk": false,
            "is_uk": false,
            "specific_attribute": false,
            "map__code": 23
        },
        {
            "code": 11,
            "entity__code": 1112,
            "column_name": "is_active",
            "is_active": true,
            "comment": null,
            "datatype__comment": "BOOL",
            "catalog__code": null,
            "fk_entity__code": null,
            "is_null": true,
            "is_pk": false,
            "is_uk": false,
            "specific_attribute": false,
            "map__code": 24
        },
        {
            "code": 12,
            "entity__code": 1112,
            "column_name": "source_id",
            "is_active": null,
            "comment": null,
            "datatype__comment": "VARCHAR",
            "catalog__code": null,
            "fk_entity__code": null,
            "is_null": false,
            "is_pk": true,
            "is_uk": false,
            "specific_attribute": false,
            "map__code": null
        }
    ]

    const conditionData = [
        {
            "id": 698,
            "title": "is equal to",
            "comment": "=="
        },
        {
            "id": 699,
            "title": "is not equal to",
            "comment": "!="
        },
        {
            "id": 700,
            "title": "is greater than",
            "comment": ">"
        },
        {
            "id": 701,
            "title": "is greater than or equal to",
            "comment": ">="
        },
        {
            "id": 702,
            "title": "is less than",
            "comment": "<"
        },
        {
            "id": 703,
            "title": "is less than or equal to",
            "comment": "<="
        },
        {
            "id": 704,
            "title": "starts with",
            "comment": "STARTS_WITH"
        },
        {
            "id": 705,
            "title": "does not start with",
            "comment": "DOES_NOT_START_WITH"
        },
        {
            "id": 706,
            "title": "ends with",
            "comment": "ENDS_WITH"
        },
        {
            "id": 707,
            "title": "does not end with",
            "comment": "DOES_NOT_END_WITH"
        },
        {
            "id": 708,
            "title": "contains",
            "comment": "CONTAINS"
        },
        {
            "id": 709,
            "title": "does not contain",
            "comment": "DOES_NOT_CONTAIN"
        },
        {
            "id": 710,
            "title": "(Regex)contains the pattern",
            "comment": "CONTAINS_THE_PATTERN"
        },
        {
            "id": 711,
            "title": "(Regex)does not contain the pattern",
            "comment": "DOES_NOT_CONTAIN_THE_PATTERN"
        },
        {
            "id": 712,
            "title": "does not contain the subset",
            "comment": "DOES_NOT_CONTAIN_THE_SUBSET"
        },
        {
            "id": 713,
            "title": "is between",
            "comment": "IS_BETWEEN"
        },
        {
            "id": 714,
            "title": "is not between",
            "comment": "IS_NOT_BETWEEN"
        },
        {
            "id": 715,
            "title": "has changed",
            "comment": "HAS_CHANGED"
        },
        {
            "id": 716,
            "title": "has not changed",
            "comment": "HAS_NOT_CHANGED"
        },
        {
            "id": 759,
            "title": "is created",
            "comment": "is_created"
        }
    ]

    const [isHover, setIsHover] = useState(false)
    const handleCheckbox = (e) => {
        if (e.target.checked) {
            if (!selectedNodes.includes(indexString + index)) {
                setSelectedNodes([...selectedNodes, indexString + "-" + index]);
            }
        } else {
            setSelectedNodes((prevState) =>
                prevState.filter((prevItem) => prevItem !== indexString + "-" + index)
            );
        }
    }
    return (
        data.isEdit
            ?
            <li className="relative w-full flex items-center">
                <div className="z-[1] w-full flex items-center gap-3 bg-gray-50 border border-solid border-gray-100 py-2 p-3 rounded-xl">
                    <div className="flex items-center">
                        <input type="checkbox" onChange={handleCheckbox} />
                    </div>
                    <div className="h-[35px] w-[1px] bg-gray-200"></div>
                    <select
                        className="w-full border border-solid border-gray-200 p-2 rounded-lg focus-visible:outline-0"
                        onChange={(e) => {
                            let { value } = e.target
                            dispatch({
                                type: "EDITLEFT",
                                value,
                                index,
                                indexString,
                            })
                        }}
                    >
                        {
                            attributeData.map(function (single, index) {
                                return (
                                    <option key={index} value={single.column_name} selected={single.column_name == data.left && "selected"}>{single.column_name}</option>
                                )
                            })
                        }
                    </select>
                    <select
                        className="w-full border border-solid border-gray-200 p-2 rounded-lg focus-visible:outline-0"
                        onChange={(e) => {
                            let { value } = e.target
                            dispatch({
                                type: "EDITOPERATOR",
                                value,
                                index,
                                indexString,
                            })
                        }}
                    >
                        {
                            conditionData.map(function (single, index) {
                                return (
                                    <option key={index} value={single.comment} selected={single.comment == data.operator && "selected"}>{single.title}</option>
                                )
                            })
                        }
                    </select>
                    <input
                        className='w-full border border-solid border-gray-200 p-2 rounded-lg'
                        type="text"
                        value={data.right}
                        onChange={(e) => {
                            let { value } = e.target
                            dispatch({
                                type: "EDITRIGHT",
                                value,
                                index,
                                indexString,
                            })
                        }}
                    />
                    <div className="h-[35px] w-[1px] bg-gray-200"></div>
                    <div className="cursor-pointer" onClick={() => dispatch({
                        type: "EDITDONE",
                        indexString,
                        index
                    })}
                    >
                        <PiCheckBold size={20} className="!text-gray-400 hover:!text-blue-600 transition-all ease-in-out duration-300" />
                    </div>
                    <div className="cursor-pointer" onClick={() => dispatch({
                        type: "DELETESENTENCE",
                        indexString,
                        index
                    })}>
                        <PiTrash size={20} className="!text-gray-400 hover:!text-red-600 transition-all ease-in-out duration-300" />
                    </div>
                </div>
                <div className="absolute -right-2 mb-[2px]">
                    <PiCircleFill size={16} className={` ${parentData.operator == "AND" ? "text-[#2972c8]" : "text-[#1ba064]"}  scale-y-75`} />
                </div>
            </li>
            :
            <li className="relative w-fit flex items-center" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <div className="z-[1] w-fit flex items-center gap-3 bg-white border border-solid border-gray-100 py-2 p-3 rounded-xl">
                    <div className="flex items-center">
                        <input type="checkbox" name="" id="" onChange={handleCheckbox} />
                    </div>
                    <div className="h-[35px] w-[1px] bg-gray-200"></div>
                    {
                        data.NOT
                        &&
                        <div className="flex justify-center items-center bg-red-100 text-red-500 text-xs font-bold px-2 py-1 rounded-xl">
                            NOT
                        </div>
                    }
                    <span>
                        {data.left}
                        {" "}
                        {data.operator}
                        {" "}
                        {data.right}
                    </span>
                </div>
                <button className={`transition-all ease-in-out duration-200 text-xs font-bold mx-2 ${isHover ? "" : "translate-x-14"}`} onClick={() => dispatch({
                    type: "EDITNODE",
                    indexString,
                    index
                })}>
                    ویرایش
                </button>
                <div className="absolute -right-2 mb-[2px]">
                    <PiCircleFill size={16} className={` ${parentData.operator == "AND" ? "text-[#2972c8]" : "text-[#1ba064]"}  scale-y-75`} />
                </div>
            </li>
    )
}
