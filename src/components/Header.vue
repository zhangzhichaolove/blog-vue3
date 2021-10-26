<template>
  <h1>头部</h1>
  <h5>{{ count }}</h5>
  <el-button type="primary" @click="click">点击</el-button>
</template>

<script lang='ts'>
import { ref } from "vue";
export default {
  name: "Header",
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    console.log("Header---->", props);
    const count = ref(0);
    function click() {
      count.value++;
    }
    return { count, click };
  },
};
</script>

<style>
</style>