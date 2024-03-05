import ListOfDataStructures from "./ListOfDataStructures";
import CreateNewEntity from "./CreateNewEntity";
export default function QuickAccess() {
  return (
    <>
      <div>
        <div className="flex gap-5 flex-col-reverse xl:flex-row">
          <CreateNewEntity createNewEntity="ساخت موجودیت جدید " />
          <ListOfDataStructures
            listOfDataStructures="لیست ساختار داده"
            seeListOfDataStructures="مشاهده لیست ساختار داده"
          />
          <CreateNewEntity createNewEntity="ساخت موجودیت جدید " />
          <CreateNewEntity createNewEntity="ساخت موجودیت جدید " />
          <CreateNewEntity createNewEntity="ساخت موجودیت جدید " />
        </div>
      </div>
    </>
  );
}
