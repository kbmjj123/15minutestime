/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
    },
  },
  darkMode: 'class',
  plugins: [],
}