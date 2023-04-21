/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      ns: '0px',
      xs: '200px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      "colors": {
        "primary": {
          50: "#ECF3F1",
          100: "#D9E7E3",
          200: "#B4D0C6",
          300: "#8EB8AA",
          400: "#659F8C",
          500: "#4D7B6C",
          600: "#3D6155",
          700: "#2F4B42",
          800: "#1F322C",
          900: "#101916",
          950: "#080D0B"
        },
        "secondary": {
          50: "#F2F2F3",
          100: "#E2E2E4",
          200: "#C5C5C9",
          300: "#AAAAB1",
          400: "#8D8D96",
          500: "#71717A",
          600: "#5B5B62",
          700: "#45454A",
          800: "#2C2C30",
          900: "#161618",
          950: "#0C0C0D"
        },
      },
    },
  },
  plugins: [],
};