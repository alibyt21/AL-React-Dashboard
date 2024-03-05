import Systems from "../InformationSystem/Systems";
export default function InformationSystemsM() {
  return (
    <>
      <div className="flex-col-reverse xl:grid gap-5 grid-cols-3">
        <Systems
          informationSystems="سامانه های اطلاعاتی A"
          totalEntities="تعداد کل موجودیت ها"
          entityGrowth="32% رشد موجودیت"
        />
        <Systems
          informationSystems="سامانه های اطلاعاتی A"
          totalEntities="تعداد کل موجودیت ها"
          entityGrowth="32% رشد موجودیت"
        />
        <Systems
          informationSystems="سامانه های اطلاعاتی A"
          totalEntities="تعداد کل موجودیت ها"
          entityGrowth="32% رشد موجودیت"
        />
      </div>
    </>
  );
}
