import { adminRoot } from "./config";
import { HiOutlineClipboardList } from "react-icons/hi";

const menuArray = [
  {
    icon: <HiOutlineClipboardList />,
    label: "داشبورد",
    to: `${adminRoot}/profile`,
    subs: [
      {
        icon: <HiOutlineClipboardList />,
        label: "حساب کاربری",
        to: `${adminRoot}/profile/account`,
        permission: "VIEW_PROFILE",
      },
      {
        icon: <HiOutlineClipboardList />,
        label: "پروفایل",
        to: `${adminRoot}/profile/details`,
        permission: "VIEW_PROFILE",
      },
      {
        icon: <HiOutlineClipboardList />,
        label: "ویرایش پروفایل",
        to: `${adminRoot}/profile/edit`,
        permission: "UPDATE_PROFILE",
      },
      {
        icon: <HiOutlineClipboardList />,
        label: "امنیت حساب",
        to: `${adminRoot}/profile/security`,
        permission: "CHANGE_PASSWORD",
      },
      {
        icon: <HiOutlineClipboardList />,
        label: "لاگ های حساب",
        to: `${adminRoot}/profile/user-log`,
        permission: "LOGS",
      },
      {
        icon: <HiOutlineClipboardList />,
        label: "sso دولت",
        to: "https://my.gov.ir/",
        newWindow: true,
      },
    ],
  },
  {
    icon: <HiOutlineClipboardList />,
    label: "سایه",
    to: `${adminRoot}/sayeh`,
    permission: "VIEW_SAYEH_DASHBOARD",
    subs: [
      {
        icon: <HiOutlineClipboardList />,
        label: "داشبورد",
        to: `${adminRoot}/sayeh/dashboard`,
        permission: "VIEW_SAYEH_DASHBOARD",
      },
      {
        label: "سازمان ها",
        to: `${adminRoot}/sayeh`,
        subs: [
          {
            icon: <HiOutlineClipboardList />,
            label: "موجودیت ها",
            to: `${adminRoot}/sayeh/identities`,
            permission: "VIEW_ACCOUNT",
          },
          {
            icon: <HiOutlineClipboardList />,
            label: "گروه ها",
            to: `${adminRoot}/sayeh/groups`,
            permission: "VIEW_GROUP",
          },
          {
            icon: <HiOutlineClipboardList />,
            label: "نقش های کاربری",
            to: `${adminRoot}/sayeh/roles`,
            permission: "VIEW_ROLE",
          },
        ],
      },
      {
        label: "سیستم های تعریف شده",
        to: `${adminRoot}/sayeh`,
        subs: [
          {
            icon: <HiOutlineClipboardList />,
            label: "منابع محافظت شده",
            to: `${adminRoot}/sayeh/protected-resources`,
            permission: "VIEW_PROTECTED_RESOURCE",
          },
          {
            icon: <HiOutlineClipboardList />,
            label: "کنترل دسترسی",
            to: `${adminRoot}/sayeh/access-policies`,
            permission: "VIEW_ACCESS_POLICY",
          },
        ],
      },
      {
        label: "menu.casLogs",
        icon: <HiOutlineClipboardList />,
        to: `${adminRoot}/sayeh`,
        subs: [
          {
            icon: <HiOutlineClipboardList />,
            label: "sayeh.login-logs",
            to: `${adminRoot}/sayeh/auth-logs`,
            permission: "VIEW_ADMIN_AUDIT_LOG",
          },
        ],
      },
    ],
  },
  {
    icon: <HiOutlineClipboardList />,
    label: "تست",
    to: `${adminRoot}/rozan`,
    permission: "VIEW_ROZAN_DASHBOARD",
  },
];
export default menuArray;


