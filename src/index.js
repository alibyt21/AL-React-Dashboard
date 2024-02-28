import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import(`./assets/css/sass/themes/theme1.scss`)
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IconContext } from "react-icons";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <IconContext.Provider value={{ size: "24" }}>
    {/* <React.StrictMode> */}
      <App />
      <ToastContainer position="bottom-left"/>
    {/* </React.StrictMode> */}
  </IconContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
