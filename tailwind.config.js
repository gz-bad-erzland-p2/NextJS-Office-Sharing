// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        minWidth: {
            '0': '420px',
        },
        extend: {
            colors: {
                'o-green': '#067A46',
                'green-dark': '#02522e',
                'o-white': '#ECE8E5',
                'o-mintgreen': '#7BC4A4',
                'o-green-light': '#067A46',
                'o-gray': '#D9D9D9',
                'o-gray-light': '#ECE8E5'
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
            },
            transitionProperty: {
                'width': 'width',
            }
        }
    },
    plugins: [],
};
