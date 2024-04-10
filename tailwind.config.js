/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/bg.png')",
      },
      transitionTimingFunction: {
        'race': 'cubic-bezier(0.815, 1.635, 0.485, -0.570)',
      }
    },
  },
  plugins: [],
};
