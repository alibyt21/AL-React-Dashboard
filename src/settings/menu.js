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
        label: "بانک مشاغل",
        to: `${adminRoot}/#`,
        subs: [
            {
                icon: <HiOutlineClipboardList />,
                label: "افراد",
                to: `${adminRoot}`,
                permission: "VIEW_PROFILE",
            },
            {
                icon: <HiOutlineClipboardList />,
                label: "واحدهای سازمانی",
                to: `${adminRoot}`,
                permission: "VIEW_PROFILE",
            },
            {
                icon: <TbMapSearch />,
                label: "مشاغل",
                to: `${adminRoot}`,
                permission: "LOGS",
            },
            {
                icon: <RiHistoryLine />,
                label: "سوابق",
                to: `${adminRoot}/logs`,
                newWindow: true,
            },
        ],
    },
    {
        icon: <HiOutlineNewspaper size={30} />,
        label: "سازمان‌ها",
        to: `${adminRoot}/rozan`,
        permission: "VIEW_ROZAN_DASHBOARD",
        subs: [
            {
                icon: <PiCubeDuotone />,
                label: "سازمان‌های تحلیل شده",
                to: `${adminRoot}/sayeh/dashboard`,
                permission: "VIEW_SAYEH_DASHBOARD",
            },
            {
                icon: <PiTreeStructureDuotone />,
                label: "سازمان‌های تحلیل نشده",
                to: `${adminRoot}/sayeh`,
            },
            {
                label: "مشخصات سازمان",
                icon: <CgDatabase />,
                to: `${adminRoot}/sayeh`,
            }
        ],
    },
    {
        icon: <VscSettings size={30} />,
        label: "تنظیمات",
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
                label: "ویرایش پروفایل",
                to: `${adminRoot}/sayeh`,
            },
            {
                icon: <AiTwotoneSetting />,
                label: "تنظیمات کلیدی",
                to: `${adminRoot}/sayeh`,
            }
        ],
    },
];
export default menuArray;
