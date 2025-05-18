/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        }
      },
      animation: {
        blink: 'blink 1s infinite'
      },
      spacing: {
        '128': '32rem',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 0 10px rgba(0, 0, 0, 0.1)',
        'custom-lg': '0 0 30px rgba(0, 0, 0, 0.1)',
      },
      minHeight: {
        'screen-minus-header': 'calc(100vh - 4rem)',
      }
    },
  },
  plugins: [],
};