/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          DEFAULT: '#6d28d9',
          light: '#8b5cf6',
          dark: '#4c1d95',
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        cyan: {
          DEFAULT: '#0891b2',
          light: '#06b6d4',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #6d28d9 0%, #0891b2 100%)',
        'gradient-brand-soft': 'linear-gradient(135deg, rgba(109,40,217,0.12) 0%, rgba(8,145,178,0.06) 100%)',
        'gradient-hero': 'linear-gradient(135deg, #09090f 0%, #110826 55%, #050e1c 100%)',
        'gradient-hero-light': 'linear-gradient(135deg, #f8f7ff 0%, #ede9fe 55%, #e0f7ff 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(109,40,217,0.08), rgba(8,145,178,0.03))',
      },
      borderRadius: {
        card: '14px',
        btn: '10px',
      },
      boxShadow: {
        glow: '0 0 30px rgba(109,40,217,0.35), 0 0 60px rgba(8,145,178,0.12)',
        'glow-sm': '0 0 16px rgba(109,40,217,0.3)',
        card: '0 4px 24px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.5)',
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        shimmer: 'shimmer 1.6s infinite',
        wave: 'wave-bar 1.3s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 1.8s ease infinite',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
