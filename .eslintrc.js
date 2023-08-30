module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': 0,
    'class-methods-use-this': 'off',
    'no-unused-vars': ['warn', {
      argsIgnorePattern: 'next'
    }],
    'consistent-return': 'off',
    'object-curly-newline': 'off',
    'no-confusing-arrow': 'off',
    camelcase: 'off',
  },
};
