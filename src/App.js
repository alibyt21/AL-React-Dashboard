import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import userPermissionContext from "src/context/userPermissionContext";
import { useEffect, useState } from "react";

const router = createBrowserRouter(routes, {
  basename: process.env.PUBLIC_URL,
});

function App() {
  const [userPermissions, setUserPermissions] = useState([]);

  // GET PERMISSIONS ARRAY FROM BACKEND - HARDCODED
  const getUserPermissions = () => {
    setUserPermissions(["VIEW_PROFILE"])
  }
  useEffect(() => {
    getUserPermissions();
  }, [])


  return (
    <userPermissionContext.Provider value={userPermissions}>
      <RouterProvider router={router} />
    </userPermissionContext.Provider>
  );
}

export default App;
