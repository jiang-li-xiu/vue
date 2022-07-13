<!--
 * @Descripttion: 
 * @Author: JLX
 * @Date: 2022-06-20 15:29:34
 * @LastEditors: JLX
 * @LastEditTime: 2022-06-28 15:31:31
-->
<template>
  <div>
    <div>当前值{{ $store.state.sum }}</div>
    <div>当前值{{ sum }}</div>
    <!-- <div>当前值{{ he }}</div> -->
    <div>当前值十倍{{ $store.getters.bigSum }}</div>
    <div>当前值十倍{{ bigSum }}</div>
    <div>学校{{ $store.getters.school }}，课程{{ $store.getters.subject }}</div>
    <div>学校{{ school }}，课程{{ $store.getters.subject }}</div>

    <h3>person组件总人数：{{personList.length}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">稍等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  computed: {
    //
    sum() {
      return this.$store.state.sum;
    },

    //借助mapState生成计算属性，从state读取数据（对象写法）
    // ...mapState({ he: "sum", school: "school" }),

    //数组写法
    ...mapState(["sum", "school",'personList']),

    //mapGetters
    ...mapGetters(["bigSum"]),
  },
  methods: {
    increment() {
      // this.$store.dispatch("jia", this.n);
      this.$store.commit("JIA", this.n); //可以跳过actions，直接commit (服务)
    },
    decrement() {
      // this.$store.dispatch("jian", this.n);
      this.$store.commit("JIAN", this.n);
    },

    // 借助生成对应方法，方法中会调用commit去联系mutations  方法记得传参
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),

    /*---------------------------*/
    incrementOdd() {
      // if (this.$store.state.sum % 2) {
      //   this.$store.dispatch("jia", this.n);
      // }
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      // setTimeout(() => {
      //   this.$store.dispatch("jia", this.n);
      // }, 500);

      this.$store.dispatch("jiaWait", this.n);
    },

    //借助生成对应方法，方法中会调用dispatch去联系actions  方法记得传参
    ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
  },
  mounted() {
    console.log(this);
    const x = mapState({ he: "sum" });
    console.log(x);
  },
};
</script>

<style scoped></style>
