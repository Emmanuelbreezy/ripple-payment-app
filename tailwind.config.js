/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mellow: ['Mellow', 'sans'], // Add your custom font name here
        aeonik : ['Aeonik', 'sans'], // Add your custom font name here
      },
      colors: {
        primary: '#11453B',
        secondary: '#B4A572',
        accent:'#EA4E4B',
        grey:'#292A29',
        muted: '#515251',
        success: '#01AA8C'
      },
    },
  },
  plugins: [
  ],
  mode: 'jit',
}

