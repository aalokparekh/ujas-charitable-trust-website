
/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softPink: "#FADADD",
        softBlue: "#C8E6F9",
        softBeige: "#F9F5F0",
        trustPurple: "#6B4EFF",
        sunlightYellow: "#FFE066",
        coral: "#FF7F50",
        mistyLilac: "#F3F0FF",
        darkText: "#1F2937",
        lightGray: "#F9FAFB",
      },
      fontFamily: {
        sans: ['"Segoe UI"', "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 14px rgba(0, 0, 0, 0.1)",
        trust: "0 4px 20px rgba(107, 78, 255, 0.3)",
      },
    },
  },
  plugins: [],
}
