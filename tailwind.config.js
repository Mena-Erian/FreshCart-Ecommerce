/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "main-color": "#0e9f6e",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require("flowbite/plugin"), // add this line
  ],
};
