import { MdKeyboardArrowDown } from "react-icons/md";
import GreenDot from "./GreenDot";

export default function Button({ isActive, toggle }) {
    return (
        <button
            className="flex items-center gap-2 transition-all ease-in-out duration-200 p-[6px] pr-2 rounded-xl border-2 border-solid border-gray-100 dark:border-gray-700 hover:bg-gray-100 hover:dark:bg-gray-700 focus:outline-none focus:ring"
            onClick={toggle}
        >
            <div className="relative">
                <img
                    className="object-cover w-6 h-6 rounded-full"
                    src="/assets/img/profile-placeholder.png"
                />
                <GreenDot />
            </div>
            <span className="text-sm hidden lg:flex">علی بیات</span>
            <MdKeyboardArrowDown size={16} className={`${isActive && "rotate-180"} transition-all ease-in-out duration-300`} />

        </button>
    )
}