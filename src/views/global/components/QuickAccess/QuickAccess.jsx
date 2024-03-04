import ListOfDataStructures from "../QuickAccess/ListOfDataStructures"
import CreateNewEntity from "../QuickAccess/CreateNewEntity";
export default function QuickAccess() {
  return (
    <>
      <div>
        <div className="flex gap-5">
          <CreateNewEntity createNewEntity="ساخت موجودیت جدید " />
          <ListOfDataStructures listOfDataStructures="لیست ساختار داده" seeListOfDataStructures="مشاهده لیست ساختار داده" />
          <CreateNewEntity createNewEntity="ساخت موجودیت جدید " />
          <CreateNewEntity createNewEntity="ساخت موجودیت جدید " />
          <CreateNewEntity createNewEntity="ساخت موجودیت جدید " />
        </div>
      </div>
    </>
  );
}
