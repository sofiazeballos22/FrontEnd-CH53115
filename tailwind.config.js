/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,scss}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans' : ['Inter', 'sans-serif'],
        'serif-georgia' : ['Georgia', 'serif'],
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '1rem',
        'base': '3rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
    },
  },
  plugins: [],
}

