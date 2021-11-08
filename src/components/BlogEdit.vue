<template>
  <div class="blog-edit-container">
    <el-input type="text" v-model="title" placeholder="文章标题" clearable />
    <v-md-editor v-model="text" height="100%"></v-md-editor>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "BlogEdit",
  setup(props) {
    const route = useRoute();
    console.log("文章ID--->", route.query.blogId);
    return {
      text: ref(""),
      title: ref(""),
    };
  },
  activated() {},
  deactivated() {},
};
</script>

<style>
.blog-edit-container {
  display: flex;
  height: 100%;
  flex-direction: column;
}
</style>