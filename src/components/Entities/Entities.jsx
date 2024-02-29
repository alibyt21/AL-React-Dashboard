import React, { useState } from "react";
import NewTableEntities from "./NewTableEntities";
import YourTableEntities from "./YourTableEntities";
export default function NewEntities() {
  const [activeTab, setActiveTab] = useState("new");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div
        className={` w-[175px] h-[55px] rounded-[10px]  mr-[3px] flex justify-center items-center ${
          activeTab === "new" ? "bg-white" : "bg-[#f2f2f1]"
        }`}
        onClick={() => handleTabChange("new")}
      >
        موجودیت های جدید
      </div>
      <div
        className={`  w-[175px] h-[55px] rounded-[10px] mb-[-51px] mt-[-55px] mr-[185px]  flex justify-center items-center ${
          activeTab === "your" ? "bg-white" : "bg-[#f2f2f1]"
        }`}
        onClick={() => handleTabChange("your")}
      >
        موجودیت های شما
      </div>
      <div className=" bg-white w-[1001px] h-[420px] rounded-[20px] border-2 border-white mt-[38px]">
        <div className="mt-[20px]"></div>
        {activeTab === "new" && <NewTableEntities />}
        {activeTab === "your" && <YourTableEntities />}
      </div>
    </>
  );
}
