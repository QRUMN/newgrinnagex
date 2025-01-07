/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mint: {
          50: '#E6FAF2',
          100: '#CCF5E5',
          200: '#99EBCC',
          300: '#66E1B2',
          400: '#56E39F',
          500: '#33D789',
          600: '#2AB372',
          700: '#228F5B',
          800: '#1B6C45',
          900: '#13482E',
        },
        dark: {
          50: '#F7F7FF',
          100: '#E6E6F5',
          200: '#CDCDEB',
          300: '#B4B4E1',
          400: '#9B9BD7',
          500: '#8282CD',
          600: '#6969C3',
          700: '#5050B9',
          800: '#3737AF',
          900: '#1E1EA5',
        },
        light: {
          100: '#FFFFFF',
          200: '#F7F7F7',
          300: '#F0F0F0',
        }
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
};