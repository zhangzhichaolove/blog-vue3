<template>
  <div v-loading.fullscreen.lock="fullscreenLoading" />
  <el-row>
    <el-col :span="5">
      <div class="left">左侧</div>
    </el-col>
    <el-col :span="14">
      <router-link to="/about">About</router-link>
      <div>
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
      </div>
    </el-col>
    <el-col :span="5">
      <div class="affix-container right">
        <div class="login">
          <el-affix :offset="50">
            <el-card class="box-card">
              <el-input
                type="text"
                v-model="account"
                placeholder="用户名"
                clearable
              />
              <br />
              <br />
              <el-input
                type="password"
                v-model="password"
                placeholder="密码"
                clearable
              />
              <br />
              <br />
              <el-button type="primary" @click="login">登录</el-button>
            </el-card>
          </el-affix>
        </div>
      </div>
    </el-col>
  </el-row>
  <el-backtop :bottom="80" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElMessage } from "element-plus";
import HelloWorld from "@/components/HelloWorld.vue";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { ElLoading } from "element-plus";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  created() {
    ElMessage({
      message: "项目启动完成.",
      type: "success",
    });
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
        router.push("/admin");
      }, 2000);
      console.log("---->", account, password);
      console.log("---->", route.query.redirect);
    }

    return { account, password, login };
  },
});
</script>
<style scoped lang="less">
.left {
  background-color: aqua;
  height: 100%;
}
.right {
  background-color: blueviolet;
  height: 100%;
}
.affix-container {
  display: flex;
  justify-content: right;
}
.login {
  display: flex;
  justify-content: center;
  width: 60vh;
}
</style>