module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'links-color': 'var(--links-color)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
