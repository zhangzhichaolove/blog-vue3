<template>
  <h1>登录</h1>
  <input type="text" name="" v-model="account" />
  <input type="passwoed" name="" v-model="passwoed" />
  <button @click="login">登录</button>
</template>

<script lang='ts'>
import router from "../router";
export default {
  name: "Login",
  props: ["redirect"],
  setup(props) {
    function login() {
      console.log("---->", props);
      router.push(props.redirect);
    }
    return { login };
  },
};
</script>

<style>
</style>