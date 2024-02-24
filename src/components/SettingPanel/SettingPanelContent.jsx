import { IoMdClose } from "react-icons/io";
import { PiFadersFill } from "react-icons/pi";

export default function SettingPanelContent({ state, handleState,direction,setDirection }) {
    

    return (
        <div
            className={`${direction == "rtl" ? "left-0" : "right-0"} transition-all ease-in-out duration-500 fixed inset-y-0 flex flex-col bg-white shadow-lg bg-opacity-20 w-80`}
            style={{
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                transform: `translateX(${state == true ? "0" : direction == "rtl" ? "-400" : "400"}px)`
            }}
        >
            <div className="flex items-center justify-between flex-shrink-0 p-4 border-b border-solid border-gray-100">
                <IoMdClose className="focus:outline-none focus:ring cursor-pointer" onClick={() => { handleState(false) }} />
                <div className="flex w-full justify-center ">
                    <div className="flex flex-col items-center">
                        <PiFadersFill size={40} />
                        <span>تنظیمات</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 flex-1 max-h-full p-4 overflow-hidden">
                <span className="text-gray-400">جهت</span>
                <div className="flex gap-3">
                    <button className={` ${direction == "rtl" && "border-gray-400"} p-2 border border-solid border-gray-200 rounded-lg w-[90px]`} onClick={() => { setDirection("rtl") }}>راست چین</button>
                    <button className={` ${direction == "ltr" && "border-gray-400"} p-2 border border-solid border-gray-200 rounded-lg w-[90px]`} onClick={() => { setDirection("ltr") }}>چپ چین</button>
                </div>
            </div>
        </div>
    )
}