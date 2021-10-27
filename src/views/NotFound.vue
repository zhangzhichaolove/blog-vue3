<template>
  <h1>页面[{{ toPath }}]找不到~</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { useRoute } from "vue-router";
export default defineComponent({
  name: "NotFound",
  props: {
    toPath: {
      type: String,
      default: "",
    },
  },
  //   setup(props: any) {
  //     const route = useRoute();
  //     return { toPath: route.query.toPath };
  //   },
});
</script>

<style>
</style>