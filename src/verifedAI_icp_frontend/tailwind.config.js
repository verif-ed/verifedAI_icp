/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [ require('daisyui'),],
  daisyui: {
    themes: [
      {
        mytheme: {
          
"primary": "#0ea5e9",
          
"secondary": "#67e8f9",
          
"accent": "#38bdf8",
          
"neutral": "#f3f4f6",
          
"base-100": "#1e3a8a",
          
"info": "#ff00ff",
          
"success": "#00ff00",
          
"warning": "#f97316",
          
"error": "#ff0000",
          },
        },
      ],
    },
}

