/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'bruin-navy': '#00205B',
        'bruin-gold': '#FFC72C',
        'bruin-white': '#FFFFFF',
        'bruin-gray': '#F5F6FA',
        'bruin-dark': '#1A1A1A',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px 0 rgba(0,0,0,0.08)',
      },
      borderRadius: {
        xl: '1.25rem',
      },
      transitionProperty: {
        'spacing': 'margin, padding',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        slideUp: 'slideUp 0.8s cubic-bezier(0.4,0,0.2,1)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}; 