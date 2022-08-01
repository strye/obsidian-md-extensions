// rollup --config
import copy from 'rollup-plugin-copy'

export default {
	input: './src/plugin.js',
  
	output: [
		{ // required (can be an array, for multiple outputs)
			file: './dist/main.js',
			format: 'cjs', // required
		},
	],
	plugins: [
		copy({
			targets: [
				{ src: './manifest.json', dest: './dist' }
			]
		})
	]
};