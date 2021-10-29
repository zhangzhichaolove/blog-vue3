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
        "### 文章简述。\n > 描述信息\n\n#### 代码片段:\n```shell\ncd /home\n./webServer\n```\n\n##### 下面就是其他信息了"
      ),
    };
  },
};
</script>

<style scoped>
</style>