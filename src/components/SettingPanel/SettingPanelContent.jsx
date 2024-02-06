const style = {
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
};

export default function SettingPanelContent() {
    return (
        <div
            className="fixed inset-y-0 left-0 flex flex-col bg-white shadow-lg bg-opacity-20 w-80"
            style={style}
        >
            <div className="flex items-center justify-between flex-shrink-0 p-2">
                <button className="p-2 rounded-md focus:outline-none focus:ring">
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
                <h6 className="p-2 text-lg"></h6>
            </div>
            <div className="flex-1 max-h-full p-4 overflow-hidden">
                <span>Settings Content</span>
                {/* <!-- Settings Panel Content ... --> */}
            </div>
        </div>
    )
}