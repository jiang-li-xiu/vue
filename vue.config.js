/*
 * @Descripttion: 
 * @Author: JLX
 * @Date: 2022-06-20 15:44:08
 * @LastEditors: JLX
 * @LastEditTime: 2022-06-20 16:03:44
 */
module.exports = {
    lintOnSave: false, //关闭语法检查
    // 开启代理服务器（方式一）
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // }

    // 开启代理服务器（方式二）
    devServer: {
        proxy: {
            // (/test)请求前缀 名字自己取
            '/test': {
                target: 'http://localhost:5000',
                ws: true,
                changeOrigin: true,
                // 请求时去掉/test
                pathRewrite: { '^/test': '' }
            }
        }
    }
}