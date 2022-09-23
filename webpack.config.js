const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
module.exports = {
	mode: "production",
	entry: "./src/index.ts",
	output: {
		path: path.resolve("build"),
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
	plugins: [
		new ModuleFederationPlugin({
			name: "specialButton",
			filename: "specialButton.js",
			library: { type: "var", name: "specialButton" },
			exposes: {
				"./SpecialButton": "./src/index",
			},
			shared: {
				react: { singleton: true, requiredVersion: "18.2.0" },
				"react-dom": { singleton: true, requiredVersion: "18.2.0" },
			},
		}),
	],
};
