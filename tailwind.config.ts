import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-white": "#F9F9F9",
        "primary-light-blue": "#FBFEFF",
        "primary-blue-dark": "#0D2C54",
        "primary-blue": "#9AEFFE",
        "primary-purple": "#9e29c7",
        "primary-pink": "#f40ea7",
        "primary-dark-gray": {
          100: "#F0F5F4",
          500: "#647495",
          800: "#1F1F22",
        },
        "primary-dark-purple": "#210054",
        "primary-normal-purple": "#882DFF",
        "primary-light-purple": "#C396FF",
        "primary-extra-light-purple": "#EED8FC",
      },
      fontFamily: {
        "raleway": ['var(--font-raleway)'],
        "poppins": ['var(--font-poppins)'],
        "lexend": ['var(--font-lexend)'],
      },
      boxShadow: {
        "nav-shadow": "0 1px 3px rgba(3,0,71,.09)",
        "purple-bottom-right": '0px 5px 20px rgba(158, 41, 199, 0.25), 5px 5px 20px rgba(158, 41, 199, 0.25)',
        "card-sm": "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        "card-shadow-border": "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
