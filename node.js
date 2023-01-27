module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:prettier/recommended',
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    "@typescript-eslint"
  ],
  rules: {
    'prettier/prettier': ["error", {
      'printWidth': 80,
      'tabWidth': 2,
      'singleQuote': true,
      'trailingComma': 'all',
      'arrowParens': 'always',
      'semi': false,
      'endOfLine': 'auto',
    }],
    "import/extensions": [
      error,
      ignorePackages,
      {
        ts: never
      }
    ]
  },
  settings: {
    "import/resolver": {
      typescript: {}
    }
  }
}
