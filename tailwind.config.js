/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        reputation: {
          primary: "#5E627B",
          secondary: "#FFFFFF",
        },
        lover: {
          primary: "#FD7DCA",
          secondary: "#0059D6",
        },
        "1989": {
          primary: "#D6BEA1",
          secondary: "#612D14",
        },
        neutral: "#D6BEA1",
        dark: "#612D14",
      },
      keyframes: {
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        vinyl: "spin 3s linear infinite",
        "vinyl-slow": "spin 6s linear infinite",
      },
    },
  },
  plugins: [],
};