

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
     "./node_modules/flowbite/**/*.js"//flowbite libreria de recursos ui
  ],
  theme: {
    colors:{
      'geo-blue':'#353F4B',
      'geo-blue-black':'#12151A',
      'geo-white':'#FFFFFF',
      'geo-yellow':'#B38D46',
      'geo-griss-light':'#cccccc',
      'geo-griss':'#6a6a6a',

      'geo-orange':'#ED6F25'


    },
    fontFamily:{
      'geo-font-primary':['Hind','Poppis'],
      'geo-font-secound':['Inter']
    },
    fontWeight: {
      'light': 300,
      'normal': 400,
      'bold': 700,
    },
    fontSize:{
      sm:'.8rem',
      base: '1rem',
      regular:'1.2rem',
      medium:'2rem',
      large:'3rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      boxShadow:{
        'customShadow':'inset 50px 50px 200px 60px  rgba(0, 0, 0, 0.8);'
      },
      /* keyframes: {
        slideInFromLeft: {
          from: { transform: 'translateX(-100px)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        }
      },
      animation: {
        slideIn: 'slideInFromLeft 2s ease-out forwards',
      } */


    },
    screens: {
      // Cubre desde teléfonos pequeños hasta tablets pequeñas
      'mobile': {'min': '280px', 'max': '767px'},

      // Abarca tablets y algunos dispositivos híbridos
      'tablet': {'min': '768px', 'max': '1224px'},

      // Incluye laptops y tablets grandes
      'laptop': {'min': '1225px', 'max': '1919px'},

      // Cubre la mayoría de los monitores de escritorio
      'desktop': {'min': '1920px'},


      // Breakpoints adicionales útiles
      'landscape': {'raw': '(orientation: landscape)'},
      'portrait': {'raw': '(orientation: portrait)'},
    },

  },
  plugins: [ require('flowbite/plugin')] //flowbite libreria de recursos ui
}
