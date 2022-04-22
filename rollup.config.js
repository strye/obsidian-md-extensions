// rollup --config
export default {
	input: './src/plugin.js',
  
	output: [
		{ // required (can be an array, for multiple outputs)
			file: './main.js',
			format: 'cjs', // required
		},
	]
};