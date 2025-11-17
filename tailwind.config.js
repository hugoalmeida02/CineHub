/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors : {
        one: "#0D0D0D",
        two: "#262626",
        three: "#404040",
        four: "#595959",
        five: "#A6A6A6",
      }
    },
  },
  plugins: [],
}

