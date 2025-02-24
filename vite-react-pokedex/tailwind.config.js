/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        background: "#242424",
        foreground: "#ffffffde",
      },
    },
  },
  plugins: [],
};
