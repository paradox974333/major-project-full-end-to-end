import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"

export default [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "ml_backend/.venv/**",
      "ml_backend/__pycache__/**",
      "next-env.d.ts",
      "next.config.js",
      "tsconfig.tsbuildinfo",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-unused-vars": "off",
    },
  },
  {
    files: ["*.config.{js,mjs}", "eslint.config.mjs"],
    languageOptions: {
      globals: globals.node,
    },
  },
]
