import ToggleSidebarButton from "./ToggleSidebarButton";

export default function NavbarLeft() {
  return (
    <div className="flex items-center gap-3">
      {/* <!-- Toggle sidebar button --> */}
      <ToggleSidebarButton />
    </div>
  );
}
