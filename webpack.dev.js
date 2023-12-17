const path = require("path");
module.exports = {
  mode: "development",
  entry: "./source/ts/index.ts",
  devtool: "inline-source-map",

  devServer: {
    static: {
      directory: path.join(__dirname, "./"),
    },
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
  },
};
