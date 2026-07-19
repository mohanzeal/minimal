export default {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/no-v-html': 'off',
    'vue/no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': ['error'],
  },
};
