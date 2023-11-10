/*
 * @Author: zhangpengwei@1338418459736990.onaliyun.com zhangpengwei@1338418459736990.onaliyun.com
 * @Date: 2023-11-10 13:44:52
 * @LastEditors: zhangpengwei@1338418459736990.onaliyun.com zhangpengwei@1338418459736990.onaliyun.com
 * @LastEditTime: 2023-11-10 18:21:39
 * @FilePath: /time-choice/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 引入Element UI 主题样式


// 导入日期选择器组件
import TimeLine from "./components/timeLine.vue";

// 存储组件列表
const components = [
    TimeLine
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ...components
}

