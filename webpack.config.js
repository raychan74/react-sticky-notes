const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist'
	},
	mode: 'development',
	module: {
		rules: [
			{
				exclude: path.resolve(__dirname, 'node_modules'),
				test: /\.jsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['react', 'env'],
							plugins: ['transform-class-properties']
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	}
};
