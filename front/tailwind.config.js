/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                fadeSlide: {
                    "0%, 100%": { opacity: "0" },
                    "10%, 30%": { opacity: "1" },
                    "33.33%": { opacity: "0" },
                },
            },
            animation: {
                fadeSlide: "fadeSlide 9s infinite",
            },
        },
    },
    plugins: [],
};
