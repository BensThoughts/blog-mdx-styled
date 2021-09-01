module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive']
      },
      backgroundColor: {
        'primary': 'var(--color-app-primary)',
        'secondary': 'var(--color-app-secondary)',
        'accent': 'var(--color-app-accent)'
      },
      textColor: {
        'primary': 'var(--color-text-primary)',
        'secondary': 'var(--color-text-secondary)',
        'icon-primary': 'var(--color-app-primary)',
        'icon-secondary': 'var(--color-app-secondary)',
        'icon-accent': 'var(--color-app-accent)'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderOpacity: ['active']
    },
  },
  plugins: [],
};