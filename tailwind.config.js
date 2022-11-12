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
    },
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'roboto-slab': ['"Roboto Slab"', 'serif'],
        'merriweather': ['"Merriweather"', 'serif'],
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
