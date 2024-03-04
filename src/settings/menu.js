import { adminRoot } from "./config";
import { HiOutlineClipboardList, HiOutlineNewspaper } from "react-icons/hi";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { LuImport, LuDownload } from "react-icons/lu";
import { VscSettings } from "react-icons/vsc";
import { BsDatabase } from "react-icons/bs";
import { TbMapSearch } from "react-icons/tb";
import { RiHistoryLine } from "react-icons/ri";
import { BiWrench } from "react-icons/bi";
import { GoTasklist } from "react-icons/go";
import { PiCubeDuotone } from "react-icons/pi";
import { PiTreeStructureDuotone } from "react-icons/pi";
import { CgDatabase } from "react-icons/cg";
import { PiMapTrifoldDuotone } from "react-icons/pi";
import { AiTwotoneSetting } from "react-icons/ai";


const menuArray = [
  {
    icon: <BsDatabase size={30} />,
    label: "داده‌های کسب و کار",
    to: `${adminRoot}/#`,
    subs: [
      {
        icon: <HiOutlineClipboardList />,
        label: "افراد",
        to: `${adminRoot}/profile/account`,
        permission: "VIEW_PROFILE",
      },
      {
        icon: <HiOutlineClipboardList />,
        label: "واحدهای سازمانی",
        to: `${adminRoot}/profile/details`,
        permission: "VIEW_PROFILE",
      },
      {
        icon: <TbMapSearch />,
        label: "جستجوی پیشرفته",
        to: `${adminRoot}/advanced-search`,
        permission: "LOGS",
      },
      {
        icon: <RiHistoryLine />,
        label: "سوابق جستجو",
        to: "https://my.gov.ir/",
        newWindow: true,
      },
    ],
  },
  {
    icon: <LuImport size={30} />,
    label: "بارگذاری داده",
    to: `${adminRoot}/sayeh`,
    permission: "VIEW_SAYEH_DASHBOARD",
    subs: [
      {
        icon: <LuDownload />,
        label: "بارگذاری داده",
        to: `${adminRoot}/sayeh/dashboard`,
        permission: "VIEW_SAYEH_DASHBOARD",
      },
      {
        icon: <LuDownload />,
        label: "بارگذاری تک رکورد",
        to: `${adminRoot}/sayeh`,
      },
      {
        label: "قوانین بارگذاری",
        icon: <BiWrench />,
        to: `${adminRoot}/sayeh`,

      },
      {
        label: "برنامه‌های بارگذاری",
        icon: <GoTasklist />,
        to: `${adminRoot}/sayeh`,
      },
      {
        label: "بارگذاری‌های زمانبندی شده",
        icon: <HiOutlineCalendarDays />,
        to: `${adminRoot}/sayeh`,
      }
    ],
  },
  {
    icon: <HiOutlineNewspaper size={30} />,
    label: "کاتالوگ داده",
    to: `${adminRoot}/rozan`,
    permission: "VIEW_ROZAN_DASHBOARD",
    subs: [
      {
        icon: <PiCubeDuotone />,
        label: "موجودیت",
        to: `${adminRoot}/entity`,
        permission: "VIEW_SAYEH_DASHBOARD",
      },
      {
        icon: <PiTreeStructureDuotone />,
        label: "ساختارداده",
        to: `${adminRoot}/sayeh`,
      },
      {
        label: "داده‌های پایه کسب و کار",
        icon: <CgDatabase />,
        to: `${adminRoot}/sayeh`,

      },
      {
        label: "کاتالوگ داده‌های پایه کسب و کار",
        icon: <PiMapTrifoldDuotone />,
        to: `${adminRoot}/sayeh`,
      },
    ],
  },
  {
    icon: <VscSettings size={30} />,
    label: "تنظیمات و فراداده‌ها",
    to: `${adminRoot}/rozan`,
    permission: "VIEW_ROZAN_DASHBOARD",
    subs: [
      {
        icon: <AiTwotoneSetting />,
        label: "تنظیمات محیطی",
        to: `${adminRoot}/sayeh/dashboard`,
        permission: "VIEW_SAYEH_DASHBOARD",

      },
      {
        icon: <AiTwotoneSetting />,
        label: "انواع داده پایه سیستمی",
        to: `${adminRoot}/sayeh`,
      },
      {
        icon: <AiTwotoneSetting />,
        label: "انواع تنظیمات",
        to: `${adminRoot}/sayeh`,

      },
      {
        icon: <AiTwotoneSetting />,
        label: "جدول تنظیمات ادمین",
        to: `${adminRoot}/sayeh`,
      },
    ],
  },
];
export default menuArray;


