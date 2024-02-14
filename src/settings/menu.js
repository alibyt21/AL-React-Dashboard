import { adminRoot } from "./config";

const menuArray = [
  {
    id: "profile",
    icon: "simple-icon-user",
    label: "داشبورد",
    to: `${adminRoot}/profile`,
    CustomSub: true,
    subs: [
      {
        icon: "simple-icon-home",
        label: "profile.account",
        to: `${adminRoot}/profile/account`,
        permission: "VIEW_PROFILE",
      },
      {
        icon: "simple-icon-user",
        label: "profile.viewProfile",
        to: `${adminRoot}/profile/details`,
        permission: "VIEW_PROFILE",
      },
      {
        icon: "simple-icon-note",
        label: "profile.edit",
        to: `${adminRoot}/profile/edit`,
        permission: "UPDATE_PROFILE",
      },
      {
        icon: "iconsminds-finger-print",
        label: "profile.security",
        to: `${adminRoot}/profile/security`,
        permission: "CHANGE_PASSWORD",
      },
      {
        icon: "simple-icon-eye",
        label: "profile.logs",
        to: `${adminRoot}/profile/user-log`,
        permission: "LOGS",
      },
      {
        icon: "simple-icon-share-alt",
        label: "profile.sso_gov",
        to: "https://my.gov.ir/",
        newWindow: true,
      },
    ],
  },
  {
    id: "sayeh",
    icon: "simple-icon-briefcase",
    label: "سایه",
    to: `${adminRoot}/sayeh`,
    permission: "VIEW_SAYEH_DASHBOARD",
    CustomSub: true,
    subs: [
      {
        icon: "simple-icon-people",
        label: "sayeh.dashboard",
        to: `${adminRoot}/sayeh/dashboard`,
        permission: "VIEW_SAYEH_DASHBOARD",
      },
      {
        id: "pages-authorization",
        label: "menu.organizing",
        to: `${adminRoot}/sayeh`,
        subs: [
          {
            icon: "simple-icon-user",
            label: "sayeh.identities",
            to: `${adminRoot}/sayeh/identities`,
            permission: "VIEW_ACCOUNT",
          },
          {
            icon: "simple-icon-briefcase",
            label: "sayeh.groups",
            to: `${adminRoot}/sayeh/groups`,
            permission: "VIEW_GROUP",
          },
          {
            icon: "simple-icon-lock",
            label: "sayeh.roles",
            to: `${adminRoot}/sayeh/roles`,
            permission: "VIEW_ROLE",
          },
        ],
      },
      {
        id: "pages-authorization",
        label: "menu.systems",
        to: `${adminRoot}/sayeh`,
        subs: [
          {
            icon: "simple-icon-organization",
            label: "sayeh.protected-resources",
            to: `${adminRoot}/sayeh/protected-resources`,
            permission: "VIEW_PROTECTED_RESOURCE",
          },
          {
            icon: "simple-icon-shield",
            label: "sayeh.access-policies",
            to: `${adminRoot}/sayeh/access-policies`,
            permission: "VIEW_ACCESS_POLICY",
          },
        ],
      },
      {
        id: "pages-authorization",
        label: "menu.casLogs",
        to: `${adminRoot}/sayeh`,
        subs: [
          {
            icon: "simple-icon-user-following",
            label: "sayeh.login-logs",
            to: `${adminRoot}/sayeh/auth-logs`,
            permission: "VIEW_ADMIN_AUDIT_LOG",
          },
        ],
      },
    ],
  },
  {
    id: "rozan",
    icon: "simple-icon-settings",
    label: "روزن",
    to: `${adminRoot}/rozan`,
    CustomSub: true,
    permission: "VIEW_ROZAN_DASHBOARD",
    subs: [
      {
        icon: "simple-icon-settings",
        label: "sayeh.dashboard",
        to: `${adminRoot}/rozan/dashboard`,
        permission: "VIEW_ROZAN_DASHBOARD",
      },
      {
        id: "pages-authorization",
        label: "rozan.serviceOperation",
        to: `${adminRoot}/rozan`,
        subs: [
          {
            icon: "simple-icon-organization",
            label: "menu.services",
            to: `${adminRoot}/rozan/services`,
            permission: "VIEW_BUSINESS_SERVICE",
          },
          {
            icon: "simple-icon-layers",
            label: "sayeh.protected-resources-category",
            to: `${adminRoot}/rozan/protected-resource-categories`,
            permission: "VIEW_SUBCATALOG",
          },
        ],
      },
      {
        id: "pages-authorization",
        label: "menu.connections",
        to: `${adminRoot}/rozan`,
        subs: [
          {
            icon: "simple-icon-bell",
            label: "sayeh.announcements",
            to: `${adminRoot}/rozan/announcements`,
            permission: "VIEW_ANNOUNCEMENT",
          },
          // {
          //   icon: "iconsminds-column",
          //   label: "sayeh.regulation",
          //   to: `${adminRoot}/rozan/regulations`,
          //   permission: "VIEW_REGULATIONS",
          // },
        ],
      },
      {
        id: "pages-authorization",
        label: "menu.control",
        to: `${adminRoot}/rozan`,
        subs: [
          {
            icon: "simple-icon-eye",
            label: "sayeh.action-logs",
            to: `${adminRoot}/rozan/action-logs`,
            permission: "VIEW_ADMIN_ACTION_LOG",
          },
          {
            icon: "simple-icon-key",
            label: "sayeh.signin-logs",
            to: `${adminRoot}/rozan/signin-logs`,
            permission: "VIEW_ADMIN_PORTAL_AUDIT_LOG",
          },
        ],
      },
    ],
  },
];
export default menuArray;