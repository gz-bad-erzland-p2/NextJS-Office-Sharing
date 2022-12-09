// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'o-green': '#067A46',
                'green-dark': '#02522e',
                'o-white': '#ECE8E5',
                'o-mintgreen': '#7BC4A4'
            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif']
            }
        }
    },
    plugins: [],
};
