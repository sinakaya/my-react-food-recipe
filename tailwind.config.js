/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    darkMode: "class",
    extend: {
      colors: {
        "nav-link": "#253D4E",
        "nav-active": "#509E2F",
        "pic-orange": "#DC582A",
      },
    },
  },
  plugins: [],
};
