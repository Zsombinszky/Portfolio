import type {Config} from "tailwindcss";
import fluid, {extract, screens, fontSize} from 'fluid-tailwind'

const config: Config = {
    content: {
        files: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
            "./pages/**/*.{js,ts,jsx,tsx,mdx}",
            "./components/**/*.{js,ts,jsx,tsx,mdx}",
            "./app/**/*.{js,ts,jsx,tsx,mdx}",
        ],
        extract
    },
    theme: {
        extend: {
            colors: {
                color: {
                    1: "#AC6AFF",
                    2: "#FFC876",
                    3: "#FF776F",
                    4: "#7ADB78",
                    5: "#858DFF",
                    6: "#FF98E2",
                    7: '#7b2ff7',
                    8: '#1570EF',
                    9: '#4B0082',
                    10: '#2BA7FF'
                },
                stroke: {
                    1: "#26242C",
                },
                n: {
                    1: "#FFFFFF",
                    2: "#CAC6DD",
                    3: "#ADA8C3",
                    4: "#757185",
                    5: "#3F3A52",
                    6: "#252134",
                    7: "#15131D",
                    8: "#0E0C15",
                    9: "#474060",
                    10: "#43435C",
                    11: "#1B1B2E",
                    12: "#2E2A41",
                    13: "#6C7275",
                },
                hoverOrange: '#ff7e5f',
                lightCoral: '#ff7043',
                darkGray: '#333333',
                lightGray: '#f0f0f0',
                lightOrange: '#ffa726',
                darkModeGray: '#1a1a1a',
                darkModeLightGray: '#2c2c2c',
                skyBlue: '#BADEFE',
                skyDarkBlue: '#8BB4E0',
                treeGreen: '#E0E41E',
                treeYellowishGreen: '#EBE922',
                treeDarkGreen: '#A0AD4B',
                planetGreen: '#23F0C7',
            },
        },
        screens,
        fontSize
    },
    plugins: [
        require('tailwind-scrollbar-hide'),
        fluid,
    ],
};

export default config;


