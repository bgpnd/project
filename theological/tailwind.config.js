/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        background: 'hsl(var(--color-background) / <alpha-value>)',
        gray: 'hsl(var(--color-gray) / <alpha-value>)',
      },
    },
    fontFamily: {
      'primary': 'var(--font-primary)',
      'secondary': 'var(--font-secondary)',
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
}