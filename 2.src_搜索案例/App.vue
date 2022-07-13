<!--
 * @Descripttion: 
 * @Author: JLX
 * @Date: 2022-06-20 15:29:34
 * @LastEditors: JLX
 * @LastEditTime: 2022-06-20 16:34:10
-->
<template>
  <div class="container">
    <Search />
    <List />
  </div>
</template>

<script>
// import "./assets/css/bootstrap.css";
import axios from "axios";
import List from "./components/List.vue";
import Search from "./components/Search.vue";

export default {
  name: "App",
  components: { List, Search },
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

<style scoped></style>
