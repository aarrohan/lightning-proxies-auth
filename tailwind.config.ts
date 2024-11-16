import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary-color-rgb) / <alpha-value>)",
        accent: "rgb(var(--accent-color-rgb) / <alpha-value>)",
        "accent-dark": "rgb(var(--accent-dark-color-rgb) / <alpha-value>)",
        "white-dark": "rgb(var(--white-dark-color-rgb) / <alpha-value>)",
        "off-white": "rgb(var(--off-white-color-rgb) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

export default config;
