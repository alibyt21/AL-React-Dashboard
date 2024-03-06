import ListOfDataStructures from "./ListOfDataStructures";
import CreateNewEntity from "./CreateNewEntity";
export default function QuickAccess() {
  return (
    <>
      <div>
        <h1 className="font-semibold  mt-3 mb-3"> دسترسی سریع</h1>
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
