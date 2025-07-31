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

// import { type Config } from 'tailwindcss';
// import animate from 'tailwindcss-animate';

// const config: Config = {
//   darkMode: 'class',
//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     container: {
//       center: true,
//       padding: '2rem',
//       screens: {
//         '2xl': '1400px',
//       },
//     },
//     extend: {
//       fontFamily: {
//         sans: ['Inter', 'system-ui', 'sans-serif'],
//       },
//       colors: {
//         border: 'hsl(var(--border))',
//         input: 'hsl(var(--input))',
//         ring: 'hsl(var(--ring))',
//         background: 'hsl(var(--background))',
//         foreground: 'hsl(var(--foreground))',
//         primary: {
//           DEFAULT: 'hsl(var(--primary))',
//           foreground: 'hsl(var(--primary-foreground))',
//           light: 'hsl(var(--primary-light))',
//           dark: 'hsl(var(--primary-dark))',
//         },
//         secondary: {
//           DEFAULT: 'hsl(var(--secondary))',
//           foreground: 'hsl(var(--secondary-foreground))',
//         },
//         destructive: {
//           DEFAULT: 'hsl(var(--destructive))',
//           foreground: 'hsl(var(--destructive-foreground))',
//         },
//         muted: {
//           DEFAULT: 'hsl(var(--muted))',
//           foreground: 'hsl(var(--muted-foreground))',
//         },
//         accent: {
//           DEFAULT: 'hsl(var(--accent))',
//           foreground: 'hsl(var(--accent-foreground))',
//         },
//         popover: {
//           DEFAULT: 'hsl(var(--popover))',
//           foreground: 'hsl(var(--popover-foreground))',
//         },
//         card: {
//           DEFAULT: 'hsl(var(--card))',
//           foreground: 'hsl(var(--card-foreground))',
//         },
//         sage: {
//           50: '#f6f7f6',
//           100: '#e3e8e3',
//           200: '#c7d2c7',
//           300: '#a0b0a0',
//           400: '#7f997f',
//           500: '#5f825f',
//           600: '#4b694b',
//           700: '#3a523a',
//           800: '#2b3d2b',
//           900: '#1d2a1d',
//         },
//       },
//       borderRadius: {
//         lg: 'var(--radius)',
//         md: 'calc(var(--radius) - 2px)',
//         sm: 'calc(var(--radius) - 4px)',
//       },
//       keyframes: {
//         'accordion-down': {
//           from: { height: '0' },
//           to: { height: 'var(--radix-accordion-content-height)' },
//         },
//         'accordion-up': {
//           from: { height: 'var(--radix-accordion-content-height)' },
//           to: { height: '0' },
//         },
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         slideUp: {
//           '0%': { opacity: '0', transform: 'translateY(30px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         scaleIn: {
//           '0%': { opacity: '0', transform: 'scale(0.9)' },
//           '100%': { opacity: '1', transform: 'scale(1)' },
//         },
//         'pulse-gentle': {
//           '0%, 100%': { opacity: '1' },
//           '50%': { opacity: '0.6' },
//         },
//       },
//       animation: {
//         'accordion-down': 'accordion-down 0.2s ease-out',
//         'accordion-up': 'accordion-up 0.2s ease-out',
//         'fade-in': 'fadeIn 0.6s ease-out',
//         'slide-up': 'slideUp 0.8s ease-out',
//         'scale-in': 'scaleIn 0.5s ease-out',
//         'pulse-gentle': 'pulse-gentle 2s infinite',
//       },
//       boxShadow: {
//         elegant: 'var(--shadow-elegant)',
//         card: 'var(--shadow-card)',
//         hover: 'var(--shadow-hover)',
//       },
//       backgroundImage: {
//         'gradient-primary': 'var(--gradient-primary)',
//         'gradient-subtle': 'var(--gradient-subtle)',
//       },
//     },
//   },
//   plugins: [animate],
// };

// export default config;
