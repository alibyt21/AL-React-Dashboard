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
      <div className="flex gap-2">
        <div
          className={`w-fit p-5 rounded-xl  flex justify-center items-center ${
            activeTab === "new" ? "bg-white" : "bg-[#f2f2f1]"
          }`}
          onClick={() => handleTabChange("new")}
        >
          موجودیت های جدید
        </div>
        <div
          className={`w-fit p-5 rounded-xl flex justify-center items-center ${
            activeTab === "your" ? "bg-white" : "bg-[#f2f2f1]"
          }`}
          onClick={() => handleTabChange("your")}
        >
          موجودیت های شما
        </div>
      </div>
      <div className=" bg-white w-fit p-6 rounded-xl border-2 border-white">
        <div className="mt-[20px]"></div>
        {activeTab === "new" && <NewTableEntities />}
        {activeTab === "your" && <YourTableEntities />}
      </div>
    </>
  );
}
