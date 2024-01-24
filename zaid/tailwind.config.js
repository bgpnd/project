// @type {import('tailwindcss').Config}
module.exports = {
  content: ["./*.html"],
  // content: [
  //   './index.html',
  // ],
  theme: {
    extend: {
      colors: {
        'text': '#333',
        'secondary': '#FFB193',
        'primary': '#FF2E00',
      },
      spacing: {
        'line': '3px',
      },
      aspectRatio: {
        '32': '3 / 2',
        '54': '5 / 4',
        '85': '8 / 5',
      }
    },
      
    fontFamily: {
      'secondary': ['Lusitana', 'serif'],
      'primary': ['Raleway', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1.25rem',
      screens: {
        xl: '1120px',
      }
    },
  },
  plugins: [],
}
