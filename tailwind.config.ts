import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {'burgundy': {
        '50': '#ffeff2',
        '100': '#ffdce3',
        '200': '#ffbfcc',
        '300': '#ff93a8',
        '400': '#ff5577',
        '500': '#ff204c',
        '600': '#ff0033',
        '700': '#da002b',
        '800': '#9b0926',
        '900': '#6E061B',
        '950': '#460411',
    },
    'shark': {
        '50': '#f6f7f9',
        '100': '#ededf1',
        '200': '#d6d9e1',
        '300': '#b2b8c7',
        '400': '#8993a7',
        '500': '#6a758d',
        '600': '#555d74',
        '700': '#464d5e',
        '800': '#3c4150',
        '900': '#353945',
        '950': '#1f2128',
    },
    white: "white",
    black: "black",
    transparent: "transparent",
    inherit: "inherit",
    
    },
    extend: {
      boxShadow: {
        shadowBlack: '0px 0px 30px 0px rgba(0, 0, 0, 0.50)',
        shadowRed: '0px 0px 15px 0px rgba(155, 9, 38, 0.50)',
      },
      backdropFilter: {
        blur60: 'blur(60px)',
      },
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
