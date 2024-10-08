/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f3f4f6",
        header: "#0e374e",
      },
      aspectRatio: { "10/14": "10/14" },
      height: {
        "9/10": "90%",
        "95/100": "95%",
      },
    },
  },
  plugins: [],
};
