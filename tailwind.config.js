/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#2563EB',
        },
        background: '#FFFFFF',
        surface: '#F3F4F6',
        'text-primary': '#1F2937',
        'text-secondary': '#6B7280',
        border: '#E5E7EB',
        error: '#EF4444',
        success: '#10B981',
      },
      fontFamily: {
        timer: ['JetBrains Mono', 'monospace'],
        ui: ['system-ui', '-apple-system', 'sans-serif'],
        brand: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'timer': '64px',
      },
      spacing: {
        'nav-height': '64px',
        'mobile-nav-height': '48px',
      },
      animation: {
        'progress': 'progress 900ms linear infinite',
        'fade-in': 'fadeIn 150ms ease-in',
        'scale': 'scale 150ms ease-in-out',
      },
      keyframes: {
        progress: {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '100' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scale: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}