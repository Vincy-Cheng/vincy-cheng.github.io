/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: '#root',
  theme: {
    screens: {
      xs: '0px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      colors: {
        fs: {
          100: '#def9ff',
          200: '#b8eef5',
          300: '#96e2e9',
          400: '#7ad6da',
          500: '#64c7c7',
          600: '#4db7be',
          700: '#3aa2af',
          800: '#2a889c',
          900: '#1e6f87',
        },
      },
    },
  },
  plugins: [],
};