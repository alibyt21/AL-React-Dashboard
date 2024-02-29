import Row from "./Row";
import Column from "./Column";
import { FaEllipsisH } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export default function NewTableEntities() {
  function more() {
    console.log("more Items");
  }
  return (
    <>
      <div className="">
        <Row type={1}>
          <Column type={1}>شناسه</Column>
          <Column type={1}>نام موجودیت</Column>
          <Column type={1}>نام مدل</Column>
          <Column type={1}>سامانه</Column>
          <Column type={1}>ایجاد کننده</Column>
          <Column type={1}>تعداد رکورد</Column>
          <Column> </Column>
        </Row>
        <Row>
          <Column type={2}>#12345</Column>
          <Column type={2} color={1}>
            موجودیت شماره یک
          </Column>
          <Column type={2}> نامشخص</Column>
          <Column type={2}>سامانه های اطلاعاتی A</Column>
          <Column type={2}>سپهران بابایی</Column>
          <Column type={2}> 123</Column>
          <Column type={2}>
            <FaEllipsisH className="text-[#e5e5e5]" onClick={more} />
            <div className="mr-[20px]"></div>
            <FaChevronLeft className="text-[#e5e5e5]" />
          </Column>
        </Row>
        <Row>
          <Column type={2}>#12345</Column>
          <Column type={2} color={1}>
            موجودیت شماره یک
          </Column>
          <Column type={2}> نامشخص</Column>
          <Column type={2}>سامانه های اطلاعاتی A</Column>
          <Column type={2}>سپهران بابایی</Column>
          <Column type={2}> 123</Column>
          <Column type={2}>
            <FaEllipsisH className="text-[#e5e5e5]" onClick={more} />
            <div className="mr-[20px]"></div>
            <FaChevronLeft className="text-[#e5e5e5]" />
          </Column>
        </Row>
        <Row>
          <Column type={2}>#12345</Column>
          <Column type={2} color={1}>
            موجودیت شماره یک
          </Column>
          <Column type={2}> نامشخص</Column>
          <Column type={2}>سامانه های اطلاعاتی A</Column>
          <Column type={2}>سپهران بابایی</Column>
          <Column type={2}> 123</Column>
          <Column type={2}>
            <FaEllipsisH className="text-[#e5e5e5]" onClick={more} />
            <div className="mr-[20px]"></div>
            <FaChevronLeft className="text-[#e5e5e5]" />
          </Column>
        </Row>
        <Row>
          <Column type={2}>#12345</Column>
          <Column type={2} color={1}>
            موجودیت شماره یک
          </Column>
          <Column type={2}> نامشخص</Column>
          <Column type={2}>سامانه های اطلاعاتی A</Column>
          <Column type={2}>سپهران بابایی</Column>
          <Column type={2}> 123</Column>
          <Column type={2}>
            <FaEllipsisH className="text-[#e5e5e5]" onClick={more} />
            <div className="mr-[20px]"></div>
            <FaChevronLeft className="text-[#e5e5e5]" />
          </Column>
        </Row>
        <Row>
          <Column type={2}>#12345</Column>
          <Column type={2} color={1}>
            موجودیت شماره یک
          </Column>
          <Column type={2}> نامشخص</Column>
          <Column type={2}>سامانه های اطلاعاتی A</Column>
          <Column type={2}>سپهران بابایی</Column>
          <Column type={2}> 123</Column>
          <Column type={2}>
            <FaEllipsisH className="text-[#e5e5e5]" onClick={more} />
            <div className="mr-[20px]"></div>
            <FaChevronLeft className="text-[#e5e5e5]" />
          </Column>
        </Row>
      </div>
    </>
  );
}
