/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,css}"],
  theme: {
    extend: {
      animation: {
        'pulse-one': 'pulse 1s',
      },
      keyframes: {
        pulse: {
          '50%': { opacity: '.6' }
        }
      }
    },
  },
  plugins: [
    
  ],
}
