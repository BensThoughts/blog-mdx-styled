const colors = require('tailwindcss/colors');

const generateColorClass = (variable) => {
  return ({opacityValue}) =>
    opacityValue
      ? `rgba(var(--${variable}), ${opacityValue})`
      : `rgb(var(--${variable}))`;
};
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'app-bg': generateColorClass('color-bg-primary'),
      'primary': generateColorClass('color-app-primary'),
      'secondary': generateColorClass('color-app-secondary'),
      'accent': generateColorClass('color-app-accent'),
      'terminal': generateColorClass('color-bg-terminal'),
      'error': generateColorClass('color-app-error'),
      'gradient-primary': generateColorClass('color-gradient-primary'),
      'gradient-secondary': generateColorClass('color-gradient-secondary'),
      'image-overlay': generateColorClass('color-image-overlay'),
      'text-color-primary': generateColorClass('color-text-primary'),
      'text-color-secondary': generateColorClass('color-text-secondary'),

      'statusBarBackgroundColor': generateColorClass('statusBarBackgroundColor'),
      'statusBarAccentColor': generateColorClass('statusBarAccentColor'),
      'statusBarAccentColorText': generateColorClass('statusBarAccentColorText'),
      'statusBarTextColorAccent': generateColorClass('statusBarTextColorAccent'),
      'statusBarTextColor': generateColorClass('statusBarTextColor'),

      'transparent': colors.transparent,
      'white': colors.white,
    },
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'roboto-slab': ['"Roboto Slab"', 'serif'],
        'merriweather': ['"Merriweather"', 'serif'],
        'inter': ['Inter', 'sans-serif', 'ui-sans-serif', 'system-ui', '-apple-system',
          'BlinkMacSystemFont'],
      },
      backgroundColor: {
        'app-bg': generateColorClass('color-bg-primary'),
        'primary': generateColorClass('color-app-primary'),
        'secondary': generateColorClass('color-app-secondary'),
        'accent': generateColorClass('color-app-accent'),
        'terminal': generateColorClass('color-bg-terminal'),
      },
      textColor: {
        'primary': generateColorClass('color-text-primary'),
        'secondary': generateColorClass('color-text-secondary'),
        'icon-primary': generateColorClass('color-app-primary'),
        'icon-secondary': generateColorClass('color-app-secondary'),
        'icon-accent': generateColorClass('color-app-accent'),
        'color-inline-code': generateColorClass('color-text-inline-code'),
        'error': generateColorClass('color-app-error'),
      },
      borderColor: {
        'primary': generateColorClass('color-app-primary'),
        'secondary': generateColorClass('color-app-secondary'),
        'accent': generateColorClass('color-app-accent'),
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderOpacity: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
