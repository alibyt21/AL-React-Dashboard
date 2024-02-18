import { IoLogOutOutline } from "react-icons/io5";
import { VscKey } from "react-icons/vsc";

export default function SidebarFooter() {
    return (
        <div className="flex justify-center flex-shrink-0 p-2 pb-4">
            <div className="flex flex-col gap-4">
                <VscKey size={24} className="cursor-pointer"/>
                <IoLogOutOutline size={24} className="cursor-pointer"/>
            </div>

        </div>
    )
}