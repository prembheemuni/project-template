module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest : true },
  extends: [
    'eslint:recommended',
    "react-app", "react-app/jest"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-vars' : 'off', 
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
}
