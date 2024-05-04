/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mycolor: {
          100: "#f7f7f7",
          200: "#eaeaea",
          300: "#dcdcdc",
          400: "#bfbfbf",
          500: "#a0a0a0",
          600: "#7d7d7d",
          700: "#595959",
          800: "#404040",
          900: "#262626",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const myButtonUtilities = {
        ".myButton": {
          padding: ".5rem 1rem",
          color: "white",
          fontWeight: "bold",
          borderRadius: ".25rem",
          backgroundColor: theme("colors.mycolor.900"),
        },
      };

      addUtilities(myButtonUtilities);
    },
  ],
};
