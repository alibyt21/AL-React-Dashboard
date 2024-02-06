const style = {
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
};

export default function Loading() {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center text-white bg-black bg-opacity-50"
            style={style}
        >
            در حال بارگذاری
        </div>
    )
}