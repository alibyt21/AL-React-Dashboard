import BusinessInformation from "./BusinessInformation";
export default function DataloadingOperations() {
  return (
    <>
      <div className="grid gap-5 grid-cols-3 ">
        <BusinessInformation informationCompany={"افراد"} />
        <BusinessInformation informationCompany={" اطلاعات تماس"} />
        <BusinessInformation informationCompany={"پرسنل واحد فناوری اطلاعات"} />
        <BusinessInformation informationCompany={"واحدهای سازمانی"} />
        <BusinessInformation informationCompany={"نیازمندی مخزن"} />
        <BusinessInformation informationCompany={"جستجوی سوابق"} />
        <BusinessInformation informationCompany={"پرسنل"} />
        <BusinessInformation informationCompany={"تغییرات واحد سازمانی"} />
        <BusinessInformation informationCompany={"سوابق جستجو"} />
      </div>
    </>
  );
}
