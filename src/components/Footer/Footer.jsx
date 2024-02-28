export default function Footer() {
    return (
        <footer className="flex items-center justify-between flex-shrink-0 p-4 max-h-14 bg-[#f5f8fa] dark:bg-[#333333]">
            <div> {new Date().getFullYear()} &copy;</div>
            <div>
                {/* <!-- Github svg --> */}
                <span className="text-xs">
                    Footer copyrights
                </span>
            </div>
        </footer>
    )
}