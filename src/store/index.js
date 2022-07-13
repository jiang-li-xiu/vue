/*
 * @Descripttion: 
 * @Author: JLX
 * @Date: 2022-06-28 10:04:14
 * @LastEditors: JLX
 * @LastEditTime: 2022-06-28 15:26:41
 */
import Vue from 'vue'
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex)

// 准备actions-用于响应组件中的动作
const actions = {
    // 可以跳过actions，直接commit (服)
    // jia(context, value) {
    //     console.log(context, value, 'actions中jia被调用了');
    //     context.commit('JIA', value) //大写
    // },
    // jian(context, value) {
    //     console.log(context, value, 'actions中jian被调用了');
    //     context.commit('JIAN', value) //大写
    // },
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('JIA', value) //大写
        }

    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value)
        }, 500)
    }

}

// 准备mutations-用于操作数据  后厨
const mutations = {
    JIA(state, value) {
        console.log('mutations中的JIA被调用了', state, value);
        state.sum += value
    },
    JIAN(state, value) {
        console.log('mutations中的JIAN被调用了', state, value);
        state.sum -= value
    },
    ADD_PERSON(state, value) {
        console.log('mutations中的ADD_PERSON被调用了', state, value);
        state.personList.unshift(value)
    }
}

// 准备state-用于存储数据
const state = {
    sum: 0, //当前的和
    school: '尚硅谷',
    subject: '前端',
    personList: [{
        id: '1',
        name: '名字'
    }]
}

// getters-用于将state数据进行加工  像computed
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})