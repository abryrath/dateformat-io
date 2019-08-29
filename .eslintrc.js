module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  // add your custom rules here
  rules: {
      'semi': 'off',
      'quotes': 'off',
      'comma-dangle': 'off',
      'indent': 'warn',
      'import/order': 'warn',
      'no-console': 'warn',
  },
};
