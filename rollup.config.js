import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import pkg from './package.json'
import resolve from '@rollup/plugin-node-resolve'

const esbuildPlugin = esbuild({
	minify: process.env.NODE_ENV === 'production',
	jsxFactory: 'React.createElement',
	jsxFragment: 'React.Fragment',
	define: {
		__VERSION__: '"x.y.z"'
	},
	loaders: {
		'.json': 'json',
		'.js': 'jsx'
	}
})

export default [
	// browser-friendly UMD build
	{
		input: 'src/main.ts',
		output: {
			name: 'index',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			esbuildPlugin,
			resolve(), // so Rollup can find `ms`
			commonjs() // so Rollup can convert `ms` to an ES module
		]
	},
	// CommonJS (for Node) build
	{
		input: 'src/main.ts',
		external: ['moment'],
		output: [
			{ file: pkg.main, format: 'cjs' }
		],
		plugins: [
			esbuildPlugin
		]
	},
	// ES module (for bundlers) build
	{
		input: 'src/main.ts',
		external: ['moment'],
		output: [
			{ file: pkg.module, format: 'es' }
		],
		plugins: [
			esbuildPlugin
		]
	}
];
