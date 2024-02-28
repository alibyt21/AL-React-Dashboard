import { VscTypeHierarchySuper } from "react-icons/vsc";
export default function Systems({ data1, data2, data3 }) {
  return (
    <>
      <div className=" flex  flex-col bg-white  border-2  border-[#bebebe] rounded-[30px] w-[490px]  h-[130.5px]  ">
        <div className="pr-[12px] mt-[-104px] mb-[15px]">
          <div className="flex justify-end  ml-[27px] mt-[115.5px] mb-[26.5px] ">
            <div className=" flex  bg-[#ebf1f8] rounded-[10px] w-[56.5px] h-[56.5px] justify-center items-center">
              <VscTypeHierarchySuper className=" rotate-90 text-[#3e70c2]" />
            </div>
          </div>
          <div className="mt-[-125px]">
            <p className="mb-[7px] mt-[60px]">{data1}</p>
            <h1 className="mb-[10px] text-[20px]">{data2}</h1>
            <div className="bg-[#ebf1f8] rounded-[10px] w-[178.5px] h-[30px] flex justify-start items-center ">
              <p className=" text-[#3e70c2] mr-[10px]">{data3}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
