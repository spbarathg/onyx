/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-bg': '#fafbfc',
        'dark-text': '#1a1a1a',
        'mid-gray': '#6c757d',
        'border-gray': '#e9ecef',
      },
      // 🎨 FONT CONFIGURATION - Change fonts here
      // To change fonts:
      // 1. Update the font names below
      // 2. Update the @import in app/globals.css with the new Google Fonts URL
      fontFamily: {
        sans: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],        // All body text uses Montserrat
        display: ['BBH Sans Bartle', 'Montserrat', 'system-ui', 'sans-serif'],   // ONYX title uses BBH Sans Bartle
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(30px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(5deg)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}

