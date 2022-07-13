<!--
 * @Descripttion: 
 * @Author: JLX
 * @Date: 2022-06-20 15:29:34
 * @LastEditors: JLX
 * @LastEditTime: 2022-06-20 16:50:28
-->
<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          v-model="keyWord"
        />&nbsp;
        <button @click="getUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    getUsers() {
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          console.log('请求成功');
          this.$bus.$emit('getUsersList',response.data.items)
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
