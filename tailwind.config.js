/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "seashell": "#fff5ed",
        "salmon": "#f58367",
        "raisin-black": "#231f20",
        "silver": "#b2b2b2",
      },
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
      },
      fontSize: {
        title: ["24px", "110%"],
        subtitle: ["20px", "110%"],
        h1: ["24px", "110%"],
        h2: ["16px", "150%"],
        text: ["16px", "150%"],
      },
      fontWeight: {
        extrabold: 900,
        bold: 700,
        semibold: 600,
        medium: 500,
        regular: 400,
      },
    },
  },
  plugins: [],
};
