/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        'custom': 'calc(100vh - 82px)', // Example using calc()
      },
      colors: {
        'primary': 'rgb(0, 80, 143)',
        'danger': 'rgb(143, 0, 52)',
        'transparent-white': 'rgba(255, 255, 255, 0.85)',
      }
    },
  },
  plugins: [],
}