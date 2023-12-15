/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#E4DDC9',
          800: '#9F9476',
          700: '#A67C4B',
          600: '#E02B27',
        },
      }
    },
  },
  plugins: [],
}

