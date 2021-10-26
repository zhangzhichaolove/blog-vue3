<template>
  <el-card class="box-card">
    <h1>登录</h1>
    <el-input type="text" v-model="account" placeholder="用户名" clearable />
    <br />
    <br />
    <el-input type="password" v-model="password" placeholder="密码" clearable />
    <br />
    <br />
    <el-button type="primary" @click="login">登录</el-button>
  </el-card>
</template>

<script lang='ts'>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
export default {
  name: "Login",
  props: {
    redirect: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    const route = useRoute();
    const router = useRouter();
    let account = ref("");
    let password = ref("");
    function login() {
      router.push(props.redirect);
      console.log("---->", account, password);
      console.log("---->", route.query.redirect);
    }
    return { account, password, login };
  },
};
</script>

<style>
</style>