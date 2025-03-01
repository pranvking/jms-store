/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navBar:"#1E1E1E",
        backGround:"#111111",
        cart:"#FDFDFD",
        signin:"#534D4D",
        search:"#D9D9D9",
      },
    },
  },
  plugins: [],
};
