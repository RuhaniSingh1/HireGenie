const config = {
  plugins: ["@tailwindcss/postcss"],
};

// postcss.config.js
module.exports = {
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
