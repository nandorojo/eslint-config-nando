module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  plugins: ["prettier", "react-hooks"],
  settings: {
    // allow importing of typescript files too
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/prop-types": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
    // "prettier/prettier": ["warn", require("./prettier")]
  }
};
