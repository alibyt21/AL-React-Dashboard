import MainContentHeader from "./MainContentHeader";

export default function MainContent({ children }) {
    return (
        <main className="flex-1 text-gray-700 dark:text-white max-h-full  p-3 lg:p-5 overflow-hidden overflow-y-scroll text-justify bg-[#f5f8fa] dark:bg-[#333333] rounded-ss-3xl">
            {/* <!-- Main content header --> */}
            {/* <MainContentHeader /> */}
            <div>
                {children}
            </div>
        </main>
    )
}