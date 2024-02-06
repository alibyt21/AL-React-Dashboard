export default function DropdownCard() {
    return (
        <div className="absolute mt-3 transform translate-x-full bg-white rounded-md shadow-lg min-w-max z-2">
            <div className="flex flex-col p-4 space-y-1 font-medium border-b">
                <span className="text-gray-800">
                    Ahmed Kamel
                </span>
                <span className="text-sm text-gray-400">
                    ahmed.kamel@example.com
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
                <a href="#">Logout</a>
            </div>
        </div>
    )
}