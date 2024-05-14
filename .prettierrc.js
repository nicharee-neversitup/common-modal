/** @type {import("prettier").Options} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  trailingComma: 'es5',
  printWidth: 120,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  bracketSpacing: true,
  bracketSameLine: true,
}

module.exports = config
