<template>
  <el-row>
    <el-col :xl="5" :lg="5" :md="0" :sm="0" :xs="0" hidden-lg-and-down>
      左侧视图
    </el-col>
    <el-col :xl="14" :lg="14" :md="18" :sm="24" :xs="24" hidden-lg-and-down>
      <v-md-preview ref="preview" :text="text"></v-md-preview>
    </el-col>
    <el-col :xl="5" :lg="5" :md="6" :sm="0" :xs="0" hidden-lg-and-down>
      <Navigation :text="text" ref="navRef" />
    </el-col>
  </el-row>
</template>

<script>
import { ref, reactive, onMounted, toRefs } from "vue";
export default {
  name: "BlogPreview",
  components: {
    Navigation: () => import("@/components/Navigation.vue"),
  },
  mounted() {},
  setup(props) {
    const preview = ref(null);
    const navRef = ref(null);
    const text =
      "### 文章简述。\n > 描述信息\n\n#### 代码片段:\n```shell\ncd /home\n./webServer\n```\n\n##### 下面就是其他信息了\n\n" +
      "### 文章简述。\n > 描述信息\n\n#### 代码片段:\n```shell\ncd /home\n./webServer\n```\n\n##### 下面就是其他信息了\n\n" +
      "### 文章简述。\n > 描述信息\n\n#### 代码片段:\n```shell\ncd /home\n./webServer\n```\n\n##### 下面就是其他信息了\n\n" +
      "### 文章简述。\n > 描述信息\n\n#### 代码片段:\n```shell\ncd /home\n./webServer\n```\n\n##### 下面就是其他信息了\n\n" +
      "### 文章简述。\n > 描述信息\n\n#### 代码片段:\n```shell\ncd /home\n./webServer\n```\n\n##### 下面就是其他信息了\n\n" +
      "### 文章简述。\n > 描述信息\n\n#### 代码片段:\n```shell\ncd /home\n./webServer\n```\n\n##### 下面就是其他信息了\n\n";

    onMounted(() => {
      navRef.value.setPreview(preview.value);
    });
    return {
      preview,
      navRef,
      text,
      setPreview,
    };
  },
};
</script>

<style scoped>
</style>