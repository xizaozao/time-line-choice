/*
 * @Author: zhangpengwei@1338418459736990.onaliyun.com zhangpengwei@1338418459736990.onaliyun.com
 * @Date: 2023-03-15 22:29:25
 * @LastEditors: zhangpengwei@1338418459736990.onaliyun.com zhangpengwei@1338418459736990.onaliyun.com
 * @LastEditTime: 2023-11-10 17:21:01
 * @FilePath: /element-timeline-master/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import { router } from '@/router'
import {
  Form,
  FormItem,
  DatePicker,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Form);
Vue.use(FormItem);
Vue.use(DatePicker);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
