// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'o-green': '#77893F',
                'o-green-light': '#067A46',
                'o-white': '#ECE8E5',
                'o-gray': '#D9D9D9'
            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif']
            }
        }
    },
    plugins: [],
};
