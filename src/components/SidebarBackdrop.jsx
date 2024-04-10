import { defaultHeaderHeight } from "src/settings/config";

const style = {
    backdropFilter: "blur(3px)",
    WebkitBackdropFilter: "blur(3px)",
    top: `${defaultHeaderHeight}px`,
};
export default function SidebarBackdrop({ state }) {
    return (

        <div
            className={`${state ? "visible" : "invisible"} fixed inset-0 z-10 bg-black bg-opacity-20 lg:hidden`}
            style={style}
        ></div>

    )
}