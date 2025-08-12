/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B0D1A',
        secondary: '#121423',
        accent: {
          blue: '#4F9FFF',
          purple: '#9D4FFF',
          pink: '#FF4FF9',
        },
        text: {
          primary: 'rgba(255, 255, 255, 0.95)',
          secondary: 'rgba(160, 160, 160, 0.7)',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4F9FFF 0%, #9D4FFF 50%, #FF4FF9 100%)',
        'gradient-reverse': 'linear-gradient(135deg, #FF4FF9 0%, #9D4FFF 50%, #4F9FFF 100%)',
        'gradient-section': 'linear-gradient(to right, #0B0D1A 0%, #1E0D3A 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(79, 159, 255, 0.4)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}