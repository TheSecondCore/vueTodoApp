module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vueTodoApp/" : "/",
  transpileDependencies: ["vuetify"]
};
