import Spinner from "./Spinner";

const style = {
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
};

export default function Loading() {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center text-white bg-black bg-opacity-50"
            style={style}
        >
            <Spinner color="white" text="در حال بارگیری ..." />
        </div>
    )
}