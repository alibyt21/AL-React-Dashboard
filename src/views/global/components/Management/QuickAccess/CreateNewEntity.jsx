export default function CreateNewEntity({ createNewEntity }) {
  return (
    <>
      <div className="flex flex-col justify-start  mt-3 border border-solid border-gray-200 bg-white rounded-2xl w-full p-6 ">
        <span className="flex font-semibold text-lg">{createNewEntity}</span>
        <span className="  text-gray-400 ">{createNewEntity}</span>
      </div>
    </>
  );
}
