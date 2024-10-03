/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrollText: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-50%)' },
        },
      },
      animation: {
        'scroll-text': 'scrollText 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
