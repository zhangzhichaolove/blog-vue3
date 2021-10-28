<template>
  <div v-loading.fullscreen.lock="fullscreenLoading" />
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
import { ElLoading } from "element-plus";

export default {
  name: "Login",
  props: {
    redirect: {
      type: String,
      default: "",
    },
  },
  setup(props: any, context: any) {
    const route = useRoute();
    const router = useRouter();
    let account = ref("");
    let password = ref("");

    function login() {
      const loading = ElLoading.service({
        lock: true,
        text: "加载中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loading.close();
        localStorage.setItem("user", "user");
        router.push(props.redirect);
      }, 2000);
      console.log("---->", account, password);
      console.log("---->", route.query.redirect);
    }

    return { account, password, login };
  },
};
</script>

<style>
</style>