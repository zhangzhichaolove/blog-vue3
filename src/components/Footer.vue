<template>
  <div class="footer">
    <el-link type="danger" :underline="false" :disabled="true"
      >本博客由vue+go强力驱动</el-link
    >
    <el-link type="primary" href="https://beian.miit.gov.cn" :underline="false"
      >©版权所有 蜀ICP备18012666号</el-link
    >
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
}
span {
  font-size: 10px;
}
</style>