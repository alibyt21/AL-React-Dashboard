import { adminRoot } from "./config";
import { HiOutlineClipboardList, HiOutlineNewspaper } from "react-icons/hi";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { LuBrainCircuit, LuDownload } from "react-icons/lu";
import { TbDatabaseCog } from "react-icons/tb";
import { VscSettings } from "react-icons/vsc";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbMapSearch } from "react-icons/tb";
import { RiGitBranchLine, RiHistoryLine } from "react-icons/ri";
import { BiHome } from "react-icons/bi";
import { BiWrench } from "react-icons/bi";
import { GoTasklist } from "react-icons/go";
import { PiCubeDuotone } from "react-icons/pi";
import { PiTreeStructureDuotone } from "react-icons/pi";
import { CgDatabase } from "react-icons/cg";
import { PiMapTrifoldDuotone } from "react-icons/pi";
import { AiTwotoneSetting } from "react-icons/ai";
import { PiGitPullRequestDuotone } from "react-icons/pi";
import { PiGraphDuotone } from "react-icons/pi";
import PublicView from "src/views/PublicView";
import { Outlet } from "react-router-dom";
import Login from "src/views/user/Login";
import Denied from "src/views/user/Denied";
import Home from "src/views/global/Home";

// routes create based on this array
const menuArray = [
    {
        path: "/",
        element: <PublicView />,
        permission: "VIEW_PROFILE",
        subs: [
            {
                path: "",
                element: <Home />,
                permission: "VIEW_PROFILE",
            },
        ]
    },
    {
        icon: <LuLayoutDashboard size={30} />,
        label: "پیشخوان",
        path: `${adminRoot}/dashboard`,
        inMenu: true,
        element: <PublicView />,
        permission: "VIEW_PROFILE",
        isProtected: false,
        subs: [
            {
                icon: <BiHome />,
                label: "صفحه اصلی",
                path: `${adminRoot}/dashboard`,
                element: <Home />,
                inMenu: true,
                permission: "VIEW_PROFILE",
            },
            {
                icon: <LuDownload />,
                label: "بارگذاری داده",
                path: `${adminRoot}/dashboard/import-data`,
                element: <Outlet />,
                inMenu: true,
                permission: "VIEW_PROFILE",
            },
            {
                icon: <TbMapSearch />,
                label: "جستجوی پیشرفته",
                path: `advanced-search`,
                inMenu: true,
                permission: "VIEW_PROFILE",
            },
            {
                icon: <RiHistoryLine />,
                label: "سوابق جستجو",
                path: "https://my.gov.ir/",
                inMenu: true,
                newWindow: true,
                permission: "VIEW_PROFILE",
            },
        ],
    },
    {
        icon: <TbDatabaseCog size={30} />,
        label: "مدیریت مخازن",
        path: `${adminRoot}/management`,
        inMenu: true,
        element: <PublicView />,
        permission: "VIEW_PROFILE",
    },
    {
        icon: <LuBrainCircuit size={30} />,
        label: "یادگیری ماشین",
        inMenu: true,
        path: `${adminRoot}/machine-learning`,
        subs: [],
        permission: "VIEW_PROFILE",
    },
    {
        icon: <VscSettings size={30} />,
        label: "تنظیمات",
        path: `${adminRoot}/setting`,
        permission: "VIEW_PROFILE",
        inMenu: true,
        subs: [
            {
                icon: <AiTwotoneSetting />,
                label: "تنظیمات محیطی",
                path: ``,
                inMenu: true,
                permission: "VIEW_PROFILE",
            },
            {
                icon: <AiTwotoneSetting />,
                label: "انواع داده پایه سیستمی",
                path: ``,
                inMenu: true,
                permission: "VIEW_SAYEH_DASHBOARD",
            },
            {
                icon: <AiTwotoneSetting />,
                label: "انواع تنظیمات",
                path: ``,
                inMenu: true,
                permission: "VIEW_PROFILE",
            },
        ],
    },
    {
        path: "/user/",
        element: <Outlet />,
        permission: "VIEW_PROFILE",
        subs: [
            {
                path: "login/",
                element: <Login />,
                permission: "VIEW_PROFILE",
            },
            {
                path: "register/",
                element: <Login />,
                permission: "VIEW_PROFILE",
            },
            {
                path: "denied/",
                element: <Denied />,
                permission: "VIEW_PROFILE",
            },
        ],
    },
];
export default menuArray;
