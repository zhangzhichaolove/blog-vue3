<template>
  <h1>头部</h1>
  <h5>{{ count }}</h5>
  <button @click="click">点击</button>
</template>

<script lang='ts'>
import { ref } from "vue";
export default {
  name: "Header",
  setup(props) {
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