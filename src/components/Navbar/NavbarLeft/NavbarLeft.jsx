import ToggleSidebarButton from "./ToggleSidebarButton";

export default function NavbarLeft() {
  return (
    <div className="flex items-center gap-3">
      <span className="p-2 text-xl font-semibold tracking-wider uppercase lg:hidden">
        {/* تحلیل مشاغل */}
      </span>
      {/* <!-- Toggle sidebar button --> */}
      <ToggleSidebarButton />
    </div>
  );
}
