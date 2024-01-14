/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'custom-backg': '#fcdcd1',
        'custom-orange': '#fc4e21',
      },
      fontFamily: {
        oswald: ['Oswald'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
