// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}", "./core/components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            minWidth: {
                '0': '280px',
            },
            colors: {
                'office-green': {
                    '50': '#f3f8f6',
                    '100': '#e6f2ed',
                    '200': '#c1ded1',
                    '300': '#9bcab5',
                    '400': '#53b78b',
                    '500': '#067a46',
                    '600': '#056e3f',
                    '700': '#055c35',
                    '800': '#04492a',
                    '900': '#033c22'
                },
                'office-gray': {
                    '50': '#fefefe',
                    '100': '#fdfdfc',
                    '200': '#faf9f9',
                    '300': '#f7f6f5',
                    '400': '#f2efed',
                    '500': '#ECE8E5',
                    '600': '#d4d1ce',
                    '700': '#b1aeac',
                    '800': '#8e8b89',
                    '900': '#747270'
                },
            },
            /*fontFamily: {
                sans: ['var(--font-inter)'],
            },*/
            transitionProperty: {
                'width': 'width',
            }
        }
    },
    plugins: [
        require("@tailwindcss/forms")({
            strategy: 'class',
        }),
    ],
};
