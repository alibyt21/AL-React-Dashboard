import CloseButton from "./CloseButton";
import SearchIcon from "./SearchIcon";

const style = {
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
};

export default function MobileSearchBox() {
    return (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-20"
            style={style}>
            <div className="absolute inset-x-0 flex items-center justify-between p-2 bg-white shadow-md">
                <div className="flex items-center flex-1 px-2 space-x-2">
                    {/* <!-- search icon --> */}
                    <SearchIcon />
                    <input type="text" placeholder="Search"
                        className="w-full px-4 py-3 text-gray-600 rounded-md focus:bg-gray-100 focus:outline-none" />
                </div>
                <CloseButton />
            </div>
        </div >
    )
}