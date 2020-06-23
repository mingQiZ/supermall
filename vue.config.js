const path = require("path");

const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"))
      .set("@router", resolve("src/router"))
      .set("@store", resolve("src/store"))
      .set("@views", resolve("src/views"));
  }
};
