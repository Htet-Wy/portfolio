/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        "light-white": "#F7F7F7",
        "cloud-white": "#EEEEEE",
        "light-gray": "#B4B4B8",
        "midnight-slate": "#393E46",
        "misty-blue": "#929AAB",
        "almost-black": "#040303",
        "deep-black": "#292929",
      },
    },
  },
  plugins: [],
};
