/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },

      screens: {
        'xs': '340px', // Custom screen size for extra small devices
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

      fontSize: {
        xxs: '0.625rem', // 10px
      },
    },
    plugins: [
      require('daisyui'),
    
    ],

  }
}


