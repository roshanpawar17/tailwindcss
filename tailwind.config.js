/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class', // media | class
  content: [
    './*.{html,js}',
    './style.css'
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        secondary: 'rgb(var(--color-secondary))',
        ternary: 'hsl(var(--color-ternary))',
        ['filter-blur-color']: 'rgba(var(--filter-blur-color))',
        ['backdrop-blur-color']: 'rgba(var(--backdrop-blur-color))'
      },
      screens: {
        'md': '900px'
      },
      padding: {
        // '1': '2rem', // custom padding
        'c-1': '3rem'
      },
      spacing: {
        "1.1": "2rem",
        '1': '1rem'
      },
      margin: {
        // '1': '2rem' // custom margin
      }
    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   'white': '#ffffff',
    //   'purple': '#3f3cbb',
    //   'midnight': '#121063',
    //   'metal': '#565584',
    //   'tahiti': {
    //     100: '#cffafe',
    //     200: '#a5f3fc',
    //     300: '#67e8f9',
    //     400: '#22d3ee',
    //     // 500: '#06b6d4',
    //     600: '#0891b2',
    //     700: '#0e7490',
    //     800: '#155e75',
    //     900: '#164e63',
    //     light: '#67e8f9',
    //     DEFAULT: '#06b6d4',
    //     dark: '#0e7490',
    //   },
    //   'silver': '#ecebff',
    //   'bubble-gum': '#ff77e9',
    //   'bermuda': '#78dcca',
    // }
  },
  plugins: [],
  corePlugins: {
    // filter: false
  }
}

