// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'o-green': '#77893F',
                'o-white': '#ECE8E5'
            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif']
            }
        }
    },
    plugins: [],
};
