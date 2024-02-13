import MainContentHeader from "./MainContentHeader";

export default function MainContent({children}) {
    return (
        <main className="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll text-gray-700 text-justify">
            {/* <!-- Main content header --> */}
            <MainContentHeader />
            {children}
        </main>
    )
}