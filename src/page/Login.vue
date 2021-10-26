<template>
  <h1>登录</h1>
  <input type="text" name="" v-model="account" />
  <br />
  <br />
  <input type="password" name="" v-model="password" />
  <br />
  <br />
  <button @click="login">登录</button>
</template>

<script lang='ts'>
import router from "../router";
import { ref } from "vue";
export default {
  name: "Login",
  props: {
    redirect: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    let account = ref("");
    let password = ref("");
    function login() {
      router.push(props.redirect);
      console.log("---->", account, password);
    }
    return { account, password, login };
  },
};
</script>

<style>
</style>