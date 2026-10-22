/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#183D32',
          50: '#F2F6F4',
          100: '#E1ECE6',
          200: '#C2D9CD',
          300: '#94BEAA',
          400: '#4D8B6F',
          500: '#183D32',
          600: '#133229',
          700: '#0E261F',
          800: '#0A1B16',
          900: '#050E0C',
        },
        ivory: {
          DEFAULT: '#F7F5EF',
          light: '#FAF9F5',
          dark: '#ECE8DD',
        },
        gold: {
          DEFAULT: '#C5A46D',
          light: '#D8BF93',
          dark: '#A68349',
          muted: '#F0E7D8',
        },
        charcoal: {
          DEFAULT: '#252923',
          light: '#41473E',
          muted: '#666E61',
        },
        sage: {
          DEFAULT: '#DCE5DC',
          light: '#EBF1EB',
          dark: '#C9D6C9',
        }
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(37, 41, 35, 0.05), 0 1px 2px rgba(37, 41, 35, 0.03)',
        'card': '0 10px 30px -5px rgba(24, 61, 50, 0.06), 0 4px 10px -2px rgba(24, 61, 50, 0.03)',
        'elevated': '0 20px 40px -10px rgba(24, 61, 50, 0.12)',
      }
    },
  },
  plugins: [],
}
