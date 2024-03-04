import { useState } from "react";
import BusinessData from "../Management/SiteManagement/BusinessData";
import DataloadingOperations from "../Management/SiteManagement/DataloadingOperations";
import DataCatalog from "../Management/SiteManagement/DataCatalog";
import MetadataSettings from "../Management/SiteManagement/MetadataSettings";
export default function WebsiteManagement() {
  const [activeTab, setActiveTab] = useState("businessData");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <h1 className="font-semibold  mt-3 mb-3">مدیریت وبگاه</h1>
      <div className="flex gap-2">
        <div
          className={`w-fit p-5 rounded-xl  flex justify-center items-center border border-solid border-gray-200 ${
            activeTab === "businessData" ? "bg-white" : "bg-[#f2f2f1]"
          }`}
          onClick={() => handleTabChange("businessData")}
        >
          داده های کسب و کار
        </div>
        <div
          className={`w-fit p-5 rounded-xl flex justify-center items-center border border-solid border-gray-200 ${
            activeTab === "dataLoading" ? "bg-white" : "bg-[#f2f2f1]"
          }`}
          onClick={() => handleTabChange("dataLoading")}
        >
          عملیات بارگذاری داده
        </div>
        <div
          className={`w-fit p-5 rounded-xl flex justify-center items-center border border-solid border-gray-200 ${
            activeTab === "dataCatalog" ? "bg-white" : "bg-[#f2f2f1]"
          }`}
          onClick={() => handleTabChange("dataCatalog")}
        >
          کاتالوگ داده
        </div>
        <div
          className={`w-fit p-5 rounded-xl flex justify-center items-center border border-solid border-gray-200 ${
            activeTab === "metadataSettings" ? "bg-white" : "bg-[#f2f2f1]"
          }`}
          onClick={() => handleTabChange("metadataSettings")}
        >
          تنظیمات فراداده ها
        </div>
      </div>
      <div className=" bg-white w-fit p-6 rounded-2xl border border-solid border-gray-200">
        <div className="mt-[20px]"></div>
        {activeTab === "businessData" && <BusinessData />}
        {activeTab === "dataLoading" && <DataloadingOperations />}
        {activeTab === "dataCatalog" && <DataCatalog />}
        {activeTab === "metadataSettings" && <MetadataSettings />}
      </div>
    </>
  );
}
