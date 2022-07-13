<!--
 * @Descripttion: 
 * @Author: JLX
 * @Date: 2022-06-28 15:18:09
 * @LastEditors: JLX
 * @LastEditTime: 2022-07-01 17:50:20
-->
<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState({ personList: "personList" }),
  },
  methods: {
    add() {
      const personObj = { id: 10, name: this.name };
      // console.log(personObj);
      this.$store.commit("ADD_PERSON", personObj);
      this.name = "";
    },
  },
};
</script>

<style>
/* .{
  background-image: url();
  background-repeat: no-repeat;
  background-position: left center ;
  background-attachment: fixed;
  background: black url()  no-repeat fixed center 20px;
} */
</style>
