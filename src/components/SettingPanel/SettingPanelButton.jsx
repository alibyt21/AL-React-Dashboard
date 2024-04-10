
export default function SettingPanelButton({ handleState, direction }) {
    return (
        <div>
            <button
                className={`fixed ${direction == "rtl" ? "left-0 -translate-x-6 rounded-t-md" : "right-0 translate-x-6 rounded-b-md"} px-4 py-2 text-sm font-medium text-white uppercase transform rotate-90  bg-gray-600 top-1/2 rounded-t-md`}
                onClick={() => handleState(true)}
            >
                تنظیمات
            </button>
        </div>
    )
}