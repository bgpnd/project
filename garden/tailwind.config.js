// @type {import('tailwindcss').Config}
module.exports = {
  content: ["./*.html"],
  // content: [
  //   './index.html',
  // ],
  theme: {
    extend: {
      colors: {
        'light': '#E2EEEC',
        'line': '#DDF4E6',
        'input': '#A3D6CD',
        'placeholder': '#AFAFAF',
        'copyright': '#989898',
        'gradient': '#dae0db',
        'bgdesktop': '#F7FAFA',
        'primary': {
          light: '#2F7332',
          DEFAULT: '#124A04',
          dark: '#1C3A27',
        },
      },
    },
      
    fontFamily: {
      'secondary': ['Merriweather', 'serif'],
      'primary': ['Karla', 'sans-serif'],
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
