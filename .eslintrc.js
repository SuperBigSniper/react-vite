module.exports = {
  env: {
    browser: true,
    es2024: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {
        directory: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'standard-jsx',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-array-index-key': 'off',
    'jsx-quotes': 'off',
    // --JSX--
    'react/jsx-boolean-value': ['error', 'never', { always: [] }],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    // 属性等号两边是否允许有空格
    'react/jsx-equals-spacing': ['error', 'never'],
    // 单个属性不在新行，多行属性在新行
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    // 标签
    'react/jsx-indent': [
      'error',
      2,
      { checkAttributes: true, indentLogicalExpressions: true },
    ],
    // 属性
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': [
      'error',
      { maximum: 1, when: 'multiline' },
    ],
    'react/jsx-closing-tag-location': 'error',
    // prettier
    'prettier/prettier': ['error'],
  },
}
