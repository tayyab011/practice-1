/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Define custom colors here
        "custom-blue": "#1e3a8a",
        "custom-red": "#e11d48",
        "custom-green": "#10b981",
        "custom-yellow": "#fbbf24",
        "blubutton": "#196AA0",
        "navbg": "#1B1C1E",
        "fontcolor": "#2B2B2B",
        "hashtagcolor": "#76A4CE",

        // You can add as many colors as you need
      },
    },
  },
  plugins: [],
};

