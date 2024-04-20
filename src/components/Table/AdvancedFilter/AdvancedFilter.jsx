import BottomSheet from "src/components/BottomSheet";
import FilterContainer from "./FilterContainer";
import { PiBroomLight } from "react-icons/pi";
import { VscSaveAll } from "react-icons/vsc";
import { useReducer, useState } from "react";
import reducer from "./AdvancedFilterReducer";
import AdvancedFilterPattern from "./AdvancedFilterPattern";
import GistSentence from "./GistSentence";
import { PiSelectionPlus } from "react-icons/pi";
import { TbEyeSearch } from "react-icons/tb";
import { check_if_nodes_can_be_merged } from "./AdvancedFilterHelper";
import Modal from "src/components/Modal";
import ModalHeader from "src/components/Modal/ModalHeader";
import ModalBody from "src/components/Modal/ModalBody";
import ModalFooter from "src/components/Modal/ModalFooter";

export default function AdvancedFilter({ active, setActive }) {


    const [ifData, dispatch] = useReducer(reducer, {
        NOT: false,
        childs: [],
        nodes: [],
        operator: "AND",
        sentence: "",
        sequence: ""
    })

    const [selectedNodes, setSelectedNodes] = useState([]);
    const [isCreateNewPattern, setIsCreateNewPattern] = useState(false)
    const [isSavePatternActive, setIsSavePatternActive] = useState(false)
    const [isGistActive, setIsGistActive] = useState(false)
    const [isDeleteModalActive, setIsDeleteModalActive] = useState(false)

    const AdvancedSearchHeader = () => {
        return (
            <>
                {
                    isCreateNewPattern
                    &&
                    <>
                        <div className="flex gap-3">
                            <div
                                className="cursor-pointer select-none flex items-center justify-center gap-1 text-sm hover:bg-gray-100 rounded-xl px-3 transition-all ease-in-out duration-300"
                                onClick={
                                    () => setIsDeleteModalActive(true)
                                }
                            >
                                <PiBroomLight size={19} />
                                <span>
                                    پاک کردن
                                </span>
                            </div>
                            <div
                                className="cursor-pointer select-none flex items-center justify-center gap-1 text-sm border border-gray-300 hover:border-gray-400 transition-all ease-in-out duration-300 rounded-xl p-4 py-3"
                                onClick={() => setIsSavePatternActive(true)}
                            >
                                <VscSaveAll size={19} />
                                <span>
                                    ذخیره الگوی جستجو
                                </span>
                            </div>
                        </div>

                    </>
                }
            </>
        )
    }


    const SavePatternHeader = () => {
        return (
            <>
                <button className="bg-primary-color text-white px-5 py-2 rounded-xl">
                    ذخیره الگوی جستجو
                </button>
            </>
        )
    }


    const AdvancedSearchFooter = () => {
        return (
            <>
                {
                    isCreateNewPattern
                    &&
                    <div className="w-full flex flex-col gap-8 md:gap-2 md:flex-row justify-between items-center border-t border-solid border-gray-100 pt-4">
                        <div className="flex items-center gap-2">
                            <div className={`${check_if_nodes_can_be_merged(selectedNodes) ? "text-gray-800" : "text-gray-300"} transition-all ease-in-out duration-200 flex items-center gap-2 p-2 border border-solid border-gray-200 rounded-xl`}>
                                <PiSelectionPlus />
                                <span className="text-sm">گروه شرطی</span>
                                <div className="flex items-center gap-2">
                                    <span
                                        onClick={() => dispatch({
                                            type: "MAKEGROUP",
                                            selectedNodes,
                                            setSelectedNodes,
                                            operator: "AND"
                                        })}
                                        className="flex cursor-pointer select-none justify-center items-center w-16 border border-solid border-gray-200 p-1 rounded-lg"
                                    >
                                        AND
                                    </span>
                                    <span
                                        onClick={() => dispatch({
                                            type: "MAKEGROUP",
                                            selectedNodes,
                                            setSelectedNodes,
                                            operator: "OR"
                                        })}
                                        className="flex cursor-pointer select-none justify-center items-center w-16 border border-solid border-gray-200 p-1 rounded-lg"
                                    >
                                        OR
                                    </span>
                                </div>
                            </div>
                            <div
                                onClick={() => dispatch({
                                    type: "MAKENOT",
                                    selectedNodes,
                                })}
                                className={`${selectedNodes.length > 0 ? "text-gray-800" : "text-gray-300"} transition-all ease-in-out duration-200 flex gap-1 cursor-pointer select-none p-[15px] border border-solid border-gray-200 rounded-xl`}
                            >
                                <span className="text-sm">NOT</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="py-3 p-20 cursor-pointer select-none text-white rounded-xl bg-primary-color hover:bg-primary-color transition ease-in-out duration-300">
                                جستجو
                            </span>
                            <div
                                className="cursor-pointer flex justify-center items-center border border-gray-200 rounded-xl w-[50px] h-[50px]"
                                onClick={() => setIsGistActive(true)}
                            >
                                <TbEyeSearch />
                            </div>
                        </div>
                    </div>

                }
            </>
        )
    }

    return (
        <>
            <BottomSheet headerComponent={<AdvancedSearchHeader />} footerComponent={<AdvancedSearchFooter />} title="جستجو و فیلتر پیشرفته" subTitle="با اعمال قوانین، نحوه نمایش را شخصی سازی کنید" hasClose={true} isActive={active} handleIsActive={setActive} isFullHeight={true}>
                {
                    isCreateNewPattern
                        ?
                        <FilterContainer ifData={ifData} dispatch={dispatch} selectedNodes={selectedNodes} setSelectedNodes={setSelectedNodes} />
                        :
                        <AdvancedFilterPattern ifData={ifData} dispatch={dispatch} setIsCreateNewPattern={setIsCreateNewPattern} />
                }
            </BottomSheet>
            <BottomSheet title="ذخیره الگوی جستجو" subTitle="برای ذخیره الگو، اطلاعات زیر را تکمیل نمایید" headerComponent={<SavePatternHeader />} hasClose={true} isActive={isSavePatternActive} handleIsActive={setIsSavePatternActive}>
                <div className="p-8">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <span>
                                نام الگو
                            </span>
                            <input type="text" className="max-w-[500px] border border-solid border-gray-200 p-2 rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-3 bg-gray-50 p-3 rounded-xl">
                            <span className="text-gray-600 text-sm">
                                الگوی جستجو
                            </span>
                            <GistSentence data={ifData} dispatch={dispatch} />
                        </div>
                    </div>
                </div>
            </BottomSheet>
            <BottomSheet title="کوئری جستجوی پیشرفته" hasClose={true} isActive={isGistActive} handleIsActive={setIsGistActive}>
                <div className="p-8">
                    <GistSentence data={ifData} dispatch={dispatch} />
                </div>
            </BottomSheet>
            <Modal isOpen={isDeleteModalActive} width={500}>
                <ModalHeader>
                    پاک کردن الگو
                </ModalHeader>
                <ModalBody>
                    <div className="p-4">
                        آیا از انجام این عملیات اطمینان دارید؟
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div className="flex gap-2 w-full justify-end">
                        <button
                            className="bg-red-500 p-2 px-4 text-white rounded-lg"
                            onClick={() => setIsDeleteModalActive(false)}
                        >
                            انصراف
                        </button>
                        <button
                            className="bg-primary-color text-white p-2 px-4 rounded-lg"
                            onClick={() => {
                                setIsDeleteModalActive(false);
                                dispatch({
                                    type: "ERASEDATA",
                                    indexString: "0"
                                })
                            }}
                        >
                            بله
                        </button>
                    </div>
                </ModalFooter>
            </Modal>
        </>

    )
}
