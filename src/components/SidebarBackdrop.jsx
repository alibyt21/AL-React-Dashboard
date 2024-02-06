const style = {
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
};
export default function SidebarBackdrop() {
    return (
        <div
            className="fixed inset-0 z-10 bg-black bg-opacity-20 lg:hidden"
            style={style}
        ></div>
    )
}