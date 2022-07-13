<!--
 * @Descripttion: 
 * @Author: JLX
 * @Date: 2022-06-20 15:29:34
 * @LastEditors: JLX
 * @LastEditTime: 2022-06-20 15:58:37
-->
<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="getMsg">获取信息</button>
  </div>
</template>

<script>
import axios from "axios";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    getMsg() {
      // 方式一
      // axios.get("http://localhost:8080/students").then(
        // 方式二 api
      axios.get("http://localhost:8080/test/students").then(
        (response) => {
          console.log(response.data);
        },
        (error) => {
          console.log(error.data);
        }
      );
    },
  },
};
</script>

<style></style>
