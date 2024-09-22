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
        "ip-dark-violet": "var(--dark-violet)",
        "ip-grayish-blue": "var(--grayish-blue)",
        "ip-very-dark-violet": "var(--very-dark-violet)",
        "ip-dark-grayish-violet": "var(--dark-grayish-violet)",
        "ip-very-light-gray": "var(--very-light-gray)",
      },
      fontFamily: {
        heading: "var(--heading)",
        copy: "var(--copy)",
      },
      fontWeight: {
        bold: "var(--bold)",
        normal: "var(--normal)",
      },
    },
  },
  plugins: [],
};
export default config;
