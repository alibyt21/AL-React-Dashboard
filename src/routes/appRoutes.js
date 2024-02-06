import Application from "src/views/app/Application";

export const appRoutes = [
  {
    path: "/app",
    element: <Application />,
    children: [
      {
        path: "contacts/:contactId",
        element: <div>Hello world!</div>,
      },
    ],
  },
];