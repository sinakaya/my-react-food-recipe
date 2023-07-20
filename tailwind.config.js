/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    darkMode: "class",
    extend: {
      colors: {
        "nav-link": "#253D4E",
        "logo-primary": "#2A3342",
        "nav-active": "#509E2F",
        "pic-orange": "#DC582A",
      },
    },
  },
  plugins: [],
};
