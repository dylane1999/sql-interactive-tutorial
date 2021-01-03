const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/getUser',
    createProxyMiddleware({
      target: `https://randomuser.me/api/`,
      changeOrigin: true,
    })
  );
};