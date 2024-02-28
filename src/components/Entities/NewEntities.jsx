import TableEntities from "./TableEntities";
export default function NewEntities() {
  return (
    <>
    <div className=" bg-white w-[175px] h-[55px] rounded-[10px] mb-[-52px] mr-[3px] flex justify-center items-center">
      موجودیت های جدید
    </div>
      <div className=" bg-white w-[1001px] h-[420px] rounded-[20px] border-2 border-white mt-[38px]">
        <div className="mt-[20px]"></div>
        <TableEntities/>
      </div>
    </>
  );
}
