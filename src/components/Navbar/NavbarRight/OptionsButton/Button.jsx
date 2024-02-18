export default function Button({ toggle }) {
    return (
        <button
            className="transition-all ease-in-out duration-200 p-[6px] rounded-xl border-2 border-solid border-gray-100 dark:border-gray-700 hover:bg-gray-100 hover:dark:bg-gray-700 focus:outline-none focus:ring"
            onClick={toggle}
        >
            <svg
                className="w-6 h-6 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
            </svg>
        </button>
    )
}