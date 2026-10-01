/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: ['selector', '.dark-theme &'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1100px',
      xl: '1440px',
    },
    extend: {
      colors: {
        ink: '#111111',
        accent: '#4F2EE8',
        gold: '#EAC645',
        muted: '#B4AFAF',
        night: '#202024',
        page: '#F6F6F6',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        book: '0 12px 24px rgba(17, 17, 17, 0.12)',
      },
    },
  },
  plugins: [],
};
