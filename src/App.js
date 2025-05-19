import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import userContext from "src/context/userContext";
import { useEffect, useState } from "react";

const router = createBrowserRouter(routes, {
  basename: process.env.PUBLIC_URL,
});

function App() {
  const [user, setUser] = useState({
    role: {
      role: "superAdmin",
      permissions: ["SUPER_USER_PERMISSIONS"]
    }
  });

  // GET PERMISSIONS ARRAY FROM BACKEND - HARDCODED
  const getUserPermissions = () => { }
  useEffect(() => {
    // getUserPermissions();
  }, [])


  return (
    <userContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </userContext.Provider>
  );
}

export default App;
