/*
 * @Descripttion: 
 * @Author: JLX
 * @Date: 2022-06-20 15:29:34
 * @LastEditors: JLX
 * @LastEditTime: 2022-06-28 10:10:17
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store,
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app')