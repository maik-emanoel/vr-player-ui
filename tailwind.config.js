/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl':' 0px 8px 4px 0px rgba(0, 0, 0, 0.05), 0px 1px 1px 0px rgba(255, 255, 255, 0.30) inset, 0px -1px 1px 0px rgba(255, 255, 255, 0.10) inset',
        'addressBar': '0px -1px 0px 0px rgba(255, 255, 255, 0.10) inset, 0px 1px 0px 0px rgba(0, 0, 0, 0.20) inset'
      },
      colors: {
        'white-10': 'rgba(255, 255, 255, 0.10)',
        'white-20': 'rgba(255, 255, 255, 0.20)',
        'white-60': 'rgba(255, 255, 255, 0.60)',
        'white-80': 'rgba(255, 255, 255, 0.80)',
        'white-100': '#fff',
        'black-10': 'rgba(0, 0, 0, 0.10)'
      }
    },
  },
  plugins: [],
}

