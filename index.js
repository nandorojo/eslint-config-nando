module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  plugins: ["react-hooks"],
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
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        trailingComma: "es5",
        singleQuote: true,
        jsxSingleQuote: false,
        semi: false,
        useTabs: true,
        cursorOffset: -1
      }
    ]
  }
};
