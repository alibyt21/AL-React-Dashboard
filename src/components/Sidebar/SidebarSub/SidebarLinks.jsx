import SubItem from "./SubItem";

export default function SidebarLinks() {
  return (
    <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
      <ul className="p-2 overflow-hidden">
        <SubItem />
      </ul>
    </nav>
  );
}
