<template>
  <BlogPreview />
</template>

<script>
export default {
  name: "Blog",
  components: { BlogPreview: () => import("@/components/BlogPreview.vue") },
};
</script>

<style>
</style>