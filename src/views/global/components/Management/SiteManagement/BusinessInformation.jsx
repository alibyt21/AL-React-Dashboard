import { WiDirectionLeft } from "react-icons/wi";
export default function BusinessInformation({ informationCompany }) {
  return (
    <>
      <div className="flex justify-start  items-center border border-solid border-gray-200 rounded-2xl w-full p-6 hover:bg-[#4070c0] hover:text-white ">
        <span className="flex">
          {informationCompany} <WiDirectionLeft className="text-white text-2xl" />
        </span>
      </div>
    </>
  );
}
