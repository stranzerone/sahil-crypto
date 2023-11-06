// src/setupProxy.js
import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function(app) {
  app.use(
    '/api', // Specify the URL path you want to proxy
    createProxyMiddleware({
      target: 'http://localhost:5000', // URL of your backend server
      changeOrigin: true,
    })
  );
};
