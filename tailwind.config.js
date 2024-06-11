/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["*.{html,js}"],
  content: [],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

