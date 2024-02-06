export default function DropdownCard() {
    return (
        <div className="absolute w-48 max-w-md mt-3 transform bg-white rounded-md shadow-lg translate-x-3/4 min-w-max z-2">
            <div className="p-4 font-medium border-b">
                <span className="text-gray-800">
                    Notification
                </span>
            </div>
            <ul className="flex flex-col p-2 my-2 space-y-1">
                <li>
                    <a href="#" className="block px-2 py-1 transition rounded-md hover:bg-gray-100">
                        Link
                    </a>
                </li>
                <li>
                    <a href="#" className="block px-2 py-1 transition rounded-md hover:bg-gray-100">
                        Another Link
                    </a>
                </li>
            </ul>
            <div className="flex items-center justify-center p-4 text-blue-700 underline border-t">
                <a href="#">See All</a>
            </div>
        </div>
    )
}