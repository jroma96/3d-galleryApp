/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  // If you are using Tailwind v4, uncomment the line below and point to your CSS entry file:
  tailwindStylesheet: "./src/index.css",
};

export default config;
