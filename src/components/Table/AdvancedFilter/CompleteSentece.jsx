import Sentence from './Sentence'
import styles from './AdvancedFilter.module.css'
import { PiPlus } from "react-icons/pi";

export default function CompleteSentece({ state, selectedNodes, setSelectedNodes, dispatch, componentData, isChild = false, indexString = "0" }) {
    const handleAndOrChange = (e) => {
        let { value } = e.target
        dispatch({
            type: "CHANGEANDOR",
            value,
            indexString
        })
    }
    return (
        <>
            {
                (componentData.nodes.length > 0 || componentData.childs.length > 0)
                    ?
                    <li className={`${isChild && "outline-1 outline outline-[#e2ebff] p-6"} relative w-full flex flex-col items-center rounded-xl`}>
                        <ol className={`${styles.adsea} ${componentData.operator === "AND" ? styles.andline : styles.orline} w-full bg-white dark:bg-black relative flex flex-col gap-3 pr-16`}>
                            {componentData.nodes && componentData.nodes.map(function (single, key) {
                                return (<Sentence selectedNodes={selectedNodes} setSelectedNodes={setSelectedNodes} data={single} key={key} index={key} parentData={componentData} dispatch={dispatch} indexString={indexString} />)
                            })}
                            {
                                componentData.childs && componentData.childs.length > 0
                                &&
                                <>
                                    {componentData.childs.map(function (single, key) {
                                        return (<CompleteSentece selectedNodes={selectedNodes} setSelectedNodes={setSelectedNodes} componentData={single} key={key} indexString={String(indexString) + String(key)} isChild={true} state={state} dispatch={dispatch} />)
                                    })}
                                </>
                            }

                            {
                                componentData.nodes.length > 0
                                &&
                                <div className="absolute -right-[15px] top-1/2 z-[20]" style={{ transform: "translate(0, -50%)" }}>
                                    <select
                                        className={`${componentData.operator === "AND" ? "bg-blue-100 text-[#2972c8]" : "bg-[#ebf7ed] text-[#1ba064]"} p-1 outline-none  border-2 border-white border-solid rounded-2xl text-xs font-semibold`}
                                        name=""
                                        id=""
                                        onChange={(e) => handleAndOrChange(e)}
                                    >
                                        <option value="AND" selected={componentData.operator == "AND" && "selected"}>AND</option>
                                        <option value="OR" selected={componentData.operator == "OR" && "selected"}>OR</option>
                                    </select>
                                </div>
                            }
                        </ol>

                        <div className='w-full'>
                            <div
                                className="mx-16 pt-3 inline-flex w-fit select-none items-center text-blue-500 cursor-pointer gap-1"
                                onClick={() => {
                                    dispatch({
                                        type: "ADDNEWROW",
                                        indexString
                                    })
                                }}
                            >
                                <PiPlus size={16} />
                                <span className="text-sm">ردیف جدید</span>
                            </div>
                        </div>
                    </li>
                    :
                    !isChild
                    &&
                    <div className='w-full'>
                        <div
                            className="mx-16 inline-flex w-fit select-none items-center text-blue-500 cursor-pointer gap-1"
                            onClick={() => {
                                dispatch({
                                    type: "ADDNEWROW",
                                    indexString
                                })
                            }}
                        >
                            <PiPlus size={16} />
                            <span className="text-sm">ردیف جدید</span>
                        </div>
                    </div>
            }
        </>

    )
}
