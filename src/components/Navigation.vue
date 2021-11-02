<template>
  <div
    v-for="(anchor, index) in titles"
    :key="index"
    :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
    @click="handleAnchorClick(anchor)"
  >
    <el-link type="primary">{{ anchor.title }}</el-link>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "Navigation",
  props: {
    text: {
      type: String,
      default: "",
    },
    preview: {
      type: Object,
    },
  },
  setup(props) {
    let dataSource = reactive({ titles: [] });
    let previewRef = undefined;

    function setPreview(preview) {
      previewRef = preview;
      const anchors = preview.$el.querySelectorAll("h1,h2,h3,h4,h5,h6");
      dataSource.titles = Array.from(anchors).filter(
        (title) => !!title.innerText.trim()
      );
      if (!dataSource.titles.length) {
        dataSource.titles = [];
        return;
      }
      const hTags = Array.from(
        new Set(dataSource.titles.map((title) => title.tagName))
      ).sort();

      dataSource.titles = dataSource.titles.map((el) => ({
        title: el.innerText,
        lineIndex: el.getAttribute("data-v-md-line"),
        indent: hTags.indexOf(el.tagName),
      }));
    }

    function handleAnchorClick(anchor) {
      const { lineIndex } = anchor;
      const heading = previewRef.$el.querySelector(
        `[data-v-md-line="${lineIndex}"]`
      );
      if (heading) {
        previewRef.scrollToTarget({
          target: heading,
          scrollContainer: window,
          top: 2,
        });
      }
    }
    return { ...toRefs(dataSource), setPreview, handleAnchorClick };
  },
};
</script>