module.exports = { 
    devServer: {
        proxy: {
           '^/api': { 
                target: 'http://localhost:8080', 
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