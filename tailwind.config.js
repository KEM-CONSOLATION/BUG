/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Fjalla: ["Fjalla One", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
