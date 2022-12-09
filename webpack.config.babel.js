import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import CssMinimizerPlugin from "css-minimizer-webpack-plugin"

export default (env, argv) => {
    let mode = argv.mode == "development" ? argv.mode : "production"
    let isDev = mode == "development"
    let devType = env.production || false
    console.log(devType)

    return {
        entry: "./src/app.tsx",
        output: {
            path: path.join(__dirname, "build"),
            filename: "bundled.js",
        },
        resolve: {
            modules: [
                path.resolve(__dirname, "../node_modules"),
                path.resolve(__dirname, "src"),
                path.resolve(__dirname, "node_modules"),
            ],
            extensions: [".ts", ".css", ".js", ".jsx", ".ts", ".tsx"],
        },
        devServer: {
            compress: true,
            port: 5001,
            hot: true,
            inline: true,
            host: "0.0.0.0",
            disableHostCheck: true,
            watchContentBase: true,
            publicPath: "/",
            contentBase: "./build/public",
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                },
                // {
                //     test: /\.css$/i,
                //     include: [
                //         path.resolve(__dirname, "../node_modules"),
                //         path.resolve(__dirname, "src"),
                //         path.resolve(__dirname, "node_modules"),
                //     ],
                //     use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
                // },
                {
                    test: /\.(jpe?g|png|gif|woff|woff2|otf|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                limit: 1000,
                                name: "assets/[name].[ext]",
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                // {
                //     test: /(\.css)$/,
                //     use: [
                //         devType ? MiniCssExtractPlugin.loader : "style-loader",
                //         {
                //             loader: "css-loader",
                //         },
                //     ],
                // },
            ],
        },
        optimization: {
            minimizer: [!isDev && new CssMinimizerPlugin()].filter(Boolean),
            minimize: !isDev,
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "bundle.css",
            }),
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                filename: "index.html",
                minify: {
                    collapseWhitespace: !isDev,
                },
            }),
        ],
        devtool: isDev ? "eval-source-map" : undefined,
        mode: mode,
    }
}
