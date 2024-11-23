/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        arabic: ['Noto Naskh Arabic', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d2dae3',
          300: '#adbcd1',
          400: '#8399b9',
          500: '#637aa3',
          600: '#4f6288',
          700: '#41506f',
          800: '#002B5C',
          900: '#172236',
        },
      },
    },
  },
  plugins: [],
};