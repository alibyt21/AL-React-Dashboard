export default function SidebarHeader() {
    return (
        <div className="flex items-center justify-between flex-shrink-0 p-2">
            <span className="flex p-2 text-xl font-semibold leading-8 tracking-wider whitespace-nowrap">
                <img src="assets/img/logo.png" className="w-10" />
                <span className="mr-2">داشبورد</span>
            </span>
            <button className="p-2 rounded-md lg:hidden">
                <svg
                    className="w-6 h-6 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>
    )
}