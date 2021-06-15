module.exports = {
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended'
  ],
  plugins: ['react'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/no-redeclare': ['off'],
    '@typescript-eslint/strict-boolean-expressions': ['off'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  }
}
