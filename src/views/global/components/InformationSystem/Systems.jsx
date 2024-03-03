import { VscTypeHierarchySuper } from "react-icons/vsc";

export default function Systems({
  informationSystems,
  totalEntities,
  entityGrowth,
}) {
  return (
    <>
      <div className="w-full  flex gap-5 flex-col-reverse xl:flex-row p-6 pb-8 bg-white border border-solid border-gray-200 rounded-2xl mb-3">
        <div className="w-full flex flex-col gap-4">
          <span>{informationSystems}</span>
          <span className="font-semibold text-lg">{totalEntities}</span>
          <div>
            <span className="bg-blue 100 p-2 rounded-xl bg-blue-100 text-blue-500">
              {entityGrowth}
            </span>
          </div>
        </div>
        <div className="w-full flex justify-start xl:justify-end">
          <div className="inline-flex justify-center items-start">
            <div className="flex items-start bg-blue-100 p-5 rounded-xl">
              <VscTypeHierarchySuper className="rotate-90 text-[#3e70c2]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
