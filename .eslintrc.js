module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "react",
    "react-hooks",
    "prettier"
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  }
}
