/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          wedding: {
            cream: '#F9F9F7',
            sage: '#8A9A5B', // Sage Green
            gold: '#D4AF37', // Metallic Gold
            dark: '#292524', // Stone 800
            text: '#44403C', // Stone 700
          }
        },
        fontFamily: {
          serif: ['"Playfair Display"', 'serif'],
          sans: ['"Inter"', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }
