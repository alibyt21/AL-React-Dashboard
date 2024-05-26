export const homeURL =
    process.env.NODE_ENV !== "development"
        ? "https://my.behdasht.gov.ir"
        : `http://localhost:${process.env.REACT_APP_PORT}/user/login`;

//
export const adminRoot = "/app";

// direction
export const defaultDirection = "rtl"; // rtl or ltr

// language
export const defaultLanguage = "fa";

// sidebar
export const defaultSidebarState = 2; // 0 == both is close , 1 == main is open, 2 == both is open;
export const defaultSidebarMainWidth = 90; // in pixels
export const defaultSidebarSubWidth = 240; // in pixels
export const moveBoth = false; // false , true
export const mainMenuHasPage = false; // false , true --- by clicking on mainMenu items shows a new page or not

// header
export const defaultHeaderHeight = 60; // in pixels
