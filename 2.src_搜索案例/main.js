/*
 * @Descripttion: 
 * @Author: JLX
 * @Date: 2022-06-20 15:29:34
 * @LastEditors: JLX
 * @LastEditTime: 2022-06-20 16:48:44
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app')