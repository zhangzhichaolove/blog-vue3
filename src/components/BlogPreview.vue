<template>
  <el-row>
    <el-col :xl="5" :lg="5" :md="0" :sm="0" :xs="0" hidden-lg-and-down>
      左侧视图
    </el-col>
    <el-col :xl="14" :lg="14" :md="18" :sm="24" :xs="24" hidden-lg-and-down>
      <v-md-preview ref="preview" :text="text"></v-md-preview>
    </el-col>
    <el-col :xl="5" :lg="5" :md="6" :sm="0" :xs="0" hidden-lg-and-down>
      <div
        v-for="(anchor, index) in titles"
        :key="index"
        :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
        @click="handleAnchorClick(anchor)"
      >
        <el-link type="primary">{{ anchor.title }}</el-link>
      </div>
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
    let previewData = reactive({
      titles: [],
      text:
        "### 文章简述。\n > 描述信息\n\n#### 代码片段:\n```shell\ncd /home\n./webServer\n```\n\n##### 下面就是其他信息了\n\n" +
        "### 文章简述。\n > 描述信息\n\n#### 代码片段:\n```shell\ncd /home\n./webServer\n```\n\n##### 下面就是其他信息了\n\n" +
        "### 文章简述。\n > 描述信息\n\n#### 代码片段:\n```shell\ncd /home\n./webServer\n```\n\n##### 下面就是其他信息了\n\n" +
        "### 文章简述。\n > 描述信息\n\n#### 代码片段:\n```shell\ncd /home\n./webServer\n```\n\n##### 下面就是其他信息了\n\n" +
        "### 文章简述。\n > 描述信息\n\n#### 代码片段:\n```shell\ncd /home\n./webServer\n```\n\n##### 下面就是其他信息了\n\n" +
        "### 文章简述。\n > 描述信息\n\n#### 代码片段:\n```shell\ncd /home\n./webServer\n```\n\n##### 下面就是其他信息了\n\n",
    });
    onMounted(() => {
      const anchors = preview.value.$el.querySelectorAll("h1,h2,h3,h4,h5,h6");

      previewData.titles = Array.from(anchors).filter(
        (title) => !!title.innerText.trim()
      );

      if (!previewData.titles.length) {
        previewData.titles = [];
        return;
      }

      const hTags = Array.from(
        new Set(previewData.titles.map((title) => title.tagName))
      ).sort();

      previewData.titles = previewData.titles.map((el) => ({
        title: el.innerText,
        lineIndex: el.getAttribute("data-v-md-line"),
        indent: hTags.indexOf(el.tagName),
      }));
    });

    function handleAnchorClick(anchor) {
      const { lineIndex } = anchor;
      const heading = preview.value.$el.querySelector(
        `[data-v-md-line="${lineIndex}"]`
      );
      if (heading) {
        preview.value.scrollToTarget({
          target: heading,
          scrollContainer: window,
          top: 2,
        });
      }
    }

    return {
      preview,
      handleAnchorClick,
      ...toRefs(previewData),
    };
  },
};
</script>

<style scoped>
</style>