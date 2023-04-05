/** @type {import("prettier").Config} */
const config = {
	plugins: [
		require.resolve('prettier-plugin-organize-imports'),
		require.resolve('prettier-plugin-tailwindcss')
	],
	printWidth: 80,
	tabWidth: 2,
	useTabs: false,
	semi: false,
	singleQuote: true,
	trailingComma: 'none',
	bracketSpacing: true,
	jsxBracketSameLine: true,
	arrowParens: 'avoid'
}

module.exports = config
