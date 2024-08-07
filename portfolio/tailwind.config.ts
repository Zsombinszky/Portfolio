import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightCoral: '#ff7043',
        darkGray: '#333333',
        lightGray: '#f0f0f0',
        lightOrange: '#ffa726',
        darkModeGray: '#1a1a1a',
        darkModeLightGray: '#2c2c2c',
      },
    },
  },
  plugins: [],
};
export default config;
