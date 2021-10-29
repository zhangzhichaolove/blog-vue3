<template>
  <v-md-preview :text="text"></v-md-preview>
</template>

<script>
import { ref } from "vue";
export default {
  name: "BlogPreview",
  setup(props) {
    return {
      text: ref(
        "### 为了方便各位开发者做Demo，在此提供免费API，由于接口文档更新频繁，请去官网浏览。\n"+
        "> 标题\n"+
        "```cd /home```"
      ),
    };
  },
};
</script>

<style>
</style>