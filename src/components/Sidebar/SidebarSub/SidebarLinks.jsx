import SubItem from "./SubItem";

export default function SidebarLinks({ items }) {
  return (
    <nav className="flex flex-col gap-1 p-2 flex-1 overflow-hidden hover:overflow-y-auto font-normal">
      {items.map((item, index) => (
        <SubItem item={item} key={index} />
      ))}
    </nav>
  );
}
