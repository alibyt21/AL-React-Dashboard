import { Link } from "react-router-dom";
import { homeURL } from "src/settings/config";

export default function SidebarHeader() {
    return (
        <div className="flex items-center justify-center flex-shrink-0 p-2">
            <Link to={homeURL}>
                <span className="flex flex-col justify-center items-center p-2 text-lg font-medium leading-8 tracking-wider whitespace-nowrap">
                    <img src="/logo512.png" className="w-10" />
                    <span>جابونت</span>
                </span>
            </Link>
        </div>
    )
}