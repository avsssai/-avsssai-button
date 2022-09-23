const path = require("path");
module.exports = {
	mode: "production",
	entry: "./src/index.ts",
	output: {
		path: path.resolve("build"),
		filename: "index.js",
		libraryTarget: "commonjs2",
	},
	devServer: {
		port: 8080,
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: "ts-loader",
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	externals: {
		react: "react",
	},
	plugins: [],
};
