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
    'dusty-gray': {
        '50': '#f9f7f7',
        '100': '#f4eff0',
        '200': '#e9e2e4',
        '300': '#d7cacc',
        '400': '#c1abb1',
        '500': '#a68a91',
        '600': '#8e7079',
        '700': '#755b63',
        '800': '#634e56',
        '900': '#56454b',
        '950': '#2e2327',
    },'gray': {
        '50': '#f9fafb',
        '100': '#f3f4f6',
        '200': '#e5e7eb',
        '300': '#d1d5db',
        '400': '#9ca3af',
        '500': '#6b7280',
        '600': '#4b5563',
        '700': '#374151',
        '800': '#1f2937',
        '900': '#111827',
        '950': '#030712',
      },
    
    white: "#F6F6F6",
    black: "black",
    transparent: "transparent",
    inherit: "inherit",
    
    },
    extend: {
      boxShadow: {
        shadowBlack: '0px 0px 30px 0px rgba(0, 0, 0, 0.50)',
        shadowBlackSmall: '0px 0px 10px 0px rgba(0, 0, 0, 0.50)',
        shadowRed: '0px 0px 15px 0px rgba(155, 9, 38, 0.50)',
        shadowWhite: '0px 0px 15px 0px rgba(246, 246, 246, 0.40)',
      },
      backdropFilter: {
        blur60: 'blur(60px)',
      },
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      
      scrollbar: {
        hide: "scrollbar-width: none; scrollbar-color: transparent transparent;",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"),],
};
export default config;
