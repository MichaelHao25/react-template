const express = require("express");
const app = express();
const path = require("path");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const compiler = webpack(webpackConfig);

// webpack hmr
app.use(
    require("webpack-dev-middleware")(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    })
);

app.use(require("webpack-hot-middleware")(compiler));

// static assets
//托管静态文件
// app.use(express.static("./css"));


// main route
app.get("*", (req, res) =>
res.sendFile(path.resolve(__dirname, "./src/index.html"))
);

// app start up
app.listen(3000, () => console.log("App listening on port 3000!"));