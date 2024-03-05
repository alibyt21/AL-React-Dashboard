export default function ListOfDataStructures({
  listOfDataStructures,
  seeListOfDataStructures,
}) {
  return (
    <>
      <div className="flex justify-start flex-col mt-3 bg-white border border-solid border-gray-200 rounded-2xl w-full p-6 ">
        <span className="font-semibold text-lg">{listOfDataStructures}</span>
        <span className="  text-gray-400 ">{seeListOfDataStructures}</span>
      </div>
    </>
  );
}
