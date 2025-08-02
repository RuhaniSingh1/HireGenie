
// postcss.config.js
const config  = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'color-oklch-function': true,
        'color-lab-function': true,
        'relative-color-syntax': true,
      },
    },
  },
};

export default config;
