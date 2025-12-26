/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lime': {
          400: '#addf59',
          500: '#9dd14a',
          600: '#8bc43a',
          700: '#7ab32e',
        },
        'dark': {
          900: '#0a0a0a',
          800: '#121212',
          700: '#1a1a1a',
          600: '#242424',
          500: '#2e2e2e',
        }
      },
      fontFamily: {
        'exo': ['"SF Pro Display"', 'sans-serif'],
        'inter': ['Montserrat', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}