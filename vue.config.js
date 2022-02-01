module.exports = { 
    devServer: {
        proxy: {
           '^/api': { 
                target: 'http://localhost:5000', 
                changeOrigin: true, 
                secure: false, 
                pathRewrite: {
                    '^/api': '/api'
                 }, 
                headers: {
                Connection: 'keep-alive'
                 }
             },
        }
    }
}