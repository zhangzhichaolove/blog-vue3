<template>
  <v-md-editor v-model="text" height="400px"></v-md-editor>
</template>

<script>
import { ref } from "vue";
export default {
  name: "BlogEdit",
  setup(props) {
    return {
      text: ref(""),
    };
  },
};
</script>

<style>
</style>