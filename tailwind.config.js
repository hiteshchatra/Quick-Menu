/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        sage: {
          50: '#f6f7f6',
          100: '#e3e8e3',
          200: '#c7d2c7',
          300: '#a3b5a3',
          400: '#7a927a',
          500: '#5a7a5a',
          600: '#4a6b4a',
          700: '#3d5a3d',
          800: '#334a33',
          900: '#2b3e2b',
        },
        forest: {
          50: '#f0f4f0',
          100: '#dce7dc',
          200: '#b8d0b8',
          300: '#8fb48f',
          400: '#6b9a6b',
          500: '#4f7f4f',
          600: '#3e6b3e',
          700: '#335633',
          800: '#2a462a',
          900: '#233a23',
        },
        warm: {
          50: '#faf9f7',
          100: '#f2f0ec',
          200: '#e8e4dd',
          300: '#d6cfc4',
          400: '#c4b8a8',
          500: '#b5a394',
          600: '#a08d7a',
          700: '#8a7866',
          800: '#726356',
          900: '#5e5248',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};