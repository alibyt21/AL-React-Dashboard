/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                'al': 'rgba(0, 0, 0, 0.04) 0px 0px 40px, rgba(0, 0, 0, 0.04) 0px 0px 10px',
            },
            colors: {
                "primary-color": "var(--primary-color)",
                "secondary-color": "var(--secondary-color)",
            },
        },
        fontFamily: {
            sans: ["IRANSansWebFaNum", ...defaultTheme.fontFamily.sans],
        },

    },
    darkMode: 'class',
    plugins: [require("daisyui")],
};
