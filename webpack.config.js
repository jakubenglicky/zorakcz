const path = require('path');
module.exports = {
	entry: './src/index.js',

	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'js/bundle.js',
	},

	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					{
						loader: "style-loader", // creates style nodes from JS strings
					},
					{
						loader: "css-loader", // translates CSS into CommonJS
					},
					{
						loader: "less-loader", // compiles Less to CSS
					},
				],
			},
		],
	},
};
