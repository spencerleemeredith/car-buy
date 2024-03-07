/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "carvana-gray": "#F4F8FA",
        "carvana-blue": "#0D375E",
      },
    },
  },
  plugins: [],
};
