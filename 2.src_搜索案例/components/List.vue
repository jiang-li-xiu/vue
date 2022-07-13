<!--
 * @Descripttion: 
 * @Author: JLX
 * @Date: 2022-06-20 16:31:16
 * @LastEditors: JLX
 * @LastEditTime: 2022-06-20 17:18:57
-->
<template>
  <div>
    <div class="row">
      <!-- 展示列表 -->
      <div v-show="users.length" class="card" v-for="item in users" :key="item.id">
        <a :href="item.html_url" target="_blank">
          <img :src="item.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ item.login }}</p>
      </div>
      <h1 v-show="isFrist">欢迎使用</h1>
      <h1 v-show="isLoading">加载。。。</h1>
      <h1 v-show="errMsg">{{errMsg}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      isFrist: true,
      isLoading: false,
      errMsg: "",
      users: [],
    };
  },
  mounted() {
    this.$bus.$on("getUsersList", (data) => {
      console.log(data);
      this.users = data;
    });
  },
};
</script>

<style>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
