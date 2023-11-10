/*
 * @Author: zhangpengwei@1338418459736990.onaliyun.com zhangpengwei@1338418459736990.onaliyun.com
 * @Date: 2023-11-10 14:42:43
 * @LastEditors: zhangpengwei@1338418459736990.onaliyun.com zhangpengwei@1338418459736990.onaliyun.com
 * @LastEditTime: 2023-11-10 16:38:02
 * @FilePath: /time-choice/vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// vue.config.js
const path = require('path');

module.exports = {    
    devServer: {
        hot: true,
    },
    configureWebpack: {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'), // 将@设置为src目录的绝对路径
        },
      },
    }
  };
  