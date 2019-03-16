module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 0,
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'no-underscore-dangle': 'off',
    'prefer-const': 'off',
    'global-require': 'off',
    'no-use-before-define': 'off',
    allowImportExportEverywhere: 0,
    'import/no-dynamic-import': 'off',
    'func-names': 'off',
    'max-len': 'off',
    'import/extensions': ['error', 'never', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
      vue: 'never',
      sass: 'never',
      css: 'never',
    }],
  },
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
  },
};
